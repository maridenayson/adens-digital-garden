declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Sin título";
        readonly description: "Sin descripción";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Nota";
            readonly abstract: "Resumen";
            readonly info: "Información";
            readonly todo: "Por hacer";
            readonly tip: "Consejo";
            readonly success: "Éxito";
            readonly question: "Pregunta";
            readonly warning: "Advertencia";
            readonly failure: "Fallo";
            readonly danger: "Peligro";
            readonly bug: "Error";
            readonly example: "Ejemplo";
            readonly quote: "Cita";
        };
        readonly backlinks: {
            readonly title: "Retroenlaces";
            readonly noBacklinksFound: "No se han encontrado retroenlaces";
        };
        readonly themeToggle: {
            readonly lightMode: "Modo claro";
            readonly darkMode: "Modo oscuro";
        };
        readonly readerMode: {
            readonly title: "Modo lector";
        };
        readonly explorer: {
            readonly title: "Explorador";
        };
        readonly footer: {
            readonly createdWith: "Creado con";
        };
        readonly graph: {
            readonly title: "Vista Gráfica";
        };
        readonly recentNotes: {
            readonly title: "Notas Recientes";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Enlace al original";
        };
        readonly search: {
            readonly title: "Buscar";
            readonly searchBarPlaceholder: "Busca algo";
        };
        readonly tableOfContents: {
            readonly title: "Tabla de Contenidos";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Notas recientes";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "No se ha encontrado.";
            readonly notFound: "Esta página es privada o no existe.";
            readonly home: "Regresa a la página principal";
        };
        readonly folderContent: {
            readonly folder: "Carpeta";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Etiqueta";
            readonly tagIndex: "Índice de Etiquetas";
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
