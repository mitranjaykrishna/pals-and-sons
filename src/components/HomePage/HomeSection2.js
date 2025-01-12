import React from "react";

export default function HomeSection2() {
  let data = [
    {
      image: "Image",
      title: "Logo Design",
      description:
        "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo.",
    },
    {
      image: "Image",
      title: "Logo Design",
      description:
        "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo.",
    },
    {
      image: "Image",
      title: "Logo Design",
      description:
        "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo.",
    },
    {
      image: "Image",
      title: "Logo Design",
      description:
        "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo.",
    },
  ];
  return (
    <div className="relative flex items-center min-h-screen px-5 md:px-[209px] bg-[#f8f8f8] ">
      <div className="grid grid-cols-[80%_20%] md:grid-cols-[70%_30%] h-full bg-section2-background bg-right bg-[length:94%] bg-no-repeat">
        <div className="grid grid-rows-2 md:grid-cols-2 gap-x-[72px] gap-y-[50px] w-full">
          {data?.map((ele, index) => (
            <div key={index} className="flex flex-col gap-4">
              <span>{ele.image}</span>
              <span className=" text-[28px] font-thin text-[#222222]">
                {ele.title}
              </span>
              <span className="text-lg font-thin text-[#c1c1c1]">
                {ele.description}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[-24%] md:bottom-[-42%] left-[-.8%] w-full md:w-[110%] h-[200px] md:h-[405px] content-[''] bg-white transform rotate-[-5deg] transition-transform duration-500"></div>
    </div>
  );
}
