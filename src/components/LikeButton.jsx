import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext'; 
import './LikeButton.css';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const { theme } = useTheme(); 

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button 
      className={`like-button ${isLiked ? 'active' : ''} ${theme}`}
      onClick={handleClick}
      aria-label={isLiked ? 'Unlike' : 'Like'}
    >
      <span className="like-icon">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill={isLiked ? '#ff3258' : 'none'}
          stroke={isLiked ? '#ff3258' : (theme === 'dark' ? '#fff' : '#333')}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </span>
      <span className="like-text">{isLiked ? 'Liked!' : 'Like'}</span>
    </button>
  );
};

export default LikeButton;