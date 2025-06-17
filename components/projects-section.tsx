"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, TrendingDown, Coins, Eye, Terminal, Database, Code2 } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "churnClientes",
      icon: <TrendingDown className="w-6 h-6" />,
      category: "Machine Learning",
      problem:
        "Identificar os fatores de cancelamento em uma empresa de telecom, aplicando conhecimentos da experiência profissional anterior",
      solution:
        "Realizei uma análise exploratória de dados completa para identificar padrões de churn, utilizando técnicas estatísticas avançadas e visualizações interativas",
      stack: ["R", "Tidyverse", "dplyr", "ggplot2", "Plotly", "DT"],
      insights: [
        "Identificação dos principais fatores de cancelamento",
        "Análise estatística detalhada com visualizações interativas",
        "Aplicação prática da experiência profissional em dados",
      ],
      metrics: { accuracy: "94%", insights: "5+", visualizations: "10+" },
      gradient: "from-red-500 via-pink-500 to-purple-600",
      chartType: "line",
      status: "COMPLETED",
    },
    {
      title: "PG Coin",
      icon: <Coins className="w-6 h-6" />,
      category: "Hackathon Winner",
      problem: "Desenvolver um sistema para fomentar a economia local por meio de uma moeda digital em um hackathon",
      solution:
        "Desenvolvemos em grupo um MVP funcional com sistema completo de moeda digital, incluindo transações, carteira e incentivos para comércio local",
      stack: ["JavaScript", "Node.js", "Express", "MongoDB", "JWT"],
      insights: [
        "3º lugar no Hackathon ACIPG entre dezenas de equipes",
        "MVP funcional desenvolvido em tempo limitado",
        "Sistema completo de economia digital local",
      ],
      metrics: { position: "3º", teams: "50+", hours: "72h" },
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      chartType: "bar",
      status: "AWARDED",
    },
    {
      title: "analiseVisualIris",
      icon: <Eye className="w-6 h-6" />,
      category: "Data Visualization",
      problem:
        "Explorar as relações entre características de diferentes espécies de flores com boas práticas de desenvolvimento",
      solution:
        "Desenvolvi um projeto estruturado de visualização com código organizado, ambientes virtuais e análise completa das relações entre variáveis",
      stack: ["Python", "Matplotlib", "NumPy", "Scikit-learn"],
      insights: [
        "Código estruturado com boas práticas de desenvolvimento",
        "Uso de ambientes virtuais e organização de pastas",
        "Visualizações claras das relações entre espécies",
      ],
      metrics: { species: "3", features: "4", plots: "6+" },
      gradient: "from-green-400 via-blue-500 to-purple-600",
      chartType: "scatter",
      status: "ACTIVE",
    },
  ]

  const AdvancedVisualization = ({ type, gradient, metrics }: { type: string; gradient: string; metrics: any }) => {
    if (type === "line") {
      return (
        <div className="relative h-40 w-full bg-slate-900/50 rounded-lg p-4 border border-cyan-400/20 overflow-hidden">
          {/* Background grid */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00bfff" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Data visualization */}
          <div className="relative z-10">
            <div className="text-xs text-cyan-400 mb-2 font-mono">CHURN ANALYSIS</div>
            <svg className="w-full h-24" viewBox="0 0 300 80">
              <defs>
                <linearGradient id="churnGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              <path
                d="M20,60 Q80,20 140,30 T260,15"
                stroke="url(#churnGradient)"
                strokeWidth="3"
                fill="none"
                filter="drop-shadow(0 0 6px #ef4444)"
                className="animate-pulse"
              />

              <path d="M20,70 Q80,20 140,30 T260,15 L260,70 Z" fill="url(#churnGradient)" opacity="0.2" />

              {[20, 80, 140, 200, 260].map((x, i) => (
                <circle
                  key={i}
                  cx={x}
                  cy={[60, 20, 30, 25, 15][i]}
                  r="4"
                  fill="#ef4444"
                  className="animate-pulse"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </svg>

            <div className="grid grid-cols-3 gap-2 mt-2">
              {Object.entries(metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-sm font-bold text-red-400 font-mono">{value as string}</div>
                  <div className="text-xs text-slate-500 uppercase">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    if (type === "bar") {
      return (
        <div className="relative h-40 w-full bg-slate-900/50 rounded-lg p-4 border border-yellow-400/20 overflow-hidden">
          <div className="text-xs text-yellow-400 mb-2 font-mono">TRANSACTION VOLUME</div>

          <div className="flex items-end justify-between h-24 px-2">
            {[65, 45, 80, 35, 90, 55, 75].map((height, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="rounded-t-sm relative"
                  style={{
                    width: "20px",
                    height: `${height}%`,
                    background: `linear-gradient(to top, #f59e0b, #fbbf24)`,
                    boxShadow: `0 0 10px #f59e0b40`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
                <div className="text-xs text-slate-500 mt-1 font-mono">{i + 1}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 mt-2">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-sm font-bold text-yellow-400 font-mono">{value as string}</div>
                <div className="text-xs text-slate-500 uppercase">{key}</div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className="relative h-40 w-full bg-slate-900/50 rounded-lg p-4 border border-green-400/20 overflow-hidden">
        <div className="text-xs text-green-400 mb-2 font-mono">SPECIES CLUSTERING</div>

        <div className="relative h-24 flex items-center justify-center">
          <div className="relative">
            {/* Main cluster */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-500 animate-pulse-neon"></div>

            {/* Satellite points */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping"
                style={{
                  left: `${32 + Math.cos((i * Math.PI) / 6) * 30}px`,
                  top: `${32 + Math.sin((i * Math.PI) / 6) * 30}px`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-2">
          {Object.entries(metrics).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-sm font-bold text-green-400 font-mono">{value as string}</div>
              <div className="text-xs text-slate-500 uppercase">{key}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="projetos" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="glass-card p-8 rounded-2xl border border-cyan-400/30 mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Projetos com storytelling
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Cada projeto conta uma história de como transformei problemas complexos em soluções práticas
              </p>
              <div className="flex justify-center mt-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm hover:scale-[1.02] transition-all duration-500"
                style={{
                  border: `1px solid ${index === 0 ? "#00bfff40" : index === 1 ? "#f59e0b40" : "#10b98140"}`,
                  boxShadow: `0 0 30px ${index === 0 ? "#00bfff20" : index === 1 ? "#f59e0b20" : "#10b98120"}`,
                }}
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Visualization Side */}
                  <div className="p-8 relative overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                            index === 0
                              ? "bg-cyan-400/20 border-cyan-400/30 text-cyan-400"
                              : index === 1
                                ? "bg-yellow-400/20 border-yellow-400/30 text-yellow-400"
                                : "bg-green-400/20 border-green-400/30 text-green-400"
                          }`}
                        >
                          {project.icon}
                        </div>
                        <div>
                          <Badge
                            className={`font-mono text-xs mb-2 ${
                              index === 0
                                ? "bg-cyan-400/20 text-cyan-400 border-cyan-400/30"
                                : index === 1
                                  ? "bg-yellow-400/20 text-yellow-400 border-yellow-400/30"
                                  : "bg-green-400/20 text-green-400 border-green-400/30"
                            }`}
                          >
                            {project.category}
                          </Badge>
                          <h3
                            className={`text-2xl font-bold font-mono ${
                              index === 0 ? "text-cyan-400" : index === 1 ? "text-yellow-400" : "text-green-400"
                            }`}
                          >
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <Badge
                        className={`font-mono text-xs ${
                          project.status === "COMPLETED"
                            ? "bg-green-400/20 text-green-400 border-green-400/30"
                            : project.status === "AWARDED"
                              ? "bg-yellow-400/20 text-yellow-400 border-yellow-400/30"
                              : "bg-blue-400/20 text-blue-400 border-blue-400/30"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>

                    {/* Visualization */}
                    <AdvancedVisualization
                      type={project.chartType}
                      gradient={project.gradient}
                      metrics={project.metrics}
                    />

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 bg-slate-800/30 border-l border-slate-700/50">
                    <div className="space-y-6">
                      {/* Problem */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Terminal className="w-4 h-4 text-red-400" />
                          <h4 className="font-bold text-red-400 text-sm tracking-wider font-mono">PROBLEMA</h4>
                        </div>
                        <div className="bg-slate-900/50 p-3 rounded border border-red-400/20">
                          <p className="text-slate-300 leading-relaxed text-sm">{project.problem}</p>
                        </div>
                      </div>

                      {/* Solution */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Code2 className="w-4 h-4 text-green-400" />
                          <h4 className="font-bold text-green-400 text-sm tracking-wider font-mono">SOLUÇÃO</h4>
                        </div>
                        <div className="bg-slate-900/50 p-3 rounded border border-green-400/20">
                          <p className="text-slate-300 leading-relaxed text-sm">{project.solution}</p>
                        </div>
                      </div>

                      {/* Stack */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Database className="w-4 h-4 text-blue-400" />
                          <h4 className="font-bold text-blue-400 text-sm tracking-wider font-mono">STACK TÉCNICA</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-blue-400/30 text-blue-400 hover:bg-blue-400/10 transition-colors font-mono text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Insights */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingDown className="w-4 h-4 text-purple-400" />
                          <h4 className="font-bold text-purple-400 text-sm tracking-wider font-mono">
                            INSIGHTS GERADOS
                          </h4>
                        </div>
                        <div className="bg-slate-900/50 p-3 rounded border border-purple-400/20">
                          <ul className="space-y-2">
                            {project.insights.map((insight, insightIndex) => (
                              <li key={insightIndex} className="flex items-start gap-3">
                                <div className="w-1 h-1 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-slate-300 text-sm leading-relaxed">{insight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                        <Button className="gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/50 font-mono">
                          <Github className="w-4 h-4" />
                          CÓDIGO
                        </Button>
                        <Button
                          variant="outline"
                          className="gap-2 border-purple-400/50 text-purple-400 hover:bg-purple-400/10 bg-slate-800/30 font-mono"
                        >
                          <ExternalLink className="w-4 h-4" />
                          DEMO
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="glass-card border-cyan-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
              <CardContent className="pt-8 pb-8">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400 font-mono">EXPLORAR MAIS PROJETOS</h3>
                  <p className="text-slate-300 mb-6 font-mono">
                    Acesse meu GitHub para descobrir mais soluções em ciência de dados e desenvolvimento backend
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/50 gap-2 font-mono"
                    asChild
                  >
                    <a href="https://github.com/mwnule" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" />
                      GITHUB.COM/MWNULE
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
