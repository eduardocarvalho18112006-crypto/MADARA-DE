"use client";

import { useState } from "react";
import { Check, Lock, CreditCard, Shield, ArrowLeft, Dumbbell } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cpf: ""
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulação de processamento
    setTimeout(() => {
      setIsProcessing(false);
      alert("Pagamento processado com sucesso! Bem-vindo ao MADARA-OF!");
      window.location.href = "/app";
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-orange-500/20 py-4 px-4 sm:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              MADARA-OF
            </span>
          </Link>
          <div className="flex items-center gap-2 text-green-500">
            <Lock className="w-5 h-5" />
            <span className="text-sm hidden sm:inline">Checkout Seguro</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/quiz"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulário de Pagamento */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Finalize sua <span className="text-orange-500">compra</span>
              </h1>
              <p className="text-gray-400 mb-8">
                Preencha os dados para garantir seu acesso vitalício
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dados Pessoais */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm">1</span>
                    Dados Pessoais
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome Completo</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="João Silva"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">CPF</label>
                      <input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                        required
                        className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="000.000.000-00"
                      />
                    </div>
                  </div>
                </div>

                {/* Dados do Cartão */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm">2</span>
                    Pagamento
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Número do Cartão</label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 pl-12 focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="0000 0000 0000 0000"
                        />
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Validade</label>
                        <input
                          type="text"
                          name="expiry"
                          value={formData.expiry}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="MM/AA"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                          className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="000"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botão de Pagamento */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    isProcessing
                      ? "bg-gray-700 cursor-not-allowed"
                      : "bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105"
                  }`}
                >
                  {isProcessing ? "Processando..." : "Finalizar Compra - R$ 29,97"}
                </button>

                {/* Segurança */}
                <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    <span>Pagamento Seguro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    <span>SSL Criptografado</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Resumo do Pedido */}
            <div>
              <div className="bg-gradient-to-br from-orange-500/20 to-transparent border-2 border-orange-500 rounded-3xl p-8 sticky top-8">
                <h2 className="text-2xl font-bold mb-6">Resumo do Pedido</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-orange-500/30">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-bold text-lg">MADARA-OF - Acesso Vitalício</div>
                      <div className="text-sm text-gray-400">Pagamento único</div>
                    </div>
                    <div className="font-bold text-xl">R$ 29,97</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">500+ treinos exclusivos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Planos personalizados ilimitados</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Atualizações gratuitas para sempre</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Suporte técnico prioritário</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Acesso à comunidade exclusiva</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Garantia de 7 dias</span>
                  </div>
                </div>

                <div className="bg-black/50 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center text-2xl font-bold">
                    <span>Total</span>
                    <span className="text-orange-500">R$ 29,97</span>
                  </div>
                  <div className="text-sm text-gray-400 text-right mt-1">
                    Pagamento único - Sem mensalidades
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-bold text-green-500 mb-1">Garantia de 7 dias</div>
                      <div className="text-gray-400">
                        Se não ficar satisfeito, devolvemos 100% do seu dinheiro
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
