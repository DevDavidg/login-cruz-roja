import { useState } from "react";
import {
  LogOut,
  Play,
  CheckCircle,
  Clock,
  User,
  Eye,
  FileText,
  Paperclip,
  Star,
  Award,
  Download,
  Mail,
  Heart,
  Zap,
  Shield,
  BookOpen,
  Users,
  Activity,
  AlertTriangle,
  Stethoscope,
  Bandage,
  Brain,
  Zap as Shock,
  Target,
  ClipboardList,
} from "lucide-react";

const CampusPage = ({ user, onLogout }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [completedVideos, setCompletedVideos] = useState([]);
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const videos = [
    {
      id: 1,
      title: "Introducción a los Primeros Auxilios",
      description:
        "Conceptos básicos y principios fundamentales de los primeros auxilios en el entorno escolar.",
      duration: "15:30",
      module: "Módulo 1",
      level: "Básico",
      thumbnail: Heart,
      category: "Fundamentos",
      instructor: "Dr. María González",
      completed: false,
      quiz: true,
      resources: 3,
      views: 1254,
    },
    {
      id: 2,
      title: "RCP Básico para Niños",
      description:
        "Técnicas de reanimación cardiopulmonar adaptadas para estudiantes de primaria y secundaria.",
      duration: "22:15",
      module: "Módulo 2",
      level: "Intermedio",
      thumbnail: Activity,
      category: "RCP",
      instructor: "Dr. Carlos Mendoza",
      completed: false,
      quiz: true,
      resources: 5,
      views: 987,
    },
    {
      id: 3,
      title: "Manejo de Atragantamientos",
      description:
        "Maniobra de Heimlich y técnicas para diferentes edades en el aula.",
      duration: "18:45",
      module: "Módulo 3",
      level: "Intermedio",
      thumbnail: AlertTriangle,
      category: "Emergencias",
      instructor: "Dra. Ana López",
      completed: false,
      quiz: true,
      resources: 4,
      views: 1120,
    },
    {
      id: 4,
      title: "Lesiones Deportivas Comunes",
      description:
        "Tratamiento de lesiones frecuentes en educación física y deportes escolares.",
      duration: "25:10",
      module: "Módulo 4",
      level: "Intermedio",
      thumbnail: Zap,
      category: "Lesiones",
      instructor: "Prof. Roberto Silva",
      completed: false,
      quiz: true,
      resources: 6,
      views: 856,
    },
    {
      id: 5,
      title: "Crisis Asmáticas en el Aula",
      description:
        "Reconocimiento y manejo de crisis asmáticas en estudiantes.",
      duration: "12:30",
      module: "Módulo 5",
      level: "Avanzado",
      thumbnail: Stethoscope,
      category: "Emergencias",
      instructor: "Dra. Laura Fernández",
      completed: false,
      quiz: true,
      resources: 3,
      views: 743,
    },
    {
      id: 6,
      title: "Protocolos de Emergencia Escolar",
      description:
        "Procedimientos institucionales y comunicación con servicios de emergencia.",
      duration: "20:00",
      module: "Módulo 6",
      level: "Avanzado",
      thumbnail: ClipboardList,
      category: "Protocolos",
      instructor: "Dir. Diego Martínez",
      completed: false,
      quiz: true,
      resources: 4,
      views: 692,
    },
    {
      id: 7,
      title: "Quemaduras y Heridas",
      description:
        "Tratamiento inmediato de quemaduras menores y heridas en el entorno escolar.",
      duration: "16:20",
      module: "Módulo 7",
      level: "Intermedio",
      thumbnail: Bandage,
      category: "Lesiones",
      instructor: "Enf. Patricia Ruiz",
      completed: false,
      quiz: true,
      resources: 5,
      views: 534,
    },
    {
      id: 8,
      title: "Convulsiones y Desmayos",
      description:
        "Protocolo de actuación ante convulsiones y pérdida de conciencia.",
      duration: "19:45",
      module: "Módulo 8",
      level: "Avanzado",
      thumbnail: Brain,
      category: "Emergencias",
      instructor: "Dr. Miguel Torres",
      completed: false,
      quiz: true,
      resources: 4,
      views: 467,
    },
  ];

  const categories = [
    "Todos",
    "Fundamentos",
    "RCP",
    "Emergencias",
    "Lesiones",
    "Protocolos",
  ];
  const levels = ["Todos", "Básico", "Intermedio", "Avanzado"];

  const progress = Math.round((completedVideos.length / videos.length) * 100);
  const totalHours = videos.reduce((acc, video) => {
    const [minutes, seconds] = video.duration.split(":").map(Number);
    return acc + minutes + seconds / 60;
  }, 0);

  const handleVideoComplete = (videoId) => {
    if (!completedVideos.includes(videoId)) {
      setCompletedVideos([...completedVideos, videoId]);
    }
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const filteredVideos = videos.filter((video) => {
    const categoryMatch =
      selectedCategory === "Todos" || video.category === selectedCategory;
    const levelMatch = activeFilter === "Todos" || video.level === activeFilter;
    return categoryMatch && levelMatch;
  });

  const stats = {
    completed: completedVideos.length,
    total: videos.length,
    hours: Math.round((totalHours / 60) * 10) / 10,
    certificates: progress === 100 ? 1 : 0,
  };

  return (
    <div className="min-h-screen bg-neutral-light-gray">
      {/* Header Responsive */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          {/* Mobile Header */}
          <div className="flex items-center justify-between lg:hidden">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                <img
                  src="/logo-cruz-roja.png"
                  alt="Cruz Roja Argentina"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span className="font-bold text-neutral-dark-gray text-sm">
                Campus
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm">{user.avatar}</span>
              <button
                onClick={onLogout}
                className="text-neutral-medium-gray hover:text-primary-red transition-colors text-sm"
              >
                Salir
              </button>
            </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <img
                  src="/logo-cruz-roja.png"
                  alt="Cruz Roja Argentina"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-neutral-dark-gray">
                  Campus Virtual
                </h1>
                <p className="text-sm text-neutral-medium-gray">
                  Cruz Roja Argentina
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="text-sm text-neutral-medium-gray">
                  Progreso:
                </div>
                <div className="w-40 bg-gray-200 rounded-full h-3 relative">
                  <div
                    className="bg-gradient-primary h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-neutral-dark-gray">
                    {progress}%
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-xl">{user.avatar}</span>
                <div>
                  <div className="text-sm font-semibold text-neutral-dark-gray">
                    {user.name}
                  </div>
                  <div className="text-xs text-neutral-medium-gray">
                    {user.role}
                  </div>
                </div>
              </div>

              <button
                onClick={onLogout}
                className="bg-gray-100 hover:bg-gray-200 text-neutral-medium-gray hover:text-primary-red transition-colors px-4 py-2 rounded-lg font-medium"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>

          {/* Mobile Progress */}
          <div className="lg:hidden mt-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-neutral-medium-gray font-medium">
                Progreso del Curso
              </span>
              <span className="text-xs font-bold text-primary-red">
                {progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 lg:mb-12">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
                ¡Bienvenido/a, {user.name.split(" ")[0]}! 👋
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6">
                Continúa tu capacitación profesional en primeros auxilios
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold mb-2">
                  {stats.completed}/{stats.total}
                </div>
                <div className="text-sm lg:text-base text-white/80">
                  Módulos Completados
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold mb-2">
                  {stats.hours}h
                </div>
                <div className="text-sm lg:text-base text-white/80">
                  Horas de Contenido
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold mb-2">
                  {progress}%
                </div>
                <div className="text-sm lg:text-base text-white/80">
                  Progreso Total
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 lg:p-6 text-center">
                <div className="text-2xl lg:text-3xl font-bold mb-2">
                  {stats.certificates}
                </div>
                <div className="text-sm lg:text-base text-white/80">
                  Certificados
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Filters */}
            <div className="mb-8 lg:mb-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 lg:gap-8">
                <div>
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-neutral-dark-gray mb-2">
                    Videos de Capacitación
                  </h2>
                  <p className="text-neutral-medium-gray text-sm lg:text-base">
                    {filteredVideos.length} de {videos.length} módulos
                    disponibles
                  </p>
                </div>

                {/* Filter Controls */}
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                  {/* Category Filter */}
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-neutral-dark-gray focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Level Filter */}
                  <div className="relative">
                    <select
                      value={activeFilter}
                      onChange={(e) => setActiveFilter(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-neutral-dark-gray focus:outline-none focus:ring-2 focus:ring-primary-red focus:border-transparent"
                    >
                      {levels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              {filteredVideos.map((video) => {
                const isCompleted = completedVideos.includes(video.id);

                return (
                  <div
                    key={video.id}
                    className={`video-card bg-white rounded-xl shadow-lg overflow-hidden relative transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer ${
                      isCompleted ? "ring-2 ring-status-success-green" : ""
                    }`}
                    onClick={() => setSelectedVideo(video)}
                  >
                    {/* Thumbnail */}
                    <div className="relative bg-gradient-primary h-40 sm:h-48 flex items-center justify-center group">
                      <video.thumbnail className="text-white" size={48} />

                      {/* Play Overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center">
                          <Play className="text-primary-red ml-1" size={24} />
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 text-primary-red px-2 py-1 rounded text-xs font-semibold">
                          {video.module}
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            video.level === "Básico"
                              ? "bg-status-success-green text-white"
                              : video.level === "Intermedio"
                              ? "bg-status-warning-orange text-white"
                              : "bg-primary-red text-white"
                          }`}
                        >
                          {video.level}
                        </span>
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-3 right-3">
                        <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                          {video.duration}
                        </span>
                      </div>

                      {isCompleted && (
                        <div className="absolute bottom-3 left-3">
                          <div className="w-8 h-8 bg-status-success-green rounded-full flex items-center justify-center">
                            <CheckCircle className="text-white" size={16} />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 lg:p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-neutral-medium-gray bg-neutral-light-gray px-2 py-1 rounded-full font-medium">
                          {video.category}
                        </span>
                        <span className="text-xs text-neutral-medium-gray flex items-center space-x-1">
                          <Eye size={12} />
                          <span>{video.views}</span>
                        </span>
                      </div>

                      <h3 className="text-base lg:text-lg font-semibold text-neutral-dark-gray mb-2 line-clamp-2">
                        {video.title}
                      </h3>

                      <p className="text-neutral-medium-gray text-xs lg:text-sm mb-4 line-clamp-3">
                        {video.description}
                      </p>

                      <div className="flex items-center justify-between text-xs lg:text-sm">
                        <span className="text-neutral-medium-gray font-medium">
                          {video.instructor}
                        </span>
                        <div className="flex items-center space-x-2">
                          {video.quiz && (
                            <FileText
                              className="text-accent-blue"
                              size={14}
                              title="Incluye evaluación"
                            />
                          )}
                          <span
                            className="text-neutral-medium-gray flex items-center space-x-1"
                            title="Recursos descargables"
                          >
                            <Paperclip size={12} />
                            <span>{video.resources}</span>
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <button className="w-full text-primary-red font-semibold text-sm hover:text-primary-red-secondary transition-colors">
                          {isCompleted ? "Ver de nuevo →" : "Comenzar módulo →"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 lg:p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl">
              <div className="flex-1">
                <h3 className="text-lg lg:text-xl font-bold text-neutral-dark-gray pr-4">
                  {selectedVideo.title}
                </h3>
                <p className="text-neutral-medium-gray text-sm">
                  {selectedVideo.module} • {selectedVideo.duration} •{" "}
                  {selectedVideo.instructor}
                </p>
              </div>
              <button
                onClick={closeVideoModal}
                className="text-neutral-medium-gray hover:text-neutral-dark-gray text-2xl lg:text-3xl font-light p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 lg:p-6">
              {/* Video Player Simulation */}
              <div className="bg-gradient-primary rounded-lg h-64 sm:h-80 lg:h-96 flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="text-center text-white z-10">
                  <div className="mb-4">
                    <selectedVideo.thumbnail className="text-white" size={64} />
                  </div>
                  <h4 className="text-xl lg:text-2xl font-bold mb-2">
                    Simulación de Video
                  </h4>
                  <p className="text-white/90 mb-4 max-w-md mx-auto">
                    {selectedVideo.description}
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm lg:text-base">
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {selectedVideo.duration}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {selectedVideo.level}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full">
                      {selectedVideo.category}
                    </span>
                  </div>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                    <Play className="text-white ml-1" size={32} />
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <h4 className="text-lg lg:text-xl font-bold text-neutral-dark-gray mb-3">
                    Descripción del Módulo
                  </h4>
                  <p className="text-neutral-medium-gray mb-6">
                    {selectedVideo.description}
                  </p>

                  <div className="bg-neutral-light-gray rounded-lg p-4 lg:p-6 mb-6">
                    <h5 className="font-semibold text-neutral-dark-gray mb-3">
                      Contenido del módulo:
                    </h5>
                    <ul className="text-sm text-neutral-medium-gray space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary-red mr-2">•</span>
                        <span>Conceptos teóricos fundamentales</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-red mr-2">•</span>
                        <span>Demostración práctica paso a paso</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-red mr-2">•</span>
                        <span>
                          Casos de estudio reales en entornos escolares
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-red mr-2">•</span>
                        <span>Ejercicios de práctica y evaluación</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-red mr-2">•</span>
                        <span>
                          Recursos descargables ({selectedVideo.resources}{" "}
                          archivos)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-gray-50 rounded-lg p-4 lg:p-6 mb-6">
                    <h5 className="font-semibold text-neutral-dark-gray mb-4">
                      Detalles del Curso
                    </h5>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-neutral-medium-gray">
                          Instructor:
                        </span>
                        <span className="text-neutral-dark-gray font-medium">
                          {selectedVideo.instructor}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-medium-gray">
                          Duración:
                        </span>
                        <span className="text-neutral-dark-gray font-medium">
                          {selectedVideo.duration}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-medium-gray">Nivel:</span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-semibold ${
                            selectedVideo.level === "Básico"
                              ? "bg-status-success-green text-white"
                              : selectedVideo.level === "Intermedio"
                              ? "bg-status-warning-orange text-white"
                              : "bg-primary-red text-white"
                          }`}
                        >
                          {selectedVideo.level}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-medium-gray">
                          Categoría:
                        </span>
                        <span className="text-neutral-dark-gray font-medium">
                          {selectedVideo.category}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-medium-gray">
                          Vistas:
                        </span>
                        <span className="text-neutral-dark-gray font-medium">
                          {selectedVideo.views}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleVideoComplete(selectedVideo.id)}
                    className="w-full bg-status-success-green hover:bg-status-success-green/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors mb-4 flex items-center justify-center space-x-2"
                  >
                    <CheckCircle size={20} />
                    <span>Marcar como Completado</span>
                  </button>

                  {selectedVideo.quiz && (
                    <button className="w-full bg-accent-blue hover:bg-accent-blue/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                      <FileText size={20} />
                      <span>Realizar Evaluación</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Certification Achievement */}
      {progress === 100 && (
        <section className="py-12 lg:py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Award className="text-yellow-400 mx-auto" size={80} />
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
                ¡Felicitaciones!
              </h2>
              <p className="text-lg lg:text-xl xl:text-2xl text-white/90 mb-8">
                Has completado exitosamente todos los módulos del curso de
                Primeros Auxilios para Docentes
              </p>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 lg:p-8 mb-8 max-w-2xl mx-auto">
                <h3 className="text-xl lg:text-2xl font-bold mb-4">
                  Certificado de Finalización
                </h3>
                <p className="text-white/90 mb-4">
                  <strong>{user.name}</strong> ha completado satisfactoriamente
                  el programa de capacitación en Primeros Auxilios para Docentes
                  de la Cruz Roja Argentina.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm lg:text-base text-white/80">
                  <div>Fecha: {new Date().toLocaleDateString("es-AR")}</div>
                  <div>Horas: {stats.hours}h</div>
                  <div>Módulos: {videos.length}</div>
                  <div>Calificación: Aprobado</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-primary-red px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 flex items-center space-x-2">
                  <Download size={20} />
                  <span>Descargar Certificado</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-red transition-all duration-200 flex items-center space-x-2">
                  <Mail size={20} />
                  <span>Enviar por Email</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default CampusPage;
