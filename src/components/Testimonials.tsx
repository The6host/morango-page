import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      city: "São Paulo, SP",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200",
      text: "Em 3 meses já consegui uma renda extra de R$ 2.400! Os morangos vendem sozinhos, é incrível a procura. Recomendo demais!"
    },
    {
      name: "Ana Rodrigues",
      city: "Rio de Janeiro, RJ",
      image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200",
      text: "Trabalho só 2 horas por dia e ganho mais que no meu antigo emprego. O curso é muito completo e fácil de seguir."
    },
    {
      name: "Carla Santos",
      city: "Belo Horizonte, MG", 
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      text: "Comecei com R$ 50 e hoje tenho uma clientela de mais de 100 pessoas fixas. Mudou completamente minha vida financeira!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Veja o que Nossas <span className="text-red-400">Alunas Dizem</span>
          </h2>
          <p className="text-xl text-gray-300">
            Histórias reais de transformação financeira
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900/80 border border-red-900/30 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-400/20"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-red-400 text-sm">{testimonial.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;