import {
  AiIcon,
  CrmIcon,
  ElipseIcon,
  GameIcon,
  LogoBrendIcon,
  MobilIcon,
  WebsiteIcon,
} from "@/assets/icons";
import { Card } from "@/components/card";

const Services = () => {
  return (
    <section id="services" className="py-[100px]">
      <h2 className="text-center font-bold text-linkColor text-[32px] mdl:text-[50px] uppercase mb-[60px]">
        Xizmatlarimiz
      </h2>
      <div className="flex flex-col gap-8 mdl:gap-[46px]">
        {/* column 1 */}
        <div className="relative grid grid-cols-1 mdl:grid-cols-2 gap-8 mdl:gap-[96px]">
          <Card
            title={"Veb - saytlar"}
            description={`Korporativ veb saytlardan tortib veb ilovalargacha boʻlgan murakkablikdagi internet saytlarni sifat kafolati bilan ishlab chiqamiz`}
            icon={<WebsiteIcon className="mdl:w-auto mdl:h-auto w-8 h-8" />}
          />
          <Card
            title={"Mobil ilovalar"}
            description={`Istalgan qiyinchilikdagi mobil ilovalarni ishlab chiqish va ularni texnik qoʻllab-quvvatlash`}
            icon={<MobilIcon />}
          />
          <div className="absolute right-[80px] bottom-8 w-[139px] h-[139px] -z-10">
            <ElipseIcon />
          </div>
        </div>
        {/* column 2 */}
        <div className="relative grid grid-cols-1 mdl:grid-cols-2 gap-8 mdl:gap-[96px]">
          <Card
            title={"CRM tizimlar"}
            description={`Biznesni va jarayonlarni avtomatlashtirish, kanselyariya ishlarini 100% gacha kamaytiruvchi boshqaruv elektron tizimlarini  ishlab  chiqish`}
            icon={<CrmIcon className="mdl:w-auto mdl:h-auto w-8 h-8" />}
          />
          <Card
            title={"Logo va brending"}
            description={`Biznesni ilgari surish uchun asosiy vositalar va marketing materiallari to'plamini noldan yaratish.`}
            icon={<LogoBrendIcon  className="mdl:w-auto mdl:h-auto w-8 h-8"/>}
          />
          <div className="absolute -left-[60px] -top-[98px] w-[139px] h-[139px] -z-10 ">
            <ElipseIcon />
          </div>
        </div>
        {/* column 3 */}
        <div className="relative grid grid-cols-1 mdl:grid-cols-2 gap-8 mdl:gap-[96px]">
          <Card
            title={"O'yinlar ishlab chiqarish"}
            description={`Xalqaro darajaga mos keladigan har qanday mavzu va murakkablikdagi o'yinlarni ishlab chiqish.`}
            icon={<GameIcon  className="mdl:w-auto mdl:h-auto w-8 h-8"/>}
          />
          <Card
            title={"Sun'iy intellekt"}
            description={`Inson aql-zakovati imkoniyatlariga ega intellektual kompyuter tizimlarini ishlab chiqish`}
            icon={<AiIcon  className="mdl:w-auto mdl:h-auto w-8 h-8"/>}
          />
          <div className="absolute right-[80px] bottom-0 w-[139px] h-[139px] -z-10">
            <ElipseIcon />
          </div>
        </div>
        {/* column 4 */}
        <div className="grid grid-cols-1 mdl:grid-cols-2 gap-8 mdl:gap-[96px]">
          <Card
            title={"Kiber xavfsizlik"}
            description={`Tarmoqlar, qurilmalar, kodlar va ma'lumotlardagi zaifliklarni topish va tuzatish.`}
          />
          <Card
            title={"Telegram Bot"}
            description={`Telegram botlar mijozlaringiz bilan aloqa qilishga yordam beradi. Telegram botlar har qanday biznes boshlash uchun eng yaxshi tanlov.`}
          />
        </div>
        {/* column 5 */}
        <div className="flex justify-center ">
          <div className="w-[582px] relative">
            <Card
              title={"Internet magazine"}
              description={`Mahsulotlaringizni onlayn sotmoqchimisiz? Unda sizga Onlayn Internet Magazin xizmatimizni taklif qilamiz.`}
            />
            <div className="absolute -left-[100px] -top-[128px] w-[139px] h-[139px] -z-10 ">
              <ElipseIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
