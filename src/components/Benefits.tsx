import React from 'react';
import { DollarSign, Clock, Wallet, Users, Heart, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Ganhe de R$ 100 a R$ 300 por dia",
      description: "Rendimento comprovado com método testado por milhares de alunas"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Trabalhe apenas 2-3 horas por dia",
      description: "Flexibilidade total para conciliar com sua rotina atual"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Comece com apenas R$ 50 de investimento",
      description: "Baixo investimento inicial para começar seu negócio rentável"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tenha sua própria clientela fiel",
      description: "Construa relacionamentos duradouros com clientes que sempre voltam"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Venda um produto que gera felicidade",
      description: "Morangos especiais que trazem alegria e momentos únicos"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tenha segurança financeira extra",
      description: "Renda adicional garantida para sua independência financeira"
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Transforme Sua Vida com os 
            <span className="text-red-400"> Morangos do Amor</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra todos os benefícios que nosso método exclusivo 
            pode proporcionar para sua vida financeira
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 border border-red-900/30 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:border-red-700/50 hover:shadow-lg hover:shadow-red-500/10"
            >
              <div className="text-red-400 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;