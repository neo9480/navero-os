import { useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputOverlappingLabel = ({
  label,
  type,
  placeholder,
  className,
  value,
  onChange,
  onBlur,
  ...props
}) => {
  const id = useId();

  return (
    <div className="group relative w-full ">
      <Label
        htmlFor={id}
        className="bg-[#dfdfdfd6] broder border-lavender_grey-400 rounded-full shadow absolute top-0 left-2 z-1 block -translate-y-1/2 px-1 text-xs">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
    </div>
  );
};

export default InputOverlappingLabel;
