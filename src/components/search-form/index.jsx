import { useState, useEffect } from 'react';
import EntitySelect from '../inputs/select'
import LogButton from '../inputs/log-btn';


const SearchForm = (props) => {

    const [isEntitySelected, setIsEntitySelected] = useState();
    const [searchedEntity, setSearchedEntity] = useState(null);
    // const [data, setData] = useState([]);

    //executed at EntitySelect component to read data
    const changeInput = (ent) => {
        setIsEntitySelected(true);
        setSearchedEntity(ent);

    }
    // const data = useFetch(searchedEntity);
    // console.log('fetch responded:', data)

    useEffect(() => {

        const entity = searchedEntity;
        let data = [];

        if (entity === null) return;

        fetch(`https://swapi.dev/api/${entity}`)
            .then(r => r.json())
            .then(d => {
                for (let i = 1; i <= d.count; i++) {
                    fetch(`https://swapi.dev/api/${entity}/${i}`)
                        .then(r => {
                            // si recibimos respuesta del servidor y la respuesta no es 200-299,
                            // no tenemos el personaje, por lo que lanzamos un error
                            if (!r.ok) throw new Error('Error del servidor');
                            return r.json();
                        })
                        .then(p => {
                            // setData(oldValue => oldValue.concat([{ ...p, id: i }]));
                            data.push(p)
                            data.length === d.count ? props.dataFlow(data, searchedEntity) : console.log()
                        })
                        // in case there is an error receiving an element, we set it to null to manage it later on
                        .catch(() => {
                            // setData(oldValue => oldValue.concat([null]))
                            data.push(null)
                        })
                    // props.dataFlow(data, entity)
                }
            });

    }, [searchedEntity]);

    // console.log('BUEBO:  ', data)

    return (
        <div className='search__elements'>
            <EntitySelect selected={changeInput}></EntitySelect>
            {isEntitySelected ? <LogButton entity={`Search in ${searchedEntity}`}></LogButton> : <p></p>}
        </div>

    )
}

export default SearchForm;