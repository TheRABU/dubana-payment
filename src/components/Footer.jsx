import logo from "../assets/logo-dubana.PNG";

const Footer = () => {
  return (
    <footer className="bg-[#012077] w-full h-[500px]">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-white font-semibold flex justify-between items-start">
          <div className="left-side flex flex-col items-start max-w-md">
            <div className="logo mb-6">
              <img className="h-14" src={logo} alt="Dubana Logo" />
            </div>
            <div>
              <p className="text-white">
                Connecting Innovation, Culture, and Community – Uniting
                Bangladeshi-American tech professionals to foster creativity,
                celebrate our heritage, and build meaningful connections that
                drive personal and professional growth.
              </p>
            </div>
          </div>
          <div className="right-side">
            <div>
              <h1 className="text-lg font-bold mb-4">Social Media</h1>
            </div>
            <div>logos</div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
