
import { Card } from '@/components/ui/card';

const PhotoGallery = () => {
  const movieImages = [
    "/lovable-uploads/379ebf63-722a-4d04-a443-e505e3694559.png",
    "/lovable-uploads/23916b71-1693-4ba3-88c6-83bef09a3981.png",
    "/lovable-uploads/4da80cda-f226-4518-aba4-57dead7478e7.png",
    "/lovable-uploads/6429fa8b-0897-4625-b8b8-673e7890af4a.png",
    "/lovable-uploads/71b60fe3-5258-44a3-acfd-1d363631d96a.png"
  ];

  return (
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
  );
};

export default PhotoGallery;
