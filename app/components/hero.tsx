"use client";

function Preview() {
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Make sure to add your CV file to the public folder
    link.download = "Won_Solutions_CV.pdf";
    link.click();
  };

  return (
    <div className="w-full h-full min-h-[500px] flex flex-col relative font-azeretMono bg-pink-50">
      <p className="pt-20 text-base sm:text-xl md:text-2xl text-pink-800 w-full text-center">
        i'm
      </p>

      <div className="pt-2 text-6xl sm:text-7xl md:text-8xl text-pink-900 w-full text-center font-calendas italic">
        My Name
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
    </div>
  );
}

export { Preview };
