import React, { ReactElement, DragEvent } from 'react'
import './styles.css'

export type flexOrderType = {
  [index: number]: number
}

export type PropsType = {
  children: ReactElement[]
  flexOrders: flexOrderType
  onOrderChange(orders: flexOrderType): void
}

export default function Rearrangeable({
  children,
  flexOrders = {},
  onOrderChange = () => {}
}: PropsType) {
  function handleDrop(e: DragEvent<HTMLDivElement>, index: number) {
    const dropData = e.dataTransfer?.getData('text/plain')
    if (!dropData) {
      console.error('No drop data received', { dropData })
      return
    }
    const elIndex = parseInt(dropData)
    onOrderChange({
      ...flexOrders,
      [elIndex]: flexOrders[index] ?? index + 1,
      [index]: flexOrders[elIndex] ?? elIndex + 1
    })
  }

  return (
    <div className='box'>
      {children.map((element, index) => {
        return (
          <div
            key={index}
            className='box-item'
            onDrop={(e) => handleDrop(e, index)}
            draggable
            onDragOver={(e) => e.preventDefault()}
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', JSON.stringify(index))
            }}
            style={{ order: flexOrders[index] ?? index + 1 }}
          >
            {element}
          </div>
        )
      })}
    </div>
  )
}
