"use client";
import { ButtonCTA } from "@/components/ButtonCTA";
import Image from "next/image";

export interface IHeader1Props {}

export default function Home({ ...props }: IHeader1Props): JSX.Element {
  return (
    <main className="bg-light pt-10  md:pt-0 px-10 flex items-center justify-center md:justify-between flex-wrap-reverse  shrink-0 mx-auto w-[100%] max-w-[1440px] md:h-[100vh]  ">
      <section className="flex flex-col gap-6 items-start justify-center shrink-0 w-full md:w-[50%]  relative">
        <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 relative">
          <p
            className="tracking-[5px] lg:tracking-[10px] text-highlight"
            style={{ fontWeight: "400 " }}
          >
            Desenvolvimento de sites{" "}
          </p>
          <div className="border-solid border-[#566ec1] border-t-[3px] border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[90%] h-0 relative"></div>
          <h1
            className="text-title leading-tight "
            style={{
              fontWeight: "700 ",
            }}
          >
            O próximo passo para seu negócio
          </h1>{" "}
          <p
            className="text-dark text-left relative self-stretch "
            style={{ font: "400 18px/150% 'Poppins', sans-serif" }}
          >
            Se você tem uma micro ou pequena empresa e precisa divulgar seu
            negócio de forma fácil e que passe credibilidade, chegou a hora de
            ter um site.{" "}
          </p>
        </div>
        <div className="pt-4">
          <ButtonCTA />
        </div>
      </section>

      <section className="md:block hidden md:w-[50%] w-full  ">
        <div>
          <Image
            src={"/hero-image.png"}
            alt="Ilustração de emrpesário"
            width={570}
            height={470}
          />
        </div>
      </section>
    </main>
  );
}
