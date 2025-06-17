import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="https://github.com/mwnule" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a
                href="https://www.linkedin.com/in/emanuele-oliveira-silveira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="mailto:emanueledeoliveirasilveira@gmail.com">
                <Mail className="w-4 h-4" />
                E-mail
              </a>
            </Button>
          </div>

          <div className="border-t pt-6">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Feito com <Heart className="w-4 h-4 text-red-500" /> por Emanuele Silveira - Estudante de Estatística e
              Ciência de Dados
            </p>
            <p className="text-sm text-muted-foreground mt-2">© 2024 - Emanuele Silveira | Curitiba, PR</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
