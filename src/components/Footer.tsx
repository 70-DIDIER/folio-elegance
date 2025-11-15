const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Votre Nom. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;