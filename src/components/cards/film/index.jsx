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

const FilmCard = (props) => {
    return (
        <Card className='card film'>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Director: </span>{props.info.director}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Episode: </span>{props.info.episode_id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Producer:</span> {props.info.producer}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Release date:</span> {props.info.release_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span className='card__subject'>Intro: </span>{props.info.opening_crawl}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default FilmCard;