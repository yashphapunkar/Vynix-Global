import React, { SVGProps } from "react";

interface LogoProps extends SVGProps<SVGSVGElement> {
  variant?: "teal" | "white" | "dark";
  withText?: boolean;
  withTagline?: boolean;
  className?: string;
  hideIcon?: boolean;
}

export default function Logo({
  variant = "teal",
  withText = false,
  withTagline = false,
  className = "",
  hideIcon = false,
  ...props
}: LogoProps) {
  // Brand teal color: #2D8B8E
  const fillClass = variant === "white" ? "text-white" : variant === "dark" ? "text-slate-900" : "text-teal-600";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision Interlocking SVG Logo Mark */}
      {!hideIcon && (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-11 w-11 shrink-0 ${fillClass}`}
          {...props}
        >
        {/* Top Symmetrical Interlocking Hook / Crescent */}
        <path
          d="M 14,42.5 A 37,37 0 0,1 86,42.5 H 62 A 12,12 0 0,0 50,30.5 H 26 A 12,12 0 0,0 14,42.5 Z"
          fill="currentColor"
        />
        {/* Bottom Symmetrical Interlocking Hook / Crescent */}
        <path
          d="M 86,57.5 A 37,37 0 0,1 14,57.5 H 38 A 12,12 0 0,0 50,69.5 H 74 A 12,12 0 0,0 86,57.5 Z"
          fill="currentColor"
        />
        {/* Center Interlocking S-Link Capsule */}
        <path
          d="M 40,47.5 H 60 A 2.5,2.5 0 0,1 62.5,50 A 2.5,2.5 0 0,1 60,52.5 H 40 A 2.5,2.5 0 0,1 37.5,50 A 2.5,2.5 0 0,1 40,47.5 Z"
          fill="currentColor"
        />
      </svg>
      )}

      {/* Brand Text Elements */}
      {withText && (
        <div className="flex flex-col items-start leading-none text-left">
          <span
            className={`text-xl font-bold tracking-[0.08em] font-sans uppercase ${
              variant === "white" ? "text-white" : "text-slate-900"
            }`}
          >
            Vynix Global
          </span>
          {withTagline && (
            <span
              className={`text-[9px] tracking-[0.25em] uppercase font-semibold mt-1 font-sans ${
                variant === "white" ? "text-teal-300" : "text-teal-600"
              }`}
            >
              Trust Delivered
            </span>
          )}
        </div>
      )}
    </div>
  );
}
