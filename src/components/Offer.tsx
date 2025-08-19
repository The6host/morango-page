import React from 'react';
import { CheckCircle, Clock } from 'lucide-react';

const Offer = () => {
  const offerItems = [
    "Curso completo em vídeo com mais de 4 horas de conteúdo",
    "Planilha de Precificação automatizada",
    "Lista de Fornecedores verificados e confiáveis", 
    "20 Receitas Exclusivas de morangos gourmet",
    "Suporte direto com a mentora por 30 dias",
    "Grupo VIP no WhatsApp com outras alunas"
  ];

  return (
    <section id="offer" className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-900/50 text-red-300 px-4 py-2 rounded-full mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Oferta por Tempo Limitado
          </div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-red-400">Oferta Completa</span> por Tempo Limitado
          </h2>
        </div>

        <div className="bg-gradient-to-br from-red-900/40 to-red-700/20 border-2 border-red-600/50 rounded-2xl p-8 relative overflow-hidden">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-pulse"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Tudo o que você precisa para começar:</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {offerItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="mb-4">
                <span className="text-2xl text-gray-400 line-through mr-4">
                  De R$ 60,00
                </span>
                <span className="text-sm text-red-300">por apenas</span>
              </div>
              
              <div className="text-6xl font-bold text-red-400 mb-2">
                R$ 17,99
              </div>
              
              <p className="text-lg text-gray-300 mb-8">
                à vista ou no cartão
              </p>

              <a 
                href="https://www.ggcheckout.com/checkout/v2/Z3PPjFnXfoPVI1liCUCm"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white font-bold py-6 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 text-center"
              >
                🔥 GARANTIR MINHA VAGA HOJE
              </a>
              
              <p className="text-sm text-gray-400 mt-4">
                ⚡ Acesso imediato após a compra • 🛡️ Garantia de 7 dias
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;