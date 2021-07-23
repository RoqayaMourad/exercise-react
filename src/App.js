
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Counter from "./Components/Counter";
import FunctionalClick from "./Components/FunctionalClick";
import ClassClick from "./Components/ClassClick";


function App() {
  return (
    <div className="App">
    <Greet name="mark">
    <p> this is child props</p>
    </Greet>
    <Welcome name="mark" />
    <Hello />
    <Message />
    <Counter/>

    <FunctionalClick/>

    <ClassClick/>


    </div>
  );
}

export default App;
