# 🏥 Campus Virtual - Cruz Roja Argentina

### Aplicación React de Capacitación en Primeros Auxilios para Docentes

Una aplicación web moderna construida con **React** y **TailwindCSS** que simula un campus virtual de capacitación para docentes en primeros auxilios de la Cruz Roja Argentina.

![Preview](https://img.shields.io/badge/Status-Completado-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-blueviolet)
![Vite](https://img.shields.io/badge/Vite-5.4.0-yellow)

## 🚀 Características Principales

### 🔐 Sistema de Autenticación

- **Login con usuarios demo** preseleccionables
- **Registro deshabilitado** (solo para demo)
- 4 usuarios docentes simulados con diferentes roles

### 📚 Landing Page Educativa

- Diseño responsive siguiendo las mejores prácticas de UX
- Secciones informativas sobre primeros auxilios
- Estadísticas de capacitación
- Testimonios de docentes
- Planes de precios
- Navegación suave entre secciones

### 🎥 Campus Virtual

- **6 videos de capacitación** organizados por módulos
- Sistema de progreso con tracking visual
- Modal de video interactivo
- Marcado de videos completados
- Certificación automática al completar 100%

### 🎨 Diseño

- **Paleta de colores oficial** de Cruz Roja Argentina
- **Glassmorphism effects** y animaciones suaves
- **Totalmente responsive** (Mobile-first)
- **Accesibilidad** implementada

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18.3.1 con Hooks
- **Styling**: TailwindCSS 3.4.0
- **Build Tool**: Vite 5.4.0
- **Fonts**: Google Fonts (Inter)
- **Icons**: Emojis nativos para mejor compatibilidad

## 📁 Estructura del Proyecto

```
login-cruz-roja/
├── public/
├── src/
│   ├── components/
│   │   ├── LoginPage.jsx      # Página de login con usuarios demo
│   │   ├── LandingPage.jsx    # Landing principal con información
│   │   └── CampusPage.jsx     # Campus virtual con videos
│   ├── App.jsx                # Componente principal con navegación
│   ├── index.css              # Estilos globales y TailwindCSS
│   └── main.jsx               # Punto de entrada de React
├── index.html                 # HTML base
├── tailwind.config.js         # Configuración de TailwindCSS
├── postcss.config.js          # Configuración de PostCSS
├── package.json              # Dependencias y scripts
└── README.md                 # Este archivo
```

## 🎯 Usuarios Demo Disponibles

1. **María González** 👩‍🏫

   - Rol: Docente Nivel Primario
   - Escuela: Escuela Primaria N° 15

2. **Carlos Rodríguez** 👨‍💼

   - Rol: Director de Secundaria
   - Escuela: Colegio San Martín

3. **Ana López** 👩‍💻

   - Rol: Profesora de Educación Física
   - Escuela: Instituto Tecnológico

4. **Roberto Silva** 👨‍🎓
   - Rol: Coordinador Pedagógico
   - Escuela: Escuela Técnica N° 8

## 📺 Videos de Capacitación

| Módulo   | Título                               | Duración | Nivel      |
| -------- | ------------------------------------ | -------- | ---------- |
| Módulo 1 | Introducción a los Primeros Auxilios | 15:30    | Básico     |
| Módulo 2 | RCP Básico para Niños                | 22:15    | Intermedio |
| Módulo 3 | Manejo de Atragantamientos           | 18:45    | Intermedio |
| Módulo 4 | Lesiones Deportivas Comunes          | 25:10    | Intermedio |
| Módulo 5 | Crisis Asmáticas en el Aula          | 12:30    | Avanzado   |
| Módulo 6 | Protocolos de Emergencia Escolar     | 20:00    | Avanzado   |

## ⚡ Instalación y Ejecución

### Prerrequisitos

- Node.js 18+ instalado
- npm o yarn como gestor de paquetes

### Pasos de instalación

1. **Clonar el repositorio**

```bash
git clone <repository-url>
cd login-cruz-roja
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en modo desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:5173
```

### Scripts disponibles

```bash
npm run dev      # Ejecutar en modo desarrollo
npm run build    # Construir para producción
npm run preview  # Previsualizar build de producción
npm run lint     # Ejecutar linter
```

## 🎨 Paleta de Colores

### Colores Principales

- **Primary Red**: `#d62d20` - Color principal de Cruz Roja
- **Secondary Red**: `#b91c1c` - Color secundario y hover states
- **Accent Blue**: `#1e40af` - Acentos y elementos secundarios

### Colores Neutros

- **Light Gray**: `#f8fafc` - Fondos de sección
- **Medium Gray**: `#64748b` - Texto secundario
- **Dark Gray**: `#0f172a` - Texto principal

### Colores de Estado

- **Success Green**: `#059669` - Confirmaciones y éxito
- **Warning Orange**: `#ea580c` - Alertas y advertencias

## 🔧 Funcionalidades Implementadas

### ✅ Completadas

- [x] Sistema de login con usuarios demo
- [x] Registro deshabilitado con mensaje informativo
- [x] Landing page completa con todas las secciones
- [x] Campus virtual con grid de videos
- [x] Modal de video interactivo
- [x] Sistema de progreso de cursos
- [x] Navegación entre vistas
- [x] Diseño responsive
- [x] Animaciones y transiciones
- [x] Certificación automática

### 🔮 Mejoras Futuras

- [ ] Integración con API real de videos
- [ ] Sistema de evaluaciones por módulo
- [ ] Generación de certificados PDF
- [ ] Notificaciones push
- [ ] Chat en vivo para soporte
- [ ] Gamificación con puntos y badges

## 📱 Responsive Design

La aplicación está optimizada para:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Flujo de Usuario

1. **Acceso**: Usuario entra a la aplicación
2. **Login**: Selecciona un usuario demo de la lista
3. **Landing**: Navega por la información del curso
4. **Campus**: Accede al campus virtual
5. **Videos**: Selecciona y reproduce videos de capacitación
6. **Progreso**: Marca videos como completados
7. **Certificación**: Obtiene certificado al completar 100%

## 🤝 Contribuciones

Para contribuir al proyecto:

1. Fork del repositorio
2. Crear branch feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Desarrollado por

**Proyecto de demostración** para Cruz Roja Argentina - Campus Virtual de Capacitación

---

### 🏥 ¿Listo para hacer tu aula más segura?

> _"La preparación de hoy es la diferencia del mañana. Cada docente capacitado es un héroe potencial en el aula."_

**[🚀 Comenzar Demo](http://localhost:5173)**
