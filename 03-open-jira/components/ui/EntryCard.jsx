import { Card, CardActionArea, CardContent, CardActions, Typography } from '@mui/material'


export const EntryCard = () => {
  return (
    <Card 
    sx={{ marginBottom: 1 }}
    // Eventos drag
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{ whiteSpace: 'pre-line'}}>Esto es la descripción</Typography>
            </CardContent>

            <CardActions sx={{display: 'flex', justifyContent: 'flex-end', paddingRight: 2 }}>
                <Typography variant='body2'>Esto es la descripción</Typography>
            </CardActions>

        </CardActionArea>
    </Card>
  );
};