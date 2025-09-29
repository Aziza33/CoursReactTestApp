import {useState} from 'react'
import useUpdateDocTitle from './useUpdateDocTitle'

function ClickSayHello() {
    const [text, setText] = useState('');
    const [isTrue, setIsTrue] = useState(true);

    // Custom Hook
    useUpdateDocTitle(text);

  return (
    <div>
      <button onClick={()=> setText("Hello World")}>Cliquez</button>
      <button onClick={()=> setIsTrue(!isTrue)}>Cliquez</button>

    </div>
  )
}

export default ClickSayHello
