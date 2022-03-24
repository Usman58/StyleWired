import React from "react";
import { Table, Image, Form } from "react-bootstrap";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import img1 from "../images/Rectangle 2454.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { HomeStyle } from "../Style/HomeStyle";
//import { HomeStyle } from '../Style/HomeStyle';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import {Link} from "react-router-dom";

//import Box from "@mui/material/Box";
function PaymentScreen() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const small = useMediaQuery(theme.breakpoints.down("md"));
  const classes = HomeStyle();
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <h4 style={{ color: "green" }}>Payment</h4>
          <Grid container direction={matches ? "row" : "column"} spacing={4}>
            <Grid
              item
              md={9}
              xs={12}
              className="bg-body"
              style={{width: "100%", height: 'inherit' }}
            >
              <h6>Order Details</h6>
              <Grid style={{ height: '91%'}} className="shadow rounded my-3 p-5 ">
                <Table style={{height: '95%'}} responsive className="manage-table" borderless >
                  <thead>
                    <tr>
                      <th>Style Profile</th>
                      <th> </th>
                      <th style={{ fontSize: "15px" }}>Number of Outfits</th>
                      <th style={{ fontSize: "15px" }}>Budget per Outfits</th>
                      <th>Total Add-ons</th>
                      <th>Add-ons</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        <Grid container>
                          <Grid item sm={3}>
                            {" "}
                            <Image src={img1} fluid alt="No image"  />
                          </Grid>
                          <Grid item sm={9}>
                            <p className="my-0" style={{ color: "gray" }}>
                              Style Profile no. 1
                            </p>
                            <p className="my-0" style={{ color: "gray" }}>
                              Travel City
                            </p>
                            <p className="my-0" style={{ color: "#5AB27E" }}>
                              New York,USA
                            </p>
                          </Grid>
                        </Grid>
                      </td>
                      <td>
                        Quantity
                        <Input
                          type="number"
                          className="form-control"
                          style={{ width: "35%" }}
                        />
                      </td>
                      <td>$120.00</td>
                      <td>$220.00</td>
                      <td>$300.00</td>
                    </tr>
                    <br />
                    <tr>
                      <td colSpan={2}>
                        <Grid container>
                          <Grid item sm={3}>
                            {" "}
                            <Image src={img1} fluid alt="No image" />
                          </Grid>
                          <Grid item sm={9}>
                            <p className="my-0" style={{ color: "gray" }}>
                              Style Profile no. 1
                            </p>
                            <p className="my-0" style={{ color: "gray" }}>
                              Travel City
                            </p>
                            <p className="my-0" style={{ color: "#5AB27E" }}>
                              New York,USA
                            </p>
                          </Grid>
                        </Grid>
                      </td>

                      <td>
                        Quantity
                        <Input
                          type="number"
                          className="form-control"
                          style={{ width: "35%" }}
                        />
                      </td>
                      <td>$120.00</td>
                      <td>$220.00</td>
                      <td>$300.00</td>
                    </tr>
                  </tbody>
                </Table>
              </Grid>
              
             
            </Grid>
            
            <Grid 
              item
              md={3}
              xs={12}
              className="bg-body rounded"
              style={{  width: "100%", height: '100%' }}
            >
              <h6 >Payment Summary</h6>
              <Grid style={{ padding: "10px" }} className="shadow rounded">
                <Grid item xs={12}>
                  <Table borderless responsive>
                    <tbody>
                      <tr>
                        <td >Order Summary</td>
                        <td>$520.00</td>
                      </tr>
                      <tr>
                        <td>Additional Services</td>
                        <td>$520.00</td>
                      </tr>

                      <tr>
                        <td>Total Amount</td>
                        <td>$640.00</td>
                      </tr>
                    </tbody>
                  </Table>
                </Grid>
              </Grid><br />
              <h5>Add-ons</h5>
              <Grid className="shadow rounded">
                <Grid item xs={12}>
                  <Table borderless responsive>
                    <tbody>
                      <tr>
                        <h6>Formal Style Profile</h6>
                      </tr>
                      <tr>
                        <td  style={{ fontSize: "14px" }}>
                          This is your formal style profile
                        </td>
                        <td  style={{ color: "#5AB27E" }}>
                          $120.00
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Grid>
              </Grid><br />
              <Grid className="shadow rounded">
                <Grid item xs={12}>
                  <Table borderless responsive>
                    <tbody>
                      <tr>
                        <h6 className="my-0">Party Style Profile</h6>
                      </tr>
                      <tr>
                        <td  style={{ fontSize: "14px" }}>
                          This is your formal style profile
                        </td>
                        <td  style={{ color: "#5AB27E" }}>
                          $120.00
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <br />
          <Grid container xs={9} justifyContent='start' direction='column'>
            {/* <Grid item>
            <h6>Card Details</h6>
            </Grid> */}
                <h6>Card Details</h6>
                <Grid item xs={9} className="shadow rounded"  p={3}>
                  <Form>
                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="Credit Payments"
                          control={<Radio />}
                          label="Credit Payments"
                        />
                        <Grid container spacing={4}>
                          <Grid item md={12} lg={3}>
                            <Form.Group controlId="name">
                              <Form.Label>Credit Card Number</Form.Label>
                              <Form.Control
                                size="lg"
                                style={{ fontSize: "20px" }}
                                placeholder="0000 0000 0000"
                              ></Form.Control>
                            </Form.Group>
                          </Grid>
                          <Grid item md={12} lg={3}>
                            <Form.Group controlId="name">
                              <Form.Label>Month/year</Form.Label>
                              <Form.Control
                                size="lg"
                                style={{ fontSize: "20px" }}
                                placeholder="MM/YY"
                              ></Form.Control>
                            </Form.Group>
                          </Grid>
                          <Grid item md={12} lg={6}>
                            <Form.Group controlId="name">
                              <Form.Label>Card holder</Form.Label>
                              <Form.Control
                                size="lg"
                                style={{ fontSize: "20px" }}
                                placeholder="Full Name"
                              ></Form.Control>
                            </Form.Group>
                          </Grid>
                        </Grid>

                        <Grid container pt={2}>
                          <Grid item sm={3}>
                            {" "}
                            <FormControlLabel
                              value="Paypal"
                              control={<Radio />}
                              label="Paypal"
                            />
                          </Grid>
                          <Grid item sm={2} pt={1}>
                            <i class="bi bi-paypal"></i>
                          </Grid>
                        </Grid>
                        <Grid container pt={2}>
                          <Grid item sm={3}>
                            {" "}
                            <FormControlLabel
                              value="Apple"
                              control={<Radio />}
                              label="Apple Pay"
                            />
                          </Grid>
                          <Grid item sm={2} pt={1}>
                            <i class="bi bi-apple"></i>
                          </Grid>
                        </Grid>

                      
                      </RadioGroup>
                    </FormControl>
                    <Button component={Link} to="/stylistflow"
                      className={classes.card_btn}
                      variant="contained"
                      color="success"
                      style={{ width:small?"100%":"45%" }}
                    >
                      Confirm and Pay now
                    </Button>
                  </Form>
                </Grid>
              </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default PaymentScreen;
