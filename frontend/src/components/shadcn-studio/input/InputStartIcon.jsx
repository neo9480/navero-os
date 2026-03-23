import { useId } from "react";
import { Input } from "@/components/ui/input";

const InputStartIcon = ({
  icon: Icon,
  type,
  placeholder,
  disabled,
  value,
  onChange,
}) => {
  const id = useId();

  return (
    <div className="w-full max-w-xs space-y-2">
      <div className="relative">
        <div className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50">
          <Icon className="size-4" />
          <span className="sr-only">User</span>
        </div>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="peer pl-9"
        />
      </div>
    </div>
  );
};

export default InputStartIcon;
