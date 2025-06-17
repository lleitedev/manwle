"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Download, Mail, MessageSquare, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulário enviado:", formData)
    alert("Mensagem enviada com sucesso!")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/10 to-purple-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="glass-card p-8 rounded-2xl border border-cyan-400/30 mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vamos conversar?
              </h2>
              <p className="text-lg text-slate-300 font-mono">
                Aberta a oportunidades em dados, backend ou projetos interdisciplinares
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulário de Contato */}
            <Card className="glass-card border-cyan-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-cyan-400 font-mono">
                  <MessageSquare className="w-5 h-5" />
                  ENVIE UMA MENSAGEM
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-800/50 border-cyan-400/30 text-slate-200 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu e-mail"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-800/50 border-cyan-400/30 text-slate-200 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Sua mensagem..."
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-slate-800/50 border-cyan-400/30 text-slate-200 placeholder:text-slate-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 border border-cyan-400/50 font-mono"
                  >
                    <Send className="w-4 h-4" />
                    ENVIAR MENSAGEM
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="space-y-6">
              <Card className="glass-card border-green-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Mail className="w-12 h-12 mx-auto mb-4 text-green-400" />
                    <h3 className="text-xl font-semibold mb-2 text-green-400 font-mono">CONTATO DIRETO</h3>
                    <p className="text-slate-300 mb-4">Prefere um contato mais direto? Me envie um e-mail!</p>
                    <Button
                      variant="outline"
                      className="gap-2 border-green-400/50 text-green-400 hover:bg-green-400/10 bg-slate-800/30 font-mono"
                      asChild
                    >
                      <a href="mailto:emanueledeoliveirasilveira@gmail.com">
                        <Mail className="w-4 h-4" />
                        EMAIL
                      </a>
                    </Button>
                    <p className="text-sm text-slate-400 mt-2 font-mono">📱 (44) 99712-7533</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-purple-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Download className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                    <h3 className="text-xl font-semibold mb-2 text-purple-400 font-mono">CURRÍCULO COMPLETO</h3>
                    <p className="text-slate-300 mb-4">
                      Baixe meu currículo em PDF com todos os detalhes da minha experiência
                    </p>
                    <Button
                      className="gap-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 border border-purple-400/50 font-mono"
                      asChild
                    >
                      <a href="/manucv.pdf" download="Curriculo-Cientista-Dados.pdf">
                        <Download className="w-4 h-4" />
                        BAIXAR CV.PDF
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* CTA Principal */}
              <Card className="glass-card border-cyan-400/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-cyan-400 font-mono">PRONTA PARA NOVOS DESAFIOS!</h3>
                    <p className="text-slate-300 mb-4">
                      Busco oportunidades para aplicar minhas habilidades em R, Python e análise estatística para
                      extrair insights e resolver problemas de negócio complexos.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm border border-cyan-400/30 font-mono">
                        CIÊNCIA DE DADOS
                      </span>
                      <span className="px-3 py-1 bg-purple-400/20 text-purple-400 rounded-full text-sm border border-purple-400/30 font-mono">
                        ANÁLISE DE CHURN
                      </span>
                      <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm border border-green-400/30 font-mono">
                        BACKEND DEV
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
