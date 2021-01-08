import React from 'react';
import './styles/App.scss';
import BookSearch from './book-search/BookSearch';

function App() {
  return (
    <div>
      <header className="header">
        <div className="header--content">
          <h1>My Good Reads</h1>
        </div>
      </header>
      <main className="layout">
        <section className="layout--main">
          <BookSearch />
        </section>
        <aside className="layout--sidebar">
          <h3>My Reading Wishlist ()</h3>
        </aside>
      </main>
    </div>
  );
}

export default App;
