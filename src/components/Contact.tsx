import { useState, FormEvent } from 'react';
import { toast } from 'sonner';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.loading('Envoi du message...');

    // Simuler un appel API
    setTimeout(() => {
      if (firstName && email && message) {
        toast.success('Message envoyé avec succès !');
        setFirstName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error('Veuillez remplir tous les champs.');
      }
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Contact</h2>
          <p className="text-lg text-gray-400 mt-2">Discutons de votre projet.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-background p-8 rounded-lg shadow-xl space-y-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">Prénom</label>
              <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-gray-800 border border-border rounded-md py-2 px-4 text-primary-foreground focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 text-lg">
                    Envoyer le message
                </button>
            </div>
          </form>
          <div className="flex justify-center space-x-6 mt-8">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                  <Github size={28} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin size={28} />
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;