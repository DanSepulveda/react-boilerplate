import HomeView from '@views/Home'
import LoginView from '@views/Login'

export const router = [
  {
    path: '/',
    element: <HomeView />,
    permission: 'home',
  },
  {
    path: 'login',
    element: <LoginView />,
    permission: null,
  },
]
