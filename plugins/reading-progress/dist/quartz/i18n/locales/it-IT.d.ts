declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Senza titolo";
        readonly description: "Nessuna descrizione";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Nota";
            readonly abstract: "Abstract";
            readonly info: "Info";
            readonly todo: "Da fare";
            readonly tip: "Consiglio";
            readonly success: "Completato";
            readonly question: "Domanda";
            readonly warning: "Attenzione";
            readonly failure: "Errore";
            readonly danger: "Pericolo";
            readonly bug: "Problema";
            readonly example: "Esempio";
            readonly quote: "Citazione";
        };
        readonly backlinks: {
            readonly title: "Link entranti";
            readonly noBacklinksFound: "Nessun link entrante";
        };
        readonly themeToggle: {
            readonly lightMode: "Tema chiaro";
            readonly darkMode: "Tema scuro";
        };
        readonly readerMode: {
            readonly title: "Modalità lettura";
        };
        readonly explorer: {
            readonly title: "Esplora";
        };
        readonly footer: {
            readonly createdWith: "Creato con";
        };
        readonly graph: {
            readonly title: "Vista grafico";
        };
        readonly recentNotes: {
            readonly title: "Note recenti";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Link all'originale";
        };
        readonly search: {
            readonly title: "Cerca";
            readonly searchBarPlaceholder: "Cerca qualcosa";
        };
        readonly tableOfContents: {
            readonly title: "Indice";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Note recenti";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Non trovato";
            readonly notFound: "Questa pagina è privata o non esiste.";
            readonly home: "Ritorna alla home page";
        };
        readonly folderContent: {
            readonly folder: "Cartella";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Etichetta";
            readonly tagIndex: "Indice etichette";
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
