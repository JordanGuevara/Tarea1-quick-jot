# 🗒️ ANotes - Progressive Web App (PWA)

**ANotes** es una aplicación web progresiva (PWA) desarrollada con Material Design Lite (MDL), que permite a los usuarios crear, visualizar y gestionar notas de forma rápida, simple y eficiente. Está optimizada para funcionar tanto en entornos de escritorio como móviles, incluso sin conexión.

---

## 🚀 Características principales

- Crear y ver notas dinámicamente.
- Diseño limpio basado en Material Design.
- Compatible con instalación como app (PWA).
- Funciona offline gracias a Service Workers.
- Soporte para pantallas móviles y escritorio.

---

## 📁 Estructura del Proyecto
```
Tarea1-quick-jot/
│
├── index.html          # Página principal
├── manifest.json       # Archivo de manifiesto para PWA
├── sw.js               # Service Worker para manejo offline
├── css
│ └── style.css         # Estilos personalizados
├── js/
│ └── app.js            # Lógica de la app (crear, ver notas, etc.)
├── img/
│ └── icons/
│    └── icon-192.png   # Íconos de la app
│    └── icon-512.png
└── README.md           # Documentación del proyecto
```
## Ventajas del Proyecto
- Funciona sin conexión: Gracias al Service Worker, las notas se guardan localmente y la aplicación sigue operativa incluso sin internet.
- Instalable: El usuario puede añadir la app a su escritorio o pantalla de inicio, mejorando la experiencia y accesibilidad.
- Interfaz limpia y moderna: Usando Material Design Lite, la aplicación ofrece una experiencia visual intuitiva y consistente en distintos dispositivos.
- Ligera y rápida: Al ser una PWA sencilla y sin dependencias pesadas, la app carga rápido y es eficiente en recursos.
- Fácil de extender: La estructura modular en HTML, CSS y JavaScript facilita futuras mejoras y mantenimiento.

## 🛠 Tecnologías utilizadas
- HTML5 y CSS3: Estructura y estilos base para la interfaz.
- Material Design Lite (MDL): Framework para aplicar diseño material con componentes ya estilizados y animados.
- JavaScript Puro: Lógica para gestionar notas y persistencia local usando localStorage.
- Service Worker: Para cacheo y funcionalidad offline, permitiendo que la app funcione como PWA.
- Web App Manifest: Define cómo la aplicación se comporta al ser instalada (íconos, nombre, pantalla de inicio).
- http-server: Servidor estático local para probar el servicio en un contexto seguro (localhost).


## Demostración del proyecto

Observar el como se maneja la pagina web:

**[Ver demo del proyecto](img/evidencia.mp4)**

Si desea ver el proyecto en ejecución en GitHub Pages:

**[ANotes en vivo](https://jordanguevara.github.io/Tarea1-quick-jot/)**

## 🛠️ Instalación y ejecución
### Si desea ejecutarlo localmente:

1. Clona el repositorio:

```bash
git clone https://github.com/JordanGuevara/Tarea1-quick-jot.git
cd Tarea1-quick-jot
```
2. Ejecutar los siguientes comandos:

```bash
npm install -g http-server  # Solo la primera vez para instalar el servidor estático
http-server -c-1            # Para servir la app localmente sin cache (modo desarrollo)
```
