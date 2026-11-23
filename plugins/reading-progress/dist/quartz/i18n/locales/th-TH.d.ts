declare const _default: {
    readonly propertyDefaults: {
        readonly title: "ไม่มีชื่อ";
        readonly description: "ไม่ได้ระบุคำอธิบายย่อ";
    };
    readonly components: {
        readonly callout: {
            readonly note: "หมายเหตุ";
            readonly abstract: "บทคัดย่อ";
            readonly info: "ข้อมูล";
            readonly todo: "ต้องทำเพิ่มเติม";
            readonly tip: "คำแนะนำ";
            readonly success: "เรียบร้อย";
            readonly question: "คำถาม";
            readonly warning: "คำเตือน";
            readonly failure: "ข้อผิดพลาด";
            readonly danger: "อันตราย";
            readonly bug: "บั๊ก";
            readonly example: "ตัวอย่าง";
            readonly quote: "คำพูกยกมา";
        };
        readonly backlinks: {
            readonly title: "หน้าที่กล่าวถึง";
            readonly noBacklinksFound: "ไม่มีหน้าที่โยงมาหน้านี้";
        };
        readonly themeToggle: {
            readonly lightMode: "โหมดสว่าง";
            readonly darkMode: "โหมดมืด";
        };
        readonly readerMode: {
            readonly title: "โหมดอ่าน";
        };
        readonly explorer: {
            readonly title: "รายการหน้า";
        };
        readonly footer: {
            readonly createdWith: "สร้างด้วย";
        };
        readonly graph: {
            readonly title: "มุมมองกราฟ";
        };
        readonly recentNotes: {
            readonly title: "บันทึกล่าสุด";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "ดูหน้าต้นทาง";
        };
        readonly search: {
            readonly title: "ค้นหา";
            readonly searchBarPlaceholder: "ค้นหาบางอย่าง";
        };
        readonly tableOfContents: {
            readonly title: "สารบัญ";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "บันทึกล่าสุด";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "ไม่มีหน้านี้";
            readonly notFound: "หน้านี้อาจตั้งค่าเป็นส่วนตัวหรือยังไม่ถูกสร้าง";
            readonly home: "กลับหน้าหลัก";
        };
        readonly folderContent: {
            readonly folder: "โฟลเดอร์";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "แท็ก";
            readonly tagIndex: "แท็กทั้งหมด";
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
