import React from 'react'
import { ChildComponent } from '../components/childComponent'


export const ParentComponent = () => {
    const greetParent = (childName) => {
        alert(`Hello Parent ${childName}`)
    }
    
    
  return <ChildComponent greetHandler={greetParent}/>
}
