import { Fragment, useState, useEffect } from 'react';
import EntitySelect from '../inputs/select'
import TextInput from '../inputs/text-input';
import useFetch from '../../custom-hooks/useFetch';


const SearchForm = () => {

    const [isEntitySelected, setIsEntitySelected] = useState();
    const [searchedEntity, setSearchedEntity] = useState();

    const changeInput = (ent) => {
        setIsEntitySelected(true);
        setSearchedEntity(ent);

    }

    const data = useFetch(searchedEntity);
    console.log('fetch responded:', data)

    return (
        <Fragment>
            <EntitySelect selected={changeInput}></EntitySelect>
            {isEntitySelected ? <TextInput entity={`Search in ${searchedEntity}`}></TextInput> : <p></p>}
        </Fragment>

    )
}

export default SearchForm;