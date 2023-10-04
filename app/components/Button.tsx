"use client";

import { IconType } from "react-icons/lib";

interface ButtonPtops {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonPtops> = ({
  label,
  disabled,
  outline,
  small,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            w-full
            ${outline ? "bg-white" : "bg-weedColor"}
            ${outline ? "border-black" : "bg-weedColor"}
            ${outline ? "text-black" : "text-white"}
            ${small ? "py-1" : "py-3"}
            ${small ? "text-sm" : "text-md"}
            ${small ? "font-light" : "font-semibold"}
            ${small ? "border-[1px]" : "border-2"}

            `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
                absolute
                left-4
                top-3
                "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
