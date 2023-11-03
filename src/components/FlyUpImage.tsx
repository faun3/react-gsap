"use client";
import Image, { StaticImageData } from "next/image";
import style from "./FlyUpImage.module.scss";
import gsap from "gsap";
import { useRef, useEffect } from "react";

type FlyUpImageProps = {
  width?: string;
  height?: string;
  source: StaticImageData;
  style?: React.CSSProperties;
  alignSelf?: "flex-start" | "flex-end";
};
const FlyUpImage = ({ width, height, source, alignSelf }: FlyUpImageProps) => {
  const imageRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        duration: 1,
        y: "100vh",
        ease: "power2.out",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  }, []);
  return (
    <div
      className={style.flyingImageWrapper}
      style={{
        width: width,
        height: height,
        alignSelf: `${alignSelf ? alignSelf : "flex-start"}`,
      }}>
      <Image
        src={source}
        alt=""
        aria-hidden="true"
        ref={imageRef}
        fill={true}
      />
    </div>
  );
};
export default FlyUpImage;
