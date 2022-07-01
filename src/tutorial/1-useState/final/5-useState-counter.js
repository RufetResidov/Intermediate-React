
import React, { useEffect, useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const decrease = () => {
    setValue(value - 1)
  }
  const increase = () => {
    setValue(value + 1)
  }
  const complexIncrease = () => {
    setTimeout(() => {
      increase()
    }, 2000);
  }
  const complexDecrease = () => {
    setTimeout(() => {
      decrease()
    }, 2000);
  }
  useEffect(() => {
    document.title = `New Message ${value}`
  })

  return (
    <div>
      <section style={{ margin: "4rem 0" }} className='a'>
        <h1>Regular Counter</h1>
        <h1>{value}</h1>
        <button onClick={() => decrease()} className='btn'>decrease</button>
        <button onClick={() => setValue(0)} className='btn'>reset</button>
        <button onClick={() => increase()} className='btn'>increase</button>
      </section>
      <section style={{ margin: "4rem 0" }} className='b'>
        <h1>Later Counter</h1>
        <h1>{value}</h1>
        <button onClick={() => complexIncrease()} className='btn'>decrease</button>
        <button onClick={() => complexDecrease()} className='btn'>increase</button>
      </section>
    </div>
  )
}

export default UseStateCounter