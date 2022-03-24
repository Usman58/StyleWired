import React,{ useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import image4 from "../images/Skinny.png";
import image5 from "../images/Bslim.png";
import image6 from "../images/Normal.png";
import image7 from "../images/Loose.png";
import image8 from "../images/Tepered.png";
import { Card} from "react-bootstrap";
import $ from 'jquery'
import {Link} from "react-router-dom";
import { HomeStyle } from '../Style/HomeStyle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material/styles";

function MenBottomsFit() {
  const theme = useTheme();
  
  const small = useMediaQuery(theme.breakpoints.down("md"));
  const classes = HomeStyle();
  const [cardActive, setcardActive] = useState('')
  const activeHandler = (a) => {
    var ins = $(a.target)[0].offsetParent
    var ID = $(ins).attr('id')
    // $('.custom_cards').css('border-color', 'rgba(0,0,0,.125)')
    // $("#"+ID).css('border-color', 'green')
    setcardActive(ID)
  }

  return (
    <>
      <Grid container textAlign="center" px={6}>
        <Grid item sm={12}>
          <h4 style={{ color: "#194B2D" }}>What Style Of Bottoms Suits You Most?</h4>
          <p style={{ color: "#848484" }}>Because to each their own, let us know which bottoms you’d choose.</p>
          
          <Grid container textAlign="center"  justifyContent='space-between' spacing={4}>
          <Grid item xs={12}  md={4} lg={2} mt={5} >
              <Card id='Skinny' style={{padding:'14px', 
                borderColor: cardActive === 'Skinny' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards' onClick={activeHandler}>
                <Card.Img src={image4} height='315' />
                <Card.Body>
                  <Card.Title>Skinny</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12}  md={4} lg={2} mt={5} >
            <Card id='Slim' style={{ padding:'5px',
                borderColor: cardActive === 'Slim' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image5}   />
                <Card.Body>
                  <Card.Title>Slim</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12}  md={4} lg={2} mt={5} >
            <Card id='Normal' style={{ padding:'6px',
                borderColor: cardActive === 'Normal' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image6}  />
                <Card.Body>
                  <Card.Title>Normal</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12}  md={4} lg={2} mt={5} >
            <Card id='Loose' style={{  padding:'6px',
                borderColor: cardActive === 'Loose' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image7} />
                <Card.Body>
                  <Card.Title>Loose</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
            <Grid item xs={12}  md={4} lg={2} mt={5} >
            <Card id='Tapered' style={{padding:'7px',
                borderColor: cardActive === 'Tapered' ? 'green' : 'rgba(0,0,0,.125)'
            }} className='custom_cards'  onClick={activeHandler}>
                <Card.Img src={image8}  />
                <Card.Body>
                  <Card.Title>Tapered</Card.Title>
                </Card.Body>
              </Card>
            </Grid>
          </Grid>
          <br />
          <Button className={classes.card_btn} component={Link} to="/feetinto"
            variant="contained"
            color="success"
            size="large"
            style={{ width: "50%" }}
          >
            Next
          </Button>
        </Grid>
      </Grid><br /><br /><br />
    </>
  );
}

export default MenBottomsFit;
