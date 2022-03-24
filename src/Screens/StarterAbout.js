import React from 'react'
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid,Typography,Button  } from '@mui/material';
import about1 from '../images/about1.png'; 
import about2 from '../images/about2.png'; 
import about2Bg from '../images/about2Bg.png'; 
import about3 from '../images/about3.png'; 
import about4 from '../images/about4.png'; 
import about5 from '../images/about5.png'; 
import about6 from '../images/about6.png'; 
import about7 from '../images/about7.png'; 
import about8 from '../images/about8.png'; 


const useStyles = makeStyles(theme => ({
      Sec1:{
        '& .Sec1H1':{
            fontWeight:'600'
        }
      },
      Sec2:{
        '& .Sec2H1':{
            fontWeight:'600'
        }
      },
      bottomborder:{
          border:'1px solid #5AB27E',
          width:'40%'
      },
      about2ImgContainer:{
          position:'relative',
          '& .about2Img2':{
            position:'absolute',top:'50px',right:'-50px',left:'50px',zIndex:'-1',
            [theme.breakpoints.down('sm')]:{top:'60px',right:'-20px',left:'30px'} 
        },
      },
      Sec4Div1:{
        backgroundImage:`url(${about4})`,
        backgroundPosition:'top center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundAttachment:'scroll',
        borderRadius:'15px',
      },
      Sec4Div2:{
        backgroundImage:`url(${about5})`,
        backgroundPosition:'top center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundAttachment:'scroll',
        borderRadius:'15px',
      },
      Sec4Div:{
        height:'400px',
        display:'flex',
        flexDirection:'column !important',
        justifyContent:'center',
        alignItems:'center',
       '& .MuiTypography-root':{color:'white'},
       '& .Sec4P':{
           [theme.breakpoints.down('md')]:{fontSize:'0.85rem'}
        }
      },
      Sec5:{
          '& .Sec5H1':{color:'#5AB27E',},
          '& .Sec5H2':{fontWeight:'600'}
      },
      Sec6:{
          '& .Sec6H1':{fontWeight:'600'},
          '& .Sec6T1':{color:'#0D406A'},
          '& .Sec6T2':{color:'#656565'}
      },
      btn1Container:{
        '& .MuiButton-root':{
            textTransform:'none',
            padding:'10px 0',
        },
      }
}))

function StarterAbout() {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('lg'));
    const mediam = useMediaQuery(theme => theme.breakpoints.down('md'));
    const small = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const classes = useStyles();

    return (
        <Grid container >

            <Grid container px={small?5:10} py={5} className={classes.Sec1}>
                <Typography variant='h5' pt={3} align='center' className='w-100 Sec1H1'  gutterBottom component='div' >
                    Style Wired
                </Typography>
                <Typography variant='h6' align='center' className='w-100 Sec1H2'  gutterBottom component='div' >
                    Your ultra-fashion & convenience, our super logistics 
                </Typography>
                <Grid item>
                    <img src={about1} className='w-100'/>
                </Grid>
            </Grid>

            <Grid container px={small?5:10} pb={15} pt={5} className={classes.Sec2} >
                <Grid container px={mediam?0:5}  className={classes.Sec2} alignItems='center' spacing={10}>
                    <Grid item md={6} xs={12} >
                        <Typography variant='h5' pt={3}  className='w-100 Sec2H1'  gutterBottom component='div' >
                            Who We Are?
                        </Typography>
                        <Typography variant='body1'   className='w-100 Sec2H2'  gutterBottom component='div' >
                            Based in London, UK, we are an internationally-operating fashion logistics service— ready to make your travels seamless for you. With a background in fashion and tech, we were well aware of the pain of on-the-go fashion. From not knowing what outfit to pick to packing, lugging, ironing, and washing it, it seems like a constant hassle when traveling for occasions. Our solution: make it all convenient.  
                        </Typography>
                        <Grid item mt={4} className={classes.bottomborder} ></Grid>
                    </Grid>
                    <Grid item md={6} xs={12}  className={classes.about2ImgContainer} >
                        <img src={about2} className={'w-100 about2Img1'}/>
                        <Grid item pl={10} pb={10} className={'about2Img2'}>
                              <img src={about2Bg} className={'w-100'}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container px={small?5:10} pb={12} pt={5} spacing={10} alignItems='center' className={classes.Sec3}>
                <Grid item md={7} xs={12} >
                    <img src={about3} className={'w-100'} />
                </Grid>
                <Grid item md={5} xs={12} >
                    <Typography variant='h5' pt={3}  className='w-100 Sec2H1'  gutterBottom component='div' >
                        What We Do
                    </Typography>
                    <Typography variant='body1'   className='w-100 Sec2H2'  gutterBottom component='div' >
                        No more packing outfits for meetings & vacation, no more stress about airport baggage, ironing, and washing. For all your outfit logistics, we’ll take care of it for you. Our online personal stylists will curate your dream outfit selection, then we’ll get it delivered straight to your door. A special stylist delivery service, but so much more.
                    </Typography>
                    <Grid item mt={4} className={classes.bottomborder} ></Grid>
                </Grid>
            </Grid>

            <Grid container px={small?5:10} pb={3}  spacing={3} alignItems='center' className={classes.Sec4}>
                <Grid item sm={6} xs={12} className={classes.Sec4Grid}>
                    <Grid  item   px={2} py={4} className={[classes.Sec4Div1,classes.Sec4Div]}>
                        <Typography variant='h5' component='div' align='center'>
                                Our Mission
                        </Typography>
                        <Typography pt={3} variant='h6' className={'Sec4P'} component='div' align='center'>
                                Embodying your personal style shouldn’t be a pain. It should be a seamless experience of bringing your personality to life; your comfort and charm cared for by textures. At StyleWire, our mission is to make your fashion effortless—for it to be with you without hassle, affordably, and anywhere. 
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.Sec4Grid}>
                    <Grid  item   px={2} py={4} className={[classes.Sec4Div2,classes.Sec4Div]}>
                        <Typography variant='h5' component='div' align='center'>
                                Our Vision
                        </Typography>
                        <Typography pt={3} variant='h6' className={'Sec4P'} component='div' align='center'>
                                Emboldened by a grander vision, we see StyleWire as more than a seamless fashion experience. We envision a platform that styles the world, that builds an international fashion community unlike anything ever known
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container px={small?5:10} pb={10} className={classes.Sec5} justifyContent='center'>
                <Typography variant='h5' pt={3} align='center' className={mediam?'Sec5H1':'w-50 Sec5H1'}  gutterBottom component='div' >
                    Imagine that would be real. Because it is real. To more convenient travelling, Stylewired.
                </Typography>
                <Typography variant='h5' pt={3} align='center' className='w-100 Sec5H2'  gutterBottom component='div' >
                    Our Philosophy
                </Typography>
                <Typography variant='h6' align='center'  className='w-100 Sec5H3'  gutterBottom component='div' >
                    No more packing outfits for meetings & vacation, no more stress about airport baggage, ironing, and washing. For all your outfit logistics, we’ll take care of it for you. Our online personal stylists will curate your dream outfit selection, then we’ll get it delivered straight to your door. A special stylist delivery service, but so much more.
                </Typography>
                <Grid item sm={3} xs={6} pt={2} className={classes.btn1Container}>
                    <Button variant="contained"  fullWidth>Visit our Blog</Button>
                </Grid>
            </Grid>

            <Grid container px={small?5:10} pb={12} className={classes.Sec6} justifyContent='center'>
                <Typography variant='h5' pt={3} align='center' className='w-100 Sec6H1'  gutterBottom component='div' >
                    Our Philosophy
                </Typography>
                <Grid container pt={2} spacing={3}>
                        <Grid item sm={4} xs={12}>
                                <Grid item>
                                    <img src={about6} className='w-100'/>
                                    <Typography variant='h5' pt={3} align='center' className='w-100 Sec6T1'  gutterBottom component='div' >
                                        Alaxi Thomas
                                    </Typography>
                                    <Typography variant='h5'  align='center' className='w-100 Sec6T2'  gutterBottom component='div' >
                                        Fashion Designer, NY
                                    </Typography>
                                </Grid>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                                <Grid item>
                                    <img src={about7} className='w-100'/>
                                    <Typography variant='h5' pt={3} align='center' className='w-100 Sec6T1'  gutterBottom component='div' >
                                        Henry A. Smith
                                    </Typography>
                                    <Typography variant='h5'  align='center' className='w-100 Sec6T2'  gutterBottom component='div' >
                                        Fashion Designer, TX
                                    </Typography>
                                </Grid>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                                <Grid item>
                                    <img src={about8} className='w-100'/>
                                    <Typography variant='h5' pt={3} align='center' className='w-100 Sec6T1'  gutterBottom component='div' >
                                        Tanya M. Tye
                                    </Typography>
                                    <Typography variant='h5'  align='center' className='w-100 Sec6T2'  gutterBottom component='div' >
                                        Senior Designer, NY
                                    </Typography>
                                </Grid>
                        </Grid>
                </Grid>
                <Grid item sm={3} xs={6} pt={2}  className={classes.btn1Container}>
                    <Button variant="contained"  fullWidth>Join Stylewired</Button>
                </Grid>
            </Grid>



        </Grid>
    )
}

export default StarterAbout
