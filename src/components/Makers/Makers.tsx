/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Makers.scss";

const array = [
  {
    id: 1,
    title: "Досвід",
    descrtiprion: "5 років досвіду роботи в сфері ремонту дизельних паливних систем",
    background: "experience",
  },
  {
    id: 2,
    title: "Швидкість",
    descrtiprion: "1-3 дні виконання роботи, але також в залежності від об’єму роботи",
    background: "time",
  },
  {
    id: 3,
    title: "Якість",
    descrtiprion: "Якісно надаємо ремонт, використовуємо лише оригінальні деталі",
    background: "quality",
  },
]

export const Makers = () => {
  return (
    <section className="makers">
      <h1 className="makers__title">Ремонт форсунок усіх виробників</h1>

      <ul className="makers__list">
        {array.map(card =>
          <li className="makers__" key={card.id}>
            
          </li>
        )}
      </ul>
    </section >
  )
}
