"use client";

import { useState } from "react";
import { Check, Dumbbell, TrendingUp, Target, Users, Star, Menu, X } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-orange-500/20 z-50">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              MADARA-OF
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:text-orange-500 transition-colors">Recursos</a>
            <a href="#benefits" className="hover:text-orange-500 transition-colors">Benefícios</a>
            <a href="#pricing" className="hover:text-orange-500 transition-colors">Preço</a>
            <Link 
              href="/app"
              className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all"
            >
              Começar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-orange-500/20 py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <a href="#features" className="hover:text-orange-500 transition-colors">Recursos</a>
              <a href="#benefits" className="hover:text-orange-500 transition-colors">Benefícios</a>
              <a href="#pricing" className="hover:text-orange-500 transition-colors">Preço</a>
              <Link 
                href="/app"
                className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-orange-500/50 transition-all"
              >
                Começar Agora
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-orange-400">+500 Treinos Disponíveis</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforme Seu Corpo<br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Com Precisão
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            O aplicativo definitivo para acompanhamento de treinos. Treinos exclusivos, 
            progressão detalhada e resultados garantidos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link 
              href="/app"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105"
            >
              Começar Agora - R$ 29,97
            </Link>
            <a 
              href="#features"
              className="w-full sm:w-auto border-2 border-orange-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-500/10 transition-all"
            >
              Ver Recursos
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-sm sm:text-base text-gray-400">Treinos</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">10k+</div>
              <div className="text-sm sm:text-base text-gray-400">Usuários</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">4.9</div>
              <div className="text-sm sm:text-base text-gray-400">Avaliação</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">24/7</div>
              <div className="text-sm sm:text-base text-gray-400">Suporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-orange-950/20">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Recursos <span className="text-orange-500">Exclusivos</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Tudo que você precisa para alcançar seus objetivos fitness
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Dumbbell className="w-8 h-8" />,
                title: "Treinos Exclusivos",
                description: "Mais de 500 treinos personalizados para todos os níveis e objetivos"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Treine com Precisão",
                description: "Instruções detalhadas, vídeos e dicas para execução perfeita"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Acompanhe Progresso",
                description: "Gráficos e estatísticas para visualizar sua evolução"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Comunidade Ativa",
                description: "Conecte-se com outros atletas e compartilhe conquistas"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Planos Personalizados",
                description: "Treinos adaptados ao seu nível e disponibilidade"
              },
              {
                icon: <Check className="w-8 h-8" />,
                title: "Resultados Garantidos",
                description: "Metodologia comprovada com milhares de transformações"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-6 sm:p-8 hover:border-orange-500/50 transition-all hover:shadow-xl hover:shadow-orange-500/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Por que escolher o <span className="text-orange-500">MADARA-OF</span>?
              </h2>
              <div className="space-y-4">
                {[
                  "Interface intuitiva e fácil de usar",
                  "Treinos criados por profissionais certificados",
                  "Atualizações constantes com novos exercícios",
                  "Funciona offline - treine em qualquer lugar",
                  "Sincronização em múltiplos dispositivos",
                  "Suporte técnico 24/7"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 rounded-3xl p-8 sm:p-12">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-orange-500 mb-4">500+</div>
                <div className="text-xl sm:text-2xl font-semibold mb-6">Treinos Disponíveis</div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-500">Peito</div>
                    <div className="text-gray-400">80+ treinos</div>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-500">Costas</div>
                    <div className="text-gray-400">75+ treinos</div>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-500">Pernas</div>
                    <div className="text-gray-400">90+ treinos</div>
                  </div>
                  <div className="bg-black/50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-orange-500">Braços</div>
                    <div className="text-gray-400">70+ treinos</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-black to-orange-950/20">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Comece Sua <span className="text-orange-500">Transformação</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Acesso completo por apenas R$ 29,97 - Pagamento único
          </p>

          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-orange-500/20 to-transparent border-2 border-orange-500 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 rounded-full text-sm font-bold">
                MELHOR OFERTA
              </div>

              <div className="text-center mb-8">
                <div className="text-5xl sm:text-6xl font-bold mb-2">
                  R$ <span className="text-orange-500">29,97</span>
                </div>
                <div className="text-gray-400">Pagamento único - Acesso vitalício</div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Acesso a todos os 500+ treinos",
                  "Atualizações gratuitas para sempre",
                  "Suporte técnico prioritário",
                  "Comunidade exclusiva",
                  "Planos personalizados ilimitados",
                  "Sem mensalidades ou taxas ocultas"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="/app"
                className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl font-bold text-lg text-center hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105"
              >
                Começar Agora
              </Link>

              <p className="text-center text-sm text-gray-400 mt-6">
                Garantia de 7 dias - 100% do seu dinheiro de volta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-orange-500">Transformar</span> seu corpo?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já alcançaram seus objetivos
          </p>
          <Link 
            href="/app"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105"
          >
            Começar Agora - R$ 29,97
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-orange-500/20 py-8 px-4 sm:px-6">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 MADARA-OF. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
