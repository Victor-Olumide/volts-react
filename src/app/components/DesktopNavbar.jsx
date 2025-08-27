import { navbar } from "../dummy";
import NavbarLink from "./NavbarLink"
import CartLink from "./CartLink"

export default function DesktopNavbar() {
  const desktop = navbar.map((item, index) => (
    <NavbarLink key={index} title={item.name} link={item.href} />
  ));

  return (
    <ul className="hidden md:flex justify-between text-white bg-gray-800 px-16 py-4 gap-8">
      {desktop}
      <CartLink />
    </ul>
  );
}
