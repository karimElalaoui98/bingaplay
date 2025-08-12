"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function TimelineSvg() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const line = svgRef.current.querySelector(".timeline-line");
    const dots = svgRef.current.querySelectorAll(".timeline-dot");

    gsap.set(line, { strokeDasharray: line?.getTotalLength() });
    gsap.set(line, { strokeDashoffset: line?.getTotalLength() });
    gsap.set(dots, { scale: 0 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: "center center",
          end: "+=0",
          scrub: true,
        },
      })
      .to(line, {
        strokeDashoffset: 0,
        duration: 1,
      })
      .to(
        dots,
        {
          scale: 1,
          duration: 0.5,
          stagger: 0.2,
        },
        "-=1"
      );
  }, []);

  return (
    <svg
      ref={svgRef}
      className="w-full h-[2px]"
      viewBox="0 0 2000 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="timeline-line"
        d="M0 1L2000 1"
        stroke="#092a2a"
        strokeWidth="2"
        strokeDasharray="5 5"
      />
      {[0, 500, 1000, 1500].map((x, i) => (
        <circle
          key={i}
          className="timeline-dot"
          cx={x + 100}
          cy="1"
          r="8"
          fill="#092a2a"
        />
      ))}
    </svg>
  );
}
