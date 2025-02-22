import { Input } from "../../../components/ui/input";
import React, { FC } from "react";

const CustomInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <Input {...props} />;
}

export default CustomInput;
