import { useState } from "react";
import store from "@/context/store";
import { languageData } from "@/data";

const NavbarLanguage = () => {
  const { setLanguage, language } = store();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setIsOpen(false);
  };

  const currentLanguage = languageData.find((lang) => lang.name === language);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-white px-4 rounded-md py-1 shadow-md flex items-center gap-2"
      >
        {currentLanguage.icon}
        <p className="font-medium text-xl leading-[36px] text-dustColor">{language}</p>
      </button>
      {isOpen && (
        <ul className="absolute top-full left-0 mt-2 z-10 bg-white  rounded-md shadow-lg">
          {languageData
            .filter(({ name }) => name !== language)
            .map(({ name, icon }) => (
              <li
                key={name}
                onClick={() => handleLanguageSelect(name)}
                className="px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-200"
              >
                <span className="w-6 h-6">{icon}</span>
                {name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarLanguage;
