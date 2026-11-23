declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Naamloos";
        readonly description: "Geen beschrijving gegeven.";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Notitie";
            readonly abstract: "Samenvatting";
            readonly info: "Info";
            readonly todo: "Te doen";
            readonly tip: "Tip";
            readonly success: "Succes";
            readonly question: "Vraag";
            readonly warning: "Waarschuwing";
            readonly failure: "Mislukking";
            readonly danger: "Gevaar";
            readonly bug: "Bug";
            readonly example: "Voorbeeld";
            readonly quote: "Citaat";
        };
        readonly backlinks: {
            readonly title: "Backlinks";
            readonly noBacklinksFound: "Geen backlinks gevonden";
        };
        readonly themeToggle: {
            readonly lightMode: "Lichte modus";
            readonly darkMode: "Donkere modus";
        };
        readonly readerMode: {
            readonly title: "Leesmodus";
        };
        readonly explorer: {
            readonly title: "Verkenner";
        };
        readonly footer: {
            readonly createdWith: "Gemaakt met";
        };
        readonly graph: {
            readonly title: "Grafiekweergave";
        };
        readonly recentNotes: {
            readonly title: "Recente notities";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Link naar origineel";
        };
        readonly search: {
            readonly title: "Zoeken";
            readonly searchBarPlaceholder: "Doorzoek de website";
        };
        readonly tableOfContents: {
            readonly title: "Inhoudsopgave";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Recente notities";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Niet gevonden";
            readonly notFound: "Deze pagina is niet zichtbaar of bestaat niet.";
            readonly home: "Keer terug naar de start pagina";
        };
        readonly folderContent: {
            readonly folder: "Map";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Label";
            readonly tagIndex: "Label-index";
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
