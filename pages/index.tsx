import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-yellow-300 px-6 py-36 rounded-3xl shadow-2xl">
        <div className="relative top-32 space-y-2">
          <div className="border-b-2 font-medium border-black text-xs leading-loose">
            Select Destination
          </div>
          <div className="space-x-3 flex items-center">
            <button className="bg-black rounded-full w-6 h-6 text-yellow-300 text-xs">V</button>
            <span className="text-3xl font-semibold">Vancouver</span>
          </div>
          <div className="space-x-3 flex items-center">
            <button className="bg-black rounded-full w-6 h-6 text-yellow-300 text-xs">S</button>
            <span className="text-3xl font-semibold">Seattle</span>
          </div>
          <div className="space-x-3 flex items-center">
            <button className="bg-black rounded-full w-6 h-6 text-yellow-300 text-xs">P</button>
            <span className="text-3xl font-semibold">Portland</span>
          </div>
          <div className="space-x-3 flex items-center">
            <button className="bg-black rounded-full w-6 h-6 text-yellow-300 text-xs">S</button>
            <span className="text-3xl font-semibold">Seattle</span>
          </div>
          <div className="space-x-3 flex items-center">
            <button className="bg-black rounded-full w-6 h-6 text-yellow-300 text-xs hover:bg-white">S</button>
            <span className="text-3xl font-semibold hover:text-white">San Francisco</span>
          </div>
          <div className="space-x-3 flex items-center">
            <button className="bg-black rounded-full w-6 h-6 text-yellow-300 text-xs">L</button>
            <span className="text-3xl font-semibold">Los Angeles</span>
          </div>
          <div className="space-x-3 flex items-center">
            <button className="bg-black rounded-full w-6 h-6 text-yellow-300 text-xs">S</button>
            <span className="text-3xl font-semibold">San Diego</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;