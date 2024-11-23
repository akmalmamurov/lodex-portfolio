import { useTranslation } from "@/hooks";

export const useNavLinks = () => {
  const t = useTranslation();

  return [ 
    { id: 1, title: t.home, link: "home" },
    { id: 2, title: t.aboutus, link: "about" },
    { id: 3, title: t.services, link: "services" },
    { id: 4, title: t.portfolio, link: "portfolio" },
    { id: 5, title: t.team, link: "team" },
    { id: 6, title: t.blog, link: "blog" },
    { id: 7, title: t.contact, link: "contact" },
  ];
};
