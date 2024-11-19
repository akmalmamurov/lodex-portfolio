import {
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  YouTubeIcon,
} from "@/assets/icons";
import { Container } from "@/container";

export const Footer = () => {
  return (
    <footer className="pt-[46px] pb-[8px]">
      <Container>
        <div className="flex items-start justify-between flex-wrap">
          {/* <div className="">
            <h3 className="font-bold text-white text-[32px] mb-5">Manzil:</h3>
          </div> */}
          <div className="">
            <h3 className="font-bold text-white text-xl md:text-[32px] mb-3 md:mb-5">
              Bosh sahifa
            </h3>
            <ul>
              <li className="text-white text-sm md:text-lg font-normal mb-[7px] cursor-pointer">
                Asosiy
              </li>
              <li className="text-white text-sm md:text-lg font-normal mb-[7px] cursor-pointer">
                Xizmatlar
              </li>
              <li className="text-white text-sm md:text-lg font-normal mb-[7px] cursor-pointer">
                Yangiliklar
              </li>
              <li className="text-white text-sm md:text-lg font-normal mb-[7px] cursor-pointer">
                Biz haqimizda
              </li>
              <li className="text-white text-sm md:text-lg font-normal mb-[7px] cursor-pointer">
                Tanlov
              </li>
              <li className="text-white text-lg font-normal  cursor-pointer">
                Aloqa
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-white text-lg mb-3 md:text-xl md:mb-5">
              Ijtimoiy tarmoq
            </h3>
            <div className="flex flex-col lg:flex-row items-center lg:gap-5">
              <div className="flex items-center  gap-5 lg:mb-0 mb-5">
                <a
                  href="https://www.instagram.com/akmalmamuroff"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.youtube.com/@akmalmamuroff"
                  target="_blank"
                >
                  <YouTubeIcon />
                </a>
              </div>
              <div className="flex items-center  gap-5">
                <a
                  href="https://www.facebook.com/akmal.mamuroff.5"
                  target="_blank"
                >
                  <FacebookIcon />
                </a>
                <a href="https://t.me/akmalmamuroff" target="_blank">
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex items-center justify-center pt-20 text-white">
        © 2024 lode-x group LLC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
