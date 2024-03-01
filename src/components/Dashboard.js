import { FaWhatsapp } from 'react-icons/fa';

const Dashboard = () => (
  <section>
    <div className="bg-white text-center mx-4 p-8 w-full md:w-auto mt-40 mb-32">
      <h1 className="text-7xl font-bold mb-6">We Create Sleek Apps</h1>
      <p className="text-3xl mb-20">
        We’re experts in crafting products that engage your audience, set your
        brand
        <br />
        apart, and help you achieve your goals.
      </p>
      <a
        href="#challenge"
        className="text-white bg-green-500 px-5 py-4 mr-10 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600"
      >
        Get in touch
      </a>
    </div>
    <div className="grid md:grid-cols-2 md:items-center md:text-left pt-16 pb-16 mr-20 ml-20 gap-20">
      <div className="mt-4 mb-4">
        <img
          className="w-full rounded-lg"
          src="assets/images/Tech.jpg"
          alt="Tech"
        />
      </div>
      <div>
        <h2 className="text-5xl font-medium text-justify mb-14">
          Specialized in MVP launching & scaling software apps.
        </h2>
        <p className="text-2xl text-justify">
          We assist businesses of every scale in introducing software products.
          Our team comprehends your vision and transforms it into exceptional
          experiences by employing top-notch development practices. Whether
          you&apos;re initiating a new venture or expanding to greater heights,
          we stand prepared to engage as a strategic partner for your journey.
        </p>
      </div>

      <div className="text-justify">
        <h2 className="text-5xl font-medium text-justify">
          Tech Stack
          <br />
          We bet on the latest
          <br />
          technology.
        </h2>
        <p className="text-2xl text-justify mt-10">
          We use modern technologies that allow creating complex things for
          simple use.
        </p>
      </div>
      <div>
        <img
          className="w-full rounded-lg"
          src="assets/images/stack.jpg"
          alt="Tech"
        />
      </div>
    </div>
    <div>
      <div id="challenge" className="text-center mt-32 mb-32">
        <p className="text-5xl font-bold">
          Got a challenge for us?
          <br />
          <span className="text-lg mb-10">
            Or Write us now on
            <FaWhatsapp className="inline-block mx-2" />
            +1(***) ***-***-***
          </span>
        </p>
        <button
          type="button"
          className="bg-green-500 text-white px-6 py-3 rounded mt-10"
        >
          Get in touch
        </button>
      </div>
      <footer className="bg-white-800 text-black text-center py-4 relative">
        <hr className="border-t-2 border-black mb-4" />
        <div className="flex justify-between items-center px-4">
          <p className="text-sm">
            &copy; 2024. Made by OurVision+ Corporation.
          </p>
          <div className="flex">
            <a href="/privacy-policy" className="mr-4 text-black">
              Privacy Policy
            </a>
            <a href="/terms-of-use" className="text-black">
              Terms of Use
            </a>
          </div>
        </div>
      </footer>
    </div>
  </section>
);

export default Dashboard;
