import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  return (
    <div className="md:hidden flex justify-around items-center pt-6">
      <div>
        <Link to="/">
          <h2 className="text-2xl text-red-600 font-semibold">Bike Rental</h2>
        </Link>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="cursor-pointer"/>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              {" "}
              <Link to="/">
                <h2 className="text-2xl text-red-600 font-semibold">
                  Bike Rental
                </h2>
              </Link>
            </SheetTitle>
          </SheetHeader>
          <Separator />
          <div className="mt-3">
            <SheetClose asChild>
              <Link to="/login">
                <p className="hover:text-red-500">Login</p>{" "}
              </Link>
            </SheetClose>
          </div>
          <div className="mt-3">
            <SheetClose asChild>
              <Link to="/signup">
                <p className="hover:text-red-500">SignUp</p>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileHeader;
