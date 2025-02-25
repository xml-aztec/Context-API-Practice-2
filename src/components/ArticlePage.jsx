import { useTheme } from "../context/ThemeContext";
import "./ArticlePage.css";
import LikeButton from './LikeButton';

const ArticlePage = () => {
  const { theme, toggleTheme } = useTheme();

  const themes = {
    light: {
      background: "#ffffff",
      text: "#000000",
      buttonBg: "#007bff",
      buttonText: "#ffffff",
    },
    dark: {
      background: "#1a1a1a",
      text: "#ffffff",
      buttonBg: "#6c757d",
      buttonText: "#ffffff",
    },
  };

  const currentTheme = themes[theme];

  return (
    <div
      className="article-block"
      style={{
        minHeight: "100vh",
        backgroundColor: currentTheme.background,
        color: currentTheme.text,
        transition: "all 0.3s ease",
      }}
    >
      <div className="wrapper">
        <h1 className="title">Способен ли ИИ помочь нам в дипломатии?</h1>

        <article className="article-block">
          <p className="article">
            Исследования по применению больших языковых моделей (LLM) в политике
            начинают набирать обороты. Несмотря на впечатляющие успехи в
            понимании естественного языка, до сих пор не существовало бенчмарка,
            который бы охватывал все этапы принятия политических решений.
            Исследователи восполнили этот пробел, разработав UNBench —
            комплексный бенчмарк для оценки LLM на основе данных Совета
            Безопасности ООН (СБ ООН).
            <br />
            <br />
            Резолюции СБ ООН часто ведут к санкциям, военным действиям или
            установлению миротворческих операций. Ошибка или неточность в
            моделировании подобных решений может обернуться катастрофой для
            всего мира.
          </p>
        </article>

        <div className="buttons">

          <LikeButton />

          <button
            className="theme-button"
            onClick={toggleTheme}
            style={{
              backgroundColor: currentTheme.buttonBg,
              color: currentTheme.buttonText,
              cursor: "pointer",
            }}
          >
            Переключить тему
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
