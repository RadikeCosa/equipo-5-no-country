---
title: Cómo Contribuir a esta Documentación
description: Guía completa para hacer aportes, configurar el proyecto y seguir las mejores prácticas de contribución.
---

## 🛠️ Configuración del Proyecto

### 1. Clonar el Repositorio

```bash
git clone [URL_DEL_REPOSITORIO]
cd equipo-5-documentacion
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

## 📝 Estructura de Archivos

```
src/content/docs/
├── index.mdx              # Página principal
├── prologo.md             # Esta página
├── guides/                # Guías paso a paso
│   └── *.md
└── reference/             # Documentación técnica
    └── *.md
```

## ✍️ Formato de Documentos

### Frontmatter Requerido

Cada archivo `.md` debe comenzar con:

```yaml
---
title: Título de la Página
description: Descripción SEO (máximo 160 caracteres)
---
```

### Frontmatter Opcional

```yaml
---
title: Título de la Página
description: Descripción SEO
sidebar:
  order: 1 # Orden en sidebar
  badge: "Nuevo" # Badge opcional
template: doc # 'doc' (default) o 'splash'
---
```

## 🗂️ Configuración del Sidebar

### Agregar Nueva Página al Sidebar

Editar `astro.config.mjs`:

```javascript
sidebar: [
  {
    label: "Categoría Existente",
    items: [
      { label: "Nueva Página", slug: "ruta/archivo" },
      // Más páginas...
    ],
  },
  {
    label: "Nueva Categoría",
    items: [{ label: "Primera Página", slug: "nueva-categoria/primera" }],
  },
];
```

## 🔄 Proceso de Contribución (Pull Request)

### 1. Crear Rama de Feature

```bash
git checkout -b feature/nombre-descriptivo
# Ejemplo: feature/guia-testing
```

### 2. Hacer Cambios y Commits

```bash
# Agregar archivos
git add .

# Commit con mensaje descriptivo
git commit -m "docs: agregar guía de testing unitario"
```

### Convención de Commits

Usar [Conventional Commits](https://www.conventionalcommits.org/):

- `docs: agregar nueva guía`
- `docs: actualizar proceso de deployment`
- `fix: corregir enlaces rotos`
- `feat: agregar componente de ejemplo`

### 3. Subir Cambios

```bash
git push origin feature/nombre-descriptivo
```

### 4. Crear Pull Request

1. Ve al repositorio en GitHub
2. Haz clic en "Compare & pull request"
3. Completa la plantilla de PR:

   ```markdown
   ## Descripción

   Breve descripción de los cambios realizados.

   ## Tipo de cambio

   - [ ] Nueva documentación
   - [ ] Actualización de contenido existente
   - [ ] Corrección de errores
   - [ ] Mejora de formato/estructura

   ## Checklist

   - [ ] El contenido sigue las convenciones de formato
   - [ ] Se probó localmente con `npm run dev`
   - [ ] Los enlaces funcionan correctamente
   - [ ] La gramática y ortografía son correctas
   ```

## 🎨 Componentes Disponibles

### Cards (Solo en archivos .mdx)

```jsx
import { Card, CardGrid } from "@astrojs/starlight/components";

<CardGrid>
  <Card title="Título" icon="star">
    Contenido de la card
  </Card>
</CardGrid>;
```

### Badges

```markdown
<Badge text="Nuevo" variant="tip" />
<Badge text="Importante" variant="caution" />
```

### Callouts

```markdown
:::note
Esto es una nota informativa.
:::

:::tip
Consejo útil para el lector.
:::

:::caution
Advertencia importante.
:::

:::danger
Información crítica.
:::
```

## 📋 Checklist Pre-Contribución

Antes de hacer tu PR, verifica:

- [ ] ✅ El proyecto corre sin errores (`npm run dev`)
- [ ] ✅ El build es exitoso (`npm run build`)
- [ ] ✅ Los enlaces internos funcionan
- [ ] ✅ El frontmatter está completo
- [ ] ✅ La gramática y ortografía son correctas
