import { useState } from "react"

export const Dynamic_C = (props) => {
    const [state, setState] = useState('Hello World')
    return (
      <div>
          <h1>{state}</h1>
          <button onClick={() => setState('Hello John')}>Change Name</button>
      </div>
    )
  }