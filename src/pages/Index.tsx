
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Play, Lock, Zap, Car, Trophy, Star, Heart, Flame } from 'lucide-react';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // Simulate login
      setCurrentUser(email.split('@')[0]);
      setIsAuthenticated(true);
      toast({
        title: "¡Bienvenido!",
        description: "Acceso concedido. Prepárate para la velocidad.",
      });
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      // Simulate registration
      setCurrentUser(name);
      setIsAuthenticated(true);
      toast({
        title: "¡Registro exitoso!",
        description: "Tu cuenta ha sido creada. ¡Acelera hacia la aventura!",
      });
    }
  };

  const movieImages = [
    "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2069",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070",
    "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=2071",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066"
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-red-900 to-black flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2069')] bg-cover bg-center opacity-20"></div>
        
        <Card className="w-full max-w-md bg-black/80 border-red-500/50 backdrop-blur-md relative z-10">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full">
                <Car className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              NEED FOR SPEED
            </CardTitle>
            <CardDescription className="text-gray-300">
              Acceso exclusivo requerido
            </CardDescription>
            <div className="flex items-center justify-center space-x-2 text-yellow-400">
              <Lock className="w-4 h-4" />
              <span className="text-sm">Contenido protegido</span>
            </div>
          </CardHeader>
          
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-800">
                <TabsTrigger value="login" className="data-[state=active]:bg-red-600">
                  Iniciar Sesión
                </TabsTrigger>
                <TabsTrigger value="register" className="data-[state=active]:bg-red-600">
                  Registrarse
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-300">Contraseña</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                    <Play className="w-4 h-4 mr-2" />
                    Acceder a la Velocidad
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-4">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Nombre</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-gray-300">Email</Label>
                    <Input
                      id="register-email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-gray-300">Contraseña</Label>
                    <Input
                      id="register-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-800 border-gray-600 text-white"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Trophy className="w-4 h-4 mr-2" />
                    Unirse a la Carrera
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm border-b border-red-500/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Car className="w-8 h-8 text-red-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              NEED FOR SPEED
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-white">¡Hola, {currentUser}!</span>
            <Button 
              onClick={() => setIsAuthenticated(false)}
              variant="outline"
              className="border-red-500 text-red-400 hover:bg-red-500/10"
            >
              Salir
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2069')] bg-cover bg-center opacity-30"></div>
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

      {/* Photo Gallery */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 text-white">
            GALERÍA DE LA VELOCIDAD
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movieImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden bg-black border-gray-700 hover:border-red-500/50 transition-all duration-300 hover-scale">
                <div className="relative">
                  <img 
                    src={image} 
                    alt={`Need for Speed ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-semibold">
                      Escena {index + 1} - Pura Adrenalina
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900/20 to-orange-900/20">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8 text-white">
            TRÁILER OFICIAL
          </h3>
          <Card className="max-w-4xl mx-auto bg-black/80 border-red-500/50">
            <CardContent className="p-6">
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/DKcWfreDgGc"
                  title="Need for Speed Official Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-300 mt-4 text-lg">
                Sumérgete en la experiencia completa. El rugido de los motores, la tensión de cada curva, 
                la emoción pura de la velocidad extrema donde Tobey Marshall busca justicia en cada kilómetro.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <Car className="w-12 h-12 text-red-500" />
            <h4 className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              NEED FOR SPEED (2014)
            </h4>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            Gracias por ser parte de esta experiencia épica, {currentUser}
          </p>
          <p className="text-gray-500">
            © 2024 Need for Speed Experience. Un homenaje al cine de carreras que trasciende la pantalla.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
