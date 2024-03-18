import { useEffect } from "react";
import { Button, Heading, Card, PartnersCarousel } from "../..";
import { DeliveryMan } from "../../../assets";
import { CONTACTS } from "../../../contants";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash;
    document.querySelector(`${id}`)?.scrollIntoView();
  }, [hash]);

  return (
    <section className="h-full w-full flex flex-col gap-6">
      <section className="w-full h-4/5 flex items-center py-6">
        <section className="w-1/2">
          <h1 className="text-5xl">
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
      <section id="services" className="bg-secondary/10">
        <Heading heading="Our services" heading2="Helping ease your life" />
        <section className="flex gap-2 items-center">
          <section className="border border-primary/90 rounded-lg p-5 flex flex-col gap-4">
            <Card
              title="Embalenhle"
              location="Embalenhle"
              parcels="35"
              tickets="25"
              groceries="100"
            />
          </section>
          <section className="border border-primary/90 rounded-lg p-5 flex flex-col gap-4">
            <Card
              title="Secunda / Evander"
              location="Secunda / Evander"
              parcels="70"
              tickets="0"
              groceries="150"
            />
          </section>
          <section className="border border-primary/90 rounded-lg p-5 flex flex-col gap-4">
            <Card
              title="Osizweni / Brendan Village / New Estate"
              location="Embalenhle"
              parcels="60"
              tickets="0"
              groceries="0"
            />
          </section>
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
    </section>
  );
};
