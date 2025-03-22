import { useNavigate, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav className="font-semibold transition-all duration-200 z-[1000]">
            <ul className="flex w-screen justify-between bg-[var(--dark-green)] justify-between py-5 px-20">
                <li className="hover:text-accent transition">
                    <button
                        className={`flex items-center gap-2.5 ${location.pathname === "/" ? "text-[var(--light-salmon)]" : ""} cursor-pointer`}
                        onClick={() => navigate('/')}
                    >
                        <i className="fa-solid fa-square-plus"></i>
                        <span className="text-4xl font-bold">Home</span>
                    </button>
                </li>

                <li className="hover:text-accent transition">
                    <button
                        className={`flex items-center gap-2.5 ${location.pathname === "/reco" ? "text-[var(--light-salmon)]" : ""} cursor-pointer`}
                        onClick={() => navigate('/reco')}
                    >
                        <i className="fa-solid fa-square-plus"></i>
                        <span className="text-4xl font-bold">Les reco' du jour</span>
                    </button>
                </li>

                <li className="hover:text-accent transition">
                    <button
                        className={`flex items-center gap-2.5 ${location.pathname === "/todo" ? "text-[var(--light-salmon)]" : ""} cursor-pointer`}
                        onClick={() => navigate('/todo')}
                    >
                        <i className="fa-solid fa-lightbulb"></i>
                        <span className="text-4xl font-bold">Todo-List</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
