import React from 'react'

import './card.css'

type cardProps = {
  Avatar?: any
  title: string
  desc: string
  onClick: () => void
  className?: string
}

const Card = (props: cardProps) => {
  const { Avatar, title, desc, onClick, className } = props
  return (
    <div className="card" onClick={onClick}>
      {Avatar}
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}
export default Card
