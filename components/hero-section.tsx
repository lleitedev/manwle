"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown, Code, Database, Terminal } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [dots, setDots] = useState<Array<{
    left: string
    top: string
    animationDelay: string
    animationDuration: string
  }> | null>(null)

  useEffect(() => {
    const generated = Array.from({ length: 100 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    }))
    setDots(generated)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("dashboard")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>
      <div className="absolute inset-0">
        {dots && dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-cyan-400 rounded-full animate-pulse"
            style={dot}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-cyan-400/20"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Terminal-style Header */}
          <div className="glass-card p-8 rounded-2xl mb-8 border border-cyan-400/30 relative overflow-hidden">
            {/* Sophisticated Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400 to-pink-600 rounded-full blur-3xl"></div>
            </div>

            {/* Enhanced Dashboard Background */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              {/* Floating Dashboard Cards */}
              <div className="absolute top-8 right-8 w-32 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-lg border border-cyan-400/40 backdrop-blur-sm">
                <div className="p-2">
                  <div className="text-xs text-cyan-300 font-mono mb-1">PROJECTS</div>
                  <div className="text-lg font-bold text-cyan-400 font-mono">12+</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute top-20 left-8 w-28 h-16 bg-gradient-to-br from-green-400/30 to-emerald-600/30 rounded-lg border border-green-400/40 backdrop-blur-sm">
                <div className="p-2">
                  <div className="text-xs text-green-300 font-mono mb-1">SKILLS</div>
                  <div className="text-sm font-bold text-green-400 font-mono">R • Python</div>
                </div>
              </div>

              <div className="absolute bottom-20 right-12 w-36 h-24 bg-gradient-to-br from-purple-400/30 to-pink-600/30 rounded-lg border border-purple-400/40 backdrop-blur-sm">
                <div className="p-2">
                  <div className="text-xs text-purple-300 font-mono mb-1">EXPERIENCE</div>
                  <div className="text-lg font-bold text-purple-400 font-mono">1.5y</div>
                  <div className="text-xs text-purple-300 font-mono">CHURN ANALYSIS</div>
                </div>
              </div>

              <div className="absolute bottom-8 left-12 w-24 h-20 bg-gradient-to-br from-yellow-400/30 to-orange-600/30 rounded-lg border border-yellow-400/40 backdrop-blur-sm">
                <div className="p-2">
                  <div className="text-xs text-yellow-300 font-mono mb-1">RANK</div>
                  <div className="text-lg font-bold text-yellow-400 font-mono">3º</div>
                  <div className="text-xs text-yellow-300 font-mono">HACKATHON</div>
                </div>
              </div>

              {/* Animated Progress Bars */}
              <div className="absolute top-1/2 left-4 w-20 space-y-2 transform -translate-y-1/2">
                {[
                  { label: "R", value: 85, color: "bg-blue-400" },
                  { label: "Python", value: 78, color: "bg-green-400" },
                  { label: "SQL", value: 72, color: "bg-purple-400" },
                ].map((skill, i) => (
                  <div key={i} className="bg-slate-800/50 rounded p-1">
                    <div className="text-xs text-slate-300 font-mono mb-1">{skill.label}</div>
                    <div className="w-full bg-slate-700 rounded-full h-1">
                      <div
                        className={`h-1 rounded-full ${skill.color} animate-pulse`}
                        style={{
                          width: `${skill.value}%`,
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Chart Elements */}
              <div className="absolute top-1/3 right-4 w-24 h-16">
                <svg className="w-full h-full" viewBox="0 0 100 60">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M10,50 Q30,20 50,30 T90,15"
                    stroke="url(#chartGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  {[10, 30, 50, 70, 90].map((x, i) => (
                    <circle
                      key={i}
                      cx={x}
                      cy={[50, 20, 30, 25, 15][i]}
                      r="2"
                      fill="#06b6d4"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </svg>
              </div>

              {/* Data Stream Lines (Enhanced) */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                  style={{
                    top: `${15 + i * 12}%`,
                    left: "-100%",
                    right: "-100%",
                    animation: `dataStream ${4 + i * 0.7}s linear infinite`,
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}

              {/* Floating Code Snippets */}
              <div className="absolute bottom-1/3 left-1/4 bg-slate-900/60 rounded border border-cyan-400/30 p-2 font-mono text-xs text-cyan-400">
                <div>library(dplyr)</div>
                <div className="text-green-400">churn_analysis()</div>
              </div>

              <div className="absolute top-1/4 right-1/3 bg-slate-900/60 rounded border border-purple-400/30 p-2 font-mono text-xs text-purple-400">
                <div>import pandas as pd</div>
                <div className="text-yellow-400">df.analyze()</div>
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6 text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span className="font-mono text-sm">emanuele@ufpr:~$</span>
                <span className="animate-pulse">_</span>
              </div>

              {/* Avatar futurístico */}
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center border-2 border-cyan-400/30">
                    <img src="/manuicon.jpeg" alt="Avatar" className="w-full h-full rounded-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Nome com efeito neon */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Emanuele Silveira
              </h1>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-cyan-400/20 mb-8">
                <p className="text-xl md:text-2xl text-cyan-300 mb-4 font-medium">
                  Estudante de <span className="text-cyan-400 font-bold">Estatística e Ciência de Dados</span> (UFPR)
                </p>

                <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Experiência profissional em <span className="text-green-400 font-semibold">análise de churn</span> e
                  <span className="text-purple-400 font-semibold"> desenvolvimento backend</span>. Transformando dados
                  em insights para resolver problemas de negócio complexos.
                </p>
              </div>

              {/* Enhanced Status indicators with SQL commands */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-800/30 p-4 rounded-lg border border-green-400/30">
                  <div className="flex items-center gap-2 text-green-400 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-mono text-xs">SELECT status FROM developer;</span>
                  </div>
                  <p className="text-green-400 font-bold font-mono">ATIVO</p>
                  <p className="text-xs text-green-300 font-mono mt-1">-- Available for opportunities</p>
                </div>

                <div className="bg-slate-800/30 p-4 rounded-lg border border-cyan-400/30">
                  <div className="flex items-center gap-2 text-cyan-400 mb-2">
                    <Database className="w-4 h-4" />
                    <span className="font-mono text-xs">SELECT skills WHERE primary = 1;</span>
                  </div>
                  <p className="text-cyan-400 font-bold font-mono">PYTHON • SQL</p>
                  <p className="text-xs text-cyan-300 font-mono mt-1">-- Core expertise focus</p>
                </div>

                <div className="bg-slate-800/30 p-4 rounded-lg border border-purple-400/30">
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <Code className="w-4 h-4" />
                    <span className="font-mono text-xs">SELECT * FROM experience;</span>
                  </div>
                  <p className="text-purple-400 font-bold font-mono">DATA SCIENCE</p>
                  <p className="text-xs text-purple-300 font-mono mt-1">-- R • Statistics • ML</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm font-mono">
            <div className="flex items-center gap-2 text-cyan-400 bg-slate-800/30 px-3 py-2 rounded border border-cyan-400/30">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              Curitiba, PR
            </div>
            <div className="flex items-center gap-2 text-green-400 bg-slate-800/30 px-3 py-2 rounded border border-green-400/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              (44) 99712-7533
            </div>
            <div className="flex items-center gap-2 text-purple-400 bg-slate-800/30 px-3 py-2 rounded border border-purple-400/30">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              emanueledeoliveirasilveira@gmail.com
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/50"
              asChild
            >
              <a href="https://github.com/mwnule" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 hover:text-purple-300 bg-slate-800/30"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/emanuele-oliveira-silveira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-green-400/50 text-green-400 hover:bg-green-400/10 hover:text-green-300 bg-slate-800/30"
            >
              <Mail className="w-5 h-5" />
              Contato
            </Button>
          </div>

          {/* Scroll Indicator */}
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToAbout}
            className="animate-bounce text-cyan-400 hover:text-cyan-300"
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
