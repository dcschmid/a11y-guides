import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://a11yguides.onrender.com",
  integrations: [
    starlight({
      title: "A11Y Guides",
      locales: {
        root: {
          label: "Deutsch",
          lang: "de-DE",
        },
      },
      customCss: ["./src/styles/custom.css"],
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Grundlagen der Barrierefreiheit",
          collapsed: true,
          items: [
            {
              label: "Grundlagen",
              link: "/guides/grundlagen/einleitung",
            },
            {
              label: "Arten von Behinderungen: Personen",
              collapsed: true,
              items: [
                {
                  label: "Einleitung",
                  link: "/guides/grundlagen/personen/einleitung",
                },
                { label: "Blind", link: "/guides/grundlagen/personen/blind" },
              ],
            },
            {
              label: "Richtlinien",
              collapsed: true,
              items: [
                {
                  label: "Einleitung",
                  link: "/guides/grundlagen/richtlinien/einleitung",
                },
                { label: "WCAG", link: "/guides/grundlagen/richtlinien/wcag" },
                { label: "ATAG", link: "/guides/grundlagen/richtlinien/atag" },
                {
                  label: "WAI-ARIA",
                  link: "/guides/grundlagen/richtlinien/wai-aria",
                },
              ],
            },
            {
              label: "Mythen und Irrtümer über Barrierefreiheit",
              collapsed: true,
              items: [
                {
                  label: "Einleitung",
                  link: "/guides/grundlagen/mythen-und-missverstaendnisse/einleitung",
                },
                {
                  label:
                    "Barrierefreiheit kommt nur einer kleinen Minderheit zugute",
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
        {
          label: "Gestaltung einer barrierefreien Benutzererfahrung",
          collapsed: true,
          items: [
            {
              label: "Einleitung",
              link: "/guides/ux-design/einleitung",
            },
            {
              label: "Barrierefreiheit und inklusives Design",
              collapsed: true,
              items: [
                {
                  label: "Einleitung",
                  link: "/guides/ux-design/barrierefreiheit-inklusives-design/einleitung",
                },
                {
                  label: "Barrierefreiheit als Mindestziel definieren",
                  link: "/guides/ux-design/barrierefreiheit-inklusives-design/mindestziel",
                },
                {
                  label: "7 Grundsätze des universellen Designs",
                  link: "/guides/ux-design/barrierefreiheit-inklusives-design/grundsaetze-universellen-designs",
                },
              ],
            },
            {
              label: "Exklusive Entwurfsmuster meiden",
              collapsed: true,
              items: [
                {
                  label: "Einleitung",
                  link: "/guides/ux-design/exklusives-design-vermeiden/einleitung",
                },
                {
                  label: "Annahmen prüfen",
                  link: "/guides/ux-design/exklusives-design-vermeiden/annahmen",
                },
                {
                  label: "Designs, die zum Ausschluss führen",
                  link: "/guides/ux-design/exklusives-design-vermeiden/ausschluss",
                },
                {
                  label:
                    "Aus Fehlern bei der Gestaltung der Barrierefreiheit lernen",
                  link: "/guides/ux-design/exklusives-design-vermeiden/aus-fehlern-lernen",
                },
              ],
            },
            {
              label: "Umfassende Vielfalt",
              collapsed: true,
              items: [
                {
                  label: "Einleitung",
                  link: "/guides/ux-design/umfassende-vielfalt/einleitung",
                },
                {
                  label: "Untersuchung der Randfälle",
                  link: "/guides/ux-design/umfassende-vielfalt/untersuchung-der-randfaelle",
                },
                {
                  label: "Nutzerforschung mit Menschen mit Behinderungen",
                  link: "/guides/ux-design/umfassende-vielfalt/nutzerforschung-mit-menschen-mit-behinderungen",
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
