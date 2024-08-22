import earbud1 from "../../assets/earbuds/white_earbuds.png";
import earbud2 from "../../assets/earbuds/cyan_earbuds.png";
import earbud3 from "../../assets/earbuds/pink_earbud.png";
import React from "react";

const ImageList = [
  {
    id: 1,
    img: earbud1,
    price: "29.00",
    tag: "New",
    title: "Elevate Your Sound in White.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi omnis a quasi quam corporis exercitationem. Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: earbud2,
    price: "13.99",
    tag: "Sale",
    title: "Immerse in Vibrant Sound.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi omnis a quasi quam corporis exercitationem. Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    img: earbud3,
    price: "14.99",
    tag: "Hot",
    title: "Style in Pink, Sound in Sync.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi omnis a quasi quam corporis exercitationem. Lorem ipsum dolor sit amet.",
  },
];

const Hero = () => {
  const [imageId, setImageId] = React.useState(earbud1);
  const [title, setTitle] = React.useState("Smart Technology for Seamless Integration");
  const [description, setDescription] = React.useState(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi omnis a quasi quam corporis exercitationem. Lorem ipsum dolor sit amet."
  );
  return (
    <div className="min-h-[550px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background asset  */}
      <div className="h-[700px] w-[700px] bg-[pink] absolute -top-1/2 right-0 rounded-full rotate-45 -z-9 blur-[200px]">
      </div>
      <div className="container pb-8 sm:pb-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          {/* text section  */}
          <div className="flex flex-col justify-center gap-6 pt-12 lg:pr-8 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 
            data-aos="zoom-out"
            className="text-4xl lg:text-6xl font-bold">{title}</h1>
            <p 
            data-aos="slide-up"
            className="text-sm">{description}</p>
            <div data-aos="slide-up"
            data-aos-delay="200"
            >
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded hover:scale-105 duration-200">
                Order Now
              </button>
            </div>
            {/* watch controller section  */}
            <div className="flex justify-center lg:justify-left gap-6 py-2 lg:gap-14 bg-white dark:bg-black rounded-3xl" 
            >
              {ImageList.map((item) => (
                <div
                  key={item.id}
                    data-aos="zoom-in"
                  onClick={() =>{
                    setImageId(
                       item.id === 1 ? earbud1 : item.id ===2 ? earbud2 : earbud3
                   );
               setTitle(item.title);
               setDescription(item.description);
           }}
                  className="flex flex-col lg:flex-row items-center gap-1 "
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-[150px] h-[150px] object-contain inline-block hover:scale-110"
                  />
                  <div className="flex flex-col items-center justify-center lg:items-start">
                    <p className="font-bold lg:text-lg">{item.price}</p>
                    <p className="text-sm">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* image section  */}
          <div className="order-1 sm:order-2 min-h-[450px] flex justify-center items-center relative">
            <div className="h-[400px] overflow-hidden flex justify-center items-center">
              <img 
              src={imageId} 
                data-aos="zoom-in"
              alt="" 
              className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-120 object-contain mx-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
