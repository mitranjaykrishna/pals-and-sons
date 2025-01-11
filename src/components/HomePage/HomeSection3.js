import React from "react";

export default function HomeSection3() {
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
    // {
    //   image: "Image",
    //   title: "Logo Design",
    //   description:
    //     "Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo.",
    // },
  ];
  return (
    <div className="relative flex items-center min-h-[450px] px-[209px]">
      <div className="grid grid-cols-3 gap-x-[72px] gap-y-[50px] w-full">
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
      <div className="absolute bottom-[-100%] left-[-.8%] w-[110%] h-[405px] content-[''] bg-[#f8f8f8]  transform rotate-[5deg] transition-transform duration-500"></div>
    </div>
  );
}
