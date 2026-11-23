declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Без названия";
        readonly description: "Описание отсутствует";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Заметка";
            readonly abstract: "Резюме";
            readonly info: "Инфо";
            readonly todo: "Сделать";
            readonly tip: "Подсказка";
            readonly success: "Успех";
            readonly question: "Вопрос";
            readonly warning: "Предупреждение";
            readonly failure: "Неудача";
            readonly danger: "Опасность";
            readonly bug: "Баг";
            readonly example: "Пример";
            readonly quote: "Цитата";
        };
        readonly backlinks: {
            readonly title: "Обратные ссылки";
            readonly noBacklinksFound: "Обратные ссылки отсутствуют";
        };
        readonly themeToggle: {
            readonly lightMode: "Светлый режим";
            readonly darkMode: "Тёмный режим";
        };
        readonly readerMode: {
            readonly title: "Режим чтения";
        };
        readonly explorer: {
            readonly title: "Проводник";
        };
        readonly footer: {
            readonly createdWith: "Создано с помощью";
        };
        readonly graph: {
            readonly title: "Вид графа";
        };
        readonly recentNotes: {
            readonly title: "Недавние заметки";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Ссылка на оригинал";
        };
        readonly search: {
            readonly title: "Поиск";
            readonly searchBarPlaceholder: "Найти что-нибудь";
        };
        readonly tableOfContents: {
            readonly title: "Оглавление";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Недавние заметки";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Страница не найдена";
            readonly notFound: "Эта страница приватная или не существует";
            readonly home: "Вернуться на главную страницу";
        };
        readonly folderContent: {
            readonly folder: "Папка";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Тег";
            readonly tagIndex: "Индекс тегов";
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
