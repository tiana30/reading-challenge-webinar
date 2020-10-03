import React from 'react';
import {useAppState} from '../AppContext';

export default function BookList ({completeList}) {
    let[{toRead, completed}, dispatch] = useAppState();
    

    return(
        <div>
            <h3>{completeList ? 'Completed Books' : 'Books To Read'}</h3>
            <ul>
                {
                    !completeList && toRead.map((book, index) => {
                        return(
                            <li key = {index}
                            onClick = { () => {
                                dispatch({type:"READ_BOOK", item: book});
                            }}>
                                {book}
                            </li>
                        );
                    })
                }

                {
                    completeList && completed.map((book, index) => {
                        return(
                            <li key={index}
                            onClick = {() => {
                                dispatch({type: "UNREAD_BOOK", item: book})
                            }}>
                                {book}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}