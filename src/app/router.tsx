import { createBrowserRouter } from 'react-router-dom'
import HomeView from '@views/Home'
import LoginView from '@views/Login'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeView />,
    },
    {
        path: '/login',
        element: <LoginView />,
    },
])
