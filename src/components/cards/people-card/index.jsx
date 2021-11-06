import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PeopleCard = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
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
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


export default PeopleCard;