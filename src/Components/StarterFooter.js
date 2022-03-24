import React from 'react'
import fIcon from '../images/fIcon.png'; 
import instaIcon from '../images/instaIcon.png';
import tiktokIcon from '../images/tiktokIcon.png';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid,Typography,Button  } from '@mui/material';
import { Form } from "react-bootstrap";

const useStyles = makeStyles(theme => ({
    Sec7:{
        backgroundColor:'#262626',
        marginTop:'0px !important'
    },
    Sec7C1:{ '& .MuiTypography-root':{color:'white'}, },
    iconSize:{ height:'27px',width:'27px'},
    SocialText:{ 
        // '& .MuiTypography-root':{fontWeight:'600'},
        '& .facebook':{color:'#3B5998'},
        '& .instagram':{color:'#FD5344'},
        '& .tiktok':{color:'#FFFFFF'},
    },
    btn1Container:{
        '& .MuiButton-root':{
            textTransform:'none',
            padding:'10px 0',
        },
    }
}))

function StarterFooter() {
    const classes = useStyles();
    const small = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <Grid container>
            <Grid container px={small?3:10} py={7} spacing={5} className={classes.Sec7} direction='row' justifyContent='space-between'>
                <Grid item md={2} sm={4}>
                    <Grid container className={classes.Sec7C1} direction='column'>
                        <Typography variant='h6' component='div' >
                            More Info
                        </Typography>
                        <Typography pt={1} variant="subtitle2" gutterBottom component="div">
                            About us
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Features
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Pricing
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Blog
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Contact us
                        </Typography>
                  </Grid>
                </Grid>

                <Grid item md={4} sm={8}>
                    <Grid container className={classes.Sec7C1} direction='column'>
                        <Typography variant='h6' component='div' >
                            Any Questions? Get in Touch
                        </Typography>
                        <Grid item pt={1}>
                            <Form >
                                <Form.Group controlId="name">
                                    <Form.Control className={classes.inputF} type="email" placeholder="abdullah12@gmail.com"></Form.Control>
                                </Form.Group>
                                <Grid item sm={6} xs={8} pt={2} className={classes.btn1Container}>
                                    <Button variant="contained"  fullWidth>Submit</Button>
                                </Grid>
                            </Form>
                        </Grid>
                    </Grid>
                </Grid>
                  
                <Grid item md={2} sm={6}>
                    <Grid container className={classes.Sec7C1} direction='column'>
                        <Typography variant='h6' component='div' >
                            Locations
                        </Typography>
                        <Typography pt={1} variant="subtitle2" gutterBottom component="div">
                            Los Angeles
                        </Typography>
                        <Typography  variant="subtitle2" gutterBottom component="div">
                            Chicago
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Miami
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            Houston
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom component="div">
                            San Jose
                        </Typography>
                  </Grid>
                </Grid>

                <Grid item md={2} sm={6}>
                    <Grid container className={classes.Sec7C1} direction='column' >
                        <Typography variant='h6' component='div' >
                            Follow Us on
                        </Typography>
                        <Grid item className={classes.SocialText}>
                              <Grid container alignItems='center' spacing={1} pt={1}>
                                  <Grid item >
                                    <img src={fIcon} className={classes.iconSize}  />
                                  </Grid>
                                  <Grid item>
                                    <Typography variant="subtitle1" className={'facebook'}  component="div">
                                        Facebook
                                    </Typography>
                                  </Grid>
                              </Grid>
                              <Grid container alignItems='center' spacing={1} py={1}>
                                  <Grid item >
                                    <img src={instaIcon} className={classes.iconSize}  />
                                  </Grid>
                                  <Grid item>
                                    <Typography variant="subtitle1" className={'instagram'}  component="div">
                                        Instagram
                                    </Typography>
                                  </Grid>
                              </Grid>
                              <Grid container alignItems='center' spacing={1} >
                                  <Grid item >
                                    <img src={tiktokIcon} className={classes.iconSize}  />
                                  </Grid>
                                  <Grid item>
                                    <Typography variant="subtitle1" className={'tiktok'}  component="div">
                                        Tiktok
                                    </Typography>
                                  </Grid>
                              </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default StarterFooter
