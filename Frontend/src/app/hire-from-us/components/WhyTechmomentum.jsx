const WhyTechmomentum = () => {
  let cardData = [
    {
      title: "Zero Cost Hiring",
      points: [
        "Discover Career Opportunities within our network",
        "Discover Career Opportunities within our network",
      ],
    },
  ];
  return (
    <div className="w-full mt-10 py-8 bg-[#0A0A0A] text-white">
      <div className="w-[80%] mx-auto ">
        {/* Heading section */}
        <div>
          <h1 className="text-[#78B6FF] font-semibold uppercase text-2xl mb-3">
            Why Techmomentum?
          </h1>
          <p className="text-slate-400">
            In this quiz, you will be tested on Core Java basics and OOPS
            concepts. There are some code snippets too to test your basic Java
            coding{" "}
          </p>
        </div>

        {/* Cards section */}
        <div className="w-full relative flex gap-3 h-[350px] my-6 ">
          <div className="w-1/4 absolute h-[200px] p-6 mt-8 bg-[#181D2E]">
            <h2 className="font-semibold text-md mb-3">Zero Cost Hiring</h2>
            <ul className="list-disc marker:text-white marker:text-xl ps-3">
              <li className="text-slate-300">Discover Career Opportunities within our network</li>
              <li className="text-slate-300">Discover Career Opportunities within our network</li>
            </ul>
          </div>
          <div className="w-1/4 absolute top-[100px] left-[27%] h-[200px] p-6 mt-8 bg-[#181D2E]">
            <h2 className="font-semibold text-md mb-3">Montored Profiles</h2>
            <ul className="list-disc marker:text-white marker:text-xl ps-3">
              <li className="text-slate-300">Discover Career Opportunities within our network</li>
              <li className="text-slate-300">Discover Career Opportunities within our network</li>
            </ul>
          </div>
          <div className="w-1/4 absolute top-0 left-[54%] h-[200px] p-6 mt-8 bg-[#181D2E]">
            <h2 className="font-semibold text-md mb-3">Year-Round Process</h2>
            <ul className="list-disc marker:text-white marker:text-xl ps-3">
              <li className="text-slate-300">Discover Career Opportunities within our network</li>
              <li className="text-slate-300">Discover Career Opportunities within our network</li>
            </ul>
          </div>
          <div className="w-1/4 absolute top-[100px] left-[80%] h-[200px] p-6 mt-8 bg-[#181D2E]">
            <h2 className="font-semibold text-md mb-3">Zero Cost Hiring</h2>
            <ul className="list-disc marker:text-white marker:text-xl ps-3">
              <li className="text-slate-300">Discover Career Opportunities within our network</li>
              <li className="text-slate-300">Discover Career Opportunities within our network</li>
            </ul>
          </div>
        </div>

        {/* Button */}
        <div className="w-auto flex justify-center mt-6">
          <button className="bg-transparent max-h-10 p-4 gap-1 border-2 border-white rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <span>Start Hiring</span>
            <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
              ›
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyTechmomentum;
