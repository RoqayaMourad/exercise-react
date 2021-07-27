
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionalClick from "./Components/FunctionalClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
import NameList from "./Components/NameList";
import PersonsList from "./Components/PersonsList";
import Form from "./Components/Form";
import LifeCycleA from "./Components/LifeCycleA";
import FragmentDemo from "./Components/FragmentDemo";
import Table from "./Components/Table";
import ParentComp from "./Components/ParentComp";


function App() {
  return (
    <div className="App">
    <h1 className="header">
    React Exercise   <small>(Please open console)</small>
    </h1>
   

      <Greet name="mark">
        <p className="paragraph"> This is a child props</p>
      </Greet>

      <Welcome name="mark"/>

      <Hello />

      <Message />

      <Counter />

      <FunctionalClick />

      <ClassClick />

      <EventBind></EventBind>

      <ParentComponent />

      <UserGreeting />

      <NameList/>

      <PersonsList/>

      <Form/>

      <LifeCycleA/>

      <FragmentDemo/>

      <Table />


      <ParentComp/>


    </div>
  );
}

export default App;
