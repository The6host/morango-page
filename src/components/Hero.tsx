import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Trabalhe <span className="text-red-400">Poucas Horas</span> e 
              Ganhe <span className="text-red-400">Muito</span> Vendendo 
              Morangos Especiais
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Método testado por mais de 1.000 alunas, com passo a passo 
              simples e baixo investimento inicial
            </p>
          </div>

          <div className="bg-red-900/30 border border-red-700/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-red-300 font-semibold">
                ⚡ Vagas se esgotando rapidamente!
              </span>
              <span className="text-red-400 font-bold">93%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-red-600 to-red-400 h-3 rounded-full transition-all duration-1000 animate-pulse"
                style={{ width: '93%' }}
              ></div>
            </div>
            <p className="text-sm text-red-300 mt-2">
              93% das vagas já preenchidas
            </p>
          </div>

          <a 
            href="https://www.ggcheckout.com/checkout/v2/Z3PPjFnXfoPVI1liCUCm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 text-center"
          >
            GARANTIR MINHA VAGA AGORA
          </a>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-900/20 to-red-700/20 p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"></div>
            <div className="w-full rounded-xl shadow-2xl overflow-hidden">
              <wistia-player media-id="5pvrt54ebv" aspect="0.5625"></wistia-player>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-red-900/30 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;