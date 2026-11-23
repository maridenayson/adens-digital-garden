declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Không có tiêu đề";
        readonly description: "Không có mô tả";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Ghi chú";
            readonly abstract: "Tổng quan";
            readonly info: "Thông tin";
            readonly todo: "Cần phải làm";
            readonly tip: "Gợi ý";
            readonly success: "Thành công";
            readonly question: "Câu hỏi";
            readonly warning: "Cảnh báo";
            readonly failure: "Thất bại";
            readonly danger: "Nguy hiểm";
            readonly bug: "Lỗi";
            readonly example: "Ví dụ";
            readonly quote: "Trích dẫn";
        };
        readonly backlinks: {
            readonly title: "Liên kết ngược";
            readonly noBacklinksFound: "Không có liên kết ngược nào";
        };
        readonly themeToggle: {
            readonly lightMode: "Chế độ sáng";
            readonly darkMode: "Chế độ tối";
        };
        readonly readerMode: {
            readonly title: "Chế độ đọc";
        };
        readonly explorer: {
            readonly title: "Nội dung";
        };
        readonly footer: {
            readonly createdWith: "Được tạo bằng";
        };
        readonly graph: {
            readonly title: "Sơ đồ";
        };
        readonly recentNotes: {
            readonly title: "Ghi chú gần đây";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Xem trang gốc";
        };
        readonly search: {
            readonly title: "Tìm";
            readonly searchBarPlaceholder: "Tìm kiếm thông tin";
        };
        readonly tableOfContents: {
            readonly title: "Mục lục";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Ghi chú gần đây";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Không tìm thấy";
            readonly notFound: "Trang này riêng tư hoặc không tồn tại.";
            readonly home: "Về trang chủ";
        };
        readonly folderContent: {
            readonly folder: "Thư mục";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Thẻ";
            readonly tagIndex: "Danh sách thẻ";
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
