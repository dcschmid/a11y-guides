import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "A11Y Guides",
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Grundlagen der Barrierefreiheit",
          items: [
            {
              label: "Grundlagen",
              link: "/guides/grundlagen/einleitung",
            },
            {
              label: "Arten von Behinderungen: Personen",
              items: [
                { label: "Einleitung", link: "/guides/grundlagen/personen/einleitung" },
                { label: "Blind", link: "/guides/grundlagen/personen/blind" },
                { label: "Sehschwäche", link: "/guides/grundlagen/personen/sehschwaeche" },
                { label: "Farbenblind", link: "/guides/grundlagen/personen/farbenblind" },
                { label: "Gehörlos", link: "/guides/grundlagen/personen/gehoerlos" },
                { label: "Taubblind", link: "/guides/grundlagen/personen/taubblind" },
                { label: "Motorische Behinderung", link: "/guides/grundlagen/personen/motorische-behinderungen" },
                { label: "Sprachbehinderungen", link: "/guides/grundlagen/personen/sprachbehinderungen" },
                { label: "Kognetive Behinderungen", link: "/guides/grundlagen/personen/kognitive-behinderungen" },
                { label: "Leseschwäche", link: "/guides/grundlagen/personen/leseschwaeche" },
                { label: "Anfälle", link: "/guides/grundlagen/personen/anfaelle" },
                { label: "Mehrfache Behinderungen", link: "/guides/grundlagen/personen/mehrfache-behinderungen" },
                { label: "Zusätzliche Ressourcen", link: "/guides/grundlagen/personen/zusaetzliche-ressourcen" },
              ],
            },
            {
              label: "Richtlinien",
              items: [
                { label: "Einleitung", link: "/guides/grundlagen/richtlinien/einleitung" },
                { label: "WCAG", link: "/guides/grundlagen/richtlinien/wcag" },
                { label: "ATAG", link: "/guides/grundlagen/richtlinien/atag" },
                { label: "WAI-ARIA", link: "/guides/grundlagen/richtlinien/wai-aria" },
              ],
            },
            {
              label: "Mythen und Irrtümer über Barrierefreiheit",
              items: [
                { label: "Einleitung", link: "/guides/grundlagen/mythen-und-missverstaendnisse/einleitung" },
                {
                  label: "Barrierefreiheit kommt nur einer kleinen Minderheit zugute",
                  link: "/guides/grundlagen/mythen-und-missverstaendnisse/minderheiten",
                },
                {
                  label: "Barrierefreiheit ist ein kurzfristiges Projekt",
                  link: "/guides/grundlagen/mythen-und-missverstaendnisse/kurzfristiges-projekt",
                },
                {
                  label: "Barrierefreiheit sollte der letzte Schritt sein",
                  link: "/guides/grundlagen/mythen-und-missverstaendnisse/letzer-schritt",
                },
                {
                  label: "Barrierefreiheit ist schwer und teuer",
                  link: "/guides/grundlagen/mythen-und-missverstaendnisse/schwer-teuer",
                },
                {
                  label: "Barrierefreiheit ist hässlich",
                  link: "/guides/grundlagen/mythen-und-missverstaendnisse/haesslich",
                },
              ],
            },
            {
              label: "Zusammenfassung",
              link: "/guides/grundlagen/zusammenfassung",
            },
          ],
        },
      ],
    }),
  ],
});
