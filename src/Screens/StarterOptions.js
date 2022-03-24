import React from 'react'
import { Typography,Grid,Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import starterImg from '../images/starter.png'

const useStyles = makeStyles(theme => ({
  title:{
    '& .MuiTypography-root':{
      fontWeight:'bold'
    },
  },
  subTitle:{
      width:'390px',
      color:'#5AB27E',
      [theme.breakpoints.down('md')]:{width:'auto',}
  },
  btnContainer:{ 
    '& .MuiButton-root':{
          color:'#ffff',
          textTransform:'none',
          padding:'10px 0px',
      },  
  },
  
}));

function StarterOptions() {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    const mediam = useMediaQuery(theme => theme.breakpoints.down('md'));

    const classes = useStyles();
    return (
        <Grid container >
            <Grid container spacing={largeScreen?2:0}  >
                <Grid item md={6} xs={12}  >
                    <Grid item px={largeScreen?10:5} pt={largeScreen?10:5} pb={largeScreen?10:0} >
                        <Grid item className={classes.title}>
                            <Typography variant="h5" gutterBottom component="div" >
                                Let’s Get Started
                            </Typography>
                        </Grid>
                        <Grid item >
                            <Typography variant="subtitle1" gutterBottom component="div" className={classes.subTitle} >
                                Start your journey with stylewired by signing up if you
                                don’t have an account yet!
                            </Typography>
                        </Grid>

                        <Grid item  py={mediam?5:15}>
                            <Grid container rowSpacing={1} direction='column'  >
                                <Grid item className={classes.btnContainer}>
                                    <Button py={10} variant="contained"  className={classes.btn} fullWidth>Create an Acount</Button>
                                </Grid>
                                <Grid item className={classes.btnContainer}>
                                    <Button py={10} variant="contained"  className={classes.btn} fullWidth>Create an Acount Later</Button>
                                </Grid>
                                <Grid item className={classes.btnContainer}>
                                    <Button py={10} variant="contained"  className={classes.btn} fullWidth>Log in</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={6} xs={12} >
                    <img src={starterImg} className='w-100'/>
                </Grid>
            </Grid> 
        </Grid>
    )
}

export default StarterOptions
