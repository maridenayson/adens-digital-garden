declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Uten navn";
        readonly description: "Ingen beskrivelse angitt";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Notis";
            readonly abstract: "Abstrakt";
            readonly info: "Info";
            readonly todo: "Husk på";
            readonly tip: "Tips";
            readonly success: "Suksess";
            readonly question: "Spørsmål";
            readonly warning: "Advarsel";
            readonly failure: "Feil";
            readonly danger: "Farlig";
            readonly bug: "Bug";
            readonly example: "Eksempel";
            readonly quote: "Sitat";
        };
        readonly backlinks: {
            readonly title: "Tilbakekoblinger";
            readonly noBacklinksFound: "Ingen tilbakekoblinger funnet";
        };
        readonly themeToggle: {
            readonly lightMode: "Lys modus";
            readonly darkMode: "Mørk modus";
        };
        readonly readerMode: {
            readonly title: "Læsemodus";
        };
        readonly explorer: {
            readonly title: "Utforsker";
        };
        readonly footer: {
            readonly createdWith: "Laget med";
        };
        readonly graph: {
            readonly title: "Graf-visning";
        };
        readonly recentNotes: {
            readonly title: "Nylige notater";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Lenke til original";
        };
        readonly search: {
            readonly title: "Søk";
            readonly searchBarPlaceholder: "Søk etter noe";
        };
        readonly tableOfContents: {
            readonly title: "Oversikt";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Nylige notat";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Ikke funnet";
            readonly notFound: "Enten er denne siden privat eller så finnes den ikke.";
            readonly home: "Returner til hovedsiden";
        };
        readonly folderContent: {
            readonly folder: "Mappe";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Tagg";
            readonly tagIndex: "Tagg Indeks";
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
