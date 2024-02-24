import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {}

export const Button = ({ className, children, ...rest }: ButtonProps) => {
  return (
    <button className={cn('flex items-center rounded gap-3', className)}>
      {children}
    </button>
  )
}
