import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  filterFn: (node) => {
    const path = node.slugSegments?.join("/")
    return (
      path === "library" ||
      path === "about" ||
      path === "library-index" ||
      path === "projects" ||
      path === "brain-dump" ||
      path === "mind-maps" ||
      path === "✿-all-about-books-✿" ||
      path?.startsWith("✿-all-about-books-✿/")
    )
  },
  mapFn: (node) => {
    if (node.slugSegments?.join("/") !== "library") return node

    const libraryIndex = node.children.find(
      (child) => child.slugSegments?.join("/") === "library/library-index",
    )
    if (!libraryIndex?.data) return node

    // Promote the library index page to the root Explorer level.
    node.data = libraryIndex.data
    node.displayName = libraryIndex.displayName
    node.isFolder = false
    return node
  },
  sortFn: (a, b) => {
    const aName = (a.slugSegment || a.displayName || "").toLowerCase()
    const bName = (b.slugSegment || b.displayName || "").toLowerCase()
    const aRank = aName.includes("about") ? 0 : aName.includes("library") ? 1 : aName.includes("all-about-books") ? 2 : aName.includes("mind-maps") ? 3 : aName.includes("projects") ? 4 : aName.includes("brain-dump") ? 5 : 6 
    const bRank = bName.includes("about") ? 0 : bName.includes("library") ? 1 : bName.includes("all-about-books") ? 2 : bName.includes("mind-maps") ? 3 : bName.includes("projects") ? 4 : bName.includes("brain-dump") ? 5 : 6
    const rankDiff = aRank - bRank
    if (rankDiff !== 0) return rankDiff

    return (a.displayName || "").localeCompare(b.displayName || "", undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
