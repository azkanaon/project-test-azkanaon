import "./../index.css";

const Banner = () => {
  return (
    <div className="relative overflow-hidden w-full h-96 mt-16">
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 ">
        <div className="text-white text-center">
          <h2 className="text-5xl">Ideas</h2>
          <p>Where our greet things begin</p>
        </div>
      </div>
      <div className="background-image">
        <img
          src={
            "https://images.unsplash.com/photo-1553696590-4b3f68898333?ixlib=rb-4.0.3"
          }
          alt="banner"
          className="w-full h-full object-cover brightness-75"
          loading="lazy"
        />
      </div>
      {/* Area miring */}
      <div className="absolute -bottom-[100px] left-0 w-full h-44 bg-white transform -skew-y-[4deg] " />
    </div>
  );
};

export default Banner;
