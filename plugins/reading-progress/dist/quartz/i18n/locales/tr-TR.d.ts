declare const _default: {
    readonly propertyDefaults: {
        readonly title: "İsimsiz";
        readonly description: "Herhangi bir açıklama eklenmedi";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Not";
            readonly abstract: "Özet";
            readonly info: "Bilgi";
            readonly todo: "Yapılacaklar";
            readonly tip: "İpucu";
            readonly success: "Başarılı";
            readonly question: "Soru";
            readonly warning: "Uyarı";
            readonly failure: "Başarısız";
            readonly danger: "Tehlike";
            readonly bug: "Hata";
            readonly example: "Örnek";
            readonly quote: "Alıntı";
        };
        readonly backlinks: {
            readonly title: "Backlinkler";
            readonly noBacklinksFound: "Backlink bulunamadı";
        };
        readonly themeToggle: {
            readonly lightMode: "Açık mod";
            readonly darkMode: "Koyu mod";
        };
        readonly readerMode: {
            readonly title: "Okuma modu";
        };
        readonly explorer: {
            readonly title: "Gezgin";
        };
        readonly footer: {
            readonly createdWith: "Şununla oluşturuldu";
        };
        readonly graph: {
            readonly title: "Grafik Görünümü";
        };
        readonly recentNotes: {
            readonly title: "Son Notlar";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Orijinal bağlantı";
        };
        readonly search: {
            readonly title: "Arama";
            readonly searchBarPlaceholder: "Bir şey arayın";
        };
        readonly tableOfContents: {
            readonly title: "İçindekiler";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Son notlar";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Bulunamadı";
            readonly notFound: "Bu sayfa ya özel ya da mevcut değil.";
            readonly home: "Anasayfaya geri dön";
        };
        readonly folderContent: {
            readonly folder: "Klasör";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Etiket";
            readonly tagIndex: "Etiket Sırası";
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
