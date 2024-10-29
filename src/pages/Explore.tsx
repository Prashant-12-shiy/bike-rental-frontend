import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { bikeCategories, popularBikes } from "@/staticData";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className=" w-[80vw] m-auto">
      <div className="justify-center mt-5 flex gap-5 items-center">
        <Input
          className=" border  bg-gray-200 rounded-[30px] h-10 "
          placeholder="what are you looking for?"
        />
        <Search className="cursor-pointer" />
      </div>

      <div className="mt-10">
        <h2 className="text-red-500 font-semibold text-4xl">Categories</h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {bikeCategories.map((bikes, index) => {
            return (
              <div
                key={index}
                className="border rounded-md px-5 py-3 hover:cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out"
                style={{ backgroundColor: bikes.colorCode }}
              >
                <p className="font-semibold">{bikes.name}</p>
                <p className="text-sm">
                  Available Bikes: {bikes.numberOfBikes}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-semibold text-2xl">Popular Bikes</h2>
        <div className="grid grid-cols-2 gap-2">
          {popularBikes?.map((bikes, index) => {
            return (
              <div
                key={index}
                className="flex gap-6 justify-center items-center border rounded-lg max-h-40 mt-10 "
              >
                <img
                  src={bikes.image}
                  alt="bikes"
                  className="object-contain h-full md:w-[300px] max-sm:h-[210px]"
                />
                <div>
                  <h3 className="font-semibold text-xl">{bikes.name}</h3>
                  <p className="opacity-75 text-xs">{bikes.description}</p>
                  <p className="my-1 text-sm">
                    Price: <span className="text-red-500">{bikes.price}</span>{" "}
                  </p>
                  <Link
                    to={"/bikes/" + bikes.name.toLowerCase().replace(/ /g, "-")}
                  >
                    <Button className="h-8">See More</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
