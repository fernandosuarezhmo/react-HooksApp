import { useLayoutEffect, useRef, useState } from "react"

export const Character = ({ name, location }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const {width, height} = pRef.current.getBoundingClientRect();
    
    setBoxSize({
      width,
      height,
  });
  }, [ location ])

  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex' }}
        >
          <p ref={ pRef } className="mb-1">{ location.name }</p>
          <footer className="blockquote-footer">{ name }</footer>
      </blockquote>

      <code>{ JSON.stringify( boxSize ) }</code>
    </>
  )
}
