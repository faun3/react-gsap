"use client";
import Image from "next/image";
import headerImg from "@/public/headerImg.jpg";
import styles from "./ImageRevealHeader.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const ImageRevealHeader = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to(sliderRef.current, {
      width: "0%",
      duration: 0.6,
      ease: "linear",
      opacity: 1,
    });
  }, []);
  const sliderRef = useRef(null);
  const imageRef = useRef(null);
  return (
    <div className={styles.header}>
      <div className={styles.verticalText}>
        <span className={styles.copy}>GSAP DEMO</span>
      </div>
      <div className={styles.imgWrapper}>
        <div
          className={styles.slider}
          ref={sliderRef}></div>
        <Image
          src={headerImg}
          alt=""
          ref={imageRef}
        />
      </div>
    </div>
  );
};
export default ImageRevealHeader;
