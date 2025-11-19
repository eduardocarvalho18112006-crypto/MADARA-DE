"use client";

import { useState } from "react";
import { Check, ArrowRight, ArrowLeft, Dumbbell } from "lucide-react";
import Link from "next/link";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual é o seu principal objetivo fitness?",
    options: [
      "Perder peso e definir",
      "Ganhar massa muscular",
      "Melhorar condicionamento físico",
      "Manter a forma atual"
    ]
  },
  {
    id: 2,
    question: "Qual é o seu nível de experiência com treinos?",
    options: [
      "Iniciante - Nunca treinei",
      "Intermediário - Treino há alguns meses",
      "Avançado - Treino há mais de 1 ano",
      "Profissional - Treino há vários anos"
    ]
  },
  {
    id: 3,
    question: "Quantos dias por semana você pode treinar?",
    options: [
      "2-3 dias por semana",
      "4-5 dias por semana",
      "6-7 dias por semana",
      "Varia muito"
    ]
  },
  {
    id: 4,
    question: "Onde você prefere treinar?",
    options: [
      "Academia completa",
      "Em casa com equipamentos",
      "Em casa sem equipamentos",
      "Ao ar livre"
    ]
  },
  {
    id: 5,
    question: "Qual é a sua maior dificuldade atualmente?",
    options: [
      "Falta de motivação",
      "Não sei montar treinos",
      "Falta de tempo",
      "Não vejo resultados"
    ]
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = [...answers, selectedOption];
      setAnswers(newAnswers);
      setSelectedOption("");

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] || "");
      setAnswers(answers.slice(0, -1));
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (showResult) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Perfeito! Você está <span className="text-orange-500">pronto</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Baseado nas suas respostas, o MADARA-OF é ideal para você!
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-transparent border-2 border-orange-500 rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Seu Plano Personalizado Inclui:</h2>
            <div className="space-y-4 mb-8">
              {[
                "Treinos adaptados ao seu nível e objetivo",
                "Plano semanal baseado na sua disponibilidade",
                "Exercícios para o seu local de treino preferido",
                "Acompanhamento de progresso detalhado",
                "Suporte para superar suas dificuldades",
                "Acesso vitalício a todos os recursos"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center border-t border-orange-500/30 pt-6">
              <div className="text-5xl font-bold mb-2">
                R$ <span className="text-orange-500">29,97</span>
              </div>
              <div className="text-gray-400 mb-6">Pagamento único - Acesso vitalício</div>
              
              <Link 
                href="/checkout"
                className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105"
              >
                Garantir Minha Vaga Agora
              </Link>

              <p className="text-sm text-gray-400 mt-4">
                ✓ Garantia de 7 dias - 100% do seu dinheiro de volta
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">
              Voltar para página inicial
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="text-sm text-gray-400">
            Questão {currentQuestion + 1} de {quizQuestions.length}
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-gray-900 h-2">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Quiz Content */}
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {quizQuestions[currentQuestion].question}
          </h1>
          <p className="text-gray-400">
            Selecione a opção que melhor descreve você
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {quizQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(option)}
              className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                selectedOption === option
                  ? "border-orange-500 bg-orange-500/10"
                  : "border-gray-800 bg-gray-900/50 hover:border-orange-500/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedOption === option
                    ? "border-orange-500 bg-orange-500"
                    : "border-gray-600"
                }`}>
                  {selectedOption === option && (
                    <Check className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="text-lg">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-6 py-3 border-2 border-orange-500 rounded-lg hover:bg-orange-500/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar
            </button>
          )}
          
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              selectedOption
                ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:shadow-xl hover:shadow-orange-500/50"
                : "bg-gray-800 text-gray-500 cursor-not-allowed"
            }`}
          >
            {currentQuestion === quizQuestions.length - 1 ? "Ver Resultado" : "Próxima"}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
