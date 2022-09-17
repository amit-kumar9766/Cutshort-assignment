import React, { PropsWithChildren } from 'react'
type ButtonProps = {
  className?: string
  onClick?: (e: React.MouseEvent) => void
  disabled?: boolean
}
export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  className,
  children,
  disabled = false,
  ...rest
}) => (
  <button type="button" className={className} disabled={disabled} {...rest}>
    {children}
  </button>
)
