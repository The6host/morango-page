import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-red-900/30 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-red-400 mb-4">
            Morangos do Amor
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transformando vidas através do empreendedorismo feminino. 
            Mais de 1.000 alunas já conquistaram sua independência financeira.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Morangos do Amor. Todos os direitos reservados.</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="mb-2">
                Este produto é comercializado com apoio da Hotmart. 
                A plataforma não faz controle editorial prévio dos produtos vendidos, 
                nem avalia a tecnicidade e experiência daqueles que os produzem.
              </p>
              <p>
                A existência de um produto e sua aquisição, através da Hotmart, 
                não podem ser consideradas como garantia de qualidade de conteúdo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;