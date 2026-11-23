declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Sem título";
        readonly description: "Sem descrição";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Nota";
            readonly abstract: "Abstrato";
            readonly info: "Info";
            readonly todo: "Pendência";
            readonly tip: "Dica";
            readonly success: "Sucesso";
            readonly question: "Pergunta";
            readonly warning: "Aviso";
            readonly failure: "Falha";
            readonly danger: "Perigo";
            readonly bug: "Bug";
            readonly example: "Exemplo";
            readonly quote: "Citação";
        };
        readonly backlinks: {
            readonly title: "Backlinks";
            readonly noBacklinksFound: "Sem backlinks encontrados";
        };
        readonly themeToggle: {
            readonly lightMode: "Tema claro";
            readonly darkMode: "Tema escuro";
        };
        readonly readerMode: {
            readonly title: "Modo leitor";
        };
        readonly explorer: {
            readonly title: "Explorador";
        };
        readonly footer: {
            readonly createdWith: "Criado com";
        };
        readonly graph: {
            readonly title: "Visão de gráfico";
        };
        readonly recentNotes: {
            readonly title: "Notas recentes";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Link ao original";
        };
        readonly search: {
            readonly title: "Pesquisar";
            readonly searchBarPlaceholder: "Pesquisar por algo";
        };
        readonly tableOfContents: {
            readonly title: "Sumário";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Notas recentes";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Não encontrado";
            readonly notFound: "Esta página é privada ou não existe.";
            readonly home: "Retornar a página inicial";
        };
        readonly folderContent: {
            readonly folder: "Arquivo";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Tag";
            readonly tagIndex: "Sumário de Tags";
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
