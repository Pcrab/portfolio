import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerDirectives } from "unocss";

export default defineConfig({
    transformers: [transformerDirectives()],
    presets: [
        presetUno({
            dark: "media",
        }),
        presetWebFonts({
            provider: "none",
            fonts: {
                sans: "Inter",
                serif: "Newsreader",
            },
        }),
        presetIcons({
            extraProperties: {
                display: "inline-block",
                "vertical-align": "middle",
            },
        }),
    ],
    shortcuts: {
        "bg-base": "bg-light-100 dark:bg-dark-800",
        "bg-block": "bg-gray-100 dark:bg-gray-700",
        "bg-hover": "hover:bg-gray-300 hover:dark:bg-gray-600",
        "fg-base": "text-neutral-500 dark:text-neutral-400",
        "fg-hover": "hover:text-neutral-800 hover:dark:text-neutral-200",
        "fg-emphasis": "text-dark dark:text-light",
        "border-base": "border-neutral-300 dark:border-neutral-700",
        "border-hover": "hover:border-neutral-400 dark:border-neutral-600",
    },
});
