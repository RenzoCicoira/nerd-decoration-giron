import React, {useState, useEffect} from 'react';
import logo from '../../assets/logoNerDecoration.png'

const FunctionalComponent = () => {
  // const [ initialValue, setInitialValue] = useState ('blue')
  const [ counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('App mounted')
    return () => {
      console.log('will unmount')
    }
  }, []);
  console.log('Aquí sería el...')

  // const clickAdd = () => {
  //   setCounter(counter + 1)
  // }

  // const clickSub = () => {
  //   setCounter(counter - 1)
  // }

const click = (operator) => {
  if (operator === 'add') {
    setCounter(counter + 1)
  } else if (operator === 'subtract') {
    setCounter(counter - 1)
  }
}

  return (
    <div>
      <h3>Functional Component</h3>
      <h1>click N° {counter}</h1>
      {/* <button className='mr-4 py-3 px-8 bg-green-500 rounded-xl' onClick={() => clickAdd()}>Add 1</button>
      <button className='mr-4 py-3 px-6 bg-red-500 rounded-xl' onClick={() => clickSub()}>subtract 1</button> */}
      <button className='mr-4 py-3 px-8 bg-green-500 rounded-xl' onClick={() => click('add')}>Add 1</button>
      <button className='mr-4 py-3 px-6 bg-red-500 rounded-xl' onClick={() => click('subtract')}>Subtract 1</button>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  )
}

export default FunctionalComponent;