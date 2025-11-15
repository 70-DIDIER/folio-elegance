const skills = [
  'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Express',
  'Tailwind CSS', 'Figma', 'MongoDB', 'PostgreSQL', 'Docker', 'Git & GitHub'
];

const Skills = () => {
  return (
    <section id="compétences" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Compétences</h2>
        </div>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-card text-gray-200 py-2 px-5 rounded-full font-medium shadow-md transition-transform transform hover:scale-110 hover:bg-primary hover:text-primary-foreground">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;