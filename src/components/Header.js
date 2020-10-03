import React from 'react';
import useLocal from '../useLocal';
import {useAppState} from '../AppContext';

function Header() {
    useLocal();

let [{toRead, completed}, dispatch] = useAppState();
return(
    <>
    <header className="App-header">
        <h2>Reading Challenges</h2>
        </header>
        <p>We have read <span>{completed.length}</span> books, only <span>{toRead.length}</span> left!</p>
    </>
);
}
export default Header;