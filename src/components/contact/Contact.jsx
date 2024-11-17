import { contactData } from "@/data";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loading from "../loading/Loading";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  return (
    <section id="contact" className="py-[90px]">
      <div className="px-0 lgl:px-[150px]">
        <div className="mb-[60px]">
          <h2 className="font-bold text-linkColor text-center text-[32px] lgl:text-[50px] uppercase mb-[44px]">
            Biz bilan bog’laning
          </h2>
          <div>
            <h4 className="font-bold text-[32px] text-center lgl:text-[50px] text-linkColor leading-[75px] lgl:text-left">
              Contact:
            </h4>
            <p className="font-normal text-linkColor text-center text-base lgl:text-left lgl:text-2xl">
              Ushbu birlamchi ma’lumotlarni to‘ldirganingizdan so‘ng bizning
              mas’ul xodimlarimiz siz bilan aloqaga chiqishadi.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-col flex md:flex-row justify-between lgl:gap-0 md:gap-10">
            {/* Left Input Fields */}
            <div className="flex flex-col mdl:w-[446px] gap-4 ">
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
                          required: "Telefon raqam majburiy maydon",
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
                  Loyiha tavsifi
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
                {contactData.project_type.name}
              </label>
              <div className="flex mdl:flex-col flex-wrap gap-2 mdl:gap-4">
                <label className="font-normal text-base text-linkColor mb-2 mdl:block hidden">
                  {contactData.project_type.name}
                </label>
                {contactData.project_type.options.map((option, index) => (
                  <div className="flex items-center gap-2 mdl:gap-4" key={index}>
                    <input
                      type="radio"
                      id={`project_type_${index}`}
                      value={option}
                      // {...register("project_type")}
                      className="w-[36px] h-[36px] bg-white rounded-full border border-[#5F77C2]/70 cursor-pointer transition duration-200 relative"
                    />
                    <label
                      htmlFor={`project_type_${index}`}
                      className="text-base lgl:text-lg font-medium cursor-pointer"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[72px]">
            <button className="btn w-1/2 lgl:w-[500px] rounded-[21px] font-semibold py-[3px]  lgl:pt-1 lgl:pb-[5px] lgl:font-bold text-white text-xl lgl:text-[30px] leading-[54px]">
              {loading ? <Loading /> : "Yuborish"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
