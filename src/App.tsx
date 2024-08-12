import './styles/index.scss'
import { CustomRouter } from "./router/CustomRouter.tsx";
import { BrowserRouter } from 'react-router-dom';
import { useCurrentUser } from './hooks/users/useCurrentUser.tsx';
import { createContext, useEffect } from 'react';

export const CurrentUser = createContext({})

function App() {
  const { getCurrentUser, currentUser } = useCurrentUser()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const parsedToken = JSON.parse(token);
        getCurrentUser(parsedToken);
      } catch (error) {
        console.error("Failed to parse token:", error);
      }
    } else {
      console.warn("No token found in localStorage");
    }
  }, [currentUser])
  useEffect(() => {

  })
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
