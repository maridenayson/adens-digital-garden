declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Sense títol";
        readonly description: "Sense descripció";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Nota";
            readonly abstract: "Resum";
            readonly info: "Informació";
            readonly todo: "Per fer";
            readonly tip: "Consell";
            readonly success: "Èxit";
            readonly question: "Pregunta";
            readonly warning: "Advertència";
            readonly failure: "Fall";
            readonly danger: "Perill";
            readonly bug: "Error";
            readonly example: "Exemple";
            readonly quote: "Cita";
        };
        readonly backlinks: {
            readonly title: "Retroenllaç";
            readonly noBacklinksFound: "No s'han trobat retroenllaços";
        };
        readonly themeToggle: {
            readonly lightMode: "Mode clar";
            readonly darkMode: "Mode fosc";
        };
        readonly readerMode: {
            readonly title: "Mode lector";
        };
        readonly explorer: {
            readonly title: "Explorador";
        };
        readonly footer: {
            readonly createdWith: "Creat amb";
        };
        readonly graph: {
            readonly title: "Vista Gràfica";
        };
        readonly recentNotes: {
            readonly title: "Notes Recents";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Enllaç a l'original";
        };
        readonly search: {
            readonly title: "Cercar";
            readonly searchBarPlaceholder: "Cerca alguna cosa";
        };
        readonly tableOfContents: {
            readonly title: "Taula de Continguts";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Notes recents";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "No s'ha trobat.";
            readonly notFound: "Aquesta pàgina és privada o no existeix.";
            readonly home: "Torna a la pàgina principal";
        };
        readonly folderContent: {
            readonly folder: "Carpeta";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Etiqueta";
            readonly tagIndex: "índex d'Etiquetes";
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
