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
    <section id="home" className="pt-[100px]">
      <div className="grid grid-cols-1 gap-10 lg:gap-20 lg:grid-cols-2">
        <div className="w-full pr-0 lg:pr-[90px]">
          <h1 className="font-semibold text-center text-[32px]   mdl:text-left mdl:text-[44px] lg:text-[54px] lg:leading-[81px] mb-6">
            Develop Your Life With{" "}
            <span className="text-[#18CA90]">One Step.</span>
          </h1>
          <p className="font-normal text-linkColor w-full text-center text-base mdl:text-left mdl:text-[18px] lg:text-[21px] leading-[33px] mb-[30px] lg:w-auto ">
            Pushing the possibilities of the internet. Good for the last
            software. Make it A software night.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" lg:w-auto  lg:m-auto mx-auto"
          >
            {errors.email && (
              <p className="text-sm text-dangerColor">{errors.email.message}</p>
            )}
            <div className="flex justify-between items-center bg-white shadow-xl  pr-[2px] rounded-[6px] py-[6px]  pl-6">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full focus:outline-none font-normal text-sm mdl:text-[18px] text-linkColor"
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
                className="bg-dangerColor flex items-center justify-center text-sm w-[80px] h-8  rounded-[6px]  font-medium mdl:w-[120px] mdl:h-[53px] mdl:text-[21px] text-white"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <img src={homeImg} alt="homeImg" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Home;
