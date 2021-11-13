import { createContext ,useState } from 'react';

const MovieProvider=createContext()

export function Movieselectfuncn({children}){
    const [movieid,setmovieid]=useState(27205)
    console.log('movieid from prvds',movieid)
    function movieselect(id){
        setmovieid(id)
    }
    return (
        <MovieProvider.Provider value={[movieid,setmovieid,movieselect]}>
            {children}
        </MovieProvider.Provider>
    )
}
export default MovieProvider