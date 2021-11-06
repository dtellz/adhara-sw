import PeopleCard from "../cards/people-card";



const DataGrid = (props) => {
    const data = props.data;
    return (
        <PeopleCard name='diego' gender='male' birth='test' hairColor='brown' eyeColor='brown' height='80kg' ></PeopleCard>
    )
}

export default DataGrid;

{/* <Typography gutterBottom variant="h5" component="div">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Gender: {props.gender}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Birth year: {props.birth}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Hair color: {props.hairColor}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Eye color: {props.eyeColor}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Height: {props.height}
                    </Typography>
   */}