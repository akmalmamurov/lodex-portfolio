import { contactData } from "@/data";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <section id="contact" className="py-[90px]">
      <div className="px-0 lgl:px-[150px]">
        <div className="mb-[60px]">
          <h2 className="font-bold text-linkColor text-center text-[32px] lgl:text-[50px] uppercase mb-[44px]">
            Biz bilan bog’laning
          </h2>
          <div className="">
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
          {/* Chap tomondagi inputlar */}
          <div className="flex  justify-between lgl:gap-0 gap-20">
            <div className="flex flex-col  mdl:w-[446px] gap-4 lgl:mb-0 mb-10">
              {Object.entries(contactData).map(([key, item]) =>
                item.type !== "checkbox" ? (
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
                ) : null
              )}
            </div>
            <div className="flex flex-col gap-4">
              <label className="font-medium mb-2">
                {contactData.project_type.name}
              </label>
              {contactData.project_type.options.map((option, index) => (
                <div className="flex items-center gap-4" key={index}>
                  <input
                    type="checkbox"
                    id={`project_type_${index}`}
                    value={option}
                    {...register("project_type", {
                      required: false,
                    })}
                    className="appearance-none w-[36px] h-[36px] bg-white rounded-full border border-[#5F77C2]/70 cursor-pointer transition duration-200 relative"
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
          <div className="flex justify-center mt-[72px]">
            <button className="btn w-1/2 lgl:w-[500px] rounded-[21px] font-semibold py-[3px]  lgl:pt-1 lgl:pb-[5px] lgl:font-bold text-white text-xl lgl:text-[30px] leading-[54px]">
              Yuborish
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
