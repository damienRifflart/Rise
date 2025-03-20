import '../App.css'
import NavBar from '../components/NavBar'
import { BookOpen } from 'lucide-react';

function App() {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('fr-FR', {weekday: "long", year: "numeric", month: "long",day: "numeric"});

    return (
        <div>
            <NavBar />
            <div className="flex flex-col gap-5 items-center justify-center mt-[15%]">
                <h1 className='text-white text-5xl'>Bonjour, on est le <span className='text-[var(--light-salmon)] font-extrabold'>{formattedDate}</span>.</h1>
                <h1 className='text-white text-5xl'>Bon travail! </h1>
                <BookOpen className='text-[var(--light-salmon)]' size={64} />
            </div>
        </div>
  )
}

export default App;
