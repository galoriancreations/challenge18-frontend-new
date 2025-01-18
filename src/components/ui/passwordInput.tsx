import * as React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

import { cn } from "@/lib/utils";

const PasswordInput = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
      <div className="relative">
        <input
          type={isVisible ? "text" : "password"}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {isVisible ? (
          <FaEyeSlash
            className="absolute right-4 top-2 z-10 cursor-pointer "
            onClick={() => {
              setIsVisible(!isVisible), console.log(isVisible);
            }}
          />
        ) : (
          <FaEye className="absolute right-4 top-2 z-10 cursor-pointer " onClick={() => setIsVisible(!isVisible)} />
        )}
      </div>
    );
  }
);
PasswordInput.displayName = "Input";

export { PasswordInput };
