import PeopleCard from "../cards/people";
import StarshipCard from "../cards/starship";
import FilmCard from "../cards/film";
import VehicleCard from "../cards/vehicle";
import SpecieCard from "../cards/specie";
import PlanetCard from "../cards/planet";
import React from 'react';
import useWisdom from '../../hooks/usewisdom/index.jsx'
import './style.css'

/**
 * 
 * @param {*} props data, entity
 * 
 * @returns depending on entity it returns it related cards
 */

const DataGrid = (props) => {
    const data = props.data;
    //data={searchedData} entity={entity}
    //console.log(data);
    const phrase = useWisdom()


    let listTitle = props.entity ?? phrase;
    listTitle = listTitle.charAt(0).toUpperCase() + listTitle.slice(1);



    return (
        <div className='main__container'>
            <div className='title__container'>
                <h1 className='title'>{listTitle}</h1>
            </div>

            <div className='cards__display'>
                {data && listTitle === 'People' ? data.map((elem, ind) => elem !== null ? <PeopleCard info={elem} key={ind}></PeopleCard> : '') : ''}
                {data && listTitle === 'Films' ? data.map((elem, ind) => elem !== null ? <FilmCard info={elem} key={ind}></FilmCard> : '') : ''}
                {data && listTitle === 'Starships' ? data.map((elem, ind) => elem !== null ? <StarshipCard info={elem} key={ind}></StarshipCard> : '') : ''}
                {data && listTitle === 'Vehicles' ? data.map((elem, ind) => elem !== null ? <VehicleCard info={elem} key={ind}></VehicleCard> : '') : ''}
                {data && listTitle === 'Species' ? data.map((elem, ind) => elem !== null ? <SpecieCard info={elem} key={ind}></SpecieCard> : '') : ''}
                {data && listTitle === 'Planets' ? data.map((elem, ind) => elem !== null ? <PlanetCard info={elem} key={ind}></PlanetCard> : '') : ''}
            </div>
        </div>

    )
}

export default DataGrid;


/**
 * { this.state.airports.map(a => <Airport key={a.code} airport={a}></Airport>) }
 */
