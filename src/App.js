import './App.css';
import { Switch } from 'react-router-dom';
import MainBody from "./component/mainBody";

function App() {
  return (
    <>
        <Switch>
            <MainBody/>
        </Switch>
    </>
  );
}

export default App;
