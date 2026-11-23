/**
 * Declared plugin capabilities (`package.json` → `quartz.capabilities`).
 *
 * Plugins talk to each other implicitly: through `file.data` keys, DOM classes their scripts
 * query, browser globals, document events, CSS variables and emitted files such as
 * `static/contentIndex.json`. This module lets a plugin *declare* what it provides and what it
 * needs, and checks the enabled plugin set at build time so a missing provider produces a clear
 * warning ("backlinks requires data "links" … enable configuration.links") instead of a silently empty
 * component or a runtime TypeError.
 *
 * Fully opt-in and backwards compatible:
 * - plugins without `capabilities` are never checked and never cause warnings;
 * - a requirement may name its expected provider(s) with `from`; when such a plugin is enabled the
 *   requirement is satisfied even if that provider predates capability declarations;
 * - only warnings are produced — a build never fails because of capabilities.
 *
 * See docs/advanced/plugin capabilities.md for the schema and migration guide.
 */
export declare const CAPABILITY_KINDS: readonly ["data", "dom", "globals", "events", "files", "cssVars"];
/**
 * - `data`    — `file.data` / `fileData` keys (vfile DataMap), e.g. `"links"`
 * - `dom`     — CSS selectors present in rendered HTML or added by scripts, e.g. `".clipboard-button"`
 * - `globals` — browser globals defined by scripts, e.g. `"fetchData"`, `"addCleanup"`
 * - `events`  — document CustomEvents dispatched, e.g. `"themechange"`
 * - `files`   — emitted output paths (relative to the site root), e.g. `"static/contentIndex.json"`
 * - `cssVars` — CSS custom properties defined, e.g. `"--secondary"`
 */
export type CapabilityKind = (typeof CAPABILITY_KINDS)[number];
/** A required capability: its name, or an object naming expected providers and the impact. */
export type CapabilityRequirement = string | {
    name: string;
    /** Plugin name(s) (manifest `name`, e.g. "crawl-links") known to provide it. */
    from?: string | string[];
    /** What breaks / degrades without it — shown in the warning. */
    reason?: string;
};
export type CapabilityList = Partial<Record<CapabilityKind, string[]>>;
export type CapabilityRequirements = Partial<Record<CapabilityKind, CapabilityRequirement[]>>;
export interface PluginCapabilities {
    /** What this plugin makes available to others. */
    provides?: CapabilityList;
    /** Needed for the plugin to work — a missing provider is a build warning. */
    requires?: CapabilityRequirements;
    /** Used when present; the plugin degrades gracefully without it — reported as info only. */
    optional?: CapabilityRequirements;
}
/** A plugin as seen by the checker. */
export interface CapabilityPlugin {
    /** Display name used in messages (manifest `name`). */
    name: string;
    /** Other names the plugin can be referenced by in `from` (e.g. npm package name). */
    aliases?: string[];
    capabilities?: unknown;
}
export interface MissingCapability {
    plugin: string;
    kind: CapabilityKind;
    name: string;
    required: boolean;
    reason?: string;
    /** Plugins that could provide it (declared providers among available plugins + `from`). */
    candidates: string[];
}
export interface CapabilityReport {
    /** Unsatisfied `requires` entries (one message each). */
    warnings: string[];
    /** Unsatisfied `optional` entries and schema notes. */
    infos: string[];
    missing: MissingCapability[];
}
/**
 * Capabilities Quartz core itself always provides (independent of plugins).
 * Kept deliberately small: only things core code sets or renders unconditionally.
 */
export declare function coreCapabilities(configuration?: {
    enableSPA?: boolean;
    prefetch?: string | boolean;
}): CapabilityList;
/** Parse `capabilities` defensively; returns schema problems instead of throwing. */
export declare function parseCapabilities(raw: unknown, pluginName: string): {
    capabilities: PluginCapabilities | undefined;
    problems: string[];
};
/**
 * Check that every requirement of every enabled plugin is provided by core or by an enabled plugin.
 *
 * @param enabled   enabled plugins
 * @param available plugins that are configured but disabled (used only to suggest providers)
 * @param core      capabilities provided by Quartz core (see {@link coreCapabilities})
 */
export declare function checkCapabilities(enabled: CapabilityPlugin[], options?: {
    available?: CapabilityPlugin[];
    core?: CapabilityList;
}): CapabilityReport;
interface ManifestLike {
    name?: string;
    displayName?: string;
    capabilities?: unknown;
}
/**
 * Loader entry point: check the configured plugin entries.
 *
 * `manifestFor` is called for enabled entries, and — only when something is missing — for
 * disabled entries too, so the warning can suggest which configured plugin to enable.
 */
export declare function validatePluginCapabilities<E extends {
    enabled: boolean;
}>(args: {
    entries: E[];
    nameOf: (entry: E) => string;
    manifestFor: (entry: E) => Promise<ManifestLike | null | undefined> | ManifestLike | null | undefined;
    configuration?: {
        enableSPA?: boolean;
        prefetch?: string | boolean;
    };
    /** Built-in processing steps (see plugins/builtins): enabled ones provide, others are suggested. */
    builtins?: {
        enabled: CapabilityPlugin[];
        available: CapabilityPlugin[];
    };
}): Promise<CapabilityReport>;
/** Print capability warnings once per process (main thread only; workers re-load the config). */
export declare function printCapabilityWarnings(report: CapabilityReport): void;
export {};
