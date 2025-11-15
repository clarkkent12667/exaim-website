import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300"
    
    const variants = {
      default: "bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-100",
      destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600 dark:bg-red-900 dark:text-white dark:hover:bg-red-800",
      outline: "border-2 border-gray-300 bg-white text-gray-900 hover:bg-gray-50 hover:border-gray-400 focus-visible:ring-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800",
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700",
      ghost: "text-gray-900 hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-900 dark:text-gray-50 dark:hover:bg-gray-800",
      link: "text-primary-600 underline-offset-4 hover:underline hover:text-primary-700 focus-visible:ring-primary-600 dark:text-primary-400",
    }
    
    const sizes = {
      default: "h-10 px-6 py-2",
      sm: "h-9 px-4 py-2",
      lg: "h-12 px-8 py-3 text-base",
      icon: "h-10 w-10",
    }
    
    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
