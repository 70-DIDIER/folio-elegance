import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-center bg-gray-900">
        <div className="absolute inset-0 bg-grid-cyan-500/10"></div>
        <div className="relative z-10 px-4">
            <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e27a8c09-e58f-45f3-a8f3-240c2dc27c58/profile-picture-kayuodj-1763225995558.webp" alt="Votre Nom" className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-lg" />
            <h1 className="text-5xl md:text-7xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Votre Nom</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">Développeur Web Full-Stack | Spécialiste React & Node.js</p>
            <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 text-lg">
                Contactez-moi
            </a>
        </div>
        <a href="#à-propos" className="absolute bottom-10 animate-bounce">
            <ArrowDown className="text-gray-400" size={32} />
        </a>
    </section>
  );
};

export default Hero;