import Image from "next/image";
import React from "react";
import "./responsiveMenu.css";

export const ResponsiveMenu = () => {
  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className=" drawer-button bg-dark ">
            <Image
              src="/icon-menu.svg"
              alt="icone do menu"
              width={40}
              height={40}
            />
          </label>
        </div>
        <div className="drawer-side  " style={{ overflowY: "hidden" }}>
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 mt-[72px] w-80 min-h-full bg-dark  text-base-content ">
            {/* Sidebar content here */}
            <li>
              <a
                className="text-light"
                style={{
                  font: "400 16px/150% 'Poppins', sans-serif",
                  cursor: "pointer",
                }}
              >
                Início
              </a>
            </li>
            <li>
              <a
                className="text-light"
                style={{
                  font: "400 16px/150% 'Poppins', sans-serif",
                  cursor: "pointer",
                }}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                className="text-light"
                style={{
                  font: "400 16px/150% 'Poppins', sans-serif",
                  cursor: "pointer",
                }}
              >
                Portifólio
              </a>
            </li>
            <li>
              <div className="bg-primary rounded-0  pt-2 pr-5 pb-2 pl-5 flex flex-row gap-2 items-center justify-center shrink-0 relative ">
                <button
                  className="text-light text-left relative"
                  style={{ font: "400 16px/150% 'Poppins', sans-serif" }}
                >
                  Peça um orçamento Gratis!{" "}
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
