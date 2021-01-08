import React, { useState } from 'react';
import './styles/App.scss';
import BookSearch from './book-search/BookSearch';
import Sidebar from './sidebar/Sidebar';



function App() {
  const [myBooks, setMyBooks] = useState([]);

  return (
    <div>
      <header className="header">
        <div className="header--content">
          <h1>My Good Reads</h1>
        </div>
      </header>
      <main className="layout">
        <section className="layout--main" data-testid="book-search-component">
          <BookSearch myBooks={myBooks} setMyBooks={setMyBooks} />
        </section>
        <aside className="layout--sidebar" data-testid="sidebar-component">
          <Sidebar myBooks={myBooks} setMyBooks={setMyBooks} />
        </aside>
      </main>
    </div>
  );
}

export default App;
