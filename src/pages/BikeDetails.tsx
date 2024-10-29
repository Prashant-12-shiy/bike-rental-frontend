import { Button } from "@/components/ui/button";
import BikeImage from "../assets/mountain-bike.png";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect } from "react";

const BikeDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the page to the top
  }, []);
  return (
    <div>
      <div className="flex justify-between gap-8 items-center">
        <img
          src={BikeImage}
          alt="bikes"
          className="object-contain max-h-[400px]"
        />
        <div>
          <h2 className="font-semibold text-3xl py-4">
            Harley Davidson Street 750
          </h2>
          <p className="opacity-70 pb-4">
            The Harley Davidson Street 750 is built for the open road, providing
            a smooth and powerful ride that is unmistakably Harley. It’s perfect
            for long-distance rides and delivers a balanced mix of comfort and
            performance.
          </p>
          <p className="">Price: Rs 5000 Per Day</p>
          <Button className="bg-red-500 mt-5">Rent Now</Button>
        </div>
      </div>

      <div className="my-10">
        <h2 className="font-semibold text-2xl"> Specifications</h2>
        <Table>
          <TableCaption>Specifications </TableCaption>
          <TableHeader>
            <TableRow></TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Engine</TableCell>
              <TableCell>750cc V-Twin</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Transmission</TableCell>
              <TableCell>6-Speed Manual</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Fuel Capacity</TableCell>
              <TableCell> 13.1 liters</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mileage </TableCell>
              <TableCell>18 km/l</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Top Speed</TableCell>
              <TableCell>200 km/h</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div>
        <h2 className="font-semibold text-2xl mt-10 pb-2">Features</h2>
        <div className="mb-2">
          <p className="opacity-90">
            <span className="text-red-500 font-semibold text-[18px]">
              Comfort:{" "}
            </span>{" "}
            Ergonomic seat, low seat height for better accessibility.
          </p>
        </div>
        <div className="mb-2">
          <p>
            <span className="text-red-500 font-semibold text-[18px]">
              Performance:{" "}
            </span>{" "}
            Powerful V-Twin engine, ideal for highway cruising.
          </p>
        </div>
        <div className="mb-2">
          <p>
            <span className="text-red-500 font-semibold text-[18px]">
              Technology:{" "}
            </span>
            Digital display, easy-to-read speedometer.
          </p>
        </div>
        <div className="mb-2">
          <p>
            <span className="text-red-500 font-semibold text-[18px]">
              Safety:{" "}
            </span>{" "}
            ABS, stable cornering at high speeds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;
