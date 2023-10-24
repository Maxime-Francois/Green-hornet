'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@mui/material";
import Container from "./Container";
import { MdWorkspacePremium } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { useEffect } from "react";

const IconBand = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <div className="iconBand">
      <Container>
        <div className="flex flex-col gap-10 items-center">
          <h2 className="text-2xl text-white">NOS SERVICES</h2>
          <div className="flex item-start gap-8 justify-center flex-wrap">
            <div
              className="flex flex-col items-center w-[350px] gap-4 bg-weedColor p-7 rounded-xl"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="1300"
            >
              <MdWorkspacePremium size={50} color="white" />
              <h3 className="text-xl text-white">Qualité premium</h3>

              <p className="font-sans text-center text-white">
                Nos produits CBD premium sont le fruit d'un engagement total
                envers l'excellence. Explorez des arômes envoûtants et des
                sensations apaisantes pour un bien-être incomparable.
              </p>
            </div>
            <div
              className="flex flex-col items-center w-[350px] gap-4 bg-weedColor p-7 rounded-xl"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="1700"
            >
              <RiSecurePaymentLine size={50} color="white" />
              <h3 className="text-xl text-white">Paiement sécurisé</h3>

              <p className="font-sans text-center text-white">
                Nous mettons tout en œuvre pour sécuriser vos achats, car votre
                confiance est une priorité pour nous
              </p>
            </div>
            <div
              className="flex flex-col items-center w-[350px] gap-4 bg-weedColor p-7 rounded-xl"
              data-aos="fade-up"
              data-aos-offset="300"
              data-aos-duration="1900"
            >
              <TbTruckDelivery size={50} color="white" />
              <h3 className="text-xl text-white">Livraison Gratuite</h3>

              <p className="font-sans text-center text-white">
                Dès 39 € d'achat, profitez de votre livraison gratuite partout
                en France !
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IconBand;
