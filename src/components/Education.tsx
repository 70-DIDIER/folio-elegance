const educations = [
  {
    institution: 'Université de Technologie',
    degree: 'Master en Ingénierie Logicielle',
    period: '2016 - 2018'
  },
  {
    institution: 'Institut des Sciences Appliquées',
    degree: 'Licence en Informatique',
    period: '2013 - 2016'
  }
];

const Education = () => {
  return (
    <section id="formation" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400">Formation</h2>
        </div>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {educations.map((edu, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-cyan-400 font-semibold mb-2">{edu.institution}</p>
              <p className="text-gray-400 text-sm">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;