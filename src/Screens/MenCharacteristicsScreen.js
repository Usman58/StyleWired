import React,{ useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import { Image } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import { Form } from "react-bootstrap";
import Button from "@mui/material/Button";
import img from "../images/MenCh.png";
import { HomeStyle } from '../Style/HomeStyle';
import $ from 'jquery';
import {Link} from "react-router-dom";


function MenCharacteristicsScreen() {
    const classes = HomeStyle();
    const [btnActive, setbtnActive] = useState([])
    
     
  const activeHandler = (a) => {
    var ins = $(a.target)
    var ID = $(ins).attr('id')
    
    // btnActive.includes(ID) ? setbtnActive([btnActive]):setbtnActive([...btnActive,ID])
    

    if(btnActive.includes(ID)){
      setbtnActive([...btnActive.filter((val) => val !== ID )])
    }else{
      setbtnActive([...btnActive,ID])
    }
    console.log("IDSk:",btnActive);
    // if(ID==='Comfort'){
    //     console.log(ID)
    //     setcomfortActive(ID)
    // }
    // if(ID==='Active'){
    //     console.log(ID)
    //     setstyleActive(ID)
    // }
    // if(ID==='Quality'){
    //     console.log(ID)
    //     setqualityActive(ID)
    // }
   
  }

  return (
    <>
      <Grid container px={2} spacing={14}>
        <Grid item xs={12} md={6}>
          <h5 style={{ color: "#194B2D" }}>
          Now Let’s Talk Shoes. What’s Most Important<br />
            To Get Your Feet Into?
            
          </h5>
          <p style={{ color: "#848484" }}>When your footwear is concerned, what matters most?</p>
          <Form className={classes.formSelect}>
          <Grid container>
          <Grid item xs={2} mt={2}>
          <Checkbox  color="default" id='Comfort'checked={btnActive.includes('Comfort')} onClick={activeHandler}
          style={{color: btnActive.includes('Comfort') ? '#5AB27E' : 'gray',
           }}  
          />
          </Grid>
          <Grid item xs={10}>
          <Button className={classes.card_btn} id='Comfort' onClick={activeHandler} 
              
            //   style={{ width: "100%",color:'gray',borderColor:'gray',border:'1px solid',
            //    backgoundColor: 'green' }}
            //    backgoundColor = {'greenx'}
                style={{ width: "100%",borderColor:'gray',border:'1px solid',
               color: btnActive.includes('Comfort') ? 'white' : '#5AB27E',
               backgroundColor:btnActive.includes('Comfort') ? '#5AB27E' : 'white' }} 

            >
              Comfort
            </Button>
            <br /><br /><br />
          </Grid>
          </Grid>
          
              <Grid container>
          <Grid item xs={2} mt={2}>
          <Checkbox   color="default" id='Style'checked={btnActive.includes('Style')} onClick={activeHandler}
          style={{color: btnActive.includes('Style') ? '#5AB27E' : 'gray',
           }}   />
          </Grid>
          <Grid item xs={10}>
          <Button className={classes.card_btn} id='Style' onClick={activeHandler} 
              
              style={{ width: "100%",borderColor:'gray',border:'1px solid',
              color: btnActive.includes('Style') ? 'white' : '#5AB27E',
              backgroundColor:btnActive.includes('Style') ? '#5AB27E' : 'white' }} 
              
            >
              Style
            </Button>
            
            <br /><br /><br />
          </Grid>
          </Grid>    
          <Grid container spacing={1}>
          <Grid item xs={2} mt={2}>
          <Checkbox   color="default" id='Quality'checked={btnActive.includes('Quality')} onClick={activeHandler}
          style={{color: btnActive.includes('Quality') ? '#5AB27E' : 'gray',
           }}   />
          </Grid>
          <Grid item xs={10}>
          <Button className={classes.card_btn} id='Quality' onClick={activeHandler}
              
              style={{ width: "100%",borderColor:'gray',border:'1px solid',
              color: btnActive.includes('Quality') ? 'white' : '#5AB27E',
              backgroundColor:btnActive.includes('Quality') ? '#5AB27E' : 'white' }}  
            >
              Quality
            </Button>
            <br /><br /><br />
          </Grid>
          </Grid>
          <Button className={classes.card_btn} component={Link} to="/usualpreference"
              variant="contained"
              color="success"
              style={{ width: "100%" }}
            >
              Next
            </Button>
          </Form>
        </Grid>
        <Grid item xs={12} md={6}  mt={6} pb={5}>
          <Image src={img} fluid alt="No image" />
        </Grid>
      </Grid>
    </>
  );
}

export default MenCharacteristicsScreen;
