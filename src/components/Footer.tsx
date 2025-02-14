import Logo from "./Logo";

const footerLinks = [
  { title: "Lorem Ipsum", links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"] },
  { title: "Lorem Ipsum", links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"] },
  { title: "Lorem Ipsum", links: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"] },
  { title: "Lorem Ipsum", links: ["Lorem Ipsum"] },
];

const Footer = () => {
  return (
    <footer className="bg-[#0E131F] text-white py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-20">
        {/* Logo Section */}
        <div className="block">
          <Logo />
        </div>

        {/* Links Section */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg sm:text-xl mb-6 sm:mb-8">{section.title}</h3>
              <ul className="space-y-4 sm:space-y-6 text-gray-300">
                {section.links.map((link, i) => (
                  <li key={i}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
