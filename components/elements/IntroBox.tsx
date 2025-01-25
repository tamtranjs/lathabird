import React from "react";

export default function IntroBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrapper relative mt-[-172px] ">
      <div className="bg-white grid p-8 grid-cols-1 pb-8 text-center mt-10 rounded-t min-h-40">
        {children}
      </div>
    </div>
  );
}
