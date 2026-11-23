declare const _default: {
    readonly propertyDefaults: {
        readonly title: "ללא כותרת";
        readonly description: "לא סופק תיאור";
    };
    readonly direction: "rtl";
    readonly components: {
        readonly callout: {
            readonly note: "הערה";
            readonly abstract: "תקציר";
            readonly info: "מידע";
            readonly todo: "לעשות";
            readonly tip: "טיפ";
            readonly success: "הצלחה";
            readonly question: "שאלה";
            readonly warning: "אזהרה";
            readonly failure: "כשלון";
            readonly danger: "סכנה";
            readonly bug: "באג";
            readonly example: "דוגמה";
            readonly quote: "ציטוט";
        };
        readonly backlinks: {
            readonly title: "קישורים חוזרים";
            readonly noBacklinksFound: "לא נמצאו קישורים חוזרים";
        };
        readonly themeToggle: {
            readonly lightMode: "מצב בהיר";
            readonly darkMode: "מצב כהה";
        };
        readonly readerMode: {
            readonly title: "מצב קריאה";
        };
        readonly explorer: {
            readonly title: "סייר";
        };
        readonly footer: {
            readonly createdWith: "נוצר באמצעות";
        };
        readonly graph: {
            readonly title: "מבט גרף";
        };
        readonly recentNotes: {
            readonly title: "הערות אחרונות";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "קישור למקורי";
        };
        readonly search: {
            readonly title: "חיפוש";
            readonly searchBarPlaceholder: "חפשו משהו";
        };
        readonly tableOfContents: {
            readonly title: "תוכן עניינים";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "הערות אחרונות";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "לא נמצא";
            readonly notFound: "העמוד הזה פרטי או לא קיים.";
            readonly home: "חזרה לעמוד הבית";
        };
        readonly folderContent: {
            readonly folder: "תיקייה";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "תגית";
            readonly tagIndex: "מפתח התגיות";
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
