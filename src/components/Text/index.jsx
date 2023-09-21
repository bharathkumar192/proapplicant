import React from "react";

const sizeClasses = {
  txtInterMedium14Indigo400: "font-inter font-medium",
  txtInterRegular16Gray500: "font-inter font-normal",
  txtInterRegular14Bluegray400: "font-inter font-normal",
  txtInterMedium14Deeporange300: "font-inter font-medium",
  txtInterBold28: "font-bold font-inter",
  txtInterBold18Bluegray800: "font-bold font-inter",
  txtInterBold24: "font-bold font-inter",
  txtInterBold28Bluegray800: "font-bold font-inter",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtInterMedium14Bluegray400: "font-inter font-medium",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtInterMedium14Bluegray900: "font-inter font-medium",
  txtInterBold18: "font-bold font-inter",
  txtInterMedium12: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium16Indigo400: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterMedium16Bluegray900: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium16Bluegray800: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
