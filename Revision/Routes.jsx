import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Are aee home page</h1>
            <Link to='/about'> Go to About page</Link>
            <Link to='/user/42'> Go to user profile</Link>
        </>
    )
}

function About() {
    return <h1>About Page</h1>
}

function UserProfile() {
    const { id } = useParams()
    return <h1>User Profile — ID: {id}</h1>
}

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to='/about'>Go to about page</Link>
                <Link to='/user/42'>Go to user 42</Link>
            </nav>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:id' element={<UserProfile />} />
            </Routes>

        </BrowserRouter>
    )
}