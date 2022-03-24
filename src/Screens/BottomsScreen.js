import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import { Image, Card } from "react-bootstrap";
import { HomeStyle } from "../Style/HomeStyle";

import $ from "jquery";
import img1 from "../images/foot1.png";
import img2 from "../images/foot2.png";
import img3 from "../images/foot3.png";
import DR from "../images/Dressing room.png";
import {Link} from "react-router-dom";

function BottomsScreen() {
  const classes = HomeStyle();
  const [cardActive, setcardActive] = useState("");
  const activeHandler = (a) => {
    var ins = $(a.target)[0].offsetParent;
    var ID = $(ins).attr("id");
    // $('.custom_cards').css('border-color', 'rgba(0,0,0,.125)')
    // $("#"+ID).css('border-color', 'green')
    setcardActive(ID);
  };

  return (
    <>
      <Grid container>
        <Grid item  lg={6} xs={7} p={6}>
          <h4 style={{ color: "#194B2D" }}>What Style of Bottoms Fit You Best?</h4>
          <p style={{ color: "#848484" }}>
          Do let us know which fit is your most show-stopping.</p>
        <Grid container  spacing={2} textAlign="center">

          <Grid item sm={8} md={4} >
            <Card
            
              id="Fitted"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                wordWrap: 'normal',
                borderColor:
                  cardActive === "Fitted" ? "green" : "rgba(0,0,0,.125)",
              }}
              className="custom_cards   p-3"
              onClick={activeHandler}
            >
              <Card.Img src={img1}  />
              <Card.Body>
                <Card.Title style={{fontSize:'16px'}}>Fitted</Card.Title>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item sm={8} md={4}>
            <Card
              id="Straight"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                wordWrap: 'normal',
                borderColor:
                  cardActive === "Straight" ? "green" : "rgba(0,0,0,.125)",
              }}
              className="custom_cards p-3 w-100"
              onClick={activeHandler}
            >
              <Card.Img src={img2} />
              <Card.Body >
                <Card.Title  style={{fontSize:'14px'}}>Straight</Card.Title>
              </Card.Body>
            </Card>
          </Grid>
          <Grid item sm={8} md={4} >
            <Card
              id="Loose"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                wordWrap: 'normal',
                borderColor:
                  cardActive === "Loose" ? "green" : "rgba(0,0,0,.125)",
              }}
              className="custom_cards p-3"
              onClick={activeHandler}
            >
              <Card.Img src={img3} />
              <Card.Body>
                <Card.Title style={{fontSize:'15px'}}>Loose</Card.Title>
              </Card.Body>
            </Card>
            
          </Grid>
        </Grid>
        <Button variant="contained" color="success" className={classes.card_btn} component={Link} to="/letstalkshoes">
       Next
              </Button>
       
        </Grid>
        <Grid item l6={6} xs={5} mt={5}>
          <Image src={DR}  fluid alt="No image" />
        </Grid>
      </Grid>
    </>
  );
}

export default BottomsScreen;
