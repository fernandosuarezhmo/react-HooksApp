import { useLayoutEffect, useRef, useState } from "react"

export const Character = ({ name, location, image }) => {

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
      <img 
          alt={ name } 
          src={ image } 
          style={{ height: "200px", paddingRight: "10px" }} 
       /> 
      <blockquote 
        className="blockquote"
        >
          <p ref={ pRef } className="mb-1">{ name }</p>
          <footer className="blockquote-footer">{ location.name }</footer>
      </blockquote>

    </>
  )
}
