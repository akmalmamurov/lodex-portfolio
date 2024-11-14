import { appleStore, googlePlay, homeImg } from "@/assets/images";
import { useForm } from "react-hook-form";

export const Home = () => {
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
    <section id="home" className="py-[90px]">
      <div className="grid grid-cols-1 gap-10 lgl:gap-20 lg:grid-cols-2">
        <div className="w-full pr-0 lg:pr-[90px]">
          <h1 className="font-semibold text-[54px] leading-[81px] mb-6">
            Develop Your Life With{" "}
            <span className="text-[#18CA90]">One Step.</span>
          </h1>
          <p className="font-normal text-linkColor text-[21px] leading-[33px] mb-[30px]">
            Pushing the possibilities of the internet. Good for the last
            software. Make it A software night.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-[36px]">
            {errors.email && (
              <p className="text-sm text-dangerColor">{errors.email.message}</p>
            )}
            <div className="flex justify-between items-center bg-white shadow-xl py-[6px] pr-[2px] rounded-[6px] pl-6">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full focus:outline-none font-normal text-[18px] text-linkColor"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
              />
              <button
                type="submit"
                className="bg-dangerColor rounded-[6px] w-[120px] h-[53px] flex items-center justify-center font-medium text-[21px] text-white"
              >
                Send
              </button>
            </div>
          </form>
          <div className="flex items-center gap-[30px]">
            <img src={googlePlay} alt="googlePlay" />
            <img src={appleStore} alt="appleStore" />
          </div>
        </div>
        <div className="">
          <img src={homeImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
