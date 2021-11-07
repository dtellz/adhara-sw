


const SearchEngine = (props) => {

    const rawData = props.data;

    const metaData = rawData.pop();

    console.log(metaData.name)



    return (
        <h1>i got this searching </h1>
    )


}
export default SearchEngine;