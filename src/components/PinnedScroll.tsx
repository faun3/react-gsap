"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./PinnedScroll.module.scss";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PinnedScroll = () => {
  const spinner = useRef(null);
  const container = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        pin: spinner.current,
        start: "top center",
        end: "+=1500",
      },
    });

    tl.addLabel("pinned").to(spinner.current, {
      rotation: 360,
    });
  }, []);
  return (
    <>
      <div className={style.makesSpace}></div>
      <div className={style.randomText}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui id placeat
        voluptates veritatis! A nisi asperiores laborum natus voluptas iste
        facere laboriosam assumenda molestiae eius!
      </div>
      <div className={style.spinner} ref={container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-activity"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 12h4l3 8l4 -16l3 8h4"></path>
        </svg>
        <div className={style.square} ref={spinner}></div>
      </div>
      <div className={style.makesSpace}></div>
    </>
  );
};
export default PinnedScroll;
