# 📁 Assets - Imágenes del Portfolio

Este directorio contiene las imágenes de los proyectos organizadas y listas para usar.

## 🖼️ Imágenes Disponibles

### 1. CAAMTH - Comisión de Agua y Alcantarillado
**ID de Asset:** `figma:asset/2afbc893b8d8f4b19725759416d95641a8b61ac0.png`
- **Proyecto:** Plataforma Digital CAAMTH
- **Descripción:** Sitio web de la Comisión de Agua y Alcantarillado del Municipio de Tizayuca, Hidalgo
- **Variable:** `projectImages.caamth` o `caamthImage`

### 2. Carl's Jr - Sitio Web y Redes Sociales
**ID de Asset:** `figma:asset/9925597f3925724d1597adac03baee10ee601c5b.png`
- **Proyecto:** Campaña Digital Carl's Jr.
- **Descripción:** Captura del sitio web con enfoque en redes sociales y marketing digital
- **Variable:** `projectImages.carlsjr` o `carlsjrImage`

### 3. Carl's Jr - Gran Apertura Centro Sur
**ID de Asset:** `figma:asset/07cfd2e8d8e73324252f5e6585eea69d79a1e518.png`
- **Proyecto:** Campaña de Apertura Carl's Jr.
- **Descripción:** Material promocional para apertura de sucursal Centro Sur
- **Variable:** `projectImages.carlsjrApertura` o `carlsjrAperturaImage`

### 4. Dashboard IA - Panel de Administración
**ID de Asset:** `figma:asset/c4236c6c5fa7d075e5e8a7a61d05d1a61a825114.png`
- **Proyecto:** Automatización IA y Apoyo Operativo
- **Descripción:** Dashboard de automatización con inteligencia artificial
- **Variable:** `projectImages.dashboard` o `dashboardImage`

### 5. Brand Identity - Gama Cromática
**ID de Asset:** `figma:asset/f7f281dcd1babe9f8b08519612c236b388829203.png`
- **Proyecto:** Diseño Identidad Corporativa
- **Descripción:** Paleta de colores y gama cromática para identidad visual
- **Variable:** `projectImages.brandIdentity` o `brandIdentityImage`

---

## 💻 Cómo Usar las Imágenes

### Opción 1: Importar todo el objeto
```typescript
import { projectImages } from "../assets/project-images";

// Usar una imagen
<img src={projectImages.caamth} alt="CAAMTH Project" />
<img src={projectImages.brandIdentity} alt="Brand Identity" />
```

### Opción 2: Importar imágenes individuales
```typescript
import { caamthImage, carlsjrImage, carlsjrAperturaImage, dashboardImage, brandIdentityImage } from "../assets/project-images";

// Usar una imagen
<img src={brandIdentityImage} alt="Brand Identity Design" />
```

### Opción 3: Importar directamente (no recomendado)
```typescript
import caamthImage from "figma:asset/2afbc893b8d8f4b19725759416d95641a8b61ac0.png";
```

---

## 📋 Links Internos para Referencia Rápida

Estos son los links internos que puedes copiar y usar directamente:

```
figma:asset/2afbc893b8d8f4b19725759416d95641a8b61ac0.png  ← CAAMTH
figma:asset/9925597f3925724d1597adac03baee10ee601c5b.png  ← Carl's Jr Web
figma:asset/07cfd2e8d8e73324252f5e6585eea69d79a1e518.png  ← Carl's Jr Apertura
figma:asset/c4236c6c5fa7d075e5e8a7a61d05d1a61a825114.png  ← Dashboard IA
figma:asset/f7f281dcd1babe9f8b08519612c236b388829203.png  ← Brand Identity
```

---

## 🔄 Agregar Nuevas Imágenes

Para agregar una nueva imagen:

1. Sube la imagen a Figma Make
2. Obtén el ID del asset (formato: `figma:asset/HASH.png`)
3. Agrégala a `/src/assets/project-images.ts`:

```typescript
import nuevaImagen from "figma:asset/NUEVO_HASH.png";

export const projectImages = {
  // ... imágenes existentes
  nuevaImagen: nuevaImagen,
};

export { nuevaImagen };
```

4. Actualiza la referencia en `/src/app/data/projects.ts`

---

## ✅ Imágenes Ya Configuradas en Proyectos

Las siguientes imágenes ya están configuradas y funcionando:

- ✅ **Project 1** - Carl's Jr. Digital Campaign → `projectImages.carlsjrApertura`
- ✅ **Project 3** - AI Automation & Operations Support → `projectImages.dashboard`
- ✅ **Project 4** - Brand Identity Design → `projectImages.brandIdentity`
- ✅ **Project 5** - CAAMTH Digital Platform → `projectImages.caamth`
- ✅ **Project 6** - SEO Optimization Strategy → `projectImages.carlsjr`

El proyecto 2 (E-commerce Platform) aún usa URL externa que puedes reemplazar siguiendo el mismo patrón.