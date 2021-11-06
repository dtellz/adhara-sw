import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function EntitySelect(props) {

    const [entity, setEntity] = useState('');

    const handleChange = (event) => {
        setEntity(event.target.value);
        props.selected(event.target.value); //will show text input for atomis search on displayed data
    };

    const searchableEntities = [
        'people',
        'films',
        'starships',
        'vehicles',
        'species',
        'planets'
    ];

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="select-label" className='label__text'>Entity</InputLabel>
                <Select
                    labelId="select-label"
                    id="entity-select"
                    value={entity}
                    onChange={handleChange}
                    label="Entity"
                    color='primary'
                >
                    <MenuItem value={searchableEntities[0]}>People</MenuItem>
                    <MenuItem value={searchableEntities[1]}>Films</MenuItem>
                    <MenuItem value={searchableEntities[2]}>Starships</MenuItem>
                    <MenuItem value={searchableEntities[3]}>Vehicles</MenuItem>
                    <MenuItem value={searchableEntities[4]}>Species</MenuItem>
                    <MenuItem value={searchableEntities[5]}>Planets</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
