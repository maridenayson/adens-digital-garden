declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Nimetön";
        readonly description: "Ei kuvausta saatavilla";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Merkintä";
            readonly abstract: "Tiivistelmä";
            readonly info: "Info";
            readonly todo: "Tehtävälista";
            readonly tip: "Vinkki";
            readonly success: "Onnistuminen";
            readonly question: "Kysymys";
            readonly warning: "Varoitus";
            readonly failure: "Epäonnistuminen";
            readonly danger: "Vaara";
            readonly bug: "Virhe";
            readonly example: "Esimerkki";
            readonly quote: "Lainaus";
        };
        readonly backlinks: {
            readonly title: "Takalinkit";
            readonly noBacklinksFound: "Takalinkkejä ei löytynyt";
        };
        readonly themeToggle: {
            readonly lightMode: "Vaalea tila";
            readonly darkMode: "Tumma tila";
        };
        readonly readerMode: {
            readonly title: "Lukijatila";
        };
        readonly explorer: {
            readonly title: "Selain";
        };
        readonly footer: {
            readonly createdWith: "Luotu käyttäen";
        };
        readonly graph: {
            readonly title: "Verkkonäkymä";
        };
        readonly recentNotes: {
            readonly title: "Viimeisimmät muistiinpanot";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Linkki alkuperäiseen";
        };
        readonly search: {
            readonly title: "Haku";
            readonly searchBarPlaceholder: "Hae jotain";
        };
        readonly tableOfContents: {
            readonly title: "Sisällysluettelo";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Viimeisimmät muistiinpanot";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Ei löytynyt";
            readonly notFound: "Tämä sivu on joko yksityinen tai sitä ei ole olemassa.";
            readonly home: "Palaa etusivulle";
        };
        readonly folderContent: {
            readonly folder: "Kansio";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Tunniste";
            readonly tagIndex: "Tunnisteluettelo";
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
