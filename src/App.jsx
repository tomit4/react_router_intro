import { NavLink, Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound.jsx'
import { BookRoutes } from './BookRoutes.jsx'
import './styles.css'
function App() {
    // useLocation returns an Object that contains state
    // and data about current URL location
    const location = useLocation()
    return (
        <>
            <nav>
                <ul>
                    <li>
                        {/* 
                                isActive is a special property for 
                                NavLink components in react-router, it basically 
                                is JS that applies the .active class to whichever 
                                route is currently navigated to (applies to children)
                            */}
                        {/* 
                        <NavLink
                            style={({ isActive }) => {
                                return isActive ? { color: 'red' } : {}
                            }}
                            to="/"
                        >
                        ({ isActive }) => {
                            return isActive ? 'Active Home' : 'Home'
                        } 
                        */}
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        {/* 
                            end keyword prevents isActive/.active 
                            property/className to be applied to 
                            the children of the path 
                            (i.e. only /books is active, not /books/1)
                        */}
                        <NavLink end to="/books">
                            Books
                        </NavLink>
                    </li>
                    {location.state} {/* renders "Hi" */}
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
