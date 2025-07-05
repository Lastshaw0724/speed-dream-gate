
import { Button } from '@/components/ui/button';
import { Car } from 'lucide-react';

interface HeaderProps {
  currentUser: string;
  onLogout: () => void;
}

const Header = ({ currentUser, onLogout }: HeaderProps) => {
  return (
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
            onClick={onLogout}
            variant="outline"
            className="border-red-500 text-red-400 hover:bg-red-500/10"
          >
            Salir
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
