// components.ts
var ReadingProgress = () => null;
ReadingProgress.displayName = "Reading Progress";
ReadingProgress.afterDOMLoaded = `
  const addReadingProgressBars = () => {
    const rows = document.querySelectorAll(
      'body[data-slug="library/library-index"] .bases-card-row[data-property$="progress"]',
    )

    for (const row of rows) {
      if (row.dataset.progressBarEnhanced === "true") continue

      const value = Number(row.querySelector(".bases-card-value")?.textContent?.trim())
      if (!Number.isFinite(value)) {
        console.warn("[Reading progress] Progress value is not a number", row)
        continue
      }

      const percentage = Math.max(0, Math.min(100, value))
      const valueElement = row.querySelector(".bases-card-value")
      if (!valueElement) continue

      const progress = document.createElement("progress")
      progress.className = "reading-progress-bar"
      progress.max = 100
      progress.value = percentage
      progress.setAttribute("aria-label", "Reading progress")

      const label = document.createElement("span")
      label.className = "reading-progress-value"
      label.textContent = percentage + "%"

      valueElement.replaceChildren(progress, label)
      row.dataset.progressBarEnhanced = "true"
    }
  }

  const addBookShelfCarouselControls = () => {
    const headings = document.querySelectorAll(
      'body[data-slug="library/library-index"] article h2',
    )

    for (const heading of headings) {
      const isFavoritesShelf = heading.id === "-my-five-star-faves"
      const isTbrShelf = heading.id === "-my-never-ending-tbr"
      const isReadBooksShelf = heading.id === "-books-ive-read"
      if (!isFavoritesShelf && !isTbrShelf && !isReadBooksShelf) continue

      let shelf = heading.nextElementSibling
      while (shelf && !shelf.matches(".bases-page")) {
        shelf = shelf.nextElementSibling
      }

      const cards = shelf?.querySelector(".bases-cards")
      if (!shelf || !cards) continue

      if (isReadBooksShelf) {
        heading.classList.add("read-books-heading")
        shelf.classList.add("read-books-shelf")

        const years = [
          ...new Set(
            [...cards.querySelectorAll('.bases-card-row[data-property$="reading_year"] .bases-card-value')]
              .map((value) => value.textContent?.trim() ?? "")
              .filter((year) => year.length === 4 && [...year].every((digit) => digit >= "0" && digit <= "9")),
          ),
        ].sort()

        if (years.length > 0) {
          const yearLabel = heading.querySelector(".read-books-year") ?? document.createElement("span")
          yearLabel.className = "read-books-year"
          yearLabel.textContent = years.join(" \xB7 ")
          heading.append(yearLabel)
        } else {
          heading.querySelector(".read-books-year")?.remove()
        }
      }

      if (shelf.dataset.carouselEnhanced === "true") continue

      const cardCount = cards.querySelectorAll(".bases-card").length
      if (cardCount === 0 || (isFavoritesShelf && cardCount < 2)) continue

      const controls = document.createElement("div")
      controls.className = "library-carousel-controls"
      controls.setAttribute("role", "group")
      const sectionLabel = isFavoritesShelf
        ? "Five-star favorites"
        : isTbrShelf
          ? "To Be Read"
          : "Books I've Read"
      controls.setAttribute("aria-label", sectionLabel)

      const previous = document.createElement("button")
      previous.type = "button"
      previous.className = "library-carousel-arrow"
      previous.setAttribute(
        "aria-label",
        isFavoritesShelf
          ? "Previous favorite book"
          : isTbrShelf
            ? "Previous TBR book"
            : "Previous book read",
      )
      previous.textContent = "\u2190"

      const next = document.createElement("button")
      next.type = "button"
      next.className = "library-carousel-arrow"
      next.setAttribute(
        "aria-label",
        isFavoritesShelf ? "Next favorite book" : isTbrShelf ? "Next TBR book" : "Next book read",
      )
      next.textContent = "\u2192"

      controls.append(previous, next)
      shelf.append(controls)
      shelf.dataset.carouselEnhanced = "true"

      const updateButtons = () => {
        previous.disabled = cards.scrollLeft <= 1
        next.disabled = cards.scrollLeft + cards.clientWidth >= cards.scrollWidth - 1
      }

      const scroll = (direction) => {
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth"
        cards.scrollBy({ left: direction * cards.clientWidth, behavior })
      }

      const scrollPrevious = () => scroll(-1)
      const scrollNext = () => scroll(1)

      previous.addEventListener("click", scrollPrevious)
      next.addEventListener("click", scrollNext)
      cards.addEventListener("scroll", updateButtons, { passive: true })
      window.addEventListener("resize", updateButtons)
      updateButtons()

      window.addCleanup?.(() => {
        previous.removeEventListener("click", scrollPrevious)
        next.removeEventListener("click", scrollNext)
        cards.removeEventListener("scroll", updateButtons)
        window.removeEventListener("resize", updateButtons)
      })
    }
  }

  const enhanceLibraryIndex = () => {
    addReadingProgressBars()
    addBookShelfCarouselControls()
  }

  document.addEventListener("nav", enhanceLibraryIndex)
  document.addEventListener("render", enhanceLibraryIndex)
  enhanceLibraryIndex()
`;
export {
  ReadingProgress
};
