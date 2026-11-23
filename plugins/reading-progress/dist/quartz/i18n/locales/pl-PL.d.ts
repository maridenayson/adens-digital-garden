declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Bez nazwy";
        readonly description: "Brak opisu";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Notatka";
            readonly abstract: "Streszczenie";
            readonly info: "informacja";
            readonly todo: "Do zrobienia";
            readonly tip: "Wskazówka";
            readonly success: "Zrobione";
            readonly question: "Pytanie";
            readonly warning: "Ostrzeżenie";
            readonly failure: "Usterka";
            readonly danger: "Niebiezpieczeństwo";
            readonly bug: "Błąd w kodzie";
            readonly example: "Przykład";
            readonly quote: "Cytat";
        };
        readonly backlinks: {
            readonly title: "Odnośniki zwrotne";
            readonly noBacklinksFound: "Brak połączeń zwrotnych";
        };
        readonly themeToggle: {
            readonly lightMode: "Trzyb jasny";
            readonly darkMode: "Tryb ciemny";
        };
        readonly readerMode: {
            readonly title: "Tryb czytania";
        };
        readonly explorer: {
            readonly title: "Przeglądaj";
        };
        readonly footer: {
            readonly createdWith: "Stworzone z użyciem";
        };
        readonly graph: {
            readonly title: "Graf";
        };
        readonly recentNotes: {
            readonly title: "Najnowsze notatki";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Łącze do oryginału";
        };
        readonly search: {
            readonly title: "Szukaj";
            readonly searchBarPlaceholder: "Wpisz frazę wyszukiwania";
        };
        readonly tableOfContents: {
            readonly title: "Spis treści";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Najnowsze notatki";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Nie znaleziono";
            readonly notFound: "Ta strona jest prywatna lub nie istnieje.";
            readonly home: "Powrót do strony głównej";
        };
        readonly folderContent: {
            readonly folder: "Folder";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Znacznik";
            readonly tagIndex: "Spis znaczników";
            readonly itemsUnderTag: ({ count }: {
                count: number;
            }) => string;
            readonly showingFirst: ({ count }: {
                count: number;
            }) => string;
            readonly totalTags: ({ count }: {
                count: number;
            }) => string;
        };
    };
};
export default _default;
