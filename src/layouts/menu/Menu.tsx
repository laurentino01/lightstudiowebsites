/* Code generated with AutoHTML Plugin for Figma */

import Image from "next/image";
import { ResponsiveMenu } from "./ResponsiveMenu";

export interface INavbar1Props {}

export const Menu = ({ ...props }: INavbar1Props): JSX.Element => {
  return (
    <header
      className="bg-dark mx-auto px-5 flex flex-col gap-0 items-center justify-center shrink-0  max-w-[1440px] h-[72px] relative overflow-hidden"
      style={{ boxShadow: "inset 0px -1px 0px 0px rgba(0, 0, 0, 1.00)" }}
    >
      <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
        <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
          <Image
            src="/logo.png"
            alt="logo da lightstudio websites"
            width={139}
            height={40}
          />
        </div>
        <div className="flex md:hidden">
          <ResponsiveMenu />
        </div>
        <nav className=" hidden bg-dark md:flex flex-row gap-8 items-center justify-center shrink-0 relative">
          <div className="flex flex-row gap-8 items-start justify-start shrink-0 relative overflow-hidden">
            <div
              className="text-light text-left relative "
              style={{
                font: "400 16px/150% 'Poppins', sans-serif",
                cursor: "pointer",
              }}
            >
              Início{" "}
            </div>
            <div
              className="text-light text-left relative"
              style={{
                font: "400 16px/150% 'Poppins', sans-serif",
                cursor: "pointer",
              }}
            >
              Serviços{" "}
            </div>
            <div
              className="text-light text-left relative"
              style={{
                font: "400 16px/150% 'Poppins', sans-serif",
                cursor: "pointer",
              }}
            >
              Portfólio{" "}
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center justify-center shrink-0 relative">
            <div className="bg-primary border-solid border-[#566ec1] border pt-2 pr-5 pb-2 pl-5 flex flex-row gap-2 items-center justify-center shrink-0 relative ">
              <button
                className="text-light text-left relative"
                style={{ font: "400 16px/150% 'Poppins', sans-serif" }}
              >
                Peça um orçamento Gratis!{" "}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
