"use client";

import { useState } from "react";
import { 
  Dumbbell, 
  TrendingUp, 
  Calendar, 
  User, 
  Settings,
  Plus,
  ChevronRight,
  Target,
  Clock,
  Flame,
  Trophy,
  Play,
  Check
} from "lucide-react";
import Link from "next/link";

type Workout = {
  id: string;
  name: string;
  category: string;
  duration: number;
  exercises: number;
  difficulty: "Iniciante" | "Intermediário" | "Avançado";
  completed?: boolean;
};

export default function AppPage() {
  const [activeTab, setActiveTab] = useState<"home" | "workouts" | "progress" | "profile">("home");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const categories = ["Todos", "Peito", "Costas", "Pernas", "Braços", "Ombros", "Abdômen"];

  const workouts: Workout[] = [
    { id: "1", name: "Peito Completo", category: "Peito", duration: 45, exercises: 8, difficulty: "Intermediário" },
    { id: "2", name: "Costas Hipertrofia", category: "Costas", duration: 50, exercises: 10, difficulty: "Avançado" },
    { id: "3", name: "Pernas Iniciante", category: "Pernas", duration: 40, exercises: 6, difficulty: "Iniciante", completed: true },
    { id: "4", name: "Braços Definição", category: "Braços", duration: 35, exercises: 7, difficulty: "Intermediário" },
    { id: "5", name: "Ombros 3D", category: "Ombros", duration: 40, exercises: 8, difficulty: "Avançado" },
    { id: "6", name: "Abdômen Tanquinho", category: "Abdômen", duration: 25, exercises: 5, difficulty: "Iniciante", completed: true },
  ];

  const filteredWorkouts = selectedCategory === "Todos" 
    ? workouts 
    : workouts.filter(w => w.category === selectedCategory);

  const stats = {
    workoutsCompleted: 24,
    currentStreak: 7,
    totalMinutes: 1080,
    caloriesBurned: 8400
  };

  const difficultyColors = {
    "Iniciante": "text-green-500 bg-green-500/10 border-green-500/30",
    "Intermediário": "text-orange-500 bg-orange-500/10 border-orange-500/30",
    "Avançado": "text-red-500 bg-red-500/10 border-red-500/30"
  };

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 sm:px-6 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">MADARA-OF</h1>
              <p className="text-sm text-white/80">Bem-vindo de volta!</p>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-4 h-4 text-yellow-300" />
              <span className="text-xs text-white/80">Treinos</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold">{stats.workoutsCompleted}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-1">
              <Flame className="w-4 h-4 text-orange-300" />
              <span className="text-xs text-white/80">Sequência</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold">{stats.currentStreak} dias</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-blue-300" />
              <span className="text-xs text-white/80">Minutos</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold">{stats.totalMinutes}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4">
            <div className="flex items-center gap-2 mb-1">
              <Target className="w-4 h-4 text-green-300" />
              <span className="text-xs text-white/80">Calorias</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold">{stats.caloriesBurned}</div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 sm:px-6 py-6">
        {activeTab === "home" && (
          <div className="space-y-6">
            {/* Quick Actions */}
            <section>
              <h2 className="text-xl font-bold mb-4">Ações Rápidas</h2>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-4 text-left hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                  <Plus className="w-6 h-6 mb-2" />
                  <div className="font-semibold">Novo Treino</div>
                  <div className="text-xs text-white/80">Começar agora</div>
                </button>
                <button 
                  onClick={() => setActiveTab("workouts")}
                  className="bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 rounded-xl p-4 text-left hover:border-orange-500/50 transition-all"
                >
                  <Dumbbell className="w-6 h-6 mb-2" />
                  <div className="font-semibold">Explorar</div>
                  <div className="text-xs text-gray-400">500+ treinos</div>
                </button>
              </div>
            </section>

            {/* Today's Workout */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Treino de Hoje</h2>
                <button className="text-orange-500 text-sm font-semibold">Ver todos</button>
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Peito e Tríceps</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        45 min
                      </span>
                      <span className="flex items-center gap-1">
                        <Dumbbell className="w-4 h-4" />
                        8 exercícios
                      </span>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-semibold text-orange-500">
                    Intermediário
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                  <Play className="w-5 h-5" />
                  Iniciar Treino
                </button>
              </div>
            </section>

            {/* Recent Workouts */}
            <section>
              <h2 className="text-xl font-bold mb-4">Treinos Recentes</h2>
              <div className="space-y-3">
                {workouts.filter(w => w.completed).map((workout) => (
                  <div 
                    key={workout.id}
                    className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <div className="font-semibold">{workout.name}</div>
                        <div className="text-sm text-gray-400">{workout.category}</div>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "workouts" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Biblioteca de Treinos</h2>
              <button className="text-orange-500 text-sm font-semibold">Filtros</button>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Workouts List */}
            <div className="space-y-3">
              {filteredWorkouts.map((workout) => (
                <div 
                  key={workout.id}
                  className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl p-4 hover:border-orange-500/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{workout.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {workout.duration} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Dumbbell className="w-4 h-4" />
                          {workout.exercises} exercícios
                        </span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 border rounded-full text-xs font-semibold ${difficultyColors[workout.difficulty]}`}>
                      {workout.difficulty}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 py-2 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                    Iniciar Treino
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "progress" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Seu Progresso</h2>

            {/* Progress Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30 rounded-xl p-6">
                <TrendingUp className="w-8 h-8 text-orange-500 mb-3" />
                <div className="text-3xl font-bold mb-1">{stats.workoutsCompleted}</div>
                <div className="text-sm text-gray-400">Treinos Completos</div>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-transparent border border-green-500/30 rounded-xl p-6">
                <Flame className="w-8 h-8 text-green-500 mb-3" />
                <div className="text-3xl font-bold mb-1">{stats.currentStreak}</div>
                <div className="text-sm text-gray-400">Dias Seguidos</div>
              </div>
            </div>

            {/* Weekly Progress */}
            <div className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4">Progresso Semanal</h3>
              <div className="flex items-end justify-between gap-2 h-40">
                {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day, index) => {
                  const heights = [60, 80, 40, 90, 70, 50, 85];
                  return (
                    <div key={day} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-gradient-to-t from-orange-500 to-orange-400 rounded-t-lg transition-all hover:from-orange-400 hover:to-orange-300" 
                           style={{ height: `${heights[index]}%` }}
                      />
                      <span className="text-xs text-gray-400">{day}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-lg font-bold mb-4">Conquistas</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { icon: "🏆", title: "Primeira Semana", unlocked: true },
                  { icon: "🔥", title: "7 Dias Seguidos", unlocked: true },
                  { icon: "💪", title: "20 Treinos", unlocked: true },
                  { icon: "⭐", title: "Mês Completo", unlocked: false },
                  { icon: "🎯", title: "50 Treinos", unlocked: false },
                  { icon: "👑", title: "100 Treinos", unlocked: false },
                ].map((achievement, index) => (
                  <div 
                    key={index}
                    className={`rounded-xl p-4 text-center ${
                      achievement.unlocked
                        ? "bg-gradient-to-br from-orange-500/20 to-transparent border border-orange-500/30"
                        : "bg-gray-800/50 border border-gray-700"
                    }`}
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <div className={`text-sm font-semibold ${achievement.unlocked ? "text-white" : "text-gray-500"}`}>
                      {achievement.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-1">Atleta MADARA-OF</h2>
              <p className="text-gray-400">Membro desde Janeiro 2024</p>
            </div>

            <div className="space-y-3">
              {[
                { icon: <User className="w-5 h-5" />, label: "Editar Perfil" },
                { icon: <Target className="w-5 h-5" />, label: "Meus Objetivos" },
                { icon: <Calendar className="w-5 h-5" />, label: "Histórico" },
                { icon: <Settings className="w-5 h-5" />, label: "Configurações" },
              ].map((item, index) => (
                <button 
                  key={index}
                  className="w-full bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl p-4 flex items-center justify-between hover:border-orange-500/40 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="font-semibold">{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              ))}
            </div>

            <Link 
              href="/"
              className="block w-full bg-gradient-to-r from-orange-500 to-orange-600 py-3 rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-orange-500/50 transition-all"
            >
              Voltar para Home
            </Link>
          </div>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-orange-500/20 px-4 py-3">
        <div className="flex items-center justify-around max-w-lg mx-auto">
          {[
            { id: "home", icon: <Dumbbell className="w-6 h-6" />, label: "Início" },
            { id: "workouts", icon: <Target className="w-6 h-6" />, label: "Treinos" },
            { id: "progress", icon: <TrendingUp className="w-6 h-6" />, label: "Progresso" },
            { id: "profile", icon: <User className="w-6 h-6" />, label: "Perfil" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeTab === tab.id ? "text-orange-500" : "text-gray-400"
              }`}
            >
              {tab.icon}
              <span className="text-xs font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
