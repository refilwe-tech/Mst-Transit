import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets";
import { Button } from ".";
import { CONTACTS } from "../../contants";

export const Nav = () => {
  return (
    <nav className="bg-white flex items-center justify-between p-3 drop-shadow-md">
      <Link to="/">
        <img src={LogoIcon} className="w-20 hidden md:flex" alt="logo" />
      </Link>
      <ul className="hidden md:flex items-center justify-evenly gap-5">
        <Link to="#about-us">About us</Link>
        <Link to="#services">Services</Link>
        <Link to="#businesses">Businesses</Link>
        <Link to="#contact">Contact us</Link>
      </ul>
      <section className="hidden md:flex">
        <Button
          onClick={() => window.open(CONTACTS.whatsapp, "_blank")}
          variant="gradient"
        >
          Request Delivery
        </Button>
      </section>
    </nav>
  );
};
