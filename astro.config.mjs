// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Equipo 5 - No Country",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/CastilloJoshuaEE/Equipo5-WebApp-OnboardingCreditos",
        },
      ],
      sidebar: [
        {
          label: "Inicio",
          items: [{ label: "Cómo Contribuir", slug: "prologo" }],
        },
        {
          label: "Equipo y Roles",
          items: [{ label: "Miembros del Equipo", slug: "guides/equipo" }],
        },
        {
          label: "Requisitos y Especificaciones",
          autogenerate: { directory: "requisites" },
        },
        {
          label: "Herramientas y Tecnologías",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
