export { isFilePath, isFullSlug, isSimpleSlug, isRelativeURL, isAbsoluteURL, getFullSlug, slugifyFilePath, simplifySlug, joinSegments, endsWith, trimSuffix, stripSlashes, getFileExtension, isFolderPath, getAllSegmentPrefixes, pathToRoot, resolveRelative, splitAnchor, slugTag, transformInternalLink, linkPathDecodes, transformLink, normalizeHastElement, } from "@quartz-community/utils";
export type { FilePath, FullSlug, SimpleSlug, RelativeURL, TransformOptions, } from "@quartz-community/utils";
export declare const QUARTZ = "quartz";
export declare function normalizeRelativeURLs(el: Element | Document, destination: string | URL): void;
