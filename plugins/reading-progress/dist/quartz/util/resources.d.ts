import { JSX } from "preact/jsx-runtime";
import { QuartzPluginData } from "../plugins/vfile";
export type JSResource = {
    loadTime: "beforeDOMReady" | "afterDOMReady";
    moduleType?: "module";
    spaPreserve?: boolean;
} & ({
    src: string;
    contentType: "external";
} | {
    script: string;
    contentType: "inline";
});
export type CSSResource = {
    content: string;
    inline?: boolean;
    spaPreserve?: boolean;
};
export declare function JSResourceToScriptElement(resource: JSResource, preserve?: boolean): JSX.Element;
export declare function CSSResourceToStyleElement(resource: CSSResource, preserve?: boolean): JSX.Element;
/**
 * A file or directory a plugin ships with the site (Quartz 5.1+), copied to
 * `<output>/static/plugins/<to>`. Client scripts get its URL from the `quartzStaticUrl` page
 * global: `new URL("plugins/<to>/…", window.quartzStaticUrl)`. Use this for large or optional
 * client code (load it with `import()` only on pages that need it) instead of inline scripts,
 * which every page downloads.
 */
export interface StaticAsset {
    /** Absolute path of a file or directory on disk (e.g. resolved from a dependency). */
    from: string;
    /** Destination below `static/plugins/`, e.g. "obsidian-flavored-markdown/pele". */
    to: string;
}
export interface StaticResources {
    css: CSSResource[];
    js: JSResource[];
    additionalHead: (JSX.Element | ((pageData: QuartzPluginData) => JSX.Element))[];
    /** Files copied into the output (see StaticAsset). Ignored by Quartz versions before 5.1. */
    assets?: StaticAsset[];
}
export type StringResource = string | string[] | undefined;
export declare function normalizeResource(resource: StringResource): string[];
export declare function concatenateResources(...resources: StringResource[]): StringResource;
