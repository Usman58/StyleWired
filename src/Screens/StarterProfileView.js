import React from 'react'
import { Typography,Grid,Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import view1 from '../images/view1.png'; 
import view2 from '../images/view2.png'; 
import view3 from '../images/view3.png'; 
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    btnContainer:{ 
    '& .MuiButton-root':{
          color:'#ffff',
          padding:'10px 0px',
          textTransform:'none',
        },  
    },
    Sec2:{
        '& .Sec2Grid1':{border:'1px solid #A6A6A6',borderRadius:'15px'},
        '& .Sec2Grid2':{border:'1px solid #A6A6A6',borderRadius:'15px'},
        '& .css-nnbavb':{width:'auto'},
        '& .MuiFormControl-root':{margin:'8px 0',}
    },
    Sec3:{
        '& .Sec3Grid1':{border:'1px solid #A6A6A6',borderRadius:'15px'},
        '& .Sec3Grid2':{border:'1px solid #A6A6A6',borderRadius:'15px'},
        '& .css-nnbavb':{width:'auto'},
        '& .MuiFormControl-root':{margin:'8px 0',}
    },
    Sec4:{
        '& .Sec4Grid2':{border:'1px solid #A6A6A6',borderRadius:'15px'},
        '& .Sec4Grid1':{'& .Sec4Grid1Card':{border:'1px solid #A6A6A6',borderRadius:'15px',
        '& .Sec4Grid1CardT1':{fontWeight:'600',minHeight:'63px',fontsize:'20px !important','& .MuiTypography-root':{fontsize:'20px !important',},},
        '& .Sec4Grid1CardT2':{fontsize:'16px',color:'#A6A6A6',fontWeight:'600'},
        // '& .Sec4Grid1CardT3':{},
        }},
        '& .Sec4FootCard1':{backgroundColor:theme.palette.primary.main,borderRadius:'15px',color:'#fff'},
        '& .Sec4FootCard':{border:'1px solid #A6A6A6',borderRadius:'15px'},
    },
}))

function StarterProfileView() {
    const classes = useStyles();
    const small = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const [values, setValues] = React.useState({
        weight: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <Grid container>
            <Grid container px={small?5:10} pt={5} className={classes.Sec1} >
                <Grid item md={10} xs={12}>
                    <Grid container direction='column'>
                        <Typography variant='h5'  component='div' >
                            Wedding Style Profile
                        </Typography>
                        <Typography variant='h6' gutterBottom component='div' >
                            Here’s the complete style profile of the user
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md={2} xs={12} className={classes.btnContainer}>
                <Button className='hover' variant="outline-success" style={{width:'60%'}}><Link to="/addsuggestion" style={{color:"green",textDecoration:'none'}}>Add Suggesstions</Link></Button>
                </Grid>
            </Grid>

            <Grid container px={small?5:10} pt={5}  className={classes.Sec2} spacing={2}>
                  <Grid item md={8} xs={12} >
                    <Grid container p={2}  className={'Sec2Grid1'}>
                        <Typography variant='h5'  component='div' >
                            Personal Information
                        </Typography> 
                        <Grid container spacing={2} py={2}>
                            <Grid item md={4} xs={12}>
                                <FormHelperText id="outlined-weight-helper-text" fullWidth>How do you feel?</FormHelperText>
                                <TextField
                                    label={""}
                                    id="outlined-start-adornment"
                                    fullWidth
                                    // InputProps={{
                                    //     endAdornment: <InputAdornment position="start">kg</InputAdornment>,
                                    // }}
                                />
                            </Grid>

                            <Grid item md={2} xs={12}>
                                <FormHelperText id="outlined-weight-helper-text" fullWidth>Height</FormHelperText>
                                <TextField
                                    label={""}
                                    id="outlined-start-adornment"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start">cm</InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <FormHelperText id="outlined-weight-helper-text" fullWidth>Weight</FormHelperText>
                                <TextField
                                    id="outlined-start-adornment"
                                    fullWidth
                                    InputProps={{
                                        endAdornment: <InputAdornment position="start">Kgs</InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <FormHelperText id="outlined-weight-helper-text" fullWidth>Eye Color</FormHelperText>
                                <TextField
                                    id="outlined-start-adornment"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <FormHelperText id="outlined-weight-helper-text" fullWidth>Hair Color</FormHelperText>
                                <TextField
                                    id="outlined-start-adornment"
                                    fullWidth
                                />
                            </Grid>
                            
                            
                        </Grid>  
                    </Grid>
                  </Grid>
                  <Grid item md={4} xs={12} >
                      <Grid container px={2} pt={2} className={'Sec2Grid2'}>
                            <Grid item xs={8}  >
                                <Typography variant='h5'  component='div' >
                                    Body Type
                                </Typography> 
                                <Typography variant='h6'  component='div' >
                                    Rectangle
                                </Typography> 
                            </Grid>
                            <Grid item xs={4} align='end' >
                                <img src={view1}  />
                            </Grid>
                      </Grid>
                  </Grid>
            </Grid>

            <Grid container px={small?5:10} pt={5} className={classes.Sec3} spacing={2}>
                <Grid item md={6} xs={12} >
                    <Grid container p={2}  className={'Sec3Grid1'}>
                        <Typography variant='h5'  component='div' >
                            Sizes
                        </Typography> 

                        <Grid container spacing={2} py={2}>
                            <Grid item md={3} xs={12}>
                            <FormHelperText id="outlined-weight-helper-text" fullWidth>Tops</FormHelperText>
                            <TextField
                                id="outlined-start-adornment"
                                fullWidth
                            />
                            </Grid>

                            <Grid item md={3} xs={12}>
                            <FormHelperText id="outlined-weight-helper-text" fullWidth>Bottoms(Trousers)</FormHelperText>
                            <TextField
                                id="outlined-start-adornment"
                                fullWidth
                            />
                            </Grid>

                            <Grid item md={3} xs={12}>
                            <FormHelperText id="outlined-weight-helper-text" fullWidth>Footwear</FormHelperText>
                            <TextField
                                id="outlined-start-adornment"
                                fullWidth
                            />
                            </Grid>

                            <Grid item md={3} xs={12}>
                            <FormHelperText id="outlined-weight-helper-text" fullWidth>Bra Size</FormHelperText>
                            <TextField
                                id="outlined-start-adornment"
                                fullWidth
                            />
                            </Grid>

                            
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12} >
                    <Grid container p={2}  className={'Sec3Grid2'}>
                        <Typography variant='h5'  component='div' >
                            Measurements
                        </Typography>
                        <Grid container spacing={2} py={2}>
                            <Grid item md={2} xs={12}>
                            <FormHelperText id="outlined-weight-helper-text" fullWidth>Neck</FormHelperText>
                            <TextField
                                id="outlined-start-adornment"
                                fullWidth
                            />
                            </Grid>
                            <Grid item md={2} xs={12}>
                            <FormHelperText id="outlined-weight-helper-text" fullWidth>Waist</FormHelperText>
                            <TextField
                                id="outlined-start-adornment"
                                fullWidth
                            />
                            </Grid>
                            <Grid item md={2} xs={12}>
                            <FormHelperText id="outlined-weight-helper-text" fullWidth>Bust</FormHelperText>
                            <TextField
                                id="outlined-start-adornment"
                                fullWidth
                            />
                            </Grid>
                            <Grid item md={2} xs={12}>
                            <FormHelperText id="outlined-weight-helper-text" fullWidth>Hips</FormHelperText>
                            <TextField
                                id="outlined-start-adornment"
                                fullWidth
                            />
                            </Grid>
                            <Grid item md={2} xs={12}>
                            <FormHelperText id="outlined-weight-helper-text" fullWidth>Shoulder</FormHelperText>
                            <TextField
                                id="outlined-start-adornment"
                                fullWidth
                            />
                            </Grid>
                            <Grid item md={2} xs={12}>
                            <FormHelperText id="outlined-weight-helper-text" fullWidth>Inside leg</FormHelperText>
                            <TextField
                                id="outlined-start-adornment"
                                fullWidth
                            />
                            </Grid>
                        </Grid> 
                    </Grid>
                </Grid>
            </Grid>

            <Grid container px={small?5:10} py={5} className={classes.Sec4} spacing={2}>
                <Grid item md={7} xs={12} >
                      <Grid container   className={'Sec4Grid1'} spacing={1} justifyContent='space-between'>
                          <Grid item py={2} md={2} className={'Sec4Grid1Card'}>
                            <Typography variant='h6'  component='div' className={'Sec4Grid1CardT1'} >
                                Tops fit
                            </Typography>
                                <Grid item align='center'>
                                    <img  src={view2}  />
                                </Grid>
                            <Typography align='center' variant='subtitle1'  component='div' className={'Sec4Grid1CardT2'} >
                                Tops fit
                            </Typography>
                          </Grid>
                          
                          <Grid item p={2} md={2} className={'Sec4Grid1Card'}>
                            <Typography variant='h6'  component='div' className={'Sec4Grid1CardT1'} >
                                Bottoms fit
                            </Typography>
                            <Grid item align='center'>
                                  <img  src={view2}  />
                            </Grid>
                            <Typography align='center' variant='subtitle1'  component='div' className={'Sec4Grid1CardT2'} >
                                Tops fit
                            </Typography>
                          </Grid>
                          <Grid item p={2} md={2} className={'Sec4Grid1Card'}>
                            <Typography variant='h6'  component='div' className={'Sec4Grid1CardT1'} >
                                Comfortable outfit
                            </Typography>
                            <Grid item align='center'>
                                  <img  src={view2}  />
                            </Grid>
                            <Typography align='center' variant='subtitle1'  component='div' className={'Sec4Grid1CardT2'} >
                                Tops fit
                            </Typography>
                          </Grid>
                          <Grid item p={2} md={2} className={'Sec4Grid1Card'}>
                            <Typography variant='h6'  component='div' className={'Sec4Grid1CardT1'} >
                                Tops fit
                            </Typography>
                            <Grid item align='center'>
                                  <img  src={view2}  />
                            </Grid>
                            <Typography align='center' variant='subtitle1'  component='div' className={'Sec4Grid1CardT2'} >
                                Tops fit
                            </Typography>
                          </Grid>
                          <Grid item p={2} md={2} className={'Sec4Grid1Card'}>
                            <Typography variant='h6'  component='div' className={'Sec4Grid1CardT1'} >
                                Tops fit
                            </Typography>
                            <Grid item align='center'>
                                  <img  src={view2}  />
                            </Grid>
                            <Typography align='center' variant='subtitle1'  component='div' className={'Sec4Grid1CardT2'} >
                                Tops fit
                            </Typography>
                          </Grid>
                      </Grid>
                </Grid>
                <Grid item md={5} xs={12} >
                      <Grid container p={1} spacing={1} className={'Sec4Grid2'}>
                            <Typography variant='h5'  component='div' >
                                Footwear
                            </Typography>
                            <Grid container pt={1} spacing={1}>
                                <Grid item md={6} p={1} xs={12}  >
                                     <Grid container p={1} justifyContent='space-between' alignItems='center' className={'Sec4FootCard1'}>
                                        <Typography variant='subtitle1'  component='div' >
                                            Footwear characteristic  Comfort
                                        </Typography>
                                     </Grid>
                                </Grid>
                                <Grid item md={6} xs={12} >
                                    <Grid container p={1} justifyContent='space-between' alignItems='center' className={'Sec4FootCard'}>
                                        <Grid item>
                                            <Typography variant='subtitle1'  component='div' >
                                                Heel Height <br/> Low
                                            </Typography>
                                        </Grid>
                                        <Grid item >
                                            <img src={view3} className={'Sec4FootCardImg w-100'} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={6} xs={12} >
                                    <Grid container p={1} justifyContent='space-between' alignItems='center' className={'Sec4FootCard'}>
                                        <Grid item>
                                            <Typography variant='subtitle1'  component='div' >
                                                Heel Height <br/> Low
                                            </Typography>
                                        </Grid>
                                        <Grid item >
                                            <img src={view3} className={'Sec4FootCardImg w-100'} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                      </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default StarterProfileView
