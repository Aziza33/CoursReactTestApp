import React, { useState, useCallback} from 'react'
import Count from './components/Count'
import './App.css'
import Button from './components/Button'
import ProgressBar from './components/ProgressBar'
import MyContacts from './components/customHook/MyContacts'
import ClickSayHello from './components/customHook/ClickSayHello'

function App() {

  // const [state, setState] = useState({value: 0, btnColor: 'success', increment: 25});
  const [countOne, setCountOne] = useState({value: 0, btnColor: 'warning', increment: 25})
  const [countTwo, setCountTwo] = useState({value: 0, btnColor: 'success', increment: 20})

  const incrementCountOne = useCallback((val) => {

    countOne.value < 100 && setCountOne({...countOne, value: countOne.value + val})
  }, [countOne])

  // fonction fléchée qui prend en param val,
    // si la val de countOne <100 tu exécutes la suite
    // tu vas utiliser le setter setCountOne pour récupérer l'objet countOne et tu le mets à jour en rajoutant la val
    // ds cet objet on ne modifie que sa value avec le spread operator
    // new val = ancienne val + nouvelle val increment en paramètre


const incrementCountTwo = useCallback((val) => {

    countTwo.value < 100 && setCountTwo({...countTwo, value: countTwo.value + val})
  }, [countTwo])

  return (
    
      <div className="container">
        <h1>Test UseReducer</h1>
        <Count />
        


        {/* <Button className="btnCallback">Count 1</Button> */}
        {/* <Count count={countOne.value}/> */}
        {/* <Button className="btnCallback">Count 2</Button> */}

        <p>UseCallBack</p>
        <ProgressBar label="CountOne"count={countOne.value} bgColor={countOne.btnColor}/>
        <ProgressBar label="CountTwo" count={countTwo.value} bgColor={countTwo.btnColor}/>

        {/* <ProgressBar progress={100} /> */}
        {/* <ProgressBar progress={100} /> */}
        <Button handleClick={incrementCountOne} btnColor={countOne.btnColor} increment={countOne.increment}> Count 1</Button>
        <Button handleClick={incrementCountTwo} btnColor={countTwo.btnColor} increment={countTwo.increment}> Count 2</Button>
        <MyContacts />
        
        <div className='App'>
          <ClickSayHello />
        </div>
      </div>


  )
}

export default App
