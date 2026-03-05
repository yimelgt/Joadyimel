# 🚀 GUÍA RÁPIDA - Imágenes del Portfolio

## ✅ ¿Qué se ha configurado?

He organizado 5 imágenes en el sistema del proyecto:

1. **CAAMTH** (Comisión de Agua) → Proyecto 5
2. **Carl's Jr - Web** (Sitio web) → Proyecto 6  
3. **Carl's Jr - Apertura** (Gran Apertura Centro Sur) → Proyecto 1
4. **Dashboard IA** (Panel) → Proyecto 3
5. **Brand Identity** (Gama Cromática) → Proyecto 4

---

## 📂 Ubicación de Archivos

```
/src/assets/
├── project-images.ts      ← Definiciones de imágenes
├── image-links.txt        ← Links para copiar/pegar
├── README.md              ← Documentación completa
└── GUIA-RAPIDA.md         ← Este archivo
```

---

## 🔗 Links Internos (COPIA ESTOS)

```
CAAMTH:           figma:asset/2afbc893b8d8f4b19725759416d95641a8b61ac0.png
Carl's Jr Web:    figma:asset/9925597f3925724d1597adac03baee10ee601c5b.png
Carl's Jr Apert:  figma:asset/07cfd2e8d8e73324252f5e6585eea69d79a1e518.png
Dashboard IA:     figma:asset/c4236c6c5fa7d075e5e8a7a61d05d1a61a825114.png
Brand Identity:   figma:asset/f7f281dcd1babe9f8b08519612c236b388829203.png
```

---

## 💡 Cómo Agregar Más Imágenes

### Paso 1: Edita `/src/assets/project-images.ts`
```typescript
// Agrega tu nueva imagen
import nuevaImagen from "figma:asset/TU_HASH_AQUI.png";

export const projectImages = {
  caamth: caamthImage,
  carlsjr: carlsjrImage,
  dashboard: dashboardImage,
  nuevaImagen: nuevaImagen,  // ← Agrega aquí
};

export { nuevaImagen };  // ← Y aquí
```

### Paso 2: Usa en `/src/app/data/projects.ts`
```typescript
{
  id: "project-7",
  title: { en: "...", es: "..." },
  // ... otros campos
  imageUrl: projectImages.nuevaImagen,  // ← Usa aquí
}
```

---

## 🎯 Ejemplos de Uso Rápido

### En cualquier componente:
```typescript
import { projectImages } from "../../assets/project-images";

// Opción 1: Usar objeto
<img src={projectImages.caamth} />

// Opción 2: Importar individual
import { caamthImage } from "../../assets/project-images";
<img src={caamthImage} />

// Opción 3: Directo (no recomendado)
import img from "figma:asset/2afbc893b8d8f4b19725759416d95641a8b61ac0.png";
<img src={img} />
```

---

## ✨ Estado Actual del Portfolio

| Proyecto | Imagen | Estado |
|----------|--------|--------|
| Project 1 - Carl's Jr | `projectImages.carlsjr` | ✅ Configurado |
| Project 2 - E-commerce | URL externa | ⚠️ Pendiente |
| Project 3 - IA Automation | `projectImages.dashboard` | ✅ Configurado |
| Project 4 - Branding | `projectImages.brandIdentity` | ✅ Configurado |
| Project 5 - CAAMTH | `projectImages.caamth` | ✅ Configurado |
| Project 6 - SEO | URL externa | ⚠️ Pendiente |

---

## 🔧 Archivos Modificados

- ✅ **Creado:** `/src/assets/project-images.ts`
- ✅ **Actualizado:** `/src/app/data/projects.ts`
- ✅ **Verificado:** `/src/app/components/ProjectCard.tsx`
- ✅ **Funcionando:** Página `/portfolio`

---

## 📞 ¿Necesitas Ayuda?

Si necesitas cambiar o agregar imágenes:

1. Abre `/src/assets/project-images.ts`
2. Agrega tu nueva imagen siguiendo el patrón
3. Actualiza `/src/app/data/projects.ts` con la nueva referencia
4. ¡Listo! 🎉

---

**Última actualización:** Configuración inicial completada
**Imágenes activas:** 3 de 6 proyectos