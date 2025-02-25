import { ThemeProvider } from './context/ThemeContext';
import ArticlePage from './components/ArticlePage';

export default function App() {
  return (
    <ThemeProvider>
      <ArticlePage />
    </ThemeProvider>
  );
}