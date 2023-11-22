import { Routes, Route } from 'react-router-dom'
import { BookList } from './pages/BookList.jsx'
import { Book } from './pages/Book.jsx'
import { NewBook } from './pages/NewBook.jsx'
import { BookLayout } from './BookLayout.jsx'

export function BookRoutes() {
    return (
        <Routes>
            <Route element={<BookLayout />}>
                <Route index element={<BookList />} />
                <Route path=":id" element={<Book />} />
                <Route path="new" element={<NewBook />} />
            </Route>
        </Routes>
    )
}
