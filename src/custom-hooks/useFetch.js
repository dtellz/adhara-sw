import { useState } from "react";



const useFetch = (ent) => {

    const [characters, setCharacters] = useState([]);

    fetch('https://swapi.dev/api/people')
        .then(r => r.json())
        .then(d => {
            for (let i = 1; i <= d.count; i++) {
                fetch(`https://swapi.dev/api/people/${i}`)
                    .then(r => {
                        // we throw an error in case !(200<=response<=299)
                        if (!r.ok) throw new Error('Server error');
                        return r.json();
                    })
                    .then(p => setCharacters(oldValue => oldValue.concat([{ ...p, id: i }])))
                    // utilizamos esta funcion para capturar los errores y actuar segun
                    // necesitemos, en este caso decir que el character es null.
                    .catch(() => setCharacters(oldValue => oldValue.concat([null])))
            }
        });
    return characters;
}

export default useFetch;