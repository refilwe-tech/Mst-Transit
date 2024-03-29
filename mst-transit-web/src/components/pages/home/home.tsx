import { useEffect } from "react";
import { Button, Heading, Card, PartnersCarousel } from "../..";
import { DeliveryMan } from "../../../assets";
import { CONTACTS } from "../../../contants";
import { useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";

export const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash;
    document.querySelector(`${id}`)?.scrollIntoView();
  }, [hash]);

  return (
    <section className="h-full w-full flex flex-col gap-6">
      <section id="about-us" className="w-full h-4/5 flex items-center py-6">
        <section className="w-1/2">
          <h1 className="md:text-5xl">
            Let us{" "}
            <em className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-600">
              handle
            </em>{" "}
            all your{" "}
            <em className="font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-primary to-secondary">
              transportation
            </em>{" "}
            <strong className="font-extrabold">needs</strong>.
          </h1>
          <p className="py-10">
            The best Food and Parcel Delivery service business in Embalenhle.
          </p>
          <Button
            onClick={() => window.open(CONTACTS.whatsapp, "_blank")}
            variant="gradient"
          >
            Request Delivery
          </Button>
        </section>
        <section className="w-1/2">
          <img src={DeliveryMan} alt="placeholder" />
        </section>
      </section>
      <section id="businesses" className="">
        <Heading heading="Meet the businesses" heading2="We are working with" />
        <section className="flex flex-col gap-4">
          <PartnersCarousel />
          <section className="flex flex-col justify-center items-center">
            <>
              <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Partner with us
              </h1>
              <p className="text-lg text-center">
                We are always looking for new businesses to partner with. If you
                are interested in partnering with us, please add your business
                details. So that we can connect our customers with your
                business.
              </p>
            </>
            <section className="flex gap-2 items-center">
              <Button
                onClick={() => window.open(CONTACTS.whatsapp, "_blank")}
                variant="circle"
              >
                +
              </Button>
              <p className="text-xl font-semibold">Add your business</p>
            </section>
          </section>
        </section>
      </section>
      <section id="services" className="w-full">
        <Heading heading="Our services" heading2="Parcel & Food Delivery" />
        <section className="grid md:grid-cols-3 gap-6 py-10 items-center w-full">
          <Card
            color="bg-tertiary"
            number="#1"
            title="Embalenhle"
            parcels="35"
            tickets="25"
            groceries="100"
            afterHours
          />
          <Card
            color="bg-quaternary"
            number="#2"
            title="Secunda / Evander"
            parcels="70"
            tickets="0"
            groceries="150"
          />
          <Card
            color="bg-tertiaryDark"
            number="#3"
            title="Osizweni / Brendan Village / New Estate"
            parcels="60"
            tickets="0"
            groceries="0"
          />
        </section>
      </section>

      <section id="contact-us" className="flex flex-col gap-4">
        <Heading heading="Contact us" heading2="Get in touch with us" />
        <section className="flex flex-col gap-4 items-center">
          <section className="flex flex-col gap-4 items-center">
            <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Contact us
            </h1>
            <p className="text-lg text-center">
              If you have any questions or concerns, please feel free to contact
              us. We are always happy to help.
            </p>
          </section>
          <section className="flex justify-center items-center gap-3 py-4">
            <button className="drop-shadow-lg bg-white rounded-full p-2">
              <FaWhatsapp size={40} />
            </button>
            <button
              onClick={() => window.open(CONTACTS.facebook, "_blank")}
              className="drop-shadow-lg bg-white rounded-full p-2"
            >
              <FaMeta size={40} />
            </button>
          </section>
          <section className="flex gap-4 items-center">
            <Button
              onClick={() => window.open(CONTACTS.whatsapp, "_blank")}
              variant="gradient"
            >
              Request Delivery
            </Button>
            <Button
              onClick={() => window.open(CONTACTS.whatsapp, "_blank")}
              variant="outline"
            >
              Send us a message
            </Button>
          </section>
        </section>
      </section>
    </section>
  );
};
