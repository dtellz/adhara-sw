import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../style.css'

const SpecieCard = (props) => {
    return (
        <Card className='card specie'>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.info.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Avg. height: </span>{props.info.average_height}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Avg. Lifespan: </span>{props.info.average_lifespan}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Classification:</span> {props.info.classification}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Designation:</span> {props.info.designation}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Language: </span>{props.info.language}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default SpecieCard;