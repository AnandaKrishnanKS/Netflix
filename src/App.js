
import './App.css';
import Banner from './Banner';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">

      <Banner/>

     <Row isPoster={true} title='Trendting' fetchUrl={requests.fetchTrending}/>

     <Row title='Originals' fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title='TopRated' fetchUrl={requests.fetchTopRated}/>
     <Row title='ActionMovies' fetchUrl={requests.fetchActionMovies}/>
     <Row title='ComedyMovies' fetchUrl={requests.fetchComedyMovies}/>
     <Row title='HorrorMovies' fetchUrl={requests.fetchHorrorMovies}/>
     <Row title='RomanceMovies' fetchUrl={requests.fetchRomanceMovies}/>
     <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
