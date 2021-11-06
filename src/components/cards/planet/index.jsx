import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../style.css'

const PlanetCard = (props) => {
    return (
        <Card className='card planet'>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.info.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Climate: </span>{props.info.climate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Diameter: </span>{props.info.diameter}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Gravity:</span> {props.info.gravity}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Orbital period:</span> {props.info.orbital_period}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Rotation period: </span>{props.info.rotation_period}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Surface water: </span>{props.info.surface_water}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Terrain: </span>{props.info.terrain}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Population: </span>{props.info.population}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default PlanetCard;