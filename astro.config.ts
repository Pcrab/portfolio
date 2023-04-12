import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
    site: "https://blog.pcrab.xyz",
    integrations: [
        solid(),
        robotsTxt(),
        sitemap(),
        UnoCSS({
            injectReset: true,
        }),
    ],
});
