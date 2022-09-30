import React from 'react'
import { MdDelete } from 'react-icons/md'
import './RemoveFromList.css'

const RemoveFromList = () => {
  return (
    <div className='overlay'>
      <MdDelete className='overlay__icon remove' />
      Delete from List
    </div>
  )
}
export default RemoveFromList;