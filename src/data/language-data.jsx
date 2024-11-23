import { RuIcon, UzIcon } from "@/assets/icons";
import { usImg } from "@/assets/images";

export const languageData = [
  {
    name: "Uz",
    icon: <UzIcon className="w-5 h-5 lg:w-[22px] lg:h-[22px] rounded-full" />,
  },
  {
    name: "Ru",
    icon: <RuIcon className="w-5 h-5 lg:w-[22px] lg:h-[22px] rounded-full" />,
  },
  {
    name: "En",
    icon: <img src={usImg} alt="flag" />,
  },
];
