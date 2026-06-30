
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  indicatorClassName,
  ...props
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-none bg-muted",
        className
      )}
      {...props}>
      <ProgressPrimitive.Indicator
  data-slot="progress-indicator"
  className={cn(
    "size-full flex-1 transition-all",
    indicatorClassName || "bg-primary"
  )}
  style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
/>
    </ProgressPrimitive.Root>
  );
}

export { Progress }
