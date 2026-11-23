/**
 * Build diagnostics: what Quartz knows about the plugins it loaded, collected so that
 *
 * 1. warnings printed while loading the config (capabilities, versions, layout, options, built-ins)
 *    are repeated in a short summary at the end of the build, instead of scrolling away above
 *    hundreds of lines of per-file output;
 * 2. an error thrown by a plugin can be explained: which plugin (package, version, source), what it
 *    was doing, and known problems with it (requires a newer Quartz, missing required data …).
 *
 * The store is process-wide (globalThis) because the config loader may be loaded as several module
 * copies (CLI + bundled build). Worker threads have their own store; they only need plugin origins.
 */
export type DiagnosticSeverity = "error" | "warning" | "info";
export interface Diagnostic {
    severity: DiagnosticSeverity;
    /** Short area label: "plugins", "capabilities", "layout", "config", "links", "emit" … */
    area: string;
    message: string;
    hint?: string;
    /** Plugin the diagnostic is about (display name), if any. */
    plugin?: string;
}
/** Where a plugin instance came from — used to attribute errors. */
export interface PluginOrigin {
    /** Instance name (e.g. "LinkProcessing", "Links"). */
    name: string;
    /** Config source or package (e.g. "@quartz-community/graph", "github:me/plugin"); "built-in" for core. */
    source: string;
    /** Manifest / package name used in messages (e.g. "graph"). */
    displayName: string;
    version?: string;
    category?: string;
    /** Where to report bugs (repository issues page), when known. */
    issues?: string;
    /** Declared `quartzVersion` range. */
    quartzVersion?: string;
    builtin?: boolean;
}
/** Record a diagnostic (deduplicated). Returns false when it was already recorded. */
export declare function recordDiagnostic(diagnostic: Diagnostic): boolean;
export declare function getDiagnostics(): readonly Diagnostic[];
/** Forget diagnostics (between rebuilds in watch mode, and in tests). Origins are kept. */
export declare function resetDiagnostics(): void;
export declare function registerPluginOrigin(instance: object, origin: PluginOrigin): void;
export declare function getPluginOrigin(instanceOrName: object | string): PluginOrigin | undefined;
/** Problems recorded for a plugin before it failed (by display name or instance name). */
export declare function knownProblemsFor(origin: Pick<PluginOrigin, "displayName" | "name">): string[];
export declare function recordFiltered(slug: string, filter: string): void;
export declare function filteredBy(slug: string): string | undefined;
/**
 * Record a warning and print it right away (main thread, once). Use for problems found while
 * loading the config; they are repeated in the end-of-build summary.
 */
export declare function warn(diagnostic: Omit<Diagnostic, "severity">): void;
/**
 * Record an error and print it right away (main thread, once). Used for plugins that could not be
 * loaded: the build continues without them locally, so the error is repeated in the summary.
 */
export declare function reportError(diagnostic: Omit<Diagnostic, "severity">): void;
/** Print the end-of-build summary of errors, warnings (and infos with --verbose). */
export declare function printDiagnosticsSummary(options?: {
    verbose?: boolean;
}): void;
