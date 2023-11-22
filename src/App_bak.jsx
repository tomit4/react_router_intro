import { Link, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound.jsx'
import { BookRoutes } from './BookRoutes.jsx'
// import { useRoutes } from 'react-router-dom'
function App() {
    // More Vue-Router like way of defining routes
    // const element = useRoutes([
    // {
    // path: '/',
    // element: <Home />,
    // },
    // {
    // path: '*',
    // element: <NotFound />,
    // },
    // ])
    return (
        <>
            {/* 
                location hardcodes that location into this page 
                (always renders). Without it, this only renders 
                at every /books url. Note that /books is defined 
                twice here to add this extra content solely when 
                /books is passed into the url  
            */}
            {/*
            <Routes location="/books">
                <Route path="/books" element={<h1>Extra Content</h1>} />
            </Routes>
            */}
            {/* {element} */}
            <nav>
                <ul>
                    <li>
                        {/* 
                        replace removes previous page from history, 
                        useful for not going back to login 
                        */}
                        {/* <Link to="/" replace >Home</Link> */}

                        {/* 
                        reloadDocument reloads entire page and not 
                        just section that changed 
                        */}
                        {/* <Link to="/" reloadDocument >Home</Link> */}

                        {/* state allows for passing of data between Links */}
                        {/* <Link to="/" state={} >Home</Link> */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/books/*" element={<BookRoutes />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default App
