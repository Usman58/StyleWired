import React from "react";
import Grid from "@mui/material/Grid";
import { Image, Table, Dropdown,Button} from "react-bootstrap";
import total from "../images/totalO.png";
import active from "../images/activeO.png";
import pending from "../images/pendingO.png";
import cancelled from "../images/cancelledO.png";

import { HomeStyle } from "../Style/HomeStyle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";



import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
function ThirdDashboard() {
  const theme = useTheme();

  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = HomeStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container px={2} direction="column">
        <h4>Dashboard</h4>
        <p style={{ color: "gray" }}>Check all your stats in one dashboard</p>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <Grid container spacing={2}>
                <Grid item lg={2} md={4} xs={6}>
                  <Grid
                    item
                    style={{ borderColor: "#21BDCA" }}
                    className={classes.bordergrid}
                  >
                    <p style={{ color: "gray", padding: "6px" }}>
                      Open
                      <br />
                      Orders
                    </p>
                    <br />
                    <h5>
                      125{" "}
                      <span
                        style={{ borderColor: "#21BDCA" }}
                        className={classes.order}
                      >
                        {" "}
                        <Image src={total} fluid alt="No image" />
                      </span>
                    </h5>
                  </Grid>
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                  <Grid
                    item
                    style={{ borderColor: "#5372E7" }}
                    className={classes.bordergrid}
                  >
                    <p style={{ color: "gray", padding: "6px" }}>
                      Active
                      <br />
                      Orders
                    </p>
                    <br />
                    <h5>
                      125
                      <span
                        style={{ borderColor: "#5372E7" }}
                        className={classes.order}
                      >
                        {" "}
                        <Image src={active} fluid alt="No image" />
                      </span>
                    </h5>
                  </Grid>
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                  <Grid
                    item
                    style={{ borderColor: "#64CBB2" }}
                    className={classes.bordergrid}
                  >
                    <p style={{ color: "gray", padding: "6px" }}>
                      Completed
                      <br />
                      Orders
                    </p>
                    <br />
                    <h5>
                      125
                      <span
                        style={{ borderColor: "#64CBB2" }}
                        className={classes.order}
                      >
                        {" "}
                        <Image src={pending} fluid alt="No image" />
                      </span>
                    </h5>
                  </Grid>
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                  <Grid
                    item
                    style={{ borderColor: "#64CBB2" }}
                    className={classes.bordergrid}
                  >
                    <p style={{ color: "gray", padding: "6px" }}>
                      Assigned
                      <br />
                      Orders
                    </p>
                    <br />
                    <h5>
                      125
                      <span
                        style={{ borderColor: "#64CBB2" }}
                        className={classes.order}
                      >
                        {" "}
                        <Image src={pending} fluid alt="No image" />
                      </span>
                    </h5>
                  </Grid>
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                  <Grid
                    item
                    style={{ borderColor: "#FF9f24" }}
                    className={classes.bordergrid}
                  >
                    <p style={{ color: "gray", padding: "6px",fontSize: small ? "18px" : "16px" }}>
                      Customer Rejected
                      <br />
                      Orders
                    </p>
                    <br />
                    <h5>
                      125
                      <span
                        style={{ borderColor: "#FF9F24" }}
                        className={classes.order}
                      >
                        {" "}
                        <Image src={cancelled} fluid alt="No image" />
                      </span>
                    </h5>
                  </Grid>
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                  <Grid
                    item
                    style={{ borderColor: "#FF9f24" }}
                    className={classes.bordergrid}
                  >
                    <p style={{ color: "gray", padding: "6px" ,fontSize: small ? "18px" : "16px"}} >
                      Stylist Rejected
                      <br />
                      Orders
                    </p>
                    <br />
                    <h5>
                      125
                      <span
                        style={{ borderColor: "#FF9F24" }}
                        className={classes.order}
                      >
                        {" "}
                        <Image src={cancelled} fluid alt="No image" />
                      </span>
                    </h5>
                  </Grid>
                </Grid>
              </Grid>
              <br />
            </Grid>
          </Grid>
        </Grid>

        <Grid container >
          <Grid item >
            <h4>My Orders</h4>
            

           </Grid> 
            <Grid container justifyContent='space-between'> 
                <Grid item sm={10}>
                <Grid container>
                <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
              className={classes.tabContainer}
            >
              <Tab label="Open" className={classes.tab_btn} />
              <Tab label="Assigned" className={classes.tab_btn} />
              <Tab label="Completed" className={classes.tab_btn} />
              
              
                </Tabs>
                </Grid>
                </Grid>
                <Grid item sm={2} style={{marginTop:small? '10px' :'auto'}}>
                <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="outline-dark"
                      >
                        Filter by Status
                      </Dropdown.Toggle >

                      <Dropdown.Menu variant="light" >
                        <Dropdown.Item href="#/action-1" style={{color:'#5AB27E'}}>
                          Pending 
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2" style={{color:'#5AB27E'}}>
                        Confirmed
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3" style={{color:'#5AB27E'}}>
                        Cancel 
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        
                      </Dropdown.Menu>
                    </Dropdown>
                </Grid>
              </Grid>
            
          {/* </Grid> */}
        </Grid>
        <br />
        <Grid pb={6} item className="w-100">
          <Grid className="shadow rounded" fullWidth p={3}>
            <Table
              style={{ height: "90%" }}
              responsive
              className="manage-table"
              borderless
            >
              <thead>
                <tr style={{ color: "#5AB27E"}}>
                  <th>Order Id</th>
                  <th>Request Date</th>
                  <th>Style Profile</th>
                  <th>Budget</th>
                  <th>Status</th>
                  <th>Payment Method</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ color: "#828282" }}>
                  <td>2020202020</td>
                  <td>23-4-2021</td>
                  <td>Wedding Style Profile</td>
                  <td style={{ color: "#B7B94B" }}>$320.00</td>
                  <td style={{ color: "#828282" }}>Pending</td>
                  <td>Credit Card</td>
                  <td>
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="outline-success"
                      >
                        Actions
                      </Dropdown.Toggle >

                      <Dropdown.Menu variant="success">
                        <Dropdown.Item href="#/action-1">
                          Accept Order
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                        Assign Order
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                        Cancel Order
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Reject Order
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td> 
                    <Button variant="outline-success" href="/viewstyleprofiles"
                   
                    style={{fontSize:'13px'}}> View Style profile</Button>{' '}</td>
                </tr>

                <tr style={{ color: "#828282" }}>
                  <td>2020202020</td>
                  <td>23-4-2021</td>
                  <td>Wedding Style Profile</td>
                  <td style={{ color: "#B7B94B" }}>$320.00</td>
                  <td style={{ color: "#5372E7" }}>Confirmed</td>
                  <td>Paypal</td>
                  <td>
                  <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="outline-success"
                      >
                        Actions
                      </Dropdown.Toggle >

                      <Dropdown.Menu variant="success">
                        <Dropdown.Item href="#/action-1">
                          Accept Order
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                        Assign Order
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                        Cancel Order
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Reject Order
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
                <tr style={{ color: "#828282" }}>
                  <td>2020202020</td>
                  <td>23-4-2021</td>
                  <td>Wedding Style Profile</td>
                  <td style={{ color: "#B7B94B" }}>$320.00</td>
                  <td style={{ color: "#E04141" }}>cancelled</td>
                  <td>Master Card</td>
                  <td>
                  <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="outline-success"
                      >
                        Actions
                      </Dropdown.Toggle >

                      <Dropdown.Menu variant="success">
                        <Dropdown.Item href="#/action-1">
                          Accept Order
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                        Assign Order
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                        Cancel Order
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-4">
                          Reject Order
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  
                </tr>
              </tbody>
            </Table>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ThirdDashboard;
