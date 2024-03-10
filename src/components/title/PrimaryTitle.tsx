import React from "react";

const PrimaryTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="font-playfair_display text-primary_color text-[40px] font-semibold">
      {children}
    </h2>
  );
};

export default PrimaryTitle;
