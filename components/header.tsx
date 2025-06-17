"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-cyan-400/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-cyan-400 font-mono">&lt;ES/&gt;</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-slate-300 hover:text-cyan-400 transition-colors font-mono text-sm"
            >
              ./inicio
            </button>
            <button
              onClick={() => scrollToSection("dashboard")}
              className="text-slate-300 hover:text-purple-400 transition-colors font-mono text-sm"
            >
              ./dashboard
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-slate-300 hover:text-green-400 transition-colors font-mono text-sm"
            >
              ./sobre
            </button>
            <button
              onClick={() => scrollToSection("projetos")}
              className="text-slate-300 hover:text-blue-400 transition-colors font-mono text-sm"
            >
              ./projetos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-slate-300 hover:text-pink-400 transition-colors font-mono text-sm"
            >
              ./contato
            </button>
            <Button
              size="sm"
              className="ml-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/50"
              asChild
            >
              <a href="/manucv.pdf" download="Curriculo-Cientista-Dados.pdf">
                <Download className="w-4 h-4 mr-2" />
                CV.pdf
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-cyan-400 hover:text-cyan-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-cyan-400/20 pt-4">
            <div className="flex flex-col space-y-3">
              {[
                { id: "inicio", label: "./inicio" },
                { id: "dashboard", label: "./dashboard" },
                { id: "sobre", label: "./sobre" },
                { id: "projetos", label: "./projetos" },
                { id: "contato", label: "./contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-slate-300 hover:text-cyan-400 transition-colors font-mono text-sm"
                >
                  {item.label}
                </button>
              ))}
              <Button
                size="sm"
                className="w-fit bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/50"
                asChild
              >
                <a href="/manucv.pdf" download="Curriculo-Cientista-Dados.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  CV.pdf
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
