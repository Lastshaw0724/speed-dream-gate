
import { Card, CardContent } from '@/components/ui/card';

const VideoSection = () => {
  return (
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
  );
};

export default VideoSection;
