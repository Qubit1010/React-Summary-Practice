import "./App.css";
// import {Practice} from "./components/practice";
// import {Dynamic_C} from "./components/dynamic";
// import EventHandlingComponent from "./components/eventHandlingComponent";
// import {ParentComponent} from "./components/ParentComponent";
// import {ConditionalRenderingComponent} from "./components/ConditionalRenderingComponent";
// import {NamesList} from "./components/NamesList"
// import {Form} from "./components/Form"
// import {PostList} from "./components/PostList"
// import {PostForm} from "./components/PostForm"
import FormItems from "./components/form/FormItems";
import { useState } from "react";

import Form from "./components/form/Form";

function App() {
  const formData = [{ name: "Ahmed", password: "1241212" }];

  const [formItems, setFormItems] = useState(formData);
  
  const displayFormItems = formItem => {
    setFormItems(prevFormItems => {
        return[formItem, ...prevFormItems]
    })
  };

  return (
    <div className="App">
      {/* <Practice name='Vishwas' age='20'/>
      <Practice name='John' age='22'/>
      <Practice name='Tom' age='30'> 
      <p>
        This the is a child props  
      </p>
      <button>Change State</button>
      </Practice> 
      <Dynamic_C/> */}
      {/* <EventHandlingComponent/> */}
      {/* <ParentComponent/> */}
      {/* <ConditionalRenderingComponent /> */}
      {/* <NamesList/> */}
      {/* <Form/> */}
      {/* <PostForm/> */}
      {/* <PostList/> */}
      <Form onAddItems={displayFormItems}/>
      <FormItems items={formItems}/>
    </div>
  );
}

export default App;
