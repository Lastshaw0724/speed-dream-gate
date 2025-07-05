
import { Card, CardContent } from '@/components/ui/card';
import { Star, Flame, Heart, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 text-center">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/48c06c6a-c627-4012-8b8d-faa759d16715.png')] bg-cover bg-center opacity-30"></div>
      <div className="relative z-10 container mx-auto">
        <div className="mb-8">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-fade-in">
            NEED FOR SPEED
          </h2>
          <p className="text-2xl text-orange-300 font-semibold mb-4">(2014)</p>
          <div className="flex justify-center items-center space-x-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
        
        <Card className="max-w-5xl mx-auto bg-black/85 border-red-500/50 backdrop-blur-md">
          <CardContent className="p-8">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Flame className="w-8 h-8 text-orange-400" />
              <h3 className="text-4xl font-bold text-white">UN HOMENAJE ÉPICO A TOBEY MARSHALL</h3>
              <Flame className="w-8 h-8 text-orange-400" />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="w-6 h-6 text-red-400" />
                  <h4 className="text-2xl font-bold text-orange-300">La Historia de Venganza</h4>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  En las calles donde el honor se mide en velocidad, <strong className="text-orange-400">Tobey Marshall (Aaron Paul)</strong> 
                  lleva el peso de una promesa no cumplida. Un mecánico excepcional convertido en vengador, 
                  su corazón late al ritmo de motores rugientes mientras busca justicia por la muerte de su mejor amigo Pete.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-red-400">Dino Brewster (Dominic Cooper)</strong>, el millonario despiadado, 
                  representa todo lo que está mal en el mundo de las carreras. Su traición desató una tormenta 
                  que solo puede calmarse con velocidad pura y justicia implacable.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <h4 className="text-2xl font-bold text-orange-300">La Carrera Definitiva</h4>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  A través de un país entero, Tobey y su leal equipo de mecánicos se embarcan en 
                  <strong className="text-yellow-400"> la carrera más peligrosa de sus vidas</strong>. 
                  Cada kilómetro es una prueba, cada curva una oportunidad de redención.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Esta no es solo una película de carreras; es un <strong className="text-orange-400">himno a la hermandad</strong>, 
                  la lealtad y el poder transformador de la velocidad. Es cine de carreras en su máxima expresión, 
                  donde cada persecución cuenta una historia y cada motor rugiente es el latido de un corazón decidido.
                </p>
              </div>
            </div>

            <div className="border-t border-red-500/30 pt-8">
              <p className="text-xl text-center text-gray-200 leading-relaxed mb-6">
                <strong className="text-orange-400">Need for Speed (2014)</strong> trasciende los límites del entretenimiento. 
                Es una experiencia visceral que celebra la <strong className="text-red-400">estética de la velocidad</strong>, 
                la adrenalina pura y los giros inesperados que definen el verdadero cine de acción.
              </p>
              
              <div className="flex justify-center">
                <div className="px-8 py-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-full">
                  <span className="text-white font-bold text-xl">
                    🏁 La Venganza Nunca Fue Tan Rápida 🏁
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
