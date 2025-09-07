import { HousePlug, LogOut, Menu, ShoppingCart, UserCog } from "lucide-react"; 
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";

function MenuItems() {
  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => (
        <Link
          key={menuItem.id}
          to={menuItem.path}
          className="text-black text-sm font-medium hover:text-blue-600 hover:bg-gray-100 px-2 py-1 rounded transition-colors duration-300"
        >
          {menuItem.label}
        </Link>
      ))}
    </nav>
  );
}
function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      {/* Cart Button with Stronger Fading Hover */}
      <Button
        variant="outline"
        size="icon"
        className="bg-black text-white p-2 transition-all duration-500 hover:bg-gray-800 hover:opacity-60"
      >
        <ShoppingCart className="w-6 h-6" />
        <span className="sr-only">User cart</span>
      </Button>

      {/* Profile Avatar with Stronger Fading Hover */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="transition-all duration-500 hover:opacity-60 cursor-pointer">
            <Avatar className="bg-black">
              <AvatarFallback className="bg-black text-white font-extrabold">
                {user?.userName[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
  align="start"
  side="bottom"
  sideOffset={4}
  className="w-56 bg-white text-black shadow-md border border-gray-200"
  portalled={false}
>

          <DropdownMenuLabel className="text-sm font-semibold">
            Logged in as {user?.userName}
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="border-gray-300" />
          <DropdownMenuItem
            onClick={() => navigate("/shop/account")}
            className="hover:bg-gray-100 rounded transition-colors duration-300"
          >
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>

          <div className="my-1 border-t border-gray-300"></div>

          <DropdownMenuItem
            onClick={handleLogout}
            className="hover:bg-gray-100 rounded transition-colors duration-300"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}


function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/shop/home" className="flex items-center gap-2">
          <HousePlug className="h-6 w-6" />
          <span className="font-bold">Ecommerce</span>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden bg-black text-white p-2 transition-all duration-300 hover:bg-gray-800 hover:opacity-80"
            >
              <Menu className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs bg-white">
            <MenuItems />
            {isAuthenticated && <HeaderRightContent />}
          </SheetContent>
        </Sheet>

        <div className="hidden lg:block">
          <MenuItems />
        </div>

        <div className="hidden lg:block">
          {isAuthenticated && <HeaderRightContent />}
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;
