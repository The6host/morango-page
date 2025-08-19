import React from 'react';
import { Shield } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-red-800/60 to-red-900/60 border border-red-600/30 rounded-2xl p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600/20 rounded-full mb-6">
            <Shield className="w-10 h-10 text-red-300" />
          </div>
          
          <h3 className="text-3xl font-bold mb-4">
            Garantia <span className="text-red-400">Incondicional</span> de 7 Dias
          </h3>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Experimente sem risco! Se por qualquer motivo você não ficar 
            completamente satisfeita com o curso, devolvemos 100% do seu 
            dinheiro em até 7 dias. Sem perguntas, sem complicações.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;