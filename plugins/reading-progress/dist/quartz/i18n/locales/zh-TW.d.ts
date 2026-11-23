declare const _default: {
    readonly propertyDefaults: {
        readonly title: "無題";
        readonly description: "無描述";
    };
    readonly components: {
        readonly callout: {
            readonly note: "筆記";
            readonly abstract: "摘要";
            readonly info: "提示";
            readonly todo: "待辦";
            readonly tip: "提示";
            readonly success: "成功";
            readonly question: "問題";
            readonly warning: "警告";
            readonly failure: "失敗";
            readonly danger: "危險";
            readonly bug: "錯誤";
            readonly example: "範例";
            readonly quote: "引用";
        };
        readonly backlinks: {
            readonly title: "反向連結";
            readonly noBacklinksFound: "無法找到反向連結";
        };
        readonly themeToggle: {
            readonly lightMode: "亮色模式";
            readonly darkMode: "暗色模式";
        };
        readonly readerMode: {
            readonly title: "閱讀模式";
        };
        readonly explorer: {
            readonly title: "探索";
        };
        readonly footer: {
            readonly createdWith: "Created with";
        };
        readonly graph: {
            readonly title: "關係圖譜";
        };
        readonly recentNotes: {
            readonly title: "最近的筆記";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "指向原始筆記的連結";
        };
        readonly search: {
            readonly title: "搜尋";
            readonly searchBarPlaceholder: "搜尋些什麼";
        };
        readonly tableOfContents: {
            readonly title: "目錄";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "最近的筆記";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "無法找到";
            readonly notFound: "私人筆記或筆記不存在。";
            readonly home: "返回首頁";
        };
        readonly folderContent: {
            readonly folder: "資料夾";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "標籤";
            readonly tagIndex: "標籤索引";
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
