import React, { useState, useRef } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { useEffect } from 'react';

export type SetSearchVisibleFn = React.Dispatch<React.SetStateAction<boolean>>;

const SearchBar: React.FC<{ setSearchVisible: SetSearchVisibleFn }> = ({ setSearchVisible }) => {
  const [searchVisible, setSearchVisibleLocal] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const toggleSearchBar = () => {
    setSearchVisibleLocal((prevSearchVisible) => !prevSearchVisible);
    setSearchVisible(!searchVisible); // Passer directement la nouvelle valeur à setSearchVisible
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node) &&
      iconRef.current &&
      !iconRef.current.contains(event.target as Node)
    ) {
      setSearchVisibleLocal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="navbar">
      <div ref={iconRef} className="search-icon" onClick={toggleSearchBar}>
        <HiOutlineSearch size={20} color="black" />
      </div>
      <div ref={searchRef} className={`searchbar ${searchVisible ? 'visible' : ''}`}>
        <input type="text" placeholder="Rechercher..." />
      </div>
    </div>
  );
};

export default SearchBar;