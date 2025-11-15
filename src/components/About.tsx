const About = () => {
  return (
    <section id="à-propos" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400">À propos de moi</h2>
          <p className="text-lg text-gray-400 mt-2">Mon parcours, ma passion et ce qui me motive.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-lg shadow-xl p-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            Développeur passionné avec 5 ans d'expérience dans la création d'applications web modernes et performantes. J'ai une solide expertise en JavaScript, React, Node.js et je suis toujours à la recherche de nouveaux défis pour affiner mes compétences. Mon objectif est de construire des produits qui non seulement fonctionnent parfaitement, mais qui offrent aussi une expérience utilisateur exceptionnelle. Quand je ne code pas, j'aime explorer les dernières tendances technologiques et contribuer à des projets open-source.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;