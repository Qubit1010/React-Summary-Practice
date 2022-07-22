import "./App.css";
// import {Practice} from "./components/practice";
// import {Dynamic_C} from "./components/dynamic";
// import EventHandlingComponent from "./components/eventHandlingComponent";
// import {ParentComponent} from "./components/ParentComponent";
// import {ConditionalRenderingComponent} from "./components/ConditionalRenderingComponent";
// import {NamesList} from "./components/NamesList"
// import {Form} from "./components/Form"
import {PostList} from "./components/PostList"


function App() {
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
      <PostList/>
      
    </div>
  );
}

export default App;
