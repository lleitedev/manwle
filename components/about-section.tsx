import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, TrendingUp, Award, Terminal, Database, Code, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="glass-card p-8 rounded-2xl border border-cyan-400/30 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sobre mim
              </h2>
              <div className="flex items-center justify-center gap-2 text-cyan-400 font-mono text-sm">
                <Terminal className="w-4 h-4" />
                <span>cat about.md</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="space-y-6">
              <Card className="glass-card border-cyan-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-bold text-cyan-400 font-mono">FORMAÇÃO</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Estudante de{" "}
                    <span className="text-cyan-400 font-semibold">Estatística e Ciência de Dados na UFPR</span>{" "}
                    (2025-2029), com experiência profissional real em{" "}
                    <span className="text-green-400 font-semibold">análise de churn</span> na
                    <span className="text-purple-400 font-semibold"> IDERIS</span>, onde atuei diretamente na retenção
                    de clientes e análise de padrões de cancelamento.
                  </p>
                  <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/30 font-mono">UFPR 2025-2029</Badge>
                </CardContent>
              </Card>

              <Card className="glass-card border-purple-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <h3 className="font-bold text-purple-400 font-mono">EXPERIÊNCIA</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Além de ciência de dados, tenho experiência prática em
                    <span className="text-green-400 font-semibold"> e-commerce</span>,
                    <span className="text-cyan-400 font-semibold"> CRM</span> e
                    <span className="text-purple-400 font-semibold"> desenvolvimento backend</span>, o que me permite
                    criar soluções que realmente impactam os resultados de negócio.
                  </p>
                  <Badge className="bg-purple-400/20 text-purple-400 border-purple-400/30 font-mono">
                    IDERIS 2022-2024
                  </Badge>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <Card className="glass-card border-green-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-green-400" />
                    <h3 className="font-bold text-green-400 font-mono">LIDERANÇA</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Minha formação em <span className="text-green-400 font-semibold">Liderança em Tecnologia</span>
                    pelo <span className="text-yellow-400 font-semibold">LIONS DEV</span> (420h) me diferencia no
                    mercado, combinando expertise técnica com visão estratégica e habilidades de liderança.
                  </p>
                  <Badge className="bg-green-400/20 text-green-400 border-green-400/30 font-mono">LIONS DEV 420H</Badge>
                </CardContent>
              </Card>

              <Card className="glass-card border-yellow-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <h3 className="font-bold text-yellow-400 font-mono">OBJETIVOS</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Busco oportunidades para aplicar minhas habilidades em{" "}
                    <span className="text-cyan-400 font-semibold">R, Python e análise estatística</span>
                    para extrair insights e resolver problemas complexos de negócio.
                  </p>
                  <Badge className="bg-yellow-400/20 text-yellow-400 border-yellow-400/30 font-mono">
                    OPEN TO WORK
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="glass-card border-cyan-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 text-center">
              <CardContent className="pt-6">
                <GraduationCap className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                <h3 className="font-semibold mb-2 text-cyan-400 font-mono">UFPR</h3>
                <p className="text-xs text-slate-400">Estatística e Ciência de Dados</p>
                <div className="mt-3 bg-cyan-400/20 rounded p-2">
                  <div className="text-lg font-bold text-cyan-400 font-mono">2025</div>
                  <div className="text-xs text-cyan-300">Ingresso</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-green-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 mx-auto mb-3 text-green-400" />
                <h3 className="font-semibold mb-2 text-green-400 font-mono">IDERIS</h3>
                <p className="text-xs text-slate-400">Experiência real em churn</p>
                <div className="mt-3 bg-green-400/20 rounded p-2">
                  <div className="text-lg font-bold text-green-400 font-mono">1.5</div>
                  <div className="text-xs text-green-300">Anos</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 text-center">
              <CardContent className="pt-6">
                <Database className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <h3 className="font-semibold mb-2 text-purple-400 font-mono">E-COMMERCE</h3>
                <p className="text-xs text-slate-400">Conhecimento de marketplace</p>
                <div className="mt-3 bg-purple-400/20 rounded p-2">
                  <div className="text-lg font-bold text-purple-400 font-mono">CRM</div>
                  <div className="text-xs text-purple-300">Expert</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-yellow-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 text-center">
              <CardContent className="pt-6">
                <Code className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                <h3 className="font-semibold mb-2 text-yellow-400 font-mono">LIONS DEV</h3>
                <p className="text-xs text-slate-400">Liderança em Tecnologia</p>
                <div className="mt-3 bg-yellow-400/20 rounded p-2">
                  <div className="text-lg font-bold text-yellow-400 font-mono">420</div>
                  <div className="text-xs text-yellow-300">Horas</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
