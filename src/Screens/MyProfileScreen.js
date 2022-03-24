import React from "react";
import Grid from "@mui/material/Grid";
import { Form, Card } from "react-bootstrap";
import profile from "../images/MyProfile.png";
import { HomeStyle } from "../Style/HomeStyle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

function MyProfileScreen() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const classes = HomeStyle();
  return (
    <>
      <Grid container px={matches ? 2 : 5} spacing={12}>
        <Grid item md={5} xs={12}>
          <h4 style={{ color: "green",paddingBottom:"8px"}}>My Profile</h4>
          <Card
            style={{
              alignItems: "center",
              paddingBottom: "40px",
              paddingTop: "40px",
              backgroundColor: "#F9F9F9",
            }}
          >
            <Card.Img
              variant="top"
              src={profile}
              style={{ height: "30%", width: "60%" }}
            />
            <Card.Body>
              <Card.Title>Andrew Smith</Card.Title>
              <Card.Text>andrew123@gmail.com</Card.Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid item md={7} xs={12} mt={3}>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="John Smith"></Form.Control>
            </Form.Group><br />
            <Form.Group controlId="name">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="abdullah12@gmail.com"
              ></Form.Control>
            </Form.Group><br />
            <Form.Group controlId="name">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="0483-38497483"
              ></Form.Control>
            </Form.Group><br />
            <Form.Group controlId="name">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"></Form.Control>
            </Form.Group><br />
            <Grid container spacing={2}>
              <Grid item lg={4} xs={12}>
                {" "}
                <Button
                  className={classes.card_btn}
                  variant="contained"
                  style={{backgroundColor: "#5AB27E"}}
                >
                  Edit Personal info
                </Button>
              </Grid>
              <Grid item lg={4} xs={12}>
                {" "}
                <Button
                  className={classes.card_btn}
                  variant="contained"
                  style={{ backgroundColor: "#5AB27E"}}
                >
                  Edit measurements
                </Button>
              </Grid>
              <Grid item lg={4} xs={12}>
                <Button
                  className={classes.card_btn}
                  variant="contained"
                  style={{backgroundColor: "#5AB27E"}}
                >
                  Edit my sizes
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Grid>
      </Grid>
    </>
  );
}

export default MyProfileScreen;
