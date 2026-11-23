declare const _default: {
    readonly propertyDefaults: {
        readonly title: "غير معنون";
        readonly description: "لم يتم تقديم أي وصف";
    };
    readonly direction: "rtl";
    readonly components: {
        readonly callout: {
            readonly note: "ملاحظة";
            readonly abstract: "ملخص";
            readonly info: "معلومات";
            readonly todo: "للقيام";
            readonly tip: "نصيحة";
            readonly success: "نجاح";
            readonly question: "سؤال";
            readonly warning: "تحذير";
            readonly failure: "فشل";
            readonly danger: "خطر";
            readonly bug: "خلل";
            readonly example: "مثال";
            readonly quote: "اقتباس";
        };
        readonly backlinks: {
            readonly title: "وصلات العودة";
            readonly noBacklinksFound: "لا يوجد وصلات عودة";
        };
        readonly themeToggle: {
            readonly lightMode: "الوضع النهاري";
            readonly darkMode: "الوضع الليلي";
        };
        readonly explorer: {
            readonly title: "المستعرض";
        };
        readonly readerMode: {
            readonly title: "وضع القارئ";
        };
        readonly footer: {
            readonly createdWith: "أُنشئ باستخدام";
        };
        readonly graph: {
            readonly title: "التمثيل التفاعلي";
        };
        readonly recentNotes: {
            readonly title: "آخر الملاحظات";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "وصلة للملاحظة الرئيسة";
        };
        readonly search: {
            readonly title: "بحث";
            readonly searchBarPlaceholder: "ابحث عن شيء ما";
        };
        readonly tableOfContents: {
            readonly title: "فهرس المحتويات";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "آخر الملاحظات";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "غير موجود";
            readonly notFound: "إما أن هذه الصفحة خاصة أو غير موجودة.";
            readonly home: "العوده للصفحة الرئيسية";
        };
        readonly folderContent: {
            readonly folder: "مجلد";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "الوسم";
            readonly tagIndex: "مؤشر الوسم";
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
