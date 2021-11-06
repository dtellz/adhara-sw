import SearchForm from "../../components/search-form";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DataGrid from "../../components/data-grid";
import './style.css';


const Home = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {/* <Grid item xs={12}>
                    
                </Grid> */}
                <Grid item xs={12} className='search__form'>
                    <SearchForm></SearchForm>
                </Grid>
                <Grid item xs={3}>
                    log de busqueda
                </Grid>
                <Grid item xs={9}>
                    <DataGrid></DataGrid>
                </Grid>
                {/* <Grid item xs={12}>
                    footer
                </Grid> */}
            </Grid>
        </Box>

    )
}

export default Home;