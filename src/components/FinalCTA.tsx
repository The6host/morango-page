import React from 'react';

const FinalCTA = () => {
  return (
    <section id="final-cta" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Não perca esta <span className="text-red-400">oportunidade única!</span>
            <br />Sua vez é <span className="text-red-400">agora!</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            Junte-se às mais de 1.000 mulheres que já transformaram 
            suas vidas financeiras com os Morangos do Amor
          </p>
        </div>

        <div className="bg-gradient-to-br from-red-900/40 to-red-700/20 border border-red-600/50 rounded-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <span className="text-3xl font-bold text-red-400">🔥 ÚLTIMAS VAGAS 🔥</span>
          </div>
          
          <a 
            href="https://www.ggcheckout.com/checkout/v2/Z3PPjFnXfoPVI1liCUCm"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white font-bold py-8 px-8 rounded-xl text-2xl md:text-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/40 mb-6 text-center"
          >
            SIM! QUERO GARANTIR AGORA
          </a>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-300">
            <span className="flex items-center">
              ⚡ Acesso imediato após a compra
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center">
              🛡️ Garantia de 7 dias
            </span>
            <span className="hidden sm:block">•</span>
            <span className="flex items-center">
              💳 Parcelamento disponível
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-900/60 rounded-lg p-6">
            <div className="text-3xl mb-2">⏰</div>
            <h4 className="font-bold text-red-400">Aprenda Rápido</h4>
            <p className="text-sm text-gray-300">Método simples e direto ao ponto</p>
          </div>
          <div className="bg-gray-900/60 rounded-lg p-6">
            <div className="text-3xl mb-2">💰</div>
            <h4 className="font-bold text-red-400">Ganhe Mais</h4>
            <p className="text-sm text-gray-300">Renda extra comprovada</p>
          </div>
          <div className="bg-gray-900/60 rounded-lg p-6">
            <div className="text-3xl mb-2">🏆</div>
            <h4 className="font-bold text-red-400">Seja Livre</h4>
            <p className="text-sm text-gray-300">Independência financeira</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;