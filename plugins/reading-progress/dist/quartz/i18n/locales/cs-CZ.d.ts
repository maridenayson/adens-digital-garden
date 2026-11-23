declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Bez názvu";
        readonly description: "Nebyl uveden žádný popis";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Poznámka";
            readonly abstract: "Abstract";
            readonly info: "Info";
            readonly todo: "Todo";
            readonly tip: "Tip";
            readonly success: "Úspěch";
            readonly question: "Otázka";
            readonly warning: "Upozornění";
            readonly failure: "Chyba";
            readonly danger: "Nebezpečí";
            readonly bug: "Bug";
            readonly example: "Příklad";
            readonly quote: "Citace";
        };
        readonly backlinks: {
            readonly title: "Příchozí odkazy";
            readonly noBacklinksFound: "Nenalezeny žádné příchozí odkazy";
        };
        readonly themeToggle: {
            readonly lightMode: "Světlý režim";
            readonly darkMode: "Tmavý režim";
        };
        readonly readerMode: {
            readonly title: "Režim čtečky";
        };
        readonly explorer: {
            readonly title: "Procházet";
        };
        readonly footer: {
            readonly createdWith: "Vytvořeno pomocí";
        };
        readonly graph: {
            readonly title: "Graf";
        };
        readonly recentNotes: {
            readonly title: "Nejnovější poznámky";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Odkaz na původní dokument";
        };
        readonly search: {
            readonly title: "Hledat";
            readonly searchBarPlaceholder: "Hledejte něco";
        };
        readonly tableOfContents: {
            readonly title: "Obsah";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Nejnovější poznámky";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Nenalezeno";
            readonly notFound: "Tato stránka je buď soukromá, nebo neexistuje.";
            readonly home: "Návrat na domovskou stránku";
        };
        readonly folderContent: {
            readonly folder: "Složka";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Tag";
            readonly tagIndex: "Rejstřík tagů";
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
