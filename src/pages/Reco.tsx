import '../App.css'
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'
import Artist from "../components/Artists"
import { fetchResponse } from '../api';

type Data = {
  [key: string]: {
    birth: number;
    death: number;
    movement: string;
    famousPainting: string;
  };
}

function App() {
  const [parsedData, setParsedData] = useState<null | Data>(null);

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


  return (
    <>
      <NavBar />
      {parsedData && <Artist data={parsedData} />}
    </>
  )
}

export default App;
