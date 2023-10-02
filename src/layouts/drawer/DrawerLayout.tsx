import React from "react";
import "./drawermenu.css";

export interface IDrawerLayoutProps {
  children: React.ReactNode;
}

export const DrawerLayout = ({ ...props }: IDrawerLayoutProps): JSX.Element => {
  const isCheck = () => {};

  return (
    <div>
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */ props.children}
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
