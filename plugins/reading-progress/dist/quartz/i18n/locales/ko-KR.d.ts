declare const _default: {
    readonly propertyDefaults: {
        readonly title: "제목 없음";
        readonly description: "설명 없음";
    };
    readonly components: {
        readonly callout: {
            readonly note: "노트";
            readonly abstract: "개요";
            readonly info: "정보";
            readonly todo: "할일";
            readonly tip: "팁";
            readonly success: "성공";
            readonly question: "질문";
            readonly warning: "주의";
            readonly failure: "실패";
            readonly danger: "위험";
            readonly bug: "버그";
            readonly example: "예시";
            readonly quote: "인용";
        };
        readonly backlinks: {
            readonly title: "백링크";
            readonly noBacklinksFound: "백링크가 없습니다.";
        };
        readonly themeToggle: {
            readonly lightMode: "라이트 모드";
            readonly darkMode: "다크 모드";
        };
        readonly readerMode: {
            readonly title: "리더 모드";
        };
        readonly explorer: {
            readonly title: "탐색기";
        };
        readonly footer: {
            readonly createdWith: "Created with";
        };
        readonly graph: {
            readonly title: "그래프 뷰";
        };
        readonly recentNotes: {
            readonly title: "최근 게시글";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "원본 링크";
        };
        readonly search: {
            readonly title: "검색";
            readonly searchBarPlaceholder: "검색어를 입력하세요";
        };
        readonly tableOfContents: {
            readonly title: "목차";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "최근 게시글";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Not Found";
            readonly notFound: "페이지가 존재하지 않거나 비공개 설정이 되어 있습니다.";
            readonly home: "홈페이지로 돌아가기";
        };
        readonly folderContent: {
            readonly folder: "폴더";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "태그";
            readonly tagIndex: "태그 목록";
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
