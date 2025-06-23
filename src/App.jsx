import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import LoginPage from "./components/LoginPage";
import CampusPage from "./components/CampusPage";

// Usuarios demo mockeados
export const demoUsers = [
  {
    id: 1,
    name: "María González",
    email: "maria.gonzalez@school.edu.ar",
    role: "Docente Nivel Primario",
    avatar: "👩‍🏫",
    school: "Escuela Primaria N° 15",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    email: "carlos.rodriguez@school.edu.ar",
    role: "Director de Secundaria",
    avatar: "👨‍💼",
    school: "Colegio San Martín",
  },
  {
    id: 3,
    name: "Ana López",
    email: "ana.lopez@school.edu.ar",
    role: "Profesora de Educación Física",
    avatar: "👩‍💻",
    school: "Instituto Tecnológico",
  },
  {
    id: 4,
    name: "Roberto Silva",
    email: "roberto.silva@school.edu.ar",
    role: "Coordinador Pedagógico",
    avatar: "👨‍🎓",
    school: "Escuela Técnica N° 8",
  },
];

function App() {
  const [currentView, setCurrentView] = useState("login"); // 'login', 'campus'
  const [user, setUser] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = (selectedUser) => {
    setUser(selectedUser);
    setCurrentView("campus");
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView("login");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-neutral-light-gray">
      {currentView === "login" && (
        <LoginPage demoUsers={demoUsers} onLogin={handleLogin} />
      )}

      {currentView === "campus" && (
        <CampusPage user={user} onLogout={handleLogout} />
      )}

      {/* Botón flotante para scroll */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fab"
          aria-label="Volver arriba"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
