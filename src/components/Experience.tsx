const experiences = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Développeur Web Senior',
    period: 'Jan 2021 - Présent',
    description: 'Lead developer sur un projet SaaS complexe, responsable de l\'architecture front-end avec React et de la mise en place d\'une CI/CD robuste. Mentorat de développeurs juniors.'
  },
  {
    company: 'Innovatech',
    role: 'Développeur Full-Stack',
    period: 'Juin 2018 - Déc 2020',
    description: 'Développement de fonctionnalités pour une plateforme e-commerce, de l\'API REST avec Node.js/Express à l\'interface utilisateur avec Vue.js. Optimisation des performances de la base de données.'
  }
];

const Experience = () => {
  return (
    <section id="expérience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Expérience Professionnelle</h2>
        </div>
        <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-700"></div>
            {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12">
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full mt-1.5"></div>
                    <div className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                           <div className={`bg-card p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                <h3 className="text-xl font-bold text-primary-foreground">{exp.role}</h3>
                                <p className="text-cyan-400 font-semibold mb-2">{exp.company}</p>
                                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                                <p className="text-gray-300">{exp.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;