"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Users, GraduationCap, TrendingUp, Award, BarChart3, Activity, Target, Zap } from "lucide-react"

export function DashboardSection() {
  // Dados estáticos da UFPR e do progresso acadêmico
  const ufprStats = {
    totalStudents: 31847,
    dataScientists: 156,
    professors: 2834,
    courses: 142,
  }

  const academicProgress = {
    cra: 8.7,
    completedCredits: 45,
    totalCredits: 240,
    currentSemester: 2,
    disciplines: [
      { name: "Estatística Básica", grade: null, status: "in-progress" },
      { name: "Estatística e Sociedade", grade: null, status: "in-progress" },
      { name: "Pré-Cálculo", grade: null, status: "in-progress" },
      { name: "Fundamentos de Programação", grade: null, status: "in-progress" },
    ],
  }

  const AdvancedChart = ({
    type,
    data,
    color,
    title,
  }: { type: string; data: number[]; color: string; title: string }) => {
    if (type === "line") {
      return (
        <div className="relative h-32 w-full bg-slate-800/30 rounded-lg p-4 border border-cyan-400/20">
          <div className="text-xs text-slate-400 mb-2 font-mono">{title}</div>
          <svg className="w-full h-20" viewBox="0 0 300 60">
            <defs>
              <linearGradient id={`gradient-${color.replace("#", "")}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={color} stopOpacity="0.8" />
                <stop offset="100%" stopColor={color} stopOpacity="0.2" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Grid lines */}
            {[...Array(6)].map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={i * 10}
                x2="300"
                y2={i * 10}
                stroke="rgba(59, 130, 246, 0.1)"
                strokeWidth="0.5"
              />
            ))}

            {/* Data line */}
            <path
              d={`M20,${50 - data[0]} ${data.map((d, i) => `L${20 + i * 40},${50 - d}`).join(" ")}`}
              stroke={color}
              strokeWidth="2"
              fill="none"
              filter="url(#glow)"
              className="animate-pulse"
            />

            {/* Area fill */}
            <path
              d={`M20,50 ${data.map((d, i) => `L${20 + i * 40},${50 - d}`).join(" ")} L280,50 Z`}
              fill={`url(#gradient-${color.replace("#", "")})`}
              opacity="0.3"
            />

            {/* Data points */}
            {data.map((d, i) => (
              <circle
                key={i}
                cx={20 + i * 40}
                cy={50 - d}
                r="3"
                fill={color}
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </svg>
        </div>
      )
    }

    if (type === "bar") {
      return (
        <div className="relative h-32 w-full bg-slate-800/30 rounded-lg p-4 border border-purple-400/20">
          <div className="text-xs text-slate-400 mb-2 font-mono">{title}</div>
          <div className="flex items-end justify-between h-20 px-2">
            {data.map((value, i) => (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="rounded-t-sm animate-pulse relative"
                  style={{
                    width: "16px",
                    height: `${value}%`,
                    background: `linear-gradient(to top, ${color}, ${color}80)`,
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: `0 0 10px ${color}40`,
                  }}
                />
                <div className="text-xs text-slate-500 mt-1 font-mono">{i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div className="relative h-32 w-full bg-slate-800/30 rounded-lg p-4 border border-green-400/20">
        <div className="text-xs text-slate-400 mb-2 font-mono">{title}</div>
        <div className="relative h-20 w-20 mx-auto">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="30" stroke="rgba(30, 41, 59, 0.3)" strokeWidth="8" fill="none" />
            <circle
              cx="40"
              cy="40"
              r="30"
              stroke={color}
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${(data[0] / 100) * 188.4} 188.4`}
              className="animate-pulse"
              style={{ filter: `drop-shadow(0 0 6px ${color})` }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold font-mono" style={{ color }}>
              {data[0]}%
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="dashboard" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="glass-card p-8 rounded-2xl border border-cyan-400/30 mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dashboard UFPR
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Dados em tempo real da minha jornada acadêmica e estatísticas da universidade
              </p>
              <div className="flex justify-center mt-6">
                <div className="flex gap-1">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-8 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* UFPR Total Students */}
            <Card className="metric-card animate-float-dashboard border-cyan-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <Users className="w-8 h-8 text-cyan-400" />
                  <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30 font-mono">UFPR</Badge>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">
                  {ufprStats.totalStudents.toLocaleString()}
                </div>
                <p className="text-sm text-slate-400 mb-4">Total de Estudantes</p>
                <AdvancedChart type="line" data={[25, 30, 28, 35, 32, 38, 42]} color="#00bfff" title="CRESCIMENTO" />
              </CardContent>
            </Card>

            {/* Data Science Students */}
            <Card
              className="metric-card animate-float-dashboard border-purple-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90"
              style={{ animationDelay: "0.5s" }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                  <Badge className="bg-purple-400/20 text-purple-400 border-purple-400/30 font-mono">CURSO</Badge>
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2 font-mono">{ufprStats.dataScientists}</div>
                <p className="text-sm text-slate-400 mb-4">Ciência de Dados</p>
                <AdvancedChart type="bar" data={[60, 45, 80, 35, 90, 55]} color="#a855f7" title="DISTRIBUIÇÃO" />
              </CardContent>
            </Card>

            {/* CRA */}
            <Card
              className="metric-card animate-float-dashboard border-green-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90"
              style={{ animationDelay: "1s" }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <Award className="w-8 h-8 text-green-400" />
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/30 font-mono">MEU</Badge>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2 font-mono">{academicProgress.cra}</div>
                <p className="text-sm text-slate-400 mb-4">CRA Atual</p>
                <AdvancedChart type="circle" data={[87]} color="#10b981" title="PERFORMANCE" />
              </CardContent>
            </Card>

            {/* Progress */}
            <Card
              className="metric-card animate-float-dashboard border-pink-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90"
              style={{ animationDelay: "1.5s" }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="w-8 h-8 text-pink-400" />
                  <Badge className="bg-pink-400/20 text-pink-400 border-pink-400/30 font-mono">PROGRESSO</Badge>
                </div>
                <div className="text-3xl font-bold text-pink-400 mb-2 font-mono">
                  {Math.round((academicProgress.completedCredits / academicProgress.totalCredits) * 100)}%
                </div>
                <p className="text-sm text-slate-400 mb-4">Curso Completo</p>
                <div className="bg-slate-800/30 rounded-lg p-3 border border-pink-400/20">
                  <Progress
                    value={(academicProgress.completedCredits / academicProgress.totalCredits) * 100}
                    className="h-3 bg-slate-700"
                  />
                  <div className="text-xs text-slate-400 mt-2 font-mono">
                    {academicProgress.completedCredits}/{academicProgress.totalCredits} créditos
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Detailed Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Academic Progress */}
            <Card className="glass-card border-cyan-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-cyan-400">Progresso Acadêmico</h3>
                  <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30 font-mono text-xs">LIVE</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-cyan-400/20">
                    <div className="text-sm text-slate-400 font-mono mb-1">CRÉDITOS</div>
                    <div className="text-2xl font-bold text-cyan-400 font-mono">
                      {academicProgress.completedCredits}/{academicProgress.totalCredits}
                    </div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-purple-400/20">
                    <div className="text-sm text-slate-400 font-mono mb-1">SEMESTRE</div>
                    <div className="text-2xl font-bold text-purple-400 font-mono">
                      {academicProgress.currentSemester}º
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <h4 className="text-sm font-semibold text-yellow-400 font-mono">DISCIPLINAS</h4>
                  </div>
                  <div className="space-y-3">
                    {academicProgress.disciplines.map((discipline, index) => (
                      <div
                        key={index}
                        className="bg-slate-800/30 p-3 rounded-lg border border-slate-600/30 hover:border-cyan-400/30 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-300 font-medium">{discipline.name}</span>
                          <div className="flex items-center gap-3">
                            {discipline.grade && (
                              <div className="bg-green-400/20 px-2 py-1 rounded border border-green-400/30">
                                <span className="text-sm font-mono text-green-400">{discipline.grade}</span>
                              </div>
                            )}
                            <Badge
                              variant="outline"
                              className={`text-xs font-mono ${
                                discipline.status === "completed"
                                  ? "border-green-400/50 text-green-400 bg-green-400/10"
                                  : discipline.status === "in-progress"
                                    ? "border-yellow-400/50 text-yellow-400 bg-yellow-400/10"
                                    : "border-slate-400/50 text-slate-400 bg-slate-400/10"
                              }`}
                            >
                              {discipline.status === "completed"
                                ? "CONCLUÍDA"
                                : discipline.status === "in-progress"
                                  ? "CURSANDO"
                                  : "PRÓXIMA"}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* University Stats */}
            <Card className="glass-card border-purple-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-purple-400">Estatísticas UFPR</h3>
                  <Badge className="bg-purple-400/20 text-purple-400 border-purple-400/30 font-mono text-xs">
                    REAL-TIME
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-cyan-400/20 text-center">
                    <div className="text-2xl font-bold text-cyan-400 font-mono mb-1">
                      {ufprStats.professors.toLocaleString()}
                    </div>
                    <div className="text-xs text-slate-400 font-mono">PROFESSORES</div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-lg border border-green-400/20 text-center">
                    <div className="text-2xl font-bold text-green-400 font-mono mb-1">{ufprStats.courses}</div>
                    <div className="text-xs text-slate-400 font-mono">CURSOS</div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-lg border border-pink-400/20 text-center">
                    <div className="text-2xl font-bold text-pink-400 font-mono mb-1">156</div>
                    <div className="text-xs text-slate-400 font-mono">COLEGAS</div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-lg border border-yellow-400/20 text-center">
                    <div className="text-2xl font-bold text-yellow-400 font-mono mb-1">2025</div>
                    <div className="text-xs text-slate-400 font-mono">INGRESSO</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-4 rounded-lg border border-blue-400/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-semibold text-blue-400 font-mono">PRÓXIMAS METAS</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-2 font-mono">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      Concluir Álgebra Linear com nota &gt; 8.5
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                      Iniciar projeto de pesquisa em 2025
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
                      Participar de competições de Data Science
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
