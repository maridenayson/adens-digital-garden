declare const _default: {
    readonly propertyDefaults: {
        readonly title: "無題";
        readonly description: "説明なし";
    };
    readonly components: {
        readonly callout: {
            readonly note: "ノート";
            readonly abstract: "抄録";
            readonly info: "情報";
            readonly todo: "やるべきこと";
            readonly tip: "ヒント";
            readonly success: "成功";
            readonly question: "質問";
            readonly warning: "警告";
            readonly failure: "失敗";
            readonly danger: "危険";
            readonly bug: "バグ";
            readonly example: "例";
            readonly quote: "引用";
        };
        readonly backlinks: {
            readonly title: "バックリンク";
            readonly noBacklinksFound: "バックリンクはありません";
        };
        readonly themeToggle: {
            readonly lightMode: "ライトモード";
            readonly darkMode: "ダークモード";
        };
        readonly readerMode: {
            readonly title: "リーダーモード";
        };
        readonly explorer: {
            readonly title: "エクスプローラー";
        };
        readonly footer: {
            readonly createdWith: "作成";
        };
        readonly graph: {
            readonly title: "グラフビュー";
        };
        readonly recentNotes: {
            readonly title: "最近の記事";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "元記事へのリンク";
        };
        readonly search: {
            readonly title: "検索";
            readonly searchBarPlaceholder: "検索ワードを入力";
        };
        readonly tableOfContents: {
            readonly title: "目次";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "最近の記事";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Not Found";
            readonly notFound: "ページが存在しないか、非公開設定になっています。";
            readonly home: "ホームページに戻る";
        };
        readonly folderContent: {
            readonly folder: "フォルダ";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "タグ";
            readonly tagIndex: "タグ一覧";
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
