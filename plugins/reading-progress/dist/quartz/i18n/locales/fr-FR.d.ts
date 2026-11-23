declare const _default: {
    readonly propertyDefaults: {
        readonly title: "Sans titre";
        readonly description: "Aucune description fournie";
    };
    readonly components: {
        readonly callout: {
            readonly note: "Note";
            readonly abstract: "Résumé";
            readonly info: "Info";
            readonly todo: "À faire";
            readonly tip: "Conseil";
            readonly success: "Succès";
            readonly question: "Question";
            readonly warning: "Avertissement";
            readonly failure: "Échec";
            readonly danger: "Danger";
            readonly bug: "Bogue";
            readonly example: "Exemple";
            readonly quote: "Citation";
        };
        readonly backlinks: {
            readonly title: "Liens retour";
            readonly noBacklinksFound: "Aucun lien retour trouvé";
        };
        readonly themeToggle: {
            readonly lightMode: "Mode clair";
            readonly darkMode: "Mode sombre";
        };
        readonly readerMode: {
            readonly title: "Mode lecture";
        };
        readonly explorer: {
            readonly title: "Explorateur";
        };
        readonly footer: {
            readonly createdWith: "Créé avec";
        };
        readonly graph: {
            readonly title: "Vue graphique";
        };
        readonly recentNotes: {
            readonly title: "Notes Récentes";
            readonly seeRemainingMore: ({ remaining }: {
                remaining: number;
            }) => string;
        };
        readonly transcludes: {
            readonly transcludeOf: ({ targetSlug }: {
                targetSlug: import("@quartz-community/types").FullSlug;
            }) => string;
            readonly linkToOriginal: "Lien vers l'original";
        };
        readonly search: {
            readonly title: "Recherche";
            readonly searchBarPlaceholder: "Rechercher quelque chose";
        };
        readonly tableOfContents: {
            readonly title: "Table des matières";
        };
        readonly contentMeta: {
            readonly readingTime: ({ minutes }: {
                minutes: number;
            }) => string;
        };
    };
    readonly pages: {
        readonly rss: {
            readonly recentNotes: "Notes récentes";
            readonly lastFewNotes: ({ count }: {
                count: number;
            }) => string;
        };
        readonly error: {
            readonly title: "Introuvable";
            readonly notFound: "Cette page est soit privée, soit elle n'existe pas.";
            readonly home: "Retour à la page d'accueil";
        };
        readonly folderContent: {
            readonly folder: "Dossier";
            readonly itemsUnderFolder: ({ count }: {
                count: number;
            }) => string;
        };
        readonly tagContent: {
            readonly tag: "Étiquette";
            readonly tagIndex: "Index des étiquettes";
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
