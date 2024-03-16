import { Button } from "../..";
import { DeliveryBike, DeliveryMan } from "../../../assets";
import { CONTACTS } from "../../../contants";

export const Home = () => {
  return (
    <section className="h-full w-full">
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
          <img src={DeliveryBike} alt="placeholder" />
        </section>
      </section>
      <section
        id="businesses"
        className="w-full h-1/5 flex items-center py-6"
      ></section>
    </section>
  );
};
