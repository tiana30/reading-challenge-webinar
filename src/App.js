import React from 'react';
import {AppStateProvider} from './AppContext';
import Header from './components/Header';
import BookList from './components/Booklist';
import './App.css';

function App() {
  return (
    <AppStateProvider>
    <Header />
      <div className="App">
         <div className="lists">
          <BookList />
          <BookList completeList />
        </div>
      </div>
    </AppStateProvider>
  );
}

export default App;
