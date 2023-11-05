"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./PinnedScroll.module.scss";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const PinnedScroll = () => {
  const spinner = useRef(null);
  const container = useRef(null);
  const end = useRef(null);

  useEffect(() => {
    gsap.to(spinner.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: 1,
        pin: spinner.current,
        start: "top top",
        end: "+=100%-100%",
        markers: true,
      },
      y: "100%",
      x: "100%",
      duration: 5,
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
        <div className={style.square} ref={spinner}></div>
      </div>
      <div className={style.makesSpace} ref={end}></div>
    </>
  );
};
export default PinnedScroll;
