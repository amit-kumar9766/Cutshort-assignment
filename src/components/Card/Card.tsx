import React from 'react'
import './index.css'

import 'card.css'
type avatarProps={
  src:string;
  alt:string;
}
type cardProps = {

  avatar?: any;
  title: string
  desc: string
  onClick: () => void
  className?: string
}

const Card = (props: cardProps) => {
  const { avatar, title, desc, onClick, className } = props
  return (
    <div className={className} onClick={onClick}>
      <img src={avatar?.src} alt={avatar?.alt} />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}
export default Card
