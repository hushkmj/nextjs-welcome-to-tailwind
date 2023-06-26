import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-realYellow-100 px-4 py-28 rounded-3xl shadow-2xl">
        <div className="relative top-24 space-y-2">
          <div className="border-b-2 font-medium border-black text-xs leading-loose">
            Select Destination
          </div>
          <div className="space-x-2 flex items-center">
            <button className="bg-black rounded-full w-4 h-4 text-realYellow-100 text-xxs">V</button>
            <span className="text-2xl font-semibold">Vancouver</span>
          </div>
          <div className="space-x-2 flex items-center">
            <button className="bg-black rounded-full w-4 h-4 text-realYellow-100 text-xxs">S</button>
            <span className="text-2xl font-semibold">Seattle</span>
          </div>
          <div className="space-x-2 flex items-center">
            <button className="bg-black rounded-full w-4 h-4 text-realYellow-100 text-xxs">P</button>
            <span className="text-2xl font-semibold">Portland</span>
          </div>
          <div className="space-x-2 flex items-center">
            <button className="bg-black rounded-full w-4 h-4 text-realYellow-100 text-xxs">S</button>
            <span className="text-2xl font-semibold">Seattle</span>
          </div>
          <div className="space-x-2 flex items-center">
            <button className="bg-black rounded-full w-4 h-4 text-realYellow-100 text-xxs hover:bg-white">S</button>
            <span className="text-2xl font-semibold hover:text-white">San Francisco</span>
          </div>
          <div className="space-x-2 flex items-center">
            <button className="bg-black rounded-full w-4 h-4 text-realYellow-100 text-xxs">L</button>
            <span className="text-2xl font-semibold">Los Angeles</span>
          </div>
          <div className="space-x-2 flex items-center">
            <button className="bg-black rounded-full w-4 h-4 text-realYellow-100 text-xxs">S</button>
            <span className="text-2xl font-semibold">San Diego</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;