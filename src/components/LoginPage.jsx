import { useState } from "react";
import {
  Heart,
  Star,
  Zap,
  Shield,
  Smartphone,
  Lock,
  Mail,
  Phone,
  MessageCircle,
  HelpCircle,
  Rocket,
  Construction,
  Check,
} from "lucide-react";

const LoginPage = ({ demoUsers, onLogin }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!selectedUser) return;

    setIsLoading(true);
    // Simular delay de login
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    onLogin(selectedUser);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Patrón de fondo animado */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Logo y título responsive */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full mb-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <img
              src="/logo-cruz-roja.png"
              alt="Cruz Roja Argentina"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
            />
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            Cruz Roja Argentina
          </h1>
          <p className="text-white/90 text-base sm:text-lg lg:text-xl">
            Campus Virtual de Capacitación
          </p>
          <div className="flex items-center justify-center space-x-6 mt-4 sm:mt-6 text-white/80">
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                5.000+
              </div>
              <div className="text-xs sm:text-sm">Docentes Capacitados</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <Star className="text-yellow-300 mx-auto mb-1" size={20} />
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                98%
              </div>
              <div className="text-xs sm:text-sm">Satisfacción</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                24/7
              </div>
              <div className="text-xs sm:text-sm">Acceso</div>
            </div>
          </div>
        </div>

        {/* Formulario de Login mejorado */}
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 hover:shadow-3xl transition-all duration-300">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-dark-gray mb-2">
              Iniciar Sesión
            </h2>
            <p className="text-neutral-medium-gray text-sm sm:text-base">
              Selecciona un usuario demo para continuar
            </p>
            <div className="flex items-center justify-center space-x-2 mt-4 text-xs sm:text-sm text-neutral-medium-gray">
              <div className="w-2 h-2 bg-status-success-green rounded-full"></div>
              <span>Demo disponible 24/7</span>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {demoUsers.map((user, index) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`group p-3 sm:p-4 lg:p-5 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${
                  selectedUser?.id === user.id
                    ? "border-primary-red bg-gradient-to-r from-primary-red/5 to-primary-red/10 shadow-lg"
                    : "border-gray-200 hover:border-primary-red/50 hover:bg-gray-50 hover:shadow-md"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="relative">
                    <div className="text-2xl sm:text-3xl lg:text-4xl group-hover:scale-110 transition-transform duration-200">
                      {user.avatar}
                    </div>
                    {selectedUser?.id === user.id && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-primary-red rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-dark-gray text-sm sm:text-base lg:text-lg group-hover:text-primary-red transition-colors">
                      {user.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-medium-gray font-medium">
                      {user.role}
                    </p>
                    <p className="text-xs text-neutral-medium-gray truncate">
                      {user.school}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex -space-x-1">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-status-success-green rounded-full border-2 border-white"></div>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-status-warning-orange rounded-full border-2 border-white"></div>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-accent-blue rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-xs text-neutral-medium-gray">
                        {Math.floor(Math.random() * 3 + 2)} cursos activos
                      </span>
                    </div>
                  </div>
                  <div
                    className={`transition-all duration-200 ${
                      selectedUser?.id === user.id
                        ? "text-primary-red text-xl"
                        : "text-gray-300 group-hover:text-primary-red/50"
                    }`}
                  >
                    →
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Botón de Login mejorado */}
          <button
            onClick={handleLogin}
            disabled={!selectedUser || isLoading}
            className={`w-full py-3 sm:py-4 lg:py-5 px-6 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 ${
              selectedUser && !isLoading
                ? "bg-gradient-primary text-white hover:shadow-xl hover:shadow-primary-red/25 hover:transform hover:-translate-y-1 active:scale-95"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-3">
                <div className="spinner w-5 h-5 sm:w-6 sm:h-6"></div>
                <span>Iniciando sesión...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <span>Iniciar Sesión</span>
                <Rocket size={18} />
              </div>
            )}
          </button>

          {/* Información adicional */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center space-x-4 text-xs sm:text-sm text-neutral-medium-gray">
            <div className="flex items-center space-x-1">
              <Lock className="text-status-success-green" size={14} />
              <span>Seguro</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-1">
              <Zap className="text-accent-blue" size={14} />
              <span>Rápido</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center space-x-1">
              <Smartphone className="text-status-warning-orange" size={14} />
              <span>Mobile</span>
            </div>
          </div>

          {/* Registro deshabilitado */}
          <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 sm:p-6">
              <div className="text-center mb-4">
                <Construction
                  className="text-status-warning-orange mx-auto"
                  size={32}
                />
                <h3 className="text-sm sm:text-base font-semibold text-neutral-dark-gray mt-2 mb-1">
                  Registro Próximamente
                </h3>
                <p className="text-xs sm:text-sm text-neutral-medium-gray">
                  Estamos trabajando en habilitar el registro de nuevos usuarios
                </p>
              </div>

              <button
                disabled
                className="w-full py-3 px-6 rounded-lg font-semibold bg-gray-200 text-gray-400 cursor-not-allowed text-sm sm:text-base"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Registrarse</span>
                  <span className="text-xs">(Próximamente)</span>
                </div>
              </button>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-medium-gray">
                <div className="flex items-center space-x-2">
                  <Check className="text-primary-red" size={14} />
                  <span>Certificación oficial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-primary-red" size={14} />
                  <span>Acceso completo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-primary-red" size={14} />
                  <span>Sin restricciones</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-primary-red" size={14} />
                  <span>Soporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer mejorado */}
        <div className="text-center mt-6 sm:mt-8 lg:mt-12 text-white/80">
          <div className="bg-white/10 backdrop-blur rounded-xl p-4 sm:p-6 mb-4">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-3">
              ¿Necesitas ayuda?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <a
                href="mailto:capacitacion@cruzroja.org.ar"
                className="flex items-center justify-center space-x-2 bg-white/10 rounded-lg py-2 px-3 hover:bg-white/20 transition-colors"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a
                href="tel:+541143628888"
                className="flex items-center justify-center space-x-2 bg-white/10 rounded-lg py-2 px-3 hover:bg-white/20 transition-colors"
              >
                <Phone size={16} />
                <span>Teléfono</span>
              </a>
              <a
                href="https://wa.me/5491143628888"
                className="flex items-center justify-center space-x-2 bg-white/10 rounded-lg py-2 px-3 hover:bg-white/20 transition-colors"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
              <a
                href="https://cruzroja.org.ar/faq"
                className="flex items-center justify-center space-x-2 bg-white/10 rounded-lg py-2 px-3 hover:bg-white/20 transition-colors"
              >
                <HelpCircle size={16} />
                <span>FAQ</span>
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/60">
            © 2024 Cruz Roja Argentina • Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
