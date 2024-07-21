import React from 'react'
import "./Link.scss";

type Props = {
  title: string,
}

export const Link: React.FC<Props> = ({ title }) => {
  return (
    <button className="link">
      <a href="tel:+380123456789" className="link__title">{title}</a>
    </button>
    
  )
}