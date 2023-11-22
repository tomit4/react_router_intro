import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function NotFound() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            // Using useLocation() hook, state can be set and can be
            // passed back where it can then be read by that particular
            // page (in this case the root page)
            navigate('/', { state: 'Error Not Page' })
            // Simply redirects you back in history by 1
            // navigate(-1)
            // navigate('/')
        }, 1000)
    }, [navigate])
    return <h1>Not Found</h1>
}
