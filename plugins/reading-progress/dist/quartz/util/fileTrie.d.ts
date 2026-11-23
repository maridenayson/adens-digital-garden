import type { ContentDetails } from "../plugins/types";
import { FullSlug } from "./path";
interface FileTrieData {
    slug: string;
    title: string;
    filePath: string;
}
export declare class FileTrieNode<T extends FileTrieData = ContentDetails> {
    isFolder: boolean;
    children: Array<FileTrieNode<T>>;
    private slugSegments;
    private fileSegmentHint?;
    private displayNameOverride?;
    data: T | null;
    constructor(segments: string[], data?: T);
    get displayName(): string;
    set displayName(name: string);
    get slug(): FullSlug;
    get slugSegment(): string;
    private makeChild;
    private insert;
    /**
     * Add a page at `position` (its slug by default). The build passes the page's slugified file
     * path, so a note with a permalink stays in its folder for navigation (explorer, folder pages,
     * breadcrumbs) while `data.slug` — what links point at — is its permalink.
     */
    add(file: T, position?: string): void;
    findNode(path: string[]): FileTrieNode<T> | undefined;
    ancestryChain(path: string[]): Array<FileTrieNode<T>> | undefined;
    /**
     * Filter trie nodes. Behaves similar to `Array.prototype.filter()`, but modifies tree in place
     */
    filter(filterFn: (node: FileTrieNode<T>) => boolean): void;
    /**
     * Map over trie nodes. Behaves similar to `Array.prototype.map()`, but modifies tree in place
     */
    map(mapFn: (node: FileTrieNode<T>) => void): void;
    /**
     * Sort trie nodes according to sort/compare function
     */
    sort(sortFn: (a: FileTrieNode<T>, b: FileTrieNode<T>) => number): void;
    static fromEntries<T extends FileTrieData>(entries: [FullSlug, T][]): FileTrieNode<T>;
    /**
     * Get all entries in the trie
     * in the a flat array including the full path and the node
     */
    entries(): [FullSlug, FileTrieNode<T>][];
    /**
     * Get all folder paths in the trie
     * @returns array containing folder state for trie
     */
    getFolderPaths(): FullSlug[];
}
export {};
