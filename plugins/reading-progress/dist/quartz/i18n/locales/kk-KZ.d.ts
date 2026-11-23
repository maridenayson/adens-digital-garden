declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Атаусыз";
        readonly description: "Сипаттама берілмеген";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Ескерту";
            readonly abstract: "Аннотация";
            readonly info: "Ақпарат";
            readonly todo: "Істеу керек";
            readonly tip: "Кеңес";
            readonly success: "Сәттілік";
            readonly question: "Сұрақ";
            readonly warning: "Ескерту";
            readonly failure: "Қате";
            readonly danger: "Қауіп";
            readonly bug: "Қате";
            readonly example: "Мысал";
            readonly quote: "Дәйексөз";
        };
        readonly backlinks: {
            readonly title: "Артқа сілтемелер";
            readonly noBacklinksFound: "Артқа сілтемелер табылмады";
        };
        readonly themeToggle: {
            readonly lightMode: "Жарық режимі";
            readonly darkMode: "Қараңғы режим";
        };
        readonly readerMode: {
            readonly title: "Оқу режимі";
        };
        readonly explorer: {
            readonly title: "Зерттеуші";
        };
        readonly footer: {
            readonly createdWith: "Құрастырылған құрал:";
        };
        readonly graph: {
            readonly title: "Граф көрінісі";
        };
        readonly recentNotes: {
            readonly title: "Соңғы жазбалар";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Бастапқыға сілтеме";
        };
        readonly search: {
            readonly title: "Іздеу";
            readonly searchBarPlaceholder: "Бірдеңе іздеу";
        };
        readonly tableOfContents: {
            readonly title: "Мазмұны";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Соңғы жазбалар";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Табылмады";
            readonly notFound: "Бұл бет жеке немесе жоқ болуы мүмкін.";
            readonly home: "Басты бетке оралу";
        };
        readonly folderContent: {
            readonly folder: "Қалта";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Тег";
            readonly tagIndex: "Тегтер индексі";
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
