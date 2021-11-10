import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}



















// function Countries() {
//   const [countries, setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h2>Traveling Around The World</h2>
//       <h4>Countries Available : {countries.length} </h4>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }
//     </div>

//   )
// }


// function Country(props) {
//   return (
//     <div>
//       <h1>Name : {props.name}</h1>
//       <p>Capital : {props.capital}</p>
//     </div>
//   )

// }
export default App;
