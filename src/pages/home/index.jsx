import SearchForm from "../../components/search-form";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DataGrid from "../../components/data-grid";
import SearchLog from "../../components/search-log";
import './style.css';



const Home = () => {

    const [searchedData, setSearchedData] = useState();
    const [entity, setEntity] = useState();

    function getSearchedData(data, ent) {
        setSearchedData(data);
        setEntity(ent)
        localStorage.setItem(ent, JSON.stringify(data))
        console.log('1-EL PADRE RECIVE: ---->', data)
        console.log('2-EL PADRE RECIVE: ---->', ent)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} className='search__form'>
                    <SearchForm dataFlow={getSearchedData}></SearchForm>
                </Grid>
                <Grid item xs={3}>
                    <SearchLog></SearchLog>
                </Grid>
                <Grid item xs={9} className='displayed__data'>
                    <DataGrid data={searchedData} entity={entity}></DataGrid>
                </Grid>

            </Grid>
        </Box>

    )
}

export default Home;