import { IoHomeOutline, IoHome } from "react-icons/io5";
import { HiOutlineClipboardList, HiClipboardList } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { BiSolidPhoneCall } from "react-icons/bi";

import {
  MdAddBusiness,
  MdOutlineAddBusiness,
  MdOutlineDeliveryDining,
} from "react-icons/md";
import { BsPersonPlusFill, BsPersonPlus } from "react-icons/bs";
import { ROUTES, ROUTE_IDS } from "../../contants";
import { Link, useLocation } from "react-router-dom";
export const Footer = () => {
  const { pathname, hash } = useLocation();
  const active = (path: string) =>
    hash === path || pathname === path
      ? "font-semibold"
      : "hover:text-secondary";

  const isActive = (path: string) => hash === path || pathname === path;

  return (
    <footer className="bottom-0 w-full sticky flex flex-col items-center md:hidden ">
      <section className="flex items-center gap-2 bg-white drop-shadow-lg w-full justify-between px-5">
        <Link
          to={ROUTE_IDS.aboutUs}
          className="p-2 flex items-center flex-col gap-1"
        >
          {isActive(ROUTE_IDS.aboutUs) ? (
            <IoHome size={25} />
          ) : (
            <IoHomeOutline size={25} />
          )}
          <p className={`${active(ROUTE_IDS.aboutUs)} text-xs text-center"`}>
            Home
          </p>
        </Link>
        <Link
          to={ROUTE_IDS.services}
          className="p-2 flex items-center flex-col gap-1"
        >
          {isActive(ROUTE_IDS.services) ? (
            <HiClipboardList size={25} />
          ) : (
            <HiOutlineClipboardList size={25} />
          )}
          <p className={`${active(ROUTE_IDS.services)} text-xs text-center`}>
            Services
          </p>
        </Link>
        <Link
          to={ROUTE_IDS.businesses}
          className="p-2 flex items-center flex-col gap-1"
        >
          {isActive(ROUTE_IDS.businesses) ? (
            <MdAddBusiness size={25} />
          ) : (
            <MdOutlineAddBusiness size={25} />
          )}
          <p className={`${active(ROUTE_IDS.businesses)} text-xs text-center`}>
            Partners
          </p>
        </Link>
        {/*  <Link
          to={ROUTES.partners}
          className="p-2 flex items-center flex-col gap-1"
        >
          {isActive(ROUTES.partners) ? (
            <BsPersonPlusFill size={25} />
          ) : (
            <BsPersonPlus size={25} />
          )}
          <p className="text-xs text-center">Add Business</p>
        </Link> */}
        <Link
          to={ROUTE_IDS.contact}
          className="p-2 flex items-center flex-col gap-1"
        >
          {isActive(ROUTE_IDS.contact) ? (
            <BiSolidPhoneCall size={25} />
          ) : (
            <LuPhoneCall size={25} />
          )}
          <p className="text-xs text-center">Contact</p>
        </Link>
        <button className="p-2 flex items-center flex-col gap-1">
          <MdOutlineDeliveryDining size={25} />
          <p className="text-xs text-center">Delivery</p>
        </button>
      </section>
      <p className="text-center w-full bg-white text-sm text-gray-500">
        &copy; 2021 MST Transit | All rights reserved
      </p>
    </footer>
  );
};
