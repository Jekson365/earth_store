import './styles/index.scss'
import { CustomRouter } from "./router/CustomRouter.tsx";
import { BrowserRouter } from 'react-router-dom';
import { useCurrentUser } from './hooks/users/useCurrentUser.tsx';
import { createContext, useEffect } from 'react';

export const CurrentUser = createContext({})

function App() {
  const { getCurrentUser, currentUser } = useCurrentUser()
  useEffect(() => {
    getCurrentUser(JSON.parse(localStorage.getItem("token") || ''))
  }, [])
  return (
    <>
      <CurrentUser.Provider value={{ currentUser }}>
        <BrowserRouter>
          <CustomRouter />
        </BrowserRouter>
      </CurrentUser.Provider>
    </>
  )
}

export default App
