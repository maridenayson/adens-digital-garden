import { Root as HtmlRoot } from "hast";
import { Root as MdRoot } from "mdast";
import { Data, VFile } from "vfile";
export type QuartzPluginData = Data;
export type MarkdownContent = [MdRoot, VFile];
export type ProcessedContent = [HtmlRoot, VFile];
export declare function defaultProcessedContent(vfileData: Partial<QuartzPluginData>): ProcessedContent;
