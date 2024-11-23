import { useTranslation } from "@/hooks";

export const useContactData = () => {
  const t = useTranslation();
  return {
    company: { type: "text", name: t.companyName },
    fullName: { type: "text", name: t.fish },
    phone: { type: "text", name: t.phoneNumber },
  };
};
