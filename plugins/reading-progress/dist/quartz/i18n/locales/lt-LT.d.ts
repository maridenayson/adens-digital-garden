declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Be Pavadinimo";
        readonly description: "Aprašymas Nepateiktas";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Pastaba";
            readonly abstract: "Santrauka";
            readonly info: "Informacija";
            readonly todo: "Darbų sąrašas";
            readonly tip: "Patarimas";
            readonly success: "Sėkmingas";
            readonly question: "Klausimas";
            readonly warning: "Įspėjimas";
            readonly failure: "Nesėkmingas";
            readonly danger: "Pavojus";
            readonly bug: "Klaida";
            readonly example: "Pavyzdys";
            readonly quote: "Citata";
        };
        readonly backlinks: {
            readonly title: "Atgalinės Nuorodos";
            readonly noBacklinksFound: "Atgalinių Nuorodų Nerasta";
        };
        readonly themeToggle: {
            readonly lightMode: "Šviesus Režimas";
            readonly darkMode: "Tamsus Režimas";
        };
        readonly readerMode: {
            readonly title: "Modalità lettore";
        };
        readonly explorer: {
            readonly title: "Naršyklė";
        };
        readonly footer: {
            readonly createdWith: "Sukurta Su";
        };
        readonly graph: {
            readonly title: "Grafiko Vaizdas";
        };
        readonly recentNotes: {
            readonly title: "Naujausi Užrašai";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Nuoroda į originalą";
        };
        readonly search: {
            readonly title: "Paieška";
            readonly searchBarPlaceholder: "Ieškoti";
        };
        readonly tableOfContents: {
            readonly title: "Turinys";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Naujausi užrašai";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Nerasta";
            readonly notFound: "Arba šis puslapis yra pasiekiamas tik tam tikriems vartotojams, arba tokio puslapio nėra.";
            readonly home: "Grįžti į pagrindinį puslapį";
        };
        readonly folderContent: {
            readonly folder: "Aplankas";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Žyma";
            readonly tagIndex: "Žymų indeksas";
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
