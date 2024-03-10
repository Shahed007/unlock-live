import React from "react";

const PrimaryTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="font-playfair_display text-primary_color text-2xl sm:text-3xl lg:text-[40px] font-semibold">
      {children}
    </h2>
  );
};

export default PrimaryTitle;
