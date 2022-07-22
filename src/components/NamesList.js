import React from "react";
import styles from '../components styles/NamesLists.module.css'


export const NamesList = () => {
  const names = ["john, alan, Clark"];
  const headingStyle = {
    fontSize: '1rem',
    color: 'blue',
    textAlign: 'center'
  }  
  return (
    <div>
      {names.map((name) => {
        return <h3 
        className={styles.h}
        key={name} 
        style={headingStyle}
        >{name}</h3>;
      })}
    </div>
  );
};
