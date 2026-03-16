import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount, VscMail } from "react-icons/vsc";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Projects", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscMail size={18} />, label: "Contact", onClick: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
      <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-6">
        <div className="order-1 md:order-none">
          <h1 className="text-2xl font-bold">Luis<span className="text-violet-400">.</span></h1>
          <p className="text-zinc-400 text-sm mt-1">Full Stack Developer · Bogotá, Colombia</p>
        </div>
        <div className="flex gap-3 order-2 md:order-none">
          <a href="https://github.com/Chakerr" target="_blank" rel="noopener noreferrer"><i className="ri-github-fill ri-2x"></i></a>
          <a href="mailto:luisgas012@gmail.com"><i className="ri-mail-fill ri-2x"></i></a>
          <a href="tel:3134678133"><i className="ri-phone-fill ri-2x"></i></a>
        </div>
        <div className="order-3 md:order-none mt-15 md:mt-0 md:mb-0">
          <Dock items={items} panelHeight={30} baseItemSize={60} magnification={100} />
        </div>
      </div>
      <p className="text-zinc-600 text-xs mt-8">© 2025 Luis Gabriel Romero Castro. All rights reserved.</p>
    </div>
  );
};

export default Footer;
