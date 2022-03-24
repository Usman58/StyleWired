import React from 'react'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid,Typography,Button,Card,CardContent  } from '@mui/material';
import work1 from '../images/work1.png'; 

const useStyles = makeStyles(theme => ({
    Sec1:{
        '& .Sec1H1':{
            fontWeight:'600'
        }
    },
    cardDiv:{
        boxShadow:'0px 4px 31px 0px rgba(0,0,0,0.11) !important',
        WebkitBoxShadow:'0px 4px 31px 2px rgba(0,0,0,0.11) !important',
        MozBoxShadow:'0px 4px 31px 2px rgba(0,0,0,0.11) !important',
    }
}))

function StarterWorks() {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('lg'));
    const small = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const classes = useStyles();

    return (
        <Grid container >
            <Grid container px={small?5:10} py={5} className={classes.Sec1}>
                <Typography variant='h5' pt={3} align='center' className='w-100 Sec1H1'  gutterBottom component='div' >
                    Keeping You In Style, Whenever You Land
                </Typography>
                <Grid container pb={15} pt={8} spacing={2}>
                    <Grid item md={6} xs={12}>
                          <Grid item>
                              <img src={work1} className='w-100'/>
                          </Grid>
                          <Grid container pt={1} spacing={2}>
                              <Grid item md={6} xs={12}>
                                <Grid item>
                                    <img src={work1} className='w-100'/>
                                </Grid>
                              </Grid>
                              <Grid item md={6} xs={12}>
                                <Grid item>
                                     <img src={work1} className='w-100'/>
                                </Grid>
                              </Grid>
                          </Grid>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography variant='h5' className='w-100 Sec1H1'  gutterBottom component='div' >
                            3 Easy Ways For How It Works 
                        </Typography>
                          <Grid container spacing={2}>
                              <Grid item xs={12}>
                                    <Card className={classes.cardDiv}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                            1. Sign Up &Take The Quiz!
                                            </Typography>
                                            <Typography pt={2} sx={{ mb: 1.5 }} color="text.secondary">
                                            Once you sign up, it’s fun quiz time—a simple process for us to get the perfect outfit for you. Once we know your style preferences and the occasion of your travel, one of our professional stylists will get in touch with you. 
                                            </Typography>
                                        </CardContent>
                                    </Card>
                              </Grid>
                              <Grid item xs={12}>
                                    <Card className={classes.cardDiv}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                            1. Sign Up &Take The Quiz!
                                            </Typography>
                                            <Typography pt={2} sx={{ mb: 1.5 }} color="text.secondary">
                                            Once you sign up, it’s fun quiz time—a simple process for us to get the perfect outfit for you. Once we know your style preferences and the occasion of your travel, one of our professional stylists will get in touch with you. 
                                            </Typography>
                                        </CardContent>
                                    </Card>
                              </Grid>
                              <Grid item xs={12}>
                                    <Card className={classes.cardDiv}>
                                        <CardContent>
                                            <Typography variant="h5" component="div">
                                            1. Sign Up &Take The Quiz!
                                            </Typography>
                                            <Typography pt={2} sx={{ mb: 1.5 }} color="text.secondary">
                                            Once you sign up, it’s fun quiz time—a simple process for us to get the perfect outfit for you. Once we know your style preferences and the occasion of your travel, one of our professional stylists will get in touch with you. 
                                            </Typography>
                                        </CardContent>
                                    </Card>
                              </Grid>
                          </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default StarterWorks
