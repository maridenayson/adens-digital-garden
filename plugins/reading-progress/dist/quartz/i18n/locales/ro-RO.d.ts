declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Fără titlu";
        readonly description: "Nici o descriere furnizată";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Notă";
            readonly abstract: "Rezumat";
            readonly info: "Informație";
            readonly todo: "De făcut";
            readonly tip: "Sfat";
            readonly success: "Succes";
            readonly question: "Întrebare";
            readonly warning: "Avertisment";
            readonly failure: "Eșec";
            readonly danger: "Pericol";
            readonly bug: "Bug";
            readonly example: "Exemplu";
            readonly quote: "Citat";
        };
        readonly backlinks: {
            readonly title: "Legături înapoi";
            readonly noBacklinksFound: "Nu s-au găsit legături înapoi";
        };
        readonly themeToggle: {
            readonly lightMode: "Modul luminos";
            readonly darkMode: "Modul întunecat";
        };
        readonly readerMode: {
            readonly title: "Modul de citire";
        };
        readonly explorer: {
            readonly title: "Explorator";
        };
        readonly footer: {
            readonly createdWith: "Creat cu";
        };
        readonly graph: {
            readonly title: "Graf";
        };
        readonly recentNotes: {
            readonly title: "Notițe recente";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Legătură către original";
        };
        readonly search: {
            readonly title: "Căutare";
            readonly searchBarPlaceholder: "Introduceți termenul de căutare...";
        };
        readonly tableOfContents: {
            readonly title: "Cuprins";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Notițe recente";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Pagina nu a fost găsită";
            readonly notFound: "Fie această pagină este privată, fie nu există.";
            readonly home: "Reveniți la pagina de pornire";
        };
        readonly folderContent: {
            readonly folder: "Dosar";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Etichetă";
            readonly tagIndex: "Indexul etichetelor";
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
