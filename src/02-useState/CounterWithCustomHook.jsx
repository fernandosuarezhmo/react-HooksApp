import { useCounter } from '../hooks'

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With Hook: { counter }</h1>
      <hr />

      <button onClick={ (value) => increment(2) }className="btn btn-primary">+1</button>
      <button onClick={ reset } className="btn btn-primary">Reset</button>
      <button onClick={ (value) => decrement(2) }className="btn btn-primary">-1</button>

    </>
  )
}
