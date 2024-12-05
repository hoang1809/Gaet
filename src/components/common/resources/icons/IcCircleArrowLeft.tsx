"use client";
import { SVGProps } from "react";

type CProps = SVGProps<SVGSVGElement>;

export function IcCircleArrowLeft(props: CProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="48" height="48" rx="24" fill="white" />
      <path
        d="M21.57 17.93L15.5 24L21.57 30.07"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.5 24L15.67 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
