import React , {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [menu , setMenu] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMenu = () => {
                fetch(url).then((res) => {console.log(res); return res.json();})
                .then((resJson) => {console.log(resJson); setIsLoading(false); setMenu(resJson);})
                .catch((err) => {setIsLoading(false); setError(err.message);})
        }

        setTimeout(getMenu, 1000);
    }, [url]);


    return {menu, isLoading, error};
}

export default useFetch;