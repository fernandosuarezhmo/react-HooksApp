import { useFetch, useCounter } from "../hooks"
import { LoadingCharacter, Character } from "../03-examples";

export const Layout = () => {

    const { counter, increment} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${ counter }`);
    const {name, location} = !!data && data;
    

  return (
    <>
        <h1>Rick and Morty - Character Locations</h1>
        <hr/>

        {
            isLoading
                ? <LoadingCharacter />
                : <Character name={ name } location={ location }/>
        }

        <button 
            className="btn btn-primary" 
            onClick={ () => increment()}>
            Next Character
        </button>

    
    </>
  )
}
