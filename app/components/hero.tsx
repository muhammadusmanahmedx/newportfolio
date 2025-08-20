"use client";

import { Gravity, MatterBody } from "./gravity";

function Preview() {
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // Make sure to add your CV file to the public folder
    link.download = 'Won_Solutions_CV.pdf';
    link.click();
  };

  return (
    <div className="w-full h-full min-h-[500px] flex flex-col relative font-azeretMono bg-pink-50">
        
     <p className="pt-20 text-base sm:text-xl md:text-2xl text-pink-800 w-full text-center">
        i'm
      </p>
      
      <div className="pt-2 text-6xl sm:text-7xl md:text-8xl text-pink-900 w-full text-center font-calendas italic">
        Fatima Nazir
      </div>
      
      {/* Download CV Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleDownloadCV}
          className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Download CV
        </button>
      </div>

      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-pink-600 text-white rounded-full hover:cursor-pointer px-8 py-4">
            react
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="30%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-pink-500 text-white rounded-full hover:cursor-grab px-8 py-4">
            typescript
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="40%"
          y="20%"
          angle={10}
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-pink-700 text-white rounded-full hover:cursor-grab px-8 py-4">
            motion
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="75%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-pink-800 text-white rounded-full hover:cursor-grab px-8 py-4">
            tailwind
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="80%"
          y="20%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-pink-400 text-white rounded-full hover:cursor-grab px-8 py-4">
            drei
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="50%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-pink-900 text-white rounded-full hover:cursor-grab px-8 py-4">
            matter-js
          </div>
        </MatterBody>
      </Gravity>
    </div>
  );
}

export { Preview };