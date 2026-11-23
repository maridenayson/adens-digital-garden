declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Tanpa Judul";
        readonly description: "Tidak ada deskripsi";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Catatan";
            readonly abstract: "Abstrak";
            readonly info: "Info";
            readonly todo: "Daftar Tugas";
            readonly tip: "Tips";
            readonly success: "Berhasil";
            readonly question: "Pertanyaan";
            readonly warning: "Peringatan";
            readonly failure: "Gagal";
            readonly danger: "Bahaya";
            readonly bug: "Bug";
            readonly example: "Contoh";
            readonly quote: "Kutipan";
        };
        readonly backlinks: {
            readonly title: "Tautan Balik";
            readonly noBacklinksFound: "Tidak ada tautan balik ditemukan";
        };
        readonly themeToggle: {
            readonly lightMode: "Mode Terang";
            readonly darkMode: "Mode Gelap";
        };
        readonly readerMode: {
            readonly title: "Mode Pembaca";
        };
        readonly explorer: {
            readonly title: "Penjelajah";
        };
        readonly footer: {
            readonly createdWith: "Dibuat dengan";
        };
        readonly graph: {
            readonly title: "Tampilan Grafik";
        };
        readonly recentNotes: {
            readonly title: "Catatan Terbaru";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Tautan ke asli";
        };
        readonly search: {
            readonly title: "Cari";
            readonly searchBarPlaceholder: "Cari sesuatu";
        };
        readonly tableOfContents: {
            readonly title: "Daftar Isi";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Catatan terbaru";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Tidak Ditemukan";
            readonly notFound: "Halaman ini bersifat privat atau tidak ada.";
            readonly home: "Kembali ke Beranda";
        };
        readonly folderContent: {
            readonly folder: "Folder";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Tag";
            readonly tagIndex: "Indeks Tag";
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
