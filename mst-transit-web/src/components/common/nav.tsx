import { Link, useLocation } from "react-router-dom";
import { LogoIcon } from "../../assets";
import { Button } from ".";
import { CONTACTS } from "../../contants";

export const Nav = () => {
  const { pathname, hash } = useLocation();

  const active = (path: string) => {
    return hash === path || pathname === path
      ? "text-secondary font-semibold"
      : "hover:text-secondary";
  };
  return (
    <nav className="bg-white flex items-center justify-between p-3 drop-shadow-md fixed w-full">
      <Link to="/">
        <img src={LogoIcon} className="w-20 hidden md:flex" alt="logo" />
      </Link>
      <ul className="hidden md:flex items-center justify-evenly gap-5">
        <Link className={`${active("#about-us")}`} to="#about-us">
          About us
        </Link>
        <Link className={`${active("#services")}`} to="#services">
          Services
        </Link>
        <Link className={`${active("#businesses")}`} to="#businesses">
          Businesses
        </Link>
        <Link className={`${active("/partner")}`} to="/partner">
          Partner with us
        </Link>
        <Link className={`${active("#contact")}`} to="#contact">
          Contact us
        </Link>
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
