import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import Cookies from "js-cookie";
import { ChevronDown, CircleUserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Header = () => {
  const { isAuthenticated } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev); // Use functional state update to toggle
  };
  
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("email");
    window.location.reload(); 
    toast.success("Logout Successfull")
  }

  return (
    <div className="flex justify-around items-center max-h-screen border-b py-6 max-md:hidden">
      <Link to="/">
        {" "}
        <h2 className="text-2xl text-red-600 font-semibold">Bike Rental</h2>
      </Link>
      {isAuthenticated ? (
        <div className="flex gap-4">
          <CircleUserRound />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div
                className="flex items-center gap-1"
                onClick={toggleDropdown}
              >
                Prashant{" "}
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                  
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem> <Link to="/user-profile"> User Profile</Link></DropdownMenuItem>
              <DropdownMenuItem> <button onClick={handleLogout}>Logout </button></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="cursor-pointer flex gap-7">
          <Link to="/login">
            <p className="hover:text-red-500">Login</p>{" "}
          </Link>

          <Link to="/signup">
            <p className="hover:text-red-500">SignUp</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
