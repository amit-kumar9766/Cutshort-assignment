import React from 'react'

import './card.css'

type cardProps = {
  Avatar?: any
  title: string
  desc: string
  onClick: () => void
  className?: string
  isSelected?: boolean
}

const Card = (props: cardProps) => {
  const { Avatar, title, desc, onClick, className, isSelected } = props
  console.log(isSelected)
  return (
    <div
      className={`${isSelected ? 'selected' : 'card'}`}
      onClick={onClick}
    >
      {Avatar}
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}
export default Card
