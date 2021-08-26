import { useEffect, useState } from 'react';
import './Favoris.css'

export default function useFavoris (category) {
  const [favoris, setFavoris] = useState(() => {
    const ls = localStorage.getItem(category);
    if (ls) return JSON.parse(ls);
    else return [];
  });

  const toggleItemInLocalStorage = (id) => () => {
    const isFavoris = favoris.includes(id);
    if (isFavoris) setFavoris((prev) => prev.filter((b) => b !== id));
    else setFavoris((prev) => [...prev, id]);
  };

  useEffect(() => {
    localStorage.setItem(category, JSON.stringify(favoris));
  }, [favoris]);

    
  return [favoris, toggleItemInLocalStorage];
}
