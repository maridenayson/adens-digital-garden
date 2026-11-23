declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Névtelen";
        readonly description: "Nincs leírás";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Jegyzet";
            readonly abstract: "Abstract";
            readonly info: "Információ";
            readonly todo: "Tennivaló";
            readonly tip: "Tipp";
            readonly success: "Siker";
            readonly question: "Kérdés";
            readonly warning: "Figyelmeztetés";
            readonly failure: "Hiba";
            readonly danger: "Veszély";
            readonly bug: "Bug";
            readonly example: "Példa";
            readonly quote: "Idézet";
        };
        readonly backlinks: {
            readonly title: "Visszautalások";
            readonly noBacklinksFound: "Nincs visszautalás";
        };
        readonly themeToggle: {
            readonly lightMode: "Világos mód";
            readonly darkMode: "Sötét mód";
        };
        readonly readerMode: {
            readonly title: "Olvasó mód";
        };
        readonly explorer: {
            readonly title: "Fájlböngésző";
        };
        readonly footer: {
            readonly createdWith: "Készítve ezzel:";
        };
        readonly graph: {
            readonly title: "Grafikonnézet";
        };
        readonly recentNotes: {
            readonly title: "Legutóbbi jegyzetek";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Hivatkozás az eredetire";
        };
        readonly search: {
            readonly title: "Keresés";
            readonly searchBarPlaceholder: "Keress valamire";
        };
        readonly tableOfContents: {
            readonly title: "Tartalomjegyzék";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Legutóbbi jegyzetek";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Nem található";
            readonly notFound: "Ez a lap vagy privát vagy nem létezik.";
            readonly home: "Vissza a kezdőlapra";
        };
        readonly folderContent: {
            readonly folder: "Mappa";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Címke";
            readonly tagIndex: "Címke index";
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
