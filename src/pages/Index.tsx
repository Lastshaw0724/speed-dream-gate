
import { useState } from 'react';
import AuthenticationCard from '@/components/AuthenticationCard';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import VideoSection from '@/components/VideoSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const handleAuthentication = (username: string) => {
    setCurrentUser(username);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser('');
  };

  if (!isAuthenticated) {
    return <AuthenticationCard onAuthenticate={handleAuthentication} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-900">
      <Header currentUser={currentUser} onLogout={handleLogout} />
      <HeroSection />
      <PhotoGallery />
      <VideoSection />
      <Footer currentUser={currentUser} />
    </div>
  );
};

export default Index;
