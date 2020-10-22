import React, {useState, useEffect} from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const EffectFunc = () => {
  // countの初期値として、1~10までのランダムな数値を生成
  const intialState = Math.floor(Math.random() * 10) + 1
  // count という名前の state 変数を宣言、初期値 intialState をセット
  const [count, setCount] = useState(intialState);
  useEffect(() => {
    document.title =`${count}回クリックされました`
  })

  return (
    <div className="App">
      <p>{`${count}回クリックされました`}</p>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>setCount((prev) => prev + 1)}>+</Button>
        <Button onClick={()=>setCount((prev) => prev - 1)}>-</Button>
        <Button onClick={()=>setCount(0)}>リセット</Button>
        <Button onClick={() => setCount(intialState)}>最初の数値に戻す</Button>
      </ButtonGroup>
    </div>
  )
}

export default EffectFunc