import React, {useState, useEffect} from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

const EffectFunc = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title =`${count}回クリックされました`
  })

  return (
    <div className="App">
      <p>{`${count}回クリックされました`}</p>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={()=>setCount((prev) => prev + 1)}>
          ボタン
        </Button>
        <Button onClick={()=>setCount(0)}>
          リセット
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default EffectFunc