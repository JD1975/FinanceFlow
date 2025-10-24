import { useState } from "react";

export default function ThemesInfo() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  // Colores según el modo
  const colors = {
    primary: isDark ? "#e91e63" : "#1e62e9",
    secondary: isDark ? "#e95e8d" : "#42a5f5",
    error: isDark ? "#e63946" : "#e63946",
    success: isDark ? "#00a86b" : "#00a86b",
    tertiary1: isDark ? "#ffc107" : "#ffc107",
    tertiary2: isDark ? "#1e62e9" : "#e91e63",
    tertiary3: isDark ? "#ba68c8" : "#ba68c8",
    tertiary4: isDark ? "#fa8072" : "#fa8072",
    nametertiary2: isDark ? "Blue" : "Pink",
  };

  return (
    <>
    <div className="min-h-screen bg-(--background) font-lato transition-colors duration-300">
      <div className="max-w-10/12 mx-auto p-4 md:p-8 lg:p-12">
        {/* Header con botón de dark mode */}
        <header className="flex gap-4 justify-between m-8 px-4 py-4 md:flex-row">
          <div className="lg: text-left">
            <h1 className="text-4xl md:text-5xl font-black text-(--primary) ">
              FinanceFlow
            </h1>
          </div>

          {/* Botón Dark Mode  */}
          <button
            onClick={toggleDarkMode}
            className="min-w-32 bg-(--base-1)  justify-center text-(--primary) rounded-lg font-bold hover:(--base-1)/90 hover:scale-105 transition-all duration-200 flex items-center shadow-lg"
            aria-label="Toggle dark mode"
          >
            <span>{isDark ? "Modo Claro" : "Modo Oscuro"}</span>
          </button>
        </header>

        {/* Grid de Colores */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="lg:text-5xl font-black mb-2 md:text-3xl ">
              Paleta de Colores
            </h2>
            <p className="text-(--muted-foreground) font-light text-lg">
              Sistema de colores adaptable a modo claro y oscuro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Primary */}
            <div className="bg-(--primary) text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
              <h3 className="font-bold text-xl mb-1">Primary</h3>
              <p className="font-light text-sm opacity-90">{colors.primary}</p>
            </div>

            {/* Secondary */}
            <div className="bg-(--secondary) text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
              <h3 className="font-bold text-xl mb-1">Secondary</h3>
              <p className="font-light text-sm opacity-90">
                {colors.secondary}
              </p>
            </div>

            {/* Error */}
            <div className="bg-(--error) text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
              <h3 className="font-bold text-xl mb-1">Error</h3>
              <p className="font-light text-sm opacity-90">{colors.error}</p>
            </div>

            {/* Success */}
            <div className="bg-(--success) text-white p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200">
              <h3 className="font-bold text-xl mb-1">Success</h3>
              <p className="font-light text-sm opacity-90">{colors.success}</p>
            </div>
          </div>

          {/* Colores Terciarios */}
          <p className="m-8 font-bold text-2xl text-center">
            Colores terciarios
          </p>
          <div className="lg:grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-(--tertiary-1) text-white p-6 rounded-lg text-center shadow">
              <p className="font-bold text-sm">Amber</p>
              <p className="font-light text-xs mt-1 opacity-80">
                {colors.tertiary1}
              </p>
            </div>
            <div className="bg-(--tertiary-2) text-white p-6 rounded-lg text-center shadow">
              <p className="font-bold text-sm">{colors.nametertiary2}</p>
              <p className="font-light text-xs mt-1 opacity-80">
                {colors.tertiary2}
              </p>
            </div>
            <div className="bg-(--tertiary-3) text-white p-6 rounded-lg text-center shadow">
              <p className="font-bold text-sm">Purple</p>
              <p className="font-light text-xs mt-1 opacity-80">
                {colors.tertiary3}
              </p>
            </div>
            <div className="bg-(--tertiary-4) text-white p-6 rounded-lg text-center shadow">
              <p className="font-bold text-sm">Salmon</p>
              <p className="font-light text-xs mt-1 opacity-80">
                {colors.tertiary4}
              </p>
            </div>
          </div>
        </section>

        {/* Font Weights */}
        <section className="lg: bg-(--card) text-(--card-foreground) rounded-xl shadow-lg p-6 text-center mb-16">
          <h2 className="text-3xl font-black mb-6">Tipografía Lato</h2>
          <div className="space-y-4">
            <div className="border-b border-border p-2 text-xl">
              <p className="p-4 font-thin">
                Thin 100 - The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="border-b border-border p-2 text-xl">
              <p className="p-4 font-light">
                Light 300 - The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="border-b border-border p-2 text-xl">
              <p className="p-4 font-normal">
                Regular 400 - The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="border-b border-border p-2 text-xl">
              <p className="p-4 font-bold">
                Bold 700 - The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="border-b border-border p-2 text-xl">
              <p className="p-4 font-black">
                Black 900 - The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>
        </section>

        {/* Responsive Demo */}
        <section className="mb-16">
          <div className="bg-(--card) rounded-xl shadow-xl overflow-hidden">
            <div className="bg-linear-to-br from-(--primary) to-(--secondary) p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-black mb-3">
                Diseño Responsivo
              </h2>
              <p className="text-sm md:text-base lg:text-lg font-light opacity-95">
                Este texto cambia de tamaño según el dispositivo
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-(--base-1) p-6 rounded-lg border-l-4 border-(--primary) hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📱</span>
                    <h3 className="font-bold text-lg text-(--foreground)">
                      Mobile
                    </h3>
                  </div>
                  <p className="text-(--muted-foreground) font-light text-sm">
                    0-767px
                  </p>
                </div>

                <div className="bg-(--base-1) p-6 rounded-lg border-l-4 border-(--secondary) hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">💻</span>
                    <h3 className="font-bold text-lg text-(--foreground)">
                      Tablet
                    </h3>
                  </div>
                  <p className="text-(--muted-foreground) font-light text-sm">
                    768px+
                  </p>
                </div>

                <div className="bg-(--base-1) p-6 rounded-lg border-l-4 border-(--success) hover:shadow-lg transition-shadow duration-200">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🖥️</span>
                    <h3 className="font-bold text-lg text-(--foreground)">
                      Laptop
                    </h3>
                  </div>
                  <p className="text-(--muted-foreground) font-light text-sm">
                    1024px+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground font-light py-8 text-2xl">
          <p>FinanceFlow © 2025 </p>
        </footer>
      </div>
    </div>
    </>
  );
}
