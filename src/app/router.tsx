import { createBrowserRouter } from 'react-router-dom'
import HomeView from '@views/Home'
import LoginView from '@views/Login'
import { ProtectedRoute } from '@components/ProtectedRoute'
import App from '../App'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'login',
                element: <LoginView />,
            },
            {
                path: '',
                element: <ProtectedRoute />,
                children: [
                    {
                        path: '',
                        element: <HomeView />,
                    },
                ],
            },
        ],
    },
])
