import { Briefcase, Github, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Zuri Market',
    description: 'Une plateforme e-commerce panafricaine connectant les artisans locaux aux marchés mondiaux.',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Akiba Pay',
    description: 'Une application de finance mobile pour l\'inclusion financière en Afrique de l\'Est, avec des micro-prêts et des services d\'épargne.',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Soma Academy',
    description: 'Une plateforme d\'apprentissage en ligne proposant des cours sur les technologies et l\'entrepreneuriat pour les jeunes Africains.',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Mes Projets</h2>
            <p className="mt-4 text-lg text-gray-400">Découvrez une sélection de mes travaux récents.</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                    <Briefcase className="h-8 w-8 text-cyan-400 mr-4" />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-6 h-24">{project.description}</p>
                <div className="flex justify-end space-x-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Démo Live
                  </a>
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                    <Github className="h-5 w-5 mr-2" />
                    Code Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}