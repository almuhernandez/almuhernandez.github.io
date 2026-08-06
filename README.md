# Portfolio profesional

Base técnica del portfolio profesional, construida con [Astro](https://astro.build/)
y preparada para publicarse como sitio estático en GitHub Pages.

## Desarrollo local

Requisitos: Node.js 20.19 o superior.

```bash
npm install
npm run dev
```

El servidor local indicará la URL que debes abrir en el navegador.

## Comandos

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia el entorno local |
| `npm run build` | Genera la web estática en `dist/` |
| `npm run preview` | Previsualiza la versión generada |

## Dónde editar el contenido

- `src/content/site.ts`: identidad, presentación breve y datos de contacto.
- `src/content/navigation.ts`: secciones y enlaces de navegación.
- `src/content/experience.ts`: experiencia profesional.
- `src/content/teaching.ts`: docencia y ponencias.
- `src/content/projects.ts`: proyectos.
- `src/content/students.ts`: contenido de la sección de estudiantes.
- `public/cv/Almu_Hernandez_CV_ATS.pdf`: CV descargable actual. Para actualizarlo
  sin cambiar los enlaces del sitio, sustituye el archivo manteniendo la misma
  ruta y nombre.

`src/content/` centraliza los textos, la navegación, la experiencia, los
proyectos, los servicios y el resto del contenido del portfolio para poder
actualizarlos sin modificar directamente la estructura de las páginas cuando
no sea necesario.

## Publicación

El workflow `.github/workflows/deploy.yml` compila y publica el sitio en GitHub
Pages al enviar cambios a la rama `main`. En GitHub, configura **Settings →
Pages → Source** como **GitHub Actions** antes del primer despliegue.
