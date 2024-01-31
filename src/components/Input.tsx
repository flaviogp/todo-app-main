import React from 'react'

const Input = () => {
  return (
    <label htmlFor="todo" className="flex items-center w-full h-[50px] px-5 gap-5 bg-very-light-gray rounded-md">
        <div className='w-[20px] h-[20px] rounded-full border'></div>
        <input type="text" name="todo" id="todo" className='outline-none bg-transparent w-[90%]' placeholder='Create a new todo...'/>
    </label>
  )
}

export default Input