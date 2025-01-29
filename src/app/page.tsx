"use client";

import Image from "next/image";
import { IoGlobeOutline, IoHomeOutline, IoSearchOutline, IoNotificationsOutline, IoMailOutline, IoPeopleOutline, IoPersonOutline, IoEllipsisHorizontalOutline } from "react-icons/io5";
import { FaRegImage } from "react-icons/fa6";
import { HiOutlineGif } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { useRef } from "react";

import Button from "../components/Button"; // Importando o componente de botão
import Post from "../components/Post"; // Importando o componente de post
import MenuOption from "../components/MenuOption"; // Importando o componente de menu

export default function Home() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <div className="flex flex-row justify-items-center items-center min-h-screen page-screen">
      <header className="flex flex-col justify-between items-center px-4 py-3 md:w-2/4 h-full min-h-screen">
        <nav className="flex flex-col justify-between h-full">
          <section className="flex flex-col gap-2 h-full">
            <a href="#" className="flex items-center gap-2 px-2 text-lg text-neutral-200">
              <Image src="/x-logo.svg" alt="Logo" width={30} height={30} />
            </a>
            <MenuOption href="#" icon={IoHomeOutline} label="Home" />
            <MenuOption href="#" icon={IoSearchOutline} label="Explore" />
            <MenuOption href="#" icon={IoNotificationsOutline} label="Notifications" />
            <MenuOption href="#" icon={IoMailOutline} label="Messages" />
            <MenuOption href="#" icon={IoPeopleOutline} label="Communities" />
            <MenuOption href="#" icon={IoPersonOutline} label="Profile" />
            <MenuOption href="#" icon={IoEllipsisHorizontalOutline} label="More" />
            <Button className="px-24 py-4 w-full font-bold btn-neutral" type="button">Post</Button>
          </section>
          <section className="flex justify-between items-center w-full menu-option profile-info user-option">
            <section className="flex items-center gap-2">
              <section className="bg-neutral-800 rounded-full w-[50px] h-[50px] user-img">
                <Image src="/image.jpg" alt="user" width={100} height={100} />
              </section>
              <section className="flex flex-col items-center gap-1">
                <h2 className="font-bold text-sm">John Doe</h2>
                <p className="text-neutral-600 text-xs">@johndoe</p>
              </section>
            </section>
            <a href="">
              <IoEllipsisHorizontalOutline className="icon menu-icon" />
            </a>
          </section>
        </nav>
      </header>
      <main className="border-neutral-800 border-r-2 border-l-2 w-full min-h-screen">
        <h1 className="flex md:hidden px-4 py-2 font-bold page-title">Home</h1>
        <section className="flex border-neutral-800 border-b-2 w-full min-h-14 slect-feed">
          <a key="for-you" href="" className="flex flex-col justify-center items-center w-1/2 active option-feed">
            <p className="font-semibold text-sm">For You</p>
            <div className="borda"></div>
          </a>
          <a key="following" href="" className="flex flex-col justify-center items-center w-1/2 option-feed">
            <p className="font-semibold text-sm">Following</p>
            <div className="borda"></div>
          </a>
        </section>
        <section className="flex justify-center gap-2 border-neutral-800 px-4 py-4 border-b-2 w-full min-h-16 post-form">
          <section className="bg-neutral-800 rounded-full w-[50px] h-[50px] user-img">
            <Image src="/image.jpg" alt="user" width={100} height={100} />
          </section>
          <section className="py-1 w-[90%] form">
            <form action="">
              <div className="flex flex-col gap-4 border-neutral-800 px-2 pb-4 border-b-2 w-full">
                <textarea
                  ref={textareaRef}
                  onInput={handleInput}
                  name=""
                  id=""
                  title="Input field"
                  placeholder="What is happening?!"
                  className="resize-none"
                />
                <a className="flex items-center gap-1 font-bold text-sm replace-private" href="">
                  <IoGlobeOutline className="icon" />
                  <p>Everyone can reply</p>
                </a>
              </div>
              <div className="flex justify-between gap-2 mt-2 p-1">
                <section className="flex gap-4 text-primary">
                  <a href="#"><FaRegImage className="icon" /></a>
                  <a href="#"><HiOutlineGif className="icon" /></a>
                  <a href="#"><IoLocationOutline className="icon" /></a>
                </section>
                <Button type="submit">Post</Button> {/* Usando o componente de botão */}
              </div>
            </form>
          </section>
        </section>
        <section className="posts">
          <Post
            userImage="/image.jpg"
            userName="John Doe"
            content="This is a sample post content."
            likes={10}
            comments={5}
            reposts={3}
            userArroba="@johndoe"
            reach={100}
            shares={0}
            postImage="/image.jpg"
          />
          <Post
            userImage="/image.jpg"
            userName="Jane Smith"
            content="Another example post without an image."
            likes={20}
            comments={10}
            reposts={5}
            userArroba="@janesmith"
            reach={200}
            shares={2}
          />
        </section>
      </main>
      <footer className="md:flex hidden w-2/3 min-h-screen">footer</footer>
    </div>
  );
}
