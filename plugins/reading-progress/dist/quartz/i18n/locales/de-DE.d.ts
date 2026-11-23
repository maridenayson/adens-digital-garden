declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Unbenannt";
        readonly description: "Keine Beschreibung angegeben";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Hinweis";
            readonly abstract: "Zusammenfassung";
            readonly info: "Info";
            readonly todo: "Zu erledigen";
            readonly tip: "Tipp";
            readonly success: "Erfolg";
            readonly question: "Frage";
            readonly warning: "Warnung";
            readonly failure: "Fehlgeschlagen";
            readonly danger: "Gefahr";
            readonly bug: "Fehler";
            readonly example: "Beispiel";
            readonly quote: "Zitat";
        };
        readonly backlinks: {
            readonly title: "Backlinks";
            readonly noBacklinksFound: "Keine Backlinks gefunden";
        };
        readonly themeToggle: {
            readonly lightMode: "Heller Modus";
            readonly darkMode: "Dunkler Modus";
        };
        readonly readerMode: {
            readonly title: "Lesemodus";
        };
        readonly explorer: {
            readonly title: "Explorer";
        };
        readonly footer: {
            readonly createdWith: "Erstellt mit";
        };
        readonly graph: {
            readonly title: "Graphansicht";
        };
        readonly recentNotes: {
            readonly title: "Zuletzt bearbeitete Seiten";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Link zum Original";
        };
        readonly search: {
            readonly title: "Suche";
            readonly searchBarPlaceholder: "Suche nach etwas";
        };
        readonly tableOfContents: {
            readonly title: "Inhaltsverzeichnis";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Zuletzt bearbeitete Seiten";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Nicht gefunden";
            readonly notFound: "Diese Seite ist entweder nicht öffentlich oder existiert nicht.";
            readonly home: "Zur Startseite";
        };
        readonly folderContent: {
            readonly folder: "Ordner";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Tag";
            readonly tagIndex: "Tag-Übersicht";
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
