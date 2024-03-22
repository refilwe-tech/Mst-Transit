import { IoHomeOutline, IoHome } from "react-icons/io5";
import { HiOutlineClipboardList, HiClipboardList } from "react-icons/hi";
import { FaMotorcycle, FaRegHandshake } from "react-icons/fa";
import { MdAddBusiness, MdOutlineAddBusiness } from "react-icons/md";
import { FaHandshake } from "react-icons/fa6";
import { BsPersonPlusFill, BsPersonPlus } from "react-icons/bs";
import { ROUTES, ROUTE_IDS } from "../../contants";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="bottom-0 w-full sticky flex flex-col items-center gap-2 md:hidden ">
      <section className="flex items-center gap-2 bg-white drop-shadow-lg w-full justify-between px-5">
        <Link
          to={ROUTE_IDS.aboutUs}
          className="p-2 flex items-center flex-col gap-1"
        >
          <IoHomeOutline size={20} />
          <p className="text-xs text-center">Home</p>
        </Link>
        <Link
          to={ROUTE_IDS.services}
          className="p-2 flex items-center flex-col gap-1"
        >
          <HiOutlineClipboardList size={20} />
          <p className="text-xs text-center">Services</p>
        </Link>
        <Link
          to={ROUTE_IDS.businesses}
          className="p-2 flex items-center flex-col gap-1"
        >
          <MdOutlineAddBusiness size={20} />
          <p className="text-xs text-center">Partners</p>
        </Link>
        <Link
          to={ROUTES.partners}
          className="p-2 flex items-center flex-col gap-1"
        >
          <BsPersonPlus size={20} />
          <p className="text-xs text-center">Add Business</p>
        </Link>
        <button className="p-2 flex items-center flex-col gap-1">
          <FaMotorcycle size={25} />
          <p className="text-xs text-center">Delivery</p>
        </button>
      </section>
      <p className="text-center w-full bg-white text-sm text-gray-500">
        &copy; 2021 MST Transit | All rights reserved
      </p>
    </footer>
  );
};
