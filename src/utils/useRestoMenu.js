import { useEffect, useState } from 'react';
import {MENU_API_URL} from './Constants'

const useRestoMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchRestoMenu();
    }, [])
    const fetchRestoMenu = async () => {
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setResInfo(json.data)
    }
    return resInfo;
}

export default useRestoMenu;