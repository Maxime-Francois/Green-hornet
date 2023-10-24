'use client'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Container from "./Container";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";


const Band = () => {
  const router = useRouter()
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-weedColor py-14 band">
      <Container>
        <div className="flex lg:flex-row justify-center gap-20 items-center flex-col">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1300"
            className="flex flex-col gap-5 lg:w-[40%] md:w-[90%] sm:w-[80%] w-[80%] md:items-center lg:items-start max-w-[700px]"
          >
            <div className="flex items-center gap-2 lg:justify-start  md:justify-center ">
              <h1 className="text-2xl text-white">GREEN HORNET CBD</h1>
              <Image
                alt="logo"
                className="hidden md:block cursor-pointer"
                height="60"
                width="60"
                src="/images/hornet-logo.svg"
                data-aos="fade-down"
                data-aos-offset="300"
                data-aos-duration="2000"
              />
            </div>
            <p className=" text-white font-sans tracking-wider leading-7 lg:text-start md:text-center">
              Bienvenue chez Green Hornet, votre source de confiance pour des
              produits CBD d'une qualité exceptionnelle. Nous sommes fiers de
              vous présenter nos fleurs de chanvre cultivées avec amour et
              expertise dans les régions pittoresques de Suisse, France et
              Italie.
            </p>
            <p className=" text-white font-sans tracking-wider leading-7 lg:text-start md:text-center">
              Chaque bourgeon que nous produisons est le fruit d'un dévouement
              absolu à la qualité, de la semence à la récolte. Vous pouvez vous
              attendre à une expérience sensorielle unique avec des arômes
              envoûtants et des sensations apaisantes à chaque inhalation. Mais
              notre engagement envers l'excellence ne s'arrête pas là.
            </p>

            <div className="lg:w-[300px] md:w-inherit">
              <Button
                data-aos="fade-right"
                
                data-aos-duration="1700"
                onClick={() => router.push("/products?category=Fleurs")}
                className="bg-weedColor text-white hover:shadow-xl hover:border-solid border-2 border-weedColor hover:text-white ease-in-out duration-300 hover:scale-110  btn"
              >
                DÉCOUVRIR NOS FLEURS
              </Button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="1300"
            style={{ borderRadius: "20px", overflow: "hidden" }}
          >
            <Image
              alt="logo"
              className="hidden md:block cursor-pointer"
              src="/images/plantation.jpg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Band;
