import { useForm } from "react-hook-form";

export const Contact = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
  return (
    <section id="contact" className="py-[90px]">
      <div className="flex w-full flex-col items-center">
        <div className="mb-[60px]">
          <h2 className="text-center font-bold text-linkColor text-[32px] mdl:text-[50px] uppercase mb-[44px]">
            Biz bilan bog’laning
          </h2>
          <h4>Contact:</h4>
          <p>
            Ushbu birlamchi ma’lumotlarni to‘ldirganingizdan so‘ng bizning
            mas’ul xodimlarimiz siz bilan aloqaga chiqishadi.
          </p>
        </div>
        <form action="">

        </form>
      </div>
    </section>
  );
};

export default Contact;
