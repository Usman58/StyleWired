import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image4 from "../images/menfreetime1.png";
import image5 from "../images/menfreetime2.png";
import image6 from "../images/menfreetime3.png";
import image7 from "../images/menfreetime4.png";
import { Card} from "react-bootstrap";
import $ from 'jquery'
import {Link} from "react-router-dom";
import { HomeStyle } from '../Style/HomeStyle';
     
     

const GData = [
  {
    id:1,
    image:image4,
    title:'Twill blazer, t-shirt or casual shirt, chinos',
    subTitle:'Casual Chic'
  },
  {
    id:2,
    image:image5,
    title:'Leather jacket & jeans',
    subTitle:'Edgy'
  },
  {
    id:3,
    image:image6,
    title:'T-shirt/Hoody and jeans',
    subTitle:'Casual'
  },
  {
    id:4,
    image:image7,
    title:'Sweater and chinos',
    subTitle:'Smart Casual'
  }
]


function MenFreeTimeScreen() {
  const classes = HomeStyle();
  const [cardActive, setcardActive] = useState('')
  const [catData, setCatData] = useState(GData)
  const activeHandler = (a) => {
    var ins = $(a.target)[0].offsetParent
    var ID = $(ins).attr('id')
    // $('.custom_cards').css('border-color', 'rgba(0,0,0,.125)')
    // $("#"+ID).css('border-color', 'green')
    setcardActive(ID)
  }

  return (
    <>
      <Grid container textAlign="center" >
        <Grid item sm={12}>
          <h4 style={{ color: "#194B2D" }}>In Your Free Time, What’s Your On-The-Go Style?</h4>
          <p style={{ color: "#848484" }}>Most likely the outfit your friends might spot you by.</p>
          

          
          <Grid container textAlign="center" spacing={12} px={10}>

            {
               catData.map(item => {
                    return  <Grid item xs={12} sm={6} lg={3} mt={5}>
                                <Card id={item.id} style={{ padding:'40px',
                                  borderColor: parseInt(cardActive) === item.id  ? 'green' : 'rgba(0,0,0,.125)'
                              }} className='custom_cards' onClick={activeHandler}>
                                  <Card.Img src={item.image} height='300' />
                                
                                </Card>
                                <h6 style={{paddingTop:'5px',fontSize:'11px'}}>{item.title}</h6>
                                <span style={{color:'gray'}}>{item.subTitle}</span>
                              </Grid>
               })
            }
            


          </Grid>
          <br />
          <Button className={classes.card_btn} component={Link} to="/mentopsfit"
            variant="contained"
            color="success"
            size="large"
            style={{ width: "31%" }}
          >
            Next
          </Button>
        </Grid>
      </Grid><br /><br /><br />
    </>
  );
}

export default MenFreeTimeScreen;
