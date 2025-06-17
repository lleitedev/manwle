import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Trophy, BookOpen, Star } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      title: "Hackathon ACIPG 2024",
      subtitle: "🏆 3º Lugar Nacional",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
      description: "MVP PG Coin: Sistema completo de moeda digital para economia local desenvolvido em 72h intensas",
      type: "Premiação",
      metrics: { teams: "50+", hours: "72h", prize: "Top 3" },
      impact: "Solução inovadora reconhecida entre dezenas de equipes nacionais",
      skills: ["JavaScript", "Node.js", "MongoDB", "Blockchain Concepts"],
    },
    {
      title: "Liderança em Tecnologia",
      subtitle: "LIONS DEV - Certificação Avançada",
      icon: <Star className="w-8 h-8 text-purple-400" />,
      description: "Programa intensivo de 420h focado em liderança técnica, gestão de equipes e estratégia tecnológica",
      type: "Certificação",
      metrics: { hours: "420h", modules: "12", completion: "100%" },
      impact: "Capacitação completa em soft skills e liderança para tech leads",
      skills: ["Team Leadership", "Tech Strategy", "Project Management", "Communication"],
    },
    {
      title: "Trilha Banco de Dados",
      subtitle: "Fundação Bradesco - Especialização",
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      description: "Curso avançado de 30h em modelagem, otimização e administração de bancos de dados relacionais",
      type: "Curso",
      metrics: { hours: "30h", grade: "A+", year: "2025" },
      impact: "Expertise em design e otimização de sistemas de dados escaláveis",
      skills: ["SQL Advanced", "Database Design", "Performance Tuning", "Data Modeling"],
    },
    {
      title: "Lógica de Programação",
      subtitle: "Fundação Bradesco - Fundamentos",
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
      description: "Base sólida em algoritmos, estruturas de dados e paradigmas de programação",
      type: "Curso",
      metrics: { hours: "6h", projects: "5+", completion: "100%" },
      impact: "Fundação essencial para desenvolvimento de soluções eficientes",
      skills: ["Algorithms", "Data Structures", "Problem Solving", "Code Logic"],
    },
    {
      title: "JavaScript Avançado",
      subtitle: "Alura - Programação Web",
      icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
      description: "Domínio completo de JavaScript moderno, ES6+ e desenvolvimento web interativo",
      type: "Curso",
      metrics: { hours: "6h", projects: "3", certification: "✓" },
      impact: "Capacidade de criar aplicações web dinâmicas e responsivas",
      skills: ["ES6+", "DOM Manipulation", "Async Programming", "Web APIs"],
    },
    {
      title: "Git & GitHub + Python Data",
      subtitle: "DIO - Desenvolvimento Moderno",
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      description: "Versionamento profissional + Engenharia de Dados com Python para pipelines escaláveis",
      type: "Certificação",
      metrics: { courses: "2", hours: "3h", repos: "10+" },
      impact: "Workflow profissional e expertise em engenharia de dados",
      skills: ["Git Flow", "GitHub Actions", "Python Data", "Version Control"],
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="glass-card p-8 rounded-2xl border border-cyan-400/30 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Certificações e Premiações
              </h2>
              <p className="text-lg text-slate-300 font-mono">
                Reconhecimentos e formações que validam minha expertise
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="glass-card border-cyan-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 hover:scale-105 transition-all duration-300 group"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform">{cert.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-slate-200 text-sm">{cert.title}</h3>
                        <Badge
                          variant="outline"
                          className="text-xs border-cyan-400/30 text-cyan-400 bg-cyan-400/10 font-mono"
                        >
                          {cert.type}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-cyan-400 mb-3 font-mono">{cert.subtitle}</p>
                      <p className="text-xs text-slate-300 leading-relaxed mb-3">{cert.description}</p>

                      {/* Impact Statement */}
                      <div className="bg-slate-900/50 p-2 rounded border border-green-400/20 mb-3">
                        <p className="text-xs text-green-400 font-medium">💡 {cert.impact}</p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {Object.entries(cert.metrics).map(([key, value]) => (
                          <div key={key} className="text-center bg-slate-800/50 p-1 rounded">
                            <div className="text-xs font-bold text-cyan-400 font-mono">{value}</div>
                            <div className="text-xs text-slate-500 uppercase">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            className="text-xs bg-blue-400/20 text-blue-400 border-blue-400/30 font-mono"
                          >
                            {skill}
                          </Badge>
                        ))}
                        {cert.skills.length > 3 && (
                          <Badge className="text-xs bg-slate-400/20 text-slate-400 border-slate-400/30 font-mono">
                            +{cert.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Destaque especial para o Hackathon */}
          <div className="mt-12">
            <Card className="glass-card border-yellow-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 relative overflow-hidden">
              <CardContent className="pt-6">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>

                <div className="text-center relative z-10">
                  <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-2xl font-bold mb-2 text-yellow-400 font-mono">
                    🏆 HACKATHON ACIPG 2024 - TOP 3 NACIONAL
                  </h3>
                  <p className="text-slate-300 mb-4 max-w-2xl mx-auto">
                    Entre mais de 50 equipes de todo o país, nossa solução PG Coin conquistou o 3º lugar com um MVP
                    completo de moeda digital para economia local, desenvolvido em apenas 72 horas intensas de
                    programação.
                  </p>

                  {/* Achievement metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto">
                    <div className="bg-yellow-400/20 p-3 rounded border border-yellow-400/30">
                      <div className="text-xl font-bold text-yellow-400 font-mono">50+</div>
                      <div className="text-xs text-yellow-300">Equipes</div>
                    </div>
                    <div className="bg-yellow-400/20 p-3 rounded border border-yellow-400/30">
                      <div className="text-xl font-bold text-yellow-400 font-mono">72h</div>
                      <div className="text-xs text-yellow-300">Intensas</div>
                    </div>
                    <div className="bg-yellow-400/20 p-3 rounded border border-yellow-400/30">
                      <div className="text-xl font-bold text-yellow-400 font-mono">3º</div>
                      <div className="text-xs text-yellow-300">Lugar</div>
                    </div>
                  </div>

                  <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 hover:bg-yellow-400/30 font-mono text-sm px-4 py-2">
                    🏆 PREMIAÇÃO NACIONAL OFICIAL
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
