import React from 'react';
import styles from './search_list.module.css';
import SearchItem from '../search_item/search_item';

const SearchList = ({ cocktails }) => {
  return (
    <ul>
      {cocktails.map(cocktail => {
        return <SearchItem cocktail={cocktail} key={cocktail.idDrink} />;
      })}
    </ul>
  );
};

export default SearchList;
