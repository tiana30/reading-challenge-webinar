import React from 'react';
import useLocal from '../useLocal';
import {useAppState} from '../AppContext';

function Header() {
    useLocal();


let [{toRead, completed}, dispatch] = useAppState();
return(
    <header className="App-header">
        Reading Challenge
        <div>
            We have read {completed.length} books, only {toRead.length} left!
        </div>
    </header>
);
}
export default Header;