import { useParams } from "react-router";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DataGrid from "../../components/data-grid";
import SearchEngine from "../../components/search-engine";

const Load = () => {
    const { query } = useParams();

    const rawData = localStorage.getItem(query);
    const parsedData = JSON.parse(rawData)
    //parsedData.pop(); //substract the last element 
    //console.log('This is parsed data', parsedData)
    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2} className='main__view'>

                <Grid item xs={12} className='search__form'>
                    <SearchEngine data={parsedData}></SearchEngine>
                </Grid>

                <Grid item xs={12} className='displayed__data'>
                    {/*To avoid passing the last element of the array (swhich consist of auxiliary data) we slice it out on next data prop*/}
                    <DataGrid data={parsedData?.slice(0, parsedData.length - 1)} entity={query}></DataGrid>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Load;