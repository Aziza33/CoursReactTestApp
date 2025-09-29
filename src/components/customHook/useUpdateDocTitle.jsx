
import React, {useEffect} from 'react'

 
function useUpdateDocTitle (arg) {

    useEffect(() => {
        document.title = `Titre : ${arg}`;
        console.dir(document);
    }, [arg]);
}


export default useUpdateDocTitle
