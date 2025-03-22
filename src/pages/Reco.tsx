import { useEffect, useState } from 'react';
import '../App.css'
import NavBar from '../components/NavBar'
import { fetchResponse } from '../api';

function App() {
  const [parsedData, setParsedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchResponse();
        if (result && result.trim()) {
          const obj = JSON.parse(result);
          setParsedData(obj);
        } else {
          console.log("La chaîne JSON est vide");
        }
      } catch (error) {
        console.error("Erreur lors de l'analyse JSON:", error);
      }
    };
    fetchData();
  }, []);

  const exampleData = {
    "Salvador Dali": {
        "birth": 1904,
        "death": 1989,
        "movement": "Surrealism",
        "famousPainting": "The Persistence of Memory"
    },
    "Vincent Van Gogh": {
        "birth": 1853,
        "death": 1890,
        "movement": "Post-Impressionism",
        "famousPainting": "Starry Night"
    },
    "Frida Kahlo": {
        "birth": 1907,
        "death": 1954,
        "movement": "Magical Realism",
        "famousPainting": "The Two Fridas"
    }
  }

  return (
    <>
      <NavBar />
      <h1 className='text-white text-3xl'>Reco</h1>
    </>
  )
}

export default App;
