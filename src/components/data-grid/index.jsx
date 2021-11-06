import PeopleCard from "../cards/people";
import StarshipCard from "../cards/starship";
import FilmCard from "../cards/film";
import VehicleCard from "../cards/vehicle";
import SpecieCard from "../cards/specie";
import PlanetCard from "../cards/planet";
import React from 'react';
import './style.css'



const DataGrid = (props) => {
    const data = props.data;
    //data={searchedData} entity={entity}
    console.log(data);

    let listTitle = props.entity ?? 'try to make a search';
    listTitle = listTitle.charAt(0).toUpperCase() + listTitle.slice(1);


    return (
        <div className='main__container'>
            <h1>List of {listTitle}</h1>
            <div className='cards__display'>
                {data && listTitle === 'People' ? data.map(elem => elem !== null ? <PeopleCard info={elem}></PeopleCard> : '') : ''}
                {data && listTitle === 'Films' ? data.map(elem => elem !== null ? <FilmCard info={elem}></FilmCard> : '') : ''}
                {data && listTitle === 'Starships' ? data.map(elem => elem !== null ? <StarshipCard info={elem}></StarshipCard> : '') : ''}
                {data && listTitle === 'Vehicles' ? data.map(elem => elem !== null ? <VehicleCard info={elem}></VehicleCard> : '') : ''}
                {data && listTitle === 'Species' ? data.map(elem => elem !== null ? <SpecieCard info={elem}></SpecieCard> : '') : ''}
                {data && listTitle === 'Planets' ? data.map(elem => elem !== null ? <PlanetCard info={elem}></PlanetCard> : '') : ''}
            </div>
        </div>

    )
}

export default DataGrid;


/**
 * { this.state.airports.map(a => <Airport key={a.code} airport={a}></Airport>) }
 */
