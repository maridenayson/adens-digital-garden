declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Untitled";
        readonly description: "No description provided";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Note";
            readonly abstract: "Abstract";
            readonly info: "Info";
            readonly todo: "Todo";
            readonly tip: "Tip";
            readonly success: "Success";
            readonly question: "Question";
            readonly warning: "Warning";
            readonly failure: "Failure";
            readonly danger: "Danger";
            readonly bug: "Bug";
            readonly example: "Example";
            readonly quote: "Quote";
        };
        readonly backlinks: {
            readonly title: "Backlinks";
            readonly noBacklinksFound: "No backlinks found";
        };
        readonly themeToggle: {
            readonly lightMode: "Light mode";
            readonly darkMode: "Dark mode";
        };
        readonly readerMode: {
            readonly title: "Reader mode";
        };
        readonly explorer: {
            readonly title: "Explorer";
        };
        readonly footer: {
            readonly createdWith: "Created with";
        };
        readonly graph: {
            readonly title: "Graph View";
        };
        readonly recentNotes: {
            readonly title: "Recent Notes";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Link to original";
        };
        readonly search: {
            readonly title: "Search";
            readonly searchBarPlaceholder: "Search for something";
        };
        readonly tableOfContents: {
            readonly title: "Table of Contents";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Recent notes";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Not Found";
            readonly notFound: "Either this page is private or doesn't exist.";
            readonly home: "Return to Homepage";
        };
        readonly folderContent: {
            readonly folder: "Folder";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Tag";
            readonly tagIndex: "Tag Index";
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
