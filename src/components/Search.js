import React from 'react';

function Search({ searchHandle }) {
  return (
    <div className="search">
      <ion-icon name="search-sharp"></ion-icon>
      <input
        onChange={e => {
          searchHandle(e.target.value);
        }}
        tupe="text"
        placeholder="Search..."
      />
    </div>
  );
}

export default Search;
