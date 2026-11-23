declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Без назви";
        readonly description: "Опис не надано";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Примітка";
            readonly abstract: "Абстракт";
            readonly info: "Інформація";
            readonly todo: "Завдання";
            readonly tip: "Порада";
            readonly success: "Успіх";
            readonly question: "Питання";
            readonly warning: "Попередження";
            readonly failure: "Невдача";
            readonly danger: "Небезпека";
            readonly bug: "Баг";
            readonly example: "Приклад";
            readonly quote: "Цитата";
        };
        readonly backlinks: {
            readonly title: "Зворотні посилання";
            readonly noBacklinksFound: "Зворотних посилань не знайдено";
        };
        readonly themeToggle: {
            readonly lightMode: "Світлий режим";
            readonly darkMode: "Темний режим";
        };
        readonly readerMode: {
            readonly title: "Режим читання";
        };
        readonly explorer: {
            readonly title: "Провідник";
        };
        readonly footer: {
            readonly createdWith: "Створено за допомогою";
        };
        readonly graph: {
            readonly title: "Вигляд графа";
        };
        readonly recentNotes: {
            readonly title: "Останні нотатки";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Посилання на оригінал";
        };
        readonly search: {
            readonly title: "Пошук";
            readonly searchBarPlaceholder: "Шукати щось";
        };
        readonly tableOfContents: {
            readonly title: "Зміст";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Останні нотатки";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Не знайдено";
            readonly notFound: "Ця сторінка або приватна, або не існує.";
            readonly home: "Повернутися на головну сторінку";
        };
        readonly folderContent: {
            readonly folder: "Тека";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Мітка";
            readonly tagIndex: "Індекс мітки";
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
