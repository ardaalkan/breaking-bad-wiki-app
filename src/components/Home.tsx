import logo from "../logo.png";

const Home = () => {
  return (
    <div className="m-24 bg-slate-300 p-6 rounded-sm">
      <img src={logo} alt="logo" />
      <div className="mt-12">
        <span className="font-bold text-gray-900 text-base">
          A wiki application that contains the characters, details and pictures
          of the legendary series{" "}
          <span className="text-green-800">Breaking Bad.</span>
        </span>
        <span className="ml-6 bg-green-700 text-white p-3 rounded-full hover:bg-green-600 duration-300">
          <a href="https://www.breakingbadapi.com">Breaking Bad API</a>
        </span>
      </div>
    </div>
  );
};

export default Home;
