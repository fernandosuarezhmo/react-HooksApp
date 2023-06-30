import { useFetch, useCounter } from "../hooks"
import { LoadingCharacter, Character } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);
    const {name, location, image} = !!data && data;
    

  return (
    <>
        <h1>Rick & Morty API - Character Locations</h1>
        <hr/>

        {
            isLoading
                ? <LoadingCharacter />
                : <Character name={ name } location={ location } image={ image }/>
        }

        <button 
            className="btn btn-primary" 
            onClick={ () => increment()}>
            Next Character
        </button>

    
    </>
  )
}
