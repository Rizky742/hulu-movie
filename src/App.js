import Header from "./elements/Header";
import Nav from "./elements/Nav";
import Results from "./elements/Results";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
 
  // const [movies, setMovie] = useState([]);
  // const { genre } = useParams();
  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(`https://api.themoviedb.org/3${requests[genre.url]}`)
  //     setMovie(request.data.results)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className="App">
      <Router>
        {/* Header */}
        <Header />
        {/* Nav */}
        <Nav />
        <Routes>
          <Route path="/" element={<Results />} />
          <Route path="/:genre" element={<Results />} />
        </Routes>
        
      </Router>

    </div>
  );
}

// export async function getServerSideProps(context) {
//   const genre = context.query.genre;

//   const request = await fetch(`https://api.themoviedb.org/3${requests.fetchTrending.url}`
//     ).then(res => res.json());

//     return {
//       props: {
//         results: 
//       }
//     }
// }

export default App;
