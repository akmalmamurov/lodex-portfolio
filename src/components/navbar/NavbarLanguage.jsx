import { useEffect, useRef, useState } from "react";
import store from "@/context/store";
import { languageData } from "@/data";

const NavbarLanguage = () => {
  const { setLanguage, language } = store();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const btnRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current &&
        btnRef.current &&
        !btnRef.current.contains(event.target) &&
        !ref.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const currentLanguage = languageData.find((lang) => lang.name === language);

  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <button
        ref={btnRef}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="bg-white px-4 rounded-md py-1 shadow-md flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <span>{currentLanguage.icon}</span>
        <p className="font-medium text-xl leading-[36px] text-dustColor">
          {language}
        </p>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          ref={ref}
          role="listbox"
          className="absolute  left-0 mt-1 z-10 bg-white rounded-md shadow-lg focus:outline-none"
        >
          {languageData
            .filter(({ name }) => name !== language)
            .map(({ name, icon }) => (
              <li
                key={name}
                role="option"
                onClick={() => handleLanguageSelect(name)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleLanguageSelect(name);
                }}
                tabIndex={0}
                className="px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
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
