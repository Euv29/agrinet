import Image from "next/image";
import { FaGlobeAmericas } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-row justify-items-center items-center min-h-screen">
      <header className="md:w-2/4 min-h-screen">
        menu
      </header>
      <main className="border-neutral-800 border-r-2 border-l-2 w-full min-h-screen">
        <section className="flex border-neutral-800 border-b-2 w-full min-h-14 slect-feed">
          <a href="" className="flex flex-col justify-center items-center w-1/2 active option-feed">
            <p className="font-semibold text-sm">For You</p>
            <div className="borda"></div>
          </a>
          <a href="" className="flex flex-col justify-center items-center w-1/2 option-feed">
            <p className="font-semibold text-sm">Following</p>
            <div className="borda"></div>
          </a>
        </section>
        <section className="flex justify-center px-4 py-4 w-full min-h-16 post-form">
          <section className="bg-neutral-800 rounded-full w-[50px] h-[50px] user-im">
            <Image src="/img/user.png" alt="user" width={40} height={40} />
          </section>
          <section className="py-1 w-10/12 form">
            <form action="">
              <div className="flex flex-col gap-4 border-neutral-800 px-2 pb-4 border-b-2 w-full">
                <input type="text" name="" id="" title="Input field" placeholder="What is happening?!" />
                <a className="flex items-center gap-1 font-bold text-sm replace-private" href="">
                  <FaGlobeAmericas className="icon" />
                  <p>Everyone can reply</p>
                </a>
              </div>
            </form>
          </section>
        </section>
      </main>
      <footer className="md:flex hidden w-2/3 min-h-screen">
        footer
      </footer>
    </div>
  );
}
