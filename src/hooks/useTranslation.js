import uz from "@/locales/uz.json";
import en from "@/locales/en.json";
import ru from "@/locales/ru.json";
import store from "@/context/store";

const translations = {
  Uz: uz,
  Ru: ru,
  En: en,
};

export const useTranslation = () => {
  const { language } = store();
  const translation = translations[language] || translations["En"];

  return translation;
};
