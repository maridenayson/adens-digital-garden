export interface ColorScheme {
    light: string;
    lightgray: string;
    gray: string;
    darkgray: string;
    dark: string;
    secondary: string;
    tertiary: string;
    highlight: string;
    textHighlight: string;
}
interface Colors {
    lightMode: ColorScheme;
    darkMode: ColorScheme;
}
export type FontSpecification = string | {
    name: string;
    weights?: number[];
    includeItalic?: boolean;
};
export interface Theme {
    typography: {
        title?: FontSpecification;
        header: FontSpecification;
        body: FontSpecification;
        code: FontSpecification;
    };
    cdnCaching: boolean;
    colors: Colors;
    fontOrigin: "googleFonts" | "local";
}
export type ThemeKey = keyof Colors;
export declare function getFontSpecificationName(spec: FontSpecification): string;
export declare function googleFontHref(theme: Theme): string;
export declare function googleFontSubsetHref(theme: Theme, text: string): string;
export interface GoogleFontFile {
    url: string;
    filename: string;
    extension: string;
}
export declare function processGoogleFonts(stylesheet: string, baseUrl: string): Promise<{
    processedStylesheet: string;
    fontFiles: GoogleFontFile[];
}>;
export declare function joinStyles(theme: Theme, ...stylesheet: string[]): string;
export {};
