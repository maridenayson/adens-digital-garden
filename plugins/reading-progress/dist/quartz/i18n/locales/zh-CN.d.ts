declare const _default: {
    readonly propertyDefaults: {
        readonly title: "无题";
        readonly description: "无描述";
    };
    readonly components: {
        readonly callout: {
            readonly note: "笔记";
            readonly abstract: "摘要";
            readonly info: "提示";
            readonly todo: "待办";
            readonly tip: "提示";
            readonly success: "成功";
            readonly question: "问题";
            readonly warning: "警告";
            readonly failure: "失败";
            readonly danger: "危险";
            readonly bug: "错误";
            readonly example: "示例";
            readonly quote: "引用";
        };
        readonly backlinks: {
            readonly title: "反向链接";
            readonly noBacklinksFound: "无法找到反向链接";
        };
        readonly themeToggle: {
            readonly lightMode: "亮色模式";
            readonly darkMode: "暗色模式";
        };
        readonly readerMode: {
            readonly title: "阅读模式";
        };
        readonly explorer: {
            readonly title: "探索";
        };
        readonly footer: {
            readonly createdWith: "Created with";
        };
        readonly graph: {
            readonly title: "关系图谱";
        };
        readonly recentNotes: {
            readonly title: "最近的笔记";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "指向原始笔记的链接";
        };
        readonly search: {
            readonly title: "搜索";
            readonly searchBarPlaceholder: "搜索些什么";
        };
        readonly tableOfContents: {
            readonly title: "目录";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "最近的笔记";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "无法找到";
            readonly notFound: "私有笔记或笔记不存在。";
            readonly home: "返回首页";
        };
        readonly folderContent: {
            readonly folder: "文件夹";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "标签";
            readonly tagIndex: "标签索引";
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
