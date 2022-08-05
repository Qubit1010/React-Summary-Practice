import React from "react";

const FormItems = (props) => {
  return (
    <div>
      <ul>
        {
            props.items.map((item) => (
                <div>
                    <h3>N={item.name}</h3>
                    <h3>Password={item.password}</h3>
                </div>
            ))
        }
      </ul>
    </div>
  );
};

export default FormItems;
