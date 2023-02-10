import React from 'react'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActions, CardContent } from '@mui/material';

import Button from '@mui/material/Button';
const card =(
    <React.Fragment>
        <CardContent>
            <Typography>
                Testing
            </Typography>
        </CardContent>
        <CardActions>
            <Button>Button Test</Button>
        </CardActions>

    </React.Fragment>

)
export default function CardGame() {
  return (
    <Box>
        <Card variant='outlined'>{card}</Card>
    </Box>
    
  )
}
