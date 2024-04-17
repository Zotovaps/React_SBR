import './App.css';
import {Virtualize} from './Components/Virtualize';

function App() {
    let array = [...Array(100).keys()]

    return (
        <div className="App">
            <Virtualize rowHeight={60} containerHeight={240} items={array}/>
        </div>
    );
}

export default App;
