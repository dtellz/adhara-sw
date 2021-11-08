import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../style.css'
/**
 * 
 * @param {*} props  info -> data received from the endpoint
 * @returns  Composition of the card
 */
const StarshipCard = (props) => {
    return (
        <Card className='card starship'>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.info.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Model: </span>{props.info.model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>MGLT: </span>{props.info.MGLT}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Cargo capacity: </span>{props.info.cargo_capacity}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Passengers: </span>{props.info.passengers}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Consumables:</span> {props.info.consumables}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Price:</span> {props.info.cost_in_credits}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Crew: </span>{props.info.crew}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Hyperdrive rating: </span>{props.info.hyperdrive_rating}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Length: </span>{props.info.length}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Manufacturer: </span>{props.info.manufacturer}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Max. speed: </span>{props.info.max_atmosphering_speed}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Starship class: </span>{props.info.starship_class}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default StarshipCard;