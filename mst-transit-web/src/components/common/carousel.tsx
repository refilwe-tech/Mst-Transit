import { Carousel } from "@trendyol-js/react-carousel";
import { FC } from "react";
import { ChickenLicken, KFC, KotaKhona, MegaBus } from "../../assets";

export const PartnersCarousel: FC = () => {
  const images = [
    { original: MegaBus },
    { original: KFC },
    { original: ChickenLicken },
    { original: KotaKhona },
    { original: MegaBus },
    { original: KFC },
    { original: ChickenLicken },
    { original: KotaKhona },
    { original: MegaBus },
    { original: KFC },
    { original: ChickenLicken },
    { original: KotaKhona },
    { original: MegaBus },
  ];
  return (
    <Carousel autoSwipe={1000} swiping slide={2} show={6} transition={0.5}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.original}
          alt="partner"
          className="w-24 h-24 md:w-32 md:h-32"
        />
      ))}
    </Carousel>
  );
};
