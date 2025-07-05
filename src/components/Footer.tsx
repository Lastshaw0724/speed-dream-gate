
import { Car } from 'lucide-react';

interface FooterProps {
  currentUser: string;
}

const Footer = ({ currentUser }: FooterProps) => {
  return (
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
  );
};

export default Footer;
