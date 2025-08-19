import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Preciso ter experiência prévia para começar?",
      answer: "Não! O curso foi desenvolvido para iniciantes completos. Você aprenderá desde o básico até técnicas avançadas de vendas e produção."
    },
    {
      question: "Qual o investimento inicial necessário?",
      answer: "Você pode começar com apenas R$ 50. Este valor é suficiente para comprar os primeiros ingredientes e começar a produzir."
    },
    {
      question: "Quanto tempo demora para começar a ganhar dinheiro?",
      answer: "Muitas alunas começam a vender já na primeira semana. Com dedicação, é possível ter um retorno completo do investimento em menos de 30 dias."
    },
    {
      question: "O curso funciona em qualquer cidade?",
      answer: "Sim! O método funciona em qualquer lugar do Brasil. Você aprenderá a encontrar fornecedores locais e adaptar as estratégias à sua região."
    },
    {
      question: "Terei suporte após comprar o curso?",
      answer: "Sim! Você terá acesso ao nosso grupo VIP no WhatsApp e suporte direto com a mentora por 30 dias após a compra."
    },
    {
      question: "Como funciona a garantia?",
      answer: "Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeita, devolvemos 100% do valor pago, sem perguntas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gray-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Perguntas <span className="text-red-400">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300">
            Tire todas suas dúvidas sobre o curso
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 border border-red-900/30 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-red-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;