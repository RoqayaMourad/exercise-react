
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";


function App() {
  return (
    <div className="App">
    <Greet name="mark">
    <p> this is child props</p>
    </Greet>
    <Welcome name="mark" />
    <Hello />
    <Message />
    </div>
  );
}

export default App;
