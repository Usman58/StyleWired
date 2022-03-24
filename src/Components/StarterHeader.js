import React ,{useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import logo from '../images/Frame.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import {List,ListItem,ListItemText} from '@mui/material';


const useStyles = makeStyles(theme => ({
       toolbarMargin:{
           ...theme.mixins.toolbar,
           marginBottom:'1em',
           [theme.breakpoints.down('lg')]:{
              marginBottom:'2em'
           }
       },
       toolbarContainer:{
           '& .MuiToolbar-root':{
               padding:'15px 70px',
               [theme.breakpoints.down('sm')]:{
                   padding:'15px 15px',
               }
           },
       },
       tabContainer:{
           marginLeft:'auto',
           '& .MuiTab-root':{
               textTransform:'none'
           }
       },
       toolbar:{
           '& .MuiButton-root':{
               textTransform:'none',
               padding:'8px 35px',
               fontWeight:'600',
               '&.loginBtn':{
                   marginRight:'10px',
                   marginLeft:'5px',
               },
               '&.startedBtn':{
               },
           },
       },
       logo:{
           
       },
       drawerIconContainer:{
            marginLeft:'auto !important',
            '&:hover':{
                backgroundColor:'transparent !important',
            },
            '& .MuiSvgIcon-root':{
                height:'50px',
                width:'50px',
            }
       },
       listContainer:{
           '& .listBtn':{
               backgroundColor:'#5AB27E',
               color:'white',
               '& .MuiTypography-root':{
                   fontWeight:'600'
               },
               '&:hover':{
                  backgroundColor:'#24ae5c',
                  color:'white',
               },
               
           },
           '& .Mui-selected':{
               backgroundColor:'#198947 !important',
               color:'white',
           }
       }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function StarterHeader() {
    const theme = useTheme();
    const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('lg'));
    const classes = useStyles();

    const [value, setValue] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const menu = (
        <>
            <Tabs value={value} onChange={handleChange} className={classes.tabContainer}>
                <Tab label='Home'/> 
                <Tab label='For Stylists'/> 
                <Tab label='Location'/> 
                <Tab label='How It Works'/> 
                <Tab label='About Us'/> 
            </Tabs>
            
            <Button variant="outlined" className={'loginBtn'} >Login</Button>
            <Button variant="contained" className={'startedBtn'} >Get Started</Button>
        </>
    )

    const drawer = (
        <>
        <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} 
        open={openDrawer} 
        onClose={() => setOpenDrawer(false)} onOpen={()=> setOpenDrawer(true) }
        >
            <div className={classes.toolbarMargin} ></div>
           <List disablePadding className={classes.listContainer}>
               <ListItem onClick={() => {setOpenDrawer(false); setValue(0)}} divider button selected={value == 0}>
                   <ListItemText>Home</ListItemText>
               </ListItem>
               <ListItem onClick={() => {setOpenDrawer(false); setValue(1)}} divider button selected={value == 1}>
                   <ListItemText>For Stylists</ListItemText>
               </ListItem>
               <ListItem onClick={() => {setOpenDrawer(false); setValue(2)}} divider button selected={value == 2}>
                   <ListItemText>Location</ListItemText>
               </ListItem>
               <ListItem onClick={() => {setOpenDrawer(false); setValue(3)}} divider button selected={value == 3}>
                   <ListItemText>How It Works</ListItemText>
               </ListItem>
               <ListItem onClick={() => {setOpenDrawer(false); setValue(4)}} divider button selected={value == 4}>
                   <ListItemText>About Us</ListItemText>
               </ListItem>
               <ListItem className={'listBtn'} onClick={() => setOpenDrawer(false)} divider button>
                   <ListItemText>Login</ListItemText>
               </ListItem>
               <ListItem className={'listBtn'} onClick={() => setOpenDrawer(false)} divider button>
                   <ListItemText >Get Started</ListItemText>
               </ListItem>
           </List>
        </SwipeableDrawer>
        <IconButton className={classes.drawerIconContainer} onClick={()=> setOpenDrawer(!openDrawer)} disableRipple>
            <MenuIcon/>
        </IconButton>
        </>
    )
    return (
        <>
        <ElevationScroll className={classes.appBar}>
            <AppBar style={{backgroundColor:'white',zIndex:theme.zIndex.modal + 1}} className={classes.toolbarContainer}>
                    <Toolbar className={classes.toolbar} >
                        <img src={logo} className={classes.logo}/>
                        { largeScreen ? menu : drawer }
                    </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}></div>
        </>
    )
}

export default StarterHeader
