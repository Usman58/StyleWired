import React from 'react'
import { Grid,Typography,Button,CardMedia  } from '@mui/material';
import home1 from '../images/home1.png';
import home2 from '../images/home2.png'; 
import home3 from '../images/home3.png'; 
import home4 from '../images/home4.png';  
import home5 from '../images/home5.png';
import home6 from '../images/home6.png'; 
import home7 from '../images/home7.png'; 
import home8 from '../images/home8.png';    
import home9 from '../images/home9.png'; 
import home10 from '../images/home10.png';
import videoBg from '../images/videoBg.png';
import { makeStyles,styled } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import checkingVideo from '../media/mobile.mp4';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '../Components/AccordionCom'
import $ from 'jquery';

const useStyles = makeStyles(theme => ({
   homeSec1:{
       backgroundImage:`url(${home1})`,
       backgroundPosition:'top center',
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover',
       backgroundAttachment:'scroll',
   },
   Sec2Div1:{
       backgroundImage:`url(${home2})`,
       backgroundPosition:'top center',
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover',
       backgroundAttachment:'scroll',
       borderRadius:'15px',
   },
   Sec2Div2:{
       backgroundImage:`url(${home3})`,
       backgroundPosition:'top center',
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover',
       backgroundAttachment:'scroll',
       borderRadius:'15px',
   },
   Sec2Div3:{
       backgroundImage:`url(${home4})`,
       backgroundPosition:'top center',
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover',
       backgroundAttachment:'scroll',
       borderRadius:'15px',
   },
   Sec3Div1:{
       backgroundImage:`url(${home5})`,
       backgroundPosition:'top center',
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover',
       backgroundAttachment:'scroll',
       borderRadius:'15px',
   },
   Sec3Div2:{
       backgroundImage:`url(${home6})`,
       backgroundPosition:'top center',
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover',
       backgroundAttachment:'scroll',
       borderRadius:'15px',
   },
   Sec3Div3:{
       backgroundImage:`url(${home7})`,
       backgroundPosition:'top center',
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover',
       backgroundAttachment:'scroll',
       borderRadius:'15px',
   },
   Sec3Div4:{
       backgroundImage:`url(${home8})`,
       backgroundPosition:'top center',
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover',
       backgroundAttachment:'scroll',
       borderRadius:'15px',
   },
   Sec3Div5:{
       backgroundImage:`url(${home10})`,
       backgroundPosition:'top center',
       backgroundRepeat:'no-repeat',
       backgroundSize:'cover',
       backgroundAttachment:'scroll',
       borderRadius:'15px',
   },
   homeH1:{
       color:'white',
       fontSize:'51px !important',
       '& span':{
           color:'#5AB27E'
       },
       [theme.breakpoints.down('sm')]:{
           fontSize:'26px !important',
       }
   },
   homep1:{
       color:'white',
       [theme.breakpoints.down('sm')]:{
           fontSize:'17px !important',
       }
   },
   btn1Container:{
       '& .MuiButton-root':{
          textTransform:'none',
          padding:'10px 0',
       },
       '& .getStartedYellow':{
            backgroundColor:'#E5B12C'
        }
   },
   videoContainer:{
       position:'relative',
       '& .videoCard':{position:'relative',zIndex:'1',},
       '& .videoImg':{
           position:'absolute',
           top:'-30px',
           right:'-30px',
           bottom:'-20px',
           left:'20px',
           '& .videoBg':{
               width:'100%',
               height:'100%',
               zIndex:'-1',
           },
           [theme.breakpoints.down('sm')]:{
            top:'-15px',
            right:'-15px',
            bottom:'-50px',
            left:'-5px',
           }
       },
   },
   Sec2:{
       '& .Sec2H':{
           fontWeight:'600',
           fontSize:'33px',
           [theme.breakpoints.down('sm')]:{fontSize:'23px',}
       }
   },
   S2D1HS:{
       '& .S2D1H1':{
           fontSize:'30px',
           fontWeight:'600',
           color:'white',
           [theme.breakpoints.down('sm')]:{fontSize:'20px',}
       },
       '& .S2D1H2':{
           fontSize:'50px',
           fontWeight:'600',
           color:'rgb(255,255,255,.5)',
       },
       '& .S2D1H3':{
           fontSize:'18px',
           color:'white',
       },
   },
   Sec3Div:{
       height:'280px',
       '& .MuiTypography-root':{color:'white'},
       '& .Sec6H1':{fontSize:'23px'},
   },
   Sec4:{
       minHeight:'500px',
   },
   Sec5:{
       '& .Sec5H':{
           fontSize:'39px',
           fontWeight:'600'
       }
   },
   
   
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function StarterHome() {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('lg'));
    const mediam = useMediaQuery(theme => theme.breakpoints.down('md'));
    const small = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const classes = useStyles();

    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    

    return (
        <Grid container   >

            <section className={classes.homeSec1}>
                <Grid container px={mediam ? 5 : 10} py={15} direction={largeScreen?'row':'column'}  alignItems={largeScreen?'start':'center'} justifyContent={largeScreen?'center':'start'} spacing={1} >
                    <Grid item sm={6} xs={12}  >
                        <Typography variant="h3"  gutterBottom component="div" className={classes.homeH1}>
                            Your On-The-Go Fashion
                            Made <span>Absolutely
                            Effortless</span>
                        </Typography>
                        <Typography variant='h5' gutterBottom component='div' className={classes.homep1}>
                            Whether you’re zipping to a business meeting, going on vacation or whatever your occasion is, we take care of your outfit styling & logistics for you to dress and impress – all within your budget
                        </Typography>
                        <Grid item sm={6} xs={12} pt={2} className={classes.btn1Container}>
                            <Button variant="contained" fullWidth>Get Started</Button>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} mt={largeScreen?0:10} className={classes.videoContainer}>
                        <CardMedia component="video" image={checkingVideo}
                            controls
                            className={' w-100 videoCard'}
                        />
                        <Grid item pl={mediam?5:10} pb={10} className={'videoImg'}>
                            <img  src={videoBg} className={'videoBg'} />
                        </Grid>
                    </Grid>
                </Grid>
            </section>
            
            <Grid container px={mediam?5:10} pb={7} className={classes.Sec2}>
                <Typography variant='h6' py={7} align='center' className='w-100 Sec2H'  gutterBottom component='div' >
                    Getting Started Right Now is Easy
                </Typography>
                <Grid container>
                    <Grid item sm={6} xs={12} pr={small?0:2}>
                        <Grid container direction='column'  >
                            <Grid item className={classes.Sec2Div1} >
                                <Grid container px={3} py={5} className={classes.S2D1HS} direction='row' justifyContent='space-between'>
                                    <Typography variant='h5' className={'S2D1H1'} gutterBottom component='div'>
                                        Your Choice, Our Curated <br/>Style
                                    </Typography>
                                    <Typography variant='h5' className={'S2D1H2'} gutterBottom component='div'>
                                        01
                                    </Typography>
                                    <Typography variant='h6' className={'S2D1H3'} gutterBottom component='div'>
                                        Find it hard to pick the perfect outfit for the occasion? Juggling your style choices while deciding on one hundred other things? At StyleWire, our pro-stylists will take care of it for you. Tell us your occasion, take our style quiz—then let our pros hand-pick everything.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item mt={2} className={classes.Sec2Div2} >
                                <Grid container px={3} py={5} className={classes.S2D1HS} direction='row' justifyContent='space-between'>
                                    <Typography variant='h5' className={'S2D1H1'} gutterBottom component='div'>
                                        Delivered Impeccably To Any <br/>Location 
                                    </Typography>
                                    <Typography variant='h5' className={'S2D1H2'} gutterBottom component='div'>
                                        02
                                    </Typography>
                                    <Typography variant='h6' className={'S2D1H3'} gutterBottom component='div'>
                                        No more extra luggage, no more wrinkle-fears—we’ll deliver your outfit in the absolute best condition, right to any location of yours. Saving you time, hassle, and fashionista nightmares. 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} mt={small?2:0} className={classes.Sec2Div3} >
                        <Grid container px={3} py={5} height={'100%'} direction='column' justifyContent='space-between'>
                            <Grid container className={classes.S2D1HS} direction='row' justifyContent='space-between' >
                                <Typography variant='h5' className={'S2D1H1'} gutterBottom component='div'>
                                    Washing It & Returning It
                                </Typography>
                                <Typography variant='h5' className={'S2D1H2'} gutterBottom component='div'>
                                    03
                                </Typography>
                            </Grid>
                            <Grid container className={classes.S2D1HS}  >
                                <Typography variant='h6' className={'S2D1H3'} gutterBottom component='div'>
                                    Once your occasion is over and you’re back in your bathrobes—there’s no need to think about your outfit again. We’ll wash it for you, caringly pack it away, and deliver it back home to you if it was already yours. 
                                </Typography>
                                <Grid item sm={6} xs={12} pt={2} className={classes.btn1Container}>
                                    <Button variant="contained" className={'getStartedYellow'} fullWidth>Get Started</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container px={mediam?5:10} pb={7} className={classes.Sec2} >
                <Typography variant='h6' py={5} align='center' className='w-100 Sec2H'  gutterBottom component='div' >
                    Because There’s No Need To Wait For Those Red-Carpet Moments 
                </Typography>
                <Grid container spacing={1} justifyContent='space-between'>
                    <Grid item sm={3} xs={12} className={classes.Sec3Grid}>
                        <Grid  item   px={2} py={4} className={[classes.Sec3Div1,classes.Sec3Div]}>
                            <Typography variant='h5' component='div' align='center'>
                                    No More Fashion Stress
                            </Typography>
                            <Typography pt={3} variant='h6' component='div' align='center'>
                                    Stay true to your fashion vision, our professional stylists will handpick outfits for you.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={3} xs={12} className={classes.Sec3Grid}>
                        <Grid  item   px={2} py={4} className={[classes.Sec3Div2,classes.Sec3Div]}>
                            <Typography variant='h5' component='div' align='center'>
                                    Ending Your Luggage Woes
                            </Typography>
                            <Typography pt={3} variant='h6' component='div' align='center'>
                                    Carry less stuff, skip the airport fuss. And why even bother about another booking class?
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={3} xs={12} className={classes.Sec3Grid}>
                        <Grid  item   px={2} py={4} className={[classes.Sec3Div3,classes.Sec3Div]}>
                            <Typography variant='h5' component='div' align='center'>
                                    Any Occasion, Any Location 
                            </Typography>
                            <Typography pt={3} variant='h6' component='div' align='center'>
                                    Whenever you are, we’ll deliver your outfits to your hotel, home, business office, or lounge.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={3} xs={12} className={classes.Sec3Grid}>
                        <Grid  item   px={2} py={4} className={[classes.Sec3Div4,classes.Sec3Div]}>
                            <Typography variant='h5' component='div' align='center'>
                                    Look Amazing Every Time
                            </Typography>
                            <Typography pt={3} variant='h6' component='div' align='center'>
                                    We’re wrinkle-allergic, so we make sure it never happens. 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid container px={mediam?5:10} pb={7} pt={3} className={classes.Sec4} spacing={2}>
                <Grid item sm={6} xs={12} >
                    <Grid item>
                        <Typography variant='h5' gutterBottom component='div' >
                                Where Will Your Next Occasion Be?
                        </Typography>
                        <Typography variant='subtitle2' pb={3} gutterBottom component='div' >
                                Heading to a big exec meeting? Made plans for a tropical getaway? Wherever city you’ll envelop your vibe with, we’ll make sure the perfect outfit greets you
                        </Typography>
                         <FormControl fullWidth >
                            <InputLabel id="demo-simple-select-label">Select City</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={city}
                            label="Select City"
                            onChange={handleChange}
                            MenuProps={MenuProps}
                            className={classes.selectCity}
                            >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid item pt={5}>
                        <img src={home9}  className='w-100'/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container px={mediam?5:10} pb={7} className={classes.Sec5} >
                <Grid item className='w-100'>
                    <Accordion />
                </Grid>
                <Grid item my={2} className='w-100'>
                    <Accordion />
                </Grid>
                <Grid item className='w-100'>
                    <Accordion />
                </Grid>
            </Grid>

            <Grid container px={mediam?5:10} pb={7} className={classes.Sec6} >
                   <Grid item  xs={12} className={classes.Sec3Grid} >
                        <Grid  item  py={4} >
                            <Grid container className={[classes.Sec3Div5,classes.Sec3Div]} direction='column' alignItems='center' justifyContent='center' style={{minHeight:'500px'}}>
                                    <Typography px={mediam?2:0} className={'Sec6H1'} variant='h4' component='div' >
                                            When Ultra-Convenience Meets On-The-Go A La Mode
                                    </Typography>
                                    <Typography pt={3} px={mediam?2:10} variant='h6' component='div' align='center'>
                                            Ushering in a new kind of stylist service, we handle every outfit A-Zs—from picking out outfits to getting it delivered and cleaned
                                    </Typography>
                                    <Grid container justifyContent='center'>
                                        <Grid item sm={3} xs={6} pt={2} className={classes.btn1Container}>
                                            <Button variant="contained"  fullWidth>JOIN NOW</Button>
                                        </Grid>
                                    </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
           
        </Grid>
    )
}

export default StarterHome
