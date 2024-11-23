import { useContactData } from "@/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../loading/Loading";
import { useTranslation } from "@/hooks";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const { register, handleSubmit, setValue, reset, formState: { errors }, } = useForm();
const t = useTranslation();
const contactData = useContactData();
  const onSubmit = async (data) => {
    const parsedData = {
      ...data,
      phone: data.phone.replace(/\s+/g, ""),
    };

    try {
      setLoading(true);
      await axios.post("https://lx.saidnet.uz/api/order/create", parsedData);
      toast.success("Tez orada siz bilan bog'lanamiz");
      reset();
    } catch (error) {
      toast.error("Xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://lx.saidnet.uz/api/service/get-all"
      );
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  const phoneChange = (e) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    if (value.startsWith("998")) value = "+" + value;
    else value = "+998" + value;
    if (value.length > 4) value = value.slice(0, 4) + " " + value.slice(4);
    if (value.length > 7) value = value.slice(0, 7) + " " + value.slice(7);
    if (value.length > 11) value = value.slice(0, 11) + " " + value.slice(11);
    if (value.length > 14) value = value.slice(0, 14) + " " + value.slice(14);
    if (value.length > 17) value = value.slice(0, 17);

    e.target.value = value;
  };
  const handleCheckboxChange = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
      setValue("serviceId", null);
    } else {
      setSelectedId(id);
      setValue("serviceId", id);
    }
  };
  return (
    <section id="contact" className="py-[90px]">
      <div className="px-0 lgl:px-[150px]">
        <div className="mb-[60px]">
          <h2 className="font-bold text-linkColor text-center text-[32px] lgl:text-[50px] uppercase mb-[44px]">
            {t.contactTitle}
          </h2>
          <div>
            <h4 className="font-bold text-[32px] text-center lgl:text-[50px] text-linkColor leading-[75px] lgl:text-left">
            {t.kontakt}:
            </h4>
            <p className="font-normal text-linkColor text-center text-base lgl:text-left lgl:text-2xl">
             {t.contactText}
            </p>
          </div>
        </div>
        <form id="contact-add" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-col flex md:flex-row justify-between lgl:gap-0 md:gap-10">
            {/* Left Input Fields */}
            <div className="flex flex-col mdl:w-[446px] gap-4 mb-5 md:mb-0 ">
              {Object.entries(contactData).map(([key, item]) =>
                item.type !== "checkbox" ? (
                  key === "phone" ? (
                    <div className="flex flex-col" key={key}>
                      <label htmlFor={key} className="mb-2 font-medium">
                        {item.name}
                      </label>
                      <input
                        type="text"
                        maxLength={17}
                        className="border-[0.2px] border-black/30 rounded-[8px] p-2"
                        id={key}
                        placeholder="+998"
                        {...register(key, {
                          required: "This field is required",
                          minLength: {
                            value: 17,
                            message: "Noto'g'ri telefon raqam",
                          },
                          maxLength: {
                            value: 17,
                            message: "Noto'g'ri telefon raqam",
                          },
                          onChange: (e) => phoneChange(e),
                        })}
                      />
                      {errors[key] && (
                        <span className="text-red-500 text-sm">
                          {errors[key].message}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col" key={key}>
                      <label htmlFor={key} className="mb-2 font-medium">
                        {item.name}
                      </label>
                      <input
                        type={item.type}
                        className="border-[0.2px] border-black/30 rounded-[8px] p-2"
                        id={key}
                        {...register(key, {
                          required: "This field is required",
                        })}
                      />
                      {errors[key] && (
                        <span className="text-red-500 text-sm">
                          {errors[key].message}
                        </span>
                      )}
                    </div>
                  )
                ) : null
              )}
              <div className="flex flex-col">
                <label htmlFor={"description"} className="mb-2 font-medium">
                 {t.projectDescription}
                </label>
                <textarea
                  name=""
                  id="description"
                  className="border-[0.2px] border-black/30 rounded-[8px] p-2"
                  {...register("description", {
                    required: "This field is required",
                  })}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500 text-sm">
                    {errors.description.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="font-normal text-base text-linkColor mb-2 mdl:hidden block">
                {t.projectType}:
              </label>
              <div className="flex mdl:flex-col flex-wrap gap-2 mdl:gap-4">
                <label className="font-normal text-base text-linkColor mb-2 mdl:block hidden">
                  {t.projectType}:
                </label>
                <div >
                  {data?.map((item) => (
                    <div className="flex items-center gap-4 mb-2" key={item?.id}>
                      <input
                        type="checkbox"
                        id={`service_${item?.id}`}
                        checked={selectedId === item?.id}
                        onChange={() => handleCheckboxChange(item?.id)}
                        className="w-[36px] h-[36px] bg-white rounded-full border border-[#5F77C2]/70 cursor-pointer transition duration-200 relative"
                      />
                      <label
                        htmlFor={`service_${item?.id}`}
                        className="text-base lgl:text-lg font-medium cursor-pointer"
                      >
                        {item?.title}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.serviceId && (
                  <span className="text-red-500 text-sm">
                    {errors.serviceId.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[72px]">
            <button className="btn w-1/2 lgl:w-[500px] rounded-[21px] font-semibold py-[3px]  lgl:pt-1 lgl:pb-[5px] lgl:font-bold text-white text-xl lgl:text-[30px] leading-[54px]">
              {loading ? <Loading /> : t.send}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
