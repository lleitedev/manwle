import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
export function SkillsSection() {
  const skillCategories = [
    {
      title: "Linguagens",
      skills: [
        { name: "Python", color: "bg-cyan-400/20 text-cyan-400 border-cyan-400/30" },
        { name: "R", color: "bg-blue-400/20 text-blue-400 border-blue-400/30" },
        { name: "SQL", color: "bg-purple-400/20 text-purple-400 border-purple-400/30" },
        { name: "JavaScript", color: "bg-yellow-400/20 text-yellow-400 border-yellow-400/30" },
      ],
    },
    {
      title: "Bibliotecas & Frameworks",
      skills: [
        { name: "Scikit-learn", color: "bg-green-400/20 text-green-400 border-green-400/30" },
        { name: "Pandas", color: "bg-cyan-400/20 text-cyan-400 border-cyan-400/30" },
        { name: "ggplot2", color: "bg-purple-400/20 text-purple-400 border-purple-400/30" },
        { name: "TensorFlow", color: "bg-pink-400/20 text-pink-400 border-pink-400/30" },
        { name: "dplyr", color: "bg-blue-400/20 text-blue-400 border-blue-400/30" },
      ],
    },
    {
      title: "Ferramentas & Tecnologias",
      skills: [
        { name: "Git", color: "bg-red-400/20 text-red-400 border-red-400/30" },
        { name: "MongoDB", color: "bg-green-400/20 text-green-400 border-green-400/30" },
        { name: "JWT", color: "bg-purple-400/20 text-purple-400 border-purple-400/30" },
        { name: "Docker", color: "bg-blue-400/20 text-blue-400 border-blue-400/30" },
        { name: "AWS", color: "bg-orange-400/20 text-orange-400 border-orange-400/30" },
      ],
    },
    {
      title: "Especialidades",
      skills: [
        { name: "REST APIs", color: "bg-green-400/20 text-green-400 border-green-400/30" },
        { name: "Node.js", color: "bg-green-400/20 text-green-400 border-green-400/30" },
        { name: "Análise de Churn", color: "bg-red-400/20 text-red-400 border-red-400/30" },
        { name: "Machine Learning", color: "bg-purple-400/20 text-purple-400 border-purple-400/30" },
        { name: "Data Visualization", color: "bg-cyan-400/20 text-cyan-400 border-cyan-400/30" },
      ],
    },
  ]

  return (
    <section id="habilidades" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="glass-card p-8 rounded-2xl border border-cyan-400/30 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Habilidades Técnicas
              </h2>
              <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-sm">
                <span>skills --list --all</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="glass-card border-cyan-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 hover:scale-105 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-cyan-400 font-mono">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        className={`${skill.color} hover:opacity-80 transition-opacity font-mono text-xs border`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="mt-12 text-center">
            <div className="glass-card p-6 rounded-xl border border-purple-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
              <h3 className="text-xl font-semibold mb-6 text-purple-400 font-mono">PRINCIPAIS TECNOLOGIAS</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <img
                  src="https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white&style=for-the-badge"
                  alt="Python"
                  className="hover:scale-110 transition-transform"
                />
                <img
                  src="https://img.shields.io/badge/-R-276DC3?logo=r&logoColor=white&style=for-the-badge"
                  alt="R"
                  className="hover:scale-110 transition-transform"
                />
                <img
                  src="https://img.shields.io/badge/-Scikit--learn-F7931E?logo=scikit-learn&logoColor=white&style=for-the-badge"
                  alt="Scikit-learn"
                  className="hover:scale-110 transition-transform"
                />
                <img
                  src="https://img.shields.io/badge/-Pandas-150458?logo=pandas&logoColor=white&style=for-the-badge"
                  alt="Pandas"
                  className="hover:scale-110 transition-transform"
                />
                <img
                  src="https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge"
                  alt="MongoDB"
                  className="hover:scale-110 transition-transform"
                />
                <img
                  src="https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=for-the-badge"
                  alt="Git"
                  className="hover:scale-110 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
