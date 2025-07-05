
import { Card } from '@/components/ui/card';

const PhotoGallery = () => {
  const movieImages = [
    "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2069",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070",
    "https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=2071",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2066"
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
