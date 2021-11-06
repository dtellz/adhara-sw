import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../style.css'

const PeopleCard = (props) => {
    return (
        <Card className='card people'>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.info.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Gender:</span> {props.info.gender}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Birth year:</span> {props.info.birth_year}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Hair color:</span> {props.info.hair_color}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Eye color:</span> {props.info.eye_color}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Height:</span> {props.info.height}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Weight:</span> {props.info.mass}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default PeopleCard;