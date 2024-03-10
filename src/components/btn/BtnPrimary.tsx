const BtnPrimary = ({
  type = "button",
  text = "button",
}: {
  type?: "button" | "submit" | "reset";
  text: string;
}) => {
  return <button className="px-7 py-3 rounded-xl text-base font-openSans text-secondary_color border-[1.5px] border-secondary_color font-medium hover:bg-secondary_color hover:text-white duration-150 shadow-sm shadow-secondary_color" type={type}>{text}</button>;
};

export default BtnPrimary;
