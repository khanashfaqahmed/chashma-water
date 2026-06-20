import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'whatsapp' | 'dark' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const variants: Record<string, string> = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  outline:
    'bg-transparent border border-white/30 text-white hover:border-primary-400 hover:text-primary-400',
  whatsapp: 'bg-[#25D366] text-white hover:bg-[#22BF5B]',
  dark: 'bg-dark text-white hover:bg-dark/90',
  ghost: 'bg-white/10 text-white hover:bg-white/20 border border-white/20',
}

const sizes: Record<string, string> = {
  sm: 'px-4 py-1.5 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export default Button
