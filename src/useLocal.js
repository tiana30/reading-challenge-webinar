import {useEffect} from 'react';
import {useAppState} from './AppContext';
import BookList from './components/Booklist';
import {BOOKS} from './dataBooks';

export default function useLocal() {
    let [state, dispatch] = useAppState();

    useEffect(() => {
        dispatch({
            type: "GET_FROM_LOCAL_STATE",
            toRead: localStorage.getItem("to_read_list").split(",") || BOOKS,
            completed: localStorage.getItem("completed_list").split(",") || [],
        });
       
    }, [dispatch]);
}