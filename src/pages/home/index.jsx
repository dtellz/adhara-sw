import SearchForm from "../../components/search-form";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DataGrid from "../../components/data-grid";
import { useParams } from "react-router";
import './style.css';



const Home = () => {

    const { noQuery } = useParams();

    console.log(noQuery)

    const [searchedData, setSearchedData] = useState();
    const [noQueriedData, setNoQueriedData] = useState();
    const [entity, setEntity] = useState();
    const [reRender, setReRender] = useState(true);

    if (noQuery) {
        const noQueryDisplay = localStorage.getItem(noQuery)
        let aux = JSON.parse(noQueryDisplay)
        setNoQueriedData(aux)
        console.log('EL TIPO ESSSSS', typeof noQueryDisplay)
        console.log(`Contenido de ${noQuery} -----> ${JSON.stringify(aux[9])}`)
        // setReRender(false)
    }

    function getSearchedData(data, ent) {

        setEntity(ent)
        let queryTime = new Date().getTime();
        //last object in every result will set params of the search log
        data.push({ name: ent, date: queryTime })
        setSearchedData(data);
        localStorage.setItem(ent, JSON.stringify(data))
    }

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} className='main__view'>

                <Grid item xs={12} className='search__form'>
                    <SearchForm dataFlow={getSearchedData}></SearchForm>
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