import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#0E131F] text-white py-24">
     
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 md:gap-20">
        {/* Logo Section */}
        <div className="">
         <Logo />
        </div>
        

        {/* Links Section */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-subheading-1 mb-10">Lorem Ipsum</h3>
            <ul className="space-y-6 text-gray-300">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-subheading-1 mb-10">Lorem Ipsum</h3>
            <ul className="space-y-6 text-gray-300">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-subheading-1 mb-10">Lorem Ipsum</h3>
            <ul className="space-y-6 text-gray-300">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-subheading-1 mb-10">Lorem Ipsum</h3>
            <ul className="space-y-6 text-gray-300">
              <li>Lorem Ipsum</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
