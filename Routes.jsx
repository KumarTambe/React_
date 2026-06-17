import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const [users, setUsers] = useState([
    { id: 1, name: "Kumar" },
    { id: 2, name: "Jayant" },
    { id: 3, name: "Tambe" }
]);


function Home() {
    const navigate = useNavigate();
    return (
        <>
            <h1> Home Page </h1>
            <button onClick={() => navigate('/about')}>Go to About page</button>
        </>
    )
}

function About() {
    return (
        <h1> About Page </h1>
    )
}

function Contact() {
    return (
        <h1> Contact Page </h1>
    )
}

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home </Link>
                <Link to="/about">About </Link>
                <Link to="/contact">Contacts </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}