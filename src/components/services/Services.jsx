import { ElipseIcon } from "@/assets/icons";
import { Card } from "@/components/card";
import axios from "axios";
import { useEffect, useState } from "react";

export const Services = () => {
  const [data, setData] = useState([]);
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
  return (
    <section id="services" className="py-[100px]">
      <h2 className="text-center font-bold text-linkColor text-[32px] mdl:text-[50px] uppercase mb-[60px]">
        Xizmatlarimiz
      </h2>
      <div className="flex flex-col gap-8 mdl:gap-[46px]">
        {/* column 1 */}
        <div className="relative grid grid-cols-1 mdl:grid-cols-2 gap-8 mdl:gap-[96px]">
          <Card
            title={data[0]?.title}
            description={data[0]?.about}
            image={data[0]?.image}
          />
          <Card
            title={data[1]?.title}
            description={data[1]?.about}
            image={data[1]?.image}
          />
          <div className="absolute right-[80px] bottom-8 w-[139px] h-[139px] -z-10">
            <ElipseIcon />
          </div>
        </div>
        {/* column 2 */}
        <div className="relative grid grid-cols-1 mdl:grid-cols-2 gap-8 mdl:gap-[96px]">
          <Card
            title={data[2]?.title}
            description={data[2]?.about}
            image={data[2]?.image}
          />
          <Card
            title={data[3]?.title}
            description={data[3]?.about}
            image={data[3]?.image}
          />
          <div className="absolute -left-[60px] -top-[98px] w-[139px] h-[139px] -z-10 ">
            <ElipseIcon />
          </div>
        </div>
        {/* column 3 */}
        <div className="relative grid grid-cols-1 mdl:grid-cols-2 gap-8 mdl:gap-[96px]">
          <Card
            title={data[4]?.title}
            description={data[4]?.about}
            image={data[4]?.image}
          />
          <Card
            title={data[5]?.title}
            description={data[5]?.about}
            image={data[5]?.image}
          />
          <div className="absolute right-[80px] bottom-0 w-[139px] h-[139px] -z-10">
            <ElipseIcon />
          </div>
        </div>
        {/* column 4 */}
        <div className="grid grid-cols-1 mdl:grid-cols-2 gap-8 mdl:gap-[96px]">
          <Card
            title={data[6]?.title}
            description={data[6]?.about}
            image={data[6]?.image}
          />
          <Card
            title={data[7]?.title}
            description={data[7]?.about}
            image={data[7]?.image}
          />
        </div>
        {/* column 5 */}
        <div className="flex justify-start mdl:justify-center ">
          <div className="w-full mdl:w-[582px] relative">
            <Card
              title={data[8]?.title}
              description={data[8]?.about}
              image={data[8]?.image}
            />
            <div className="absolute -left-[60px] -top-[100px]  mdl:-left-[100px] mdl:-top-[128px] w-[139px] h-[139px] -z-10 ">
              <ElipseIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
