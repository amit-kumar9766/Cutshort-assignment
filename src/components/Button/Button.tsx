import React, { PropsWithChildren } from 'react'
import "./button.css";

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
  <button type="button" className="button-class" disabled={disabled} {...rest}>
    {children}
  </button>
)
