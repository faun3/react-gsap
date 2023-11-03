"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./TrialRun.module.scss";
import { gsap } from "gsap";

const TrialRun = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded(!isExpanded);
    handleExpand();
  }

  function handleExpand() {
    if (isExpanded) {
      gsap.to(middleCircle.current, {
        duration: 0.15,
        scale: 1.6,
        x: 50,
        ease: "power1.in",
      });
      gsap.to(topCircle.current, {
        duration: 0.15,
        scale: 0.6,
        x: -20,
        y: 20,
        ease: "power1.in",
      });
      gsap.to(bottomCircle.current, {
        duration: 0.15,
        scale: 0.6,
        x: -20,
        y: -20,
        ease: "power1.in",
      });
    } else {
      gsap.to(middleCircle.current, {
        duration: 0.15,
        scale: 1,
        x: 0,
        ease: "power1.out",
      });
      gsap.to(topCircle.current, {
        duration: 0.15,
        scale: 1,
        x: 0,
        y: 0,
        ease: "power1.in",
      });
      gsap.to(bottomCircle.current, {
        duration: 0.15,
        scale: 1,
        x: 0,
        y: 0,
        ease: "power1.in",
      });
    }
  }

  useEffect(() => {
    const mountTimeline = gsap.timeline({});
    mountTimeline.fromTo(
      topCircle.current,
      { x: 80, opacity: 0.5 },
      { x: 0, duration: 0.15, opacity: 1, ease: "power1.in" }
    );
    mountTimeline.fromTo(
      middleCircle.current,
      { x: 80, opacity: 0.5 },
      { x: 0, duration: 0.15, opacity: 1, ease: "power1.in" }
    );
    mountTimeline.fromTo(
      bottomCircle.current,
      { x: 80, opacity: 0.5 },
      { x: 0, duration: 0.15, opacity: 1, ease: "power1.in" }
    );
  }, []);
  const middleCircle = useRef(null);
  const topCircle = useRef(null);
  const bottomCircle = useRef(null);

  return (
    <div className={styles.coolDiv}>
      <span
        className={styles.circle}
        ref={topCircle}></span>
      <button
        onClick={toggleExpand}
        ref={middleCircle}></button>
      <span
        className={styles.circle}
        ref={bottomCircle}></span>
    </div>
  );
};
export default TrialRun;
