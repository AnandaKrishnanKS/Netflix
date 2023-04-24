
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
     <Row title='Trendting' fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
