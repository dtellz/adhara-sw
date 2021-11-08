import SearchForm from "../../components/search-form";
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DataGrid from "../../components/data-grid";
import './style.css';
import { useParams } from "react-router";
import Loading from "../../components/loading";

// People' ? data.map((elem, ind) => elem !== null ? <PeopleCard info={elem} key={ind}></PeopleCard> : '') : ''}
//                 {data && listTitle === 'Films' ? data.map((elem, ind) => elem !== null ? <FilmCard info={elem} key={ind}></FilmCard> : '') : ''}
//                 {data && listTitle === 'Starships' ? data.map((elem, ind) => elem !== null ? <StarshipCard info={elem} key={ind}></StarshipCard> : '') : ''}
//                 {data && listTitle === 'Vehicles' ? data.map((elem, ind) => elem !== null ? <VehicleCard info={elem} key={ind}></VehicleCard> : '') : ''}
//                 {data && listTitle === 'Species' ? data.map((elem, ind) => elem !== null ? <SpecieCard info={elem} key={ind}></SpecieCard> : '') : ''}
//                 {data && listTitle === 'Planets'


const Home = () => {


    const possibleQueries = ['people', 'films', 'starships', 'vehicles', 'species', 'planets']

    const [searchedData, setSearchedData] = useState();
    const [entity, setEntity] = useState();
    const [isLogData, setIsLoggedData] = useState(false);


    // const [ pathParam, setPathParam] = useState();

    const { query } = useParams();


    useEffect(() => {
        if (possibleQueries.includes(query)) {
            const rawData = localStorage.getItem(query);
            const parsedData = JSON.parse(rawData);
            setSearchedData(parsedData);
            setEntity(parsedData[parsedData.length - 1].name);
            setIsLoggedData(true);
        }
    }, [isLogData, query]);

    function getSearchedData(data, ent) {
        setEntity(ent);
        let queryTime = new Date().getTime();
        //last object in every result will set params of the search log
        data.push({ name: ent, date: queryTime });
        setSearchedData(data);
        localStorage.setItem(ent, JSON.stringify(data));
    }


    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} className='main__view'>

                <Grid item xs={12} className='search__form'>
                    <SearchForm dataFlow={getSearchedData} entity={entity}></SearchForm>
                </Grid>

                <Grid item xs={12} className='displayed__data'>
                    {/*To avoid passing the last element of the array (search lod related) we slice it out on next data prop*/}
                    <DataGrid data={searchedData?.slice(0, searchedData.length - 1)} entity={entity}></DataGrid>
                </Grid>

            </Grid>
        </Box>

    )
}

export default Home;