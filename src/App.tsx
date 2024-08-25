import './styles/index.scss'
import { CustomRouter } from "./router/CustomRouter.tsx";
import { useCurrentUser } from './hooks/users/useCurrentUser.tsx';
import { createContext, useEffect, useState } from 'react';
import { themes } from './Themes.tsx';

export const CurrentUser = createContext({});

function App() {
  const { getCurrentUser, currentUser } = useCurrentUser();

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
  }, []);

  const [currenThemeId, setCurrentThemeId] = useState<number | null>(null);
  const [currentTheme, setCurrentTheme] = useState<any>(null);

  useEffect(() => {
    const storedId = localStorage.getItem('theme_id')
    if (storedId) {
      const themeId = Number(JSON.parse(storedId));
      setCurrentThemeId(themeId);
    }
  }, []);

  useEffect(() => {
    if (currenThemeId !== null) {
      const theme = themes.find((e) => e.id === currenThemeId);
      setCurrentTheme(theme);
    }
  }, [currenThemeId]);

  useEffect(() => {
    if (currentTheme) {
      applyStyles();
    }
  }, [currentTheme]);

  document.documentElement.style.setProperty('--nav-item-color', 'white');
  const applyStyles = () => {
    if (!currentTheme || !currentTheme.colors) return;

    // header items 
    document.documentElement.style.setProperty('--nav-item-color', 'white');
    // opening headers title
    document.documentElement.style.setProperty('--main-title-color', currentTheme.colors[0]);
    // opening headers subtitle
    document.documentElement.style.setProperty('--main-subtitle-color', currentTheme.colors[1]);
    // all buttons and prior icons
    document.documentElement.style.setProperty('--main-button-color', currentTheme.colors[2]);
    // postcards
    document.documentElement.style.setProperty('--postcard-title-color', 'white');
    document.documentElement.style.setProperty('--postcard-subtitle-color', currentTheme.colors[2]);
    // contact icon color
    document.documentElement.style.setProperty('--contact-icon-color', currentTheme.colors[3]);
    // social icons
    document.documentElement.style.setProperty('--social-icon-color', currentTheme.colors[3]);
    // titles in shop page
    document.documentElement.style.setProperty('--shop-titles-color', currentTheme.colors[4]);
    // admin 
    document.documentElement.style.setProperty('--admin-color', currentTheme.colors[4]);
  };

  return (
    <CurrentUser.Provider value={{ currentUser }}>
      <CustomRouter />
    </CurrentUser.Provider>
  );
}

export default App;
