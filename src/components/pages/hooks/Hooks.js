import React from 'react'

// importing the useState hook
import { useState } from "react";

import Component1 from "./Component1";

import "./hookstyles.css"

function Hooks() {
  // using the useState hook to create a state variable for user chosen color
  const [name, setName] = useState("Walter White");

  return (
    <div className="hooks">

      <h2>I am {name}</h2>

      
      Rafaello Jose Viera

    </div>
  )
}

export default Hooks