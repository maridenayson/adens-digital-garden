declare const _default: {
    readonly propertyDefaults: {
        readonly title: "بدون عنوان";
        readonly description: "توضیح خاصی اضافه نشده است";
    };
    readonly direction: "rtl";
    readonly components: {
        readonly callout: {
            readonly note: "یادداشت";
            readonly abstract: "چکیده";
            readonly info: "اطلاعات";
            readonly todo: "اقدام";
            readonly tip: "نکته";
            readonly success: "تیک";
            readonly question: "سؤال";
            readonly warning: "هشدار";
            readonly failure: "شکست";
            readonly danger: "خطر";
            readonly bug: "باگ";
            readonly example: "مثال";
            readonly quote: "نقل قول";
        };
        readonly backlinks: {
            readonly title: "بک‌لینک‌ها";
            readonly noBacklinksFound: "بدون بک‌لینک";
        };
        readonly themeToggle: {
            readonly lightMode: "حالت روشن";
            readonly darkMode: "حالت تاریک";
        };
        readonly readerMode: {
            readonly title: "حالت خواندن";
        };
        readonly explorer: {
            readonly title: "مطالب";
        };
        readonly footer: {
            readonly createdWith: "ساخته شده با";
        };
        readonly graph: {
            readonly title: "نمای گراف";
        };
        readonly recentNotes: {
            readonly title: "یادداشت‌های اخیر";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "پیوند به اصلی";
        };
        readonly search: {
            readonly title: "جستجو";
            readonly searchBarPlaceholder: "مطلبی را جستجو کنید";
        };
        readonly tableOfContents: {
            readonly title: "فهرست";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "یادداشت‌های اخیر";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "یافت نشد";
            readonly notFound: "این صفحه یا خصوصی است یا وجود ندارد";
            readonly home: "بازگشت به صفحه اصلی";
        };
        readonly folderContent: {
            readonly folder: "پوشه";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "برچسب";
            readonly tagIndex: "فهرست برچسب‌ها";
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
