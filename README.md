# Proyecto EduWeb - Landing Page

## Descripción del Proyecto

Este proyecto es una **landing page** para un sitio web educativo, desarrollado utilizando **Next.js**, un framework de React para aplicaciones web. Está diseñado para promocionar servicios educativos, mostrar características destacadas, y facilitar el contacto con los usuarios. Es ideal para principiantes en desarrollo web con Next.js, ya que incluye componentes reutilizables, estilos con Tailwind CSS, y una estructura modular.

La landing page incluye secciones como un hero (sección principal), navegación, características, servicios, carrusel de imágenes, formulario de contacto, y un pie de página. También integra un botón de WhatsApp para contacto directo.

## Tecnologías Utilizadas

- **Next.js**: Framework de React para crear aplicaciones web del lado del servidor (SSR) y del lado del cliente. Permite renderizado eficiente y optimización automática.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario. Se usa para crear componentes reutilizables.
- **Tailwind CSS**: Framework de CSS utilitario para diseñar rápidamente sin escribir CSS personalizado.
- **JavaScript (ES6+)**: Lenguaje de programación principal.
- **PostCSS**: Herramienta para procesar CSS, usada con Tailwind.
- **ESLint**: Herramienta para linting de código JavaScript.
- **JSON**: Para almacenar datos estáticos como listas de escuelas y enlaces.

## Estructura del Proyecto

El proyecto sigue la estructura típica de una aplicación Next.js con App Router (introducido en Next.js 13+). Aquí está la organización de archivos:

```
edu-web-project/
├── eslint.config.mjs          # Configuración de ESLint para linting de código
├── jsconfig.json              # Configuración de JavaScript para el editor
├── next.config.mjs            # Configuración de Next.js
├── package.json               # Dependencias y scripts del proyecto
├── postcss.config.mjs         # Configuración de PostCSS para Tailwind
├── tailwind.config.js         # Configuración de Tailwind CSS
├── README.md                  # Este archivo
├── public/                    # Archivos estáticos (imágenes, íconos, etc.)
└── src/
    ├── app/
    │   ├── globals.css        # Estilos globales (Tailwind base)
    │   ├── layout.js          # Layout principal de la aplicación
    │   └── page.js            # Página principal (home)
    └── components/            # Componentes reutilizables de React
        ├── Carousel.js        # Carrusel de imágenes
        ├── Contact.js         # Formulario de contacto
        ├── FeatureCard.js     # Tarjeta para características
        ├── Features.js        # Sección de características
        ├── Footer.js          # Pie de página
        ├── Hero.js            # Sección hero (principal)
        ├── MainContent.js     # Contenido principal
        ├── Navbar.js          # Barra de navegación
        ├── Navigation.js      # Navegación adicional
        ├── SchoolesGrid.js    # Cuadrícula de escuelas
        ├── Service.js         # Componente de servicio individual
        ├── ServicesSection.js # Sección de servicios
        ├── WhatsAppButton.js  # Botón de WhatsApp
        └── WhatsAppIcon.js    # Ícono de WhatsApp
    └── services/              # Datos estáticos en JSON
        ├── links.json         # Enlaces útiles
        └── schoolesList.json  # Lista de escuelas
```

## Instalación y Configuración Paso a Paso

Si eres nuevo en el desarrollo web, sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local. Asumimos que tienes Windows (como indica tu entorno).

### Paso 1: Instalar Node.js
Next.js requiere Node.js para ejecutar JavaScript en el servidor.

1. Ve al sitio web oficial de Node.js: [https://nodejs.org/](https://nodejs.org/)
2. Descarga la versión LTS (recomendada para estabilidad).
3. Instala el ejecutable siguiendo las instrucciones.
4. Verifica la instalación abriendo una terminal (PowerShell) y ejecutando:
   ```
   node --version
   npm --version
   ```
   Deberías ver versiones como "v18.x.x" para Node y "9.x.x" para npm.

### Paso 2: Clonar o Descargar el Proyecto
Si tienes Git instalado:
1. Abre PowerShell y navega a la carpeta donde quieres guardar el proyecto (ej: `cd Documents`).
2. Clona el repositorio (si está en GitHub):
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
   Reemplaza `<URL_DEL_REPOSITORIO>` con la URL real.

Si no tienes Git, descarga el ZIP desde GitHub y extráelo en una carpeta.

### Paso 3: Instalar Dependencias
1. Navega a la carpeta del proyecto:
   ```
   cd edu-web-project
   ```
2. Instala las dependencias con npm:
   ```
   npm install
   ```
   Esto descargará todas las librerías necesarias (Next.js, Tailwind, etc.).

### Paso 4: Ejecutar el Proyecto
1. Una vez instaladas las dependencias, ejecuta el servidor de desarrollo:
   ```
   npm run dev
   ```
2. Abre tu navegador y ve a [http://localhost:3000](http://localhost:3000).
3. Deberías ver la landing page cargándose.

### Paso 5: Editar y Desarrollar
- Abre el proyecto en VS Code (tu editor actual).
- Edita archivos en `src/components/` o `src/app/` para modificar la página.
- Los cambios se reflejarán automáticamente en el navegador gracias al hot reload de Next.js.

## Explicación Paso a Paso del Desarrollo con Next.js

### ¿Qué es Next.js?
Next.js es un framework basado en React que facilita la creación de aplicaciones web. Ofrece:
- **Server-Side Rendering (SSR)**: Renderiza páginas en el servidor para mejor SEO y velocidad.
- **App Router**: Sistema de rutas basado en carpetas en `src/app/`.
- **Optimización automática**: Comprime imágenes, CSS, etc.

### Conceptos Básicos de React
- **Componentes**: Bloques reutilizables de UI. Ej: `Hero.js` es un componente que muestra la sección principal.
- **JSX**: Sintaxis para escribir HTML en JavaScript. Ej: `<div>Hola</div>`.
- **Props**: Datos que pasan de un componente padre a uno hijo.
- **Estado**: Datos que cambian con el tiempo (usando hooks como `useState`).

### Cómo Funciona Esta Landing Page
1. **Layout Principal** (`layout.js`): Define la estructura global, incluyendo el título de la página y estilos globales.
2. **Página Principal** (`page.js`): Importa y renderiza componentes como `Hero`, `Features`, etc.
3. **Componentes**:
   - `Navbar.js`: Barra de navegación con menú.
   - `Hero.js`: Sección de bienvenida con título y llamada a acción.
   - `Features.js`: Muestra características usando `FeatureCard.js`.
   - `ServicesSection.js`: Lista servicios usando datos de `schoolesList.json`.
   - `Carousel.js`: Carrusel de imágenes (probablemente usando una librería como Swiper).
   - `Contact.js`: Formulario para contacto.
   - `Footer.js`: Información de pie de página.
   - `WhatsAppButton.js`: Botón flotante para WhatsApp.
4. **Datos Estáticos**: `services/links.json` y `schoolesList.json` almacenan datos en formato JSON, que se importan en componentes.

### Estilos con Tailwind CSS
- Tailwind usa clases utilitarias como `bg-blue-500` para estilos.
- Configurado en `tailwind.config.js`.
- Estilos globales en `globals.css`.

### Próximos Pasos para Aprender
- Lee la documentación de Next.js: [https://nextjs.org/docs](https://nextjs.org/docs)
- Aprende React: [https://react.dev/](https://react.dev/)
- Practica Tailwind: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- Experimenta editando componentes y viendo cambios en tiempo real.

## Colaboración con Git y GitHub

## Colaboración con Git y GitHub desde VS Code

Para trabajar en equipo en este proyecto, usaremos **Git** (sistema de control de versiones) y **GitHub** (plataforma para alojar repositorios). Esto permite rastrear cambios, colaborar sin conflictos, y mantener un historial del código. El proyecto ya está configurado en un repositorio de GitHub listo para clonar. Usaremos principalmente la interfaz integrada de Git en VS Code para facilitar el proceso, aunque algunos comandos de terminal pueden ser útiles.

### Paso 1: Instalar Git
Git es necesario para controlar versiones del código.

1. Ve al sitio oficial: [https://git-scm.com/](https://git-scm.com/)
2. Descarga la versión para Windows.
3. Instala siguiendo las instrucciones (acepta las opciones predeterminadas).
4. Verifica en PowerShell:
   ```
   git --version
   ```
   Deberías ver algo como "git version 2.x.x".

### Paso 2: Configurar Git
Configura tu nombre y email (necesario para commits).

1. Abre PowerShell y ejecuta:
   ```
   git config --global user.name "Tu Nombre"
   git config --global user.email "tuemail@example.com"
   ```
   Reemplaza con tu nombre real y email.

### Paso 3: Crear una Cuenta en GitHub (si no tienes)
1. Ve a [https://github.com/](https://github.com/) y regístrate.
2. Verifica tu email.

### Paso 4: Clonar el Repositorio desde VS Code
El proyecto ya está en GitHub, así que clónalo directamente.

1. Abre VS Code.
2. Presiona `Ctrl + Shift + P` (o `Cmd + Shift + P` en Mac) para abrir la paleta de comandos.
3. Escribe "Git: Clone" y selecciona la opción.
4. Pega la URL del repositorio (ej: `https://github.com/tuusuario/edu-web-project.git`).
5. Elige una carpeta local donde clonar (ej: `c:\Users\fer_a\Documents\`).
6. VS Code clonará el proyecto y lo abrirá automáticamente.

### Paso 5: Trabajar con Ramas (Branches) en VS Code
Las ramas permiten trabajar en nuevas características sin afectar el código principal.

1. En VS Code, ve al panel lateral izquierdo y haz clic en el ícono de Source Control (parece una rama).
2. Haz clic en el nombre de la rama actual (ej: "main") en la parte inferior.
3. Selecciona "Create new branch" o "Create new branch from...".
4. Nombra la rama (ej: `feature/nuevo-componente`).
5. Cambia a la nueva rama automáticamente.

### Paso 6: Hacer Commits y Push en VS Code
Después de editar archivos:

1. Ve al panel Source Control.
2. Verás los archivos modificados. Haz clic en "+" para agregarlos al staging (o "Stage All Changes").
3. Escribe un mensaje de commit descriptivo (ej: "Agregado nuevo componente de contacto").
4. Haz clic en el ícono de check (Commit).
5. Para subir cambios: Haz clic en los tres puntos (...) > "Push" (o "Push to...").
6. Si es la primera vez en una rama nueva, selecciona "Publish Branch".

### Paso 7: Crear un Pull Request (PR) en GitHub
Para fusionar cambios al código principal:

1. Ve a GitHub en tu navegador y al repositorio.
2. Si subiste una rama nueva, verás un banner "Compare & pull request". Haz clic.
3. Selecciona tu rama vs. "main".
4. Agrega título y descripción (ej: "Agrega componente de contacto mejorado").
5. Crea el PR. Otros colaboradores pueden revisar, comentar y aprobar.

### Paso 8: Actualizar tu Código Local (Pull) en VS Code
Para obtener cambios de otros:

1. En el panel Source Control, haz clic en los tres puntos (...).
2. Selecciona "Pull" o "Pull from...".
3. Asegúrate de estar en la rama correcta (ej: "main").

### Consejos para Colaboración
- **Commits frecuentes**: Haz commits pequeños con mensajes descriptivos (ej: "Arregla bug en formulario").
- **No subas node_modules**: Asegúrate de tener un `.gitignore` con `node_modules/` (ya debería estar en Next.js).
- **Resuelve conflictos**: Si hay conflictos al hacer pull, VS Code te mostrará opciones para resolverlos.
- **Usa issues en GitHub**: Para reportar bugs o pedir características.
- **Aprende más**: Lee [https://git-scm.com/book](https://git-scm.com/book) y [https://docs.github.com/](https://docs.github.com/). También, explora la documentación de Git en VS Code.

Si colaboras con otros, coordina quién trabaja en qué para evitar conflictos.

Si tienes preguntas o necesitas ayuda con algo específico, ¡pregunta! 