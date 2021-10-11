import {
  Box,
  Grid,
  InputBase,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Fragment } from "react";

//Assets
import Toggler from "./toggler/toggler";
import { ReactComponent as LocationIcon } from "../assets/icons/Location.svg";
import { ReactComponent as InfoIcon } from "../assets/icons/Info.svg";
import { ReactComponent as Plane } from "../assets/icons/Plane.svg";
import { ReactComponent as Vehicle } from "../assets/icons/Vehicle.svg";
import { ReactComponent as Baot } from "../assets/icons/Boat.svg";
import { ReactComponent as Customs } from "../assets/icons/Customs.svg";
import Mode from "./mode/mode";

const useStyles = makeStyles(() => ({
  formContainer: {
    marginTop: "1.68rem",
    marginLeft: "5.5rem",
  },
  bookingHeader: {
    fontSize: "26px",
    color: "#303030",
    marginBottom: "9px",
  },
  helperText: {
    color: "#81868c",
    marginBottom: "13px",
  },
  headerText: {
    paddingTop: "1.9rem",
    marginBottom: "1rem",
    color: "#303030",
    fontSize: "20px",
  },
  servicesContainer: {
    backgroundColor: "#fff",
    width: "100%",
    paddingLeft: "45px",
    marginBottom: "1rem",
  },

  serviceContainer: {
    paddingBottom: "1.5rem",
    width: "100%",
    margin: 0,
  },
  contactDetailsHeader: {
    color: "#0746a6",
    paddingTop: "1.9rem",
    marginBottom: "1rem",
    fontSize: "20px",
  },
  inputsContainer: {},
  labelText: {
    color: "#303030",
    marginBottom: ".5rem",
    fontSize: "14.4px",
  },
  inputField: {
    height: "44px",
    backgroundColor: "#f3f3f3",
    marginRight: "1rem",
    border: 0,
    marginBottom: "2rem",
    "&:focus": {
      border: 0,
    },
  },
  checkBox: {
    border: "1px solid green",
    cursor: "pointer",
    color: "#0746a6",
    borderRadius: "4px",
    alignContent: "center",
  },

  exportContainer: {
    marginLeft: "2rem",
    "& span": {
      fontSize: "14px",
      color: "#81868c",
    },
  },

  forwarding: {
    marginBottom: "5px",
  },

  mode: {
    height: "48px",
    width: "72px",
    backgroundColor: "#0746a6",
    marginRight: "30px",
  },

  inputBase: {
    height: "48px",
    width: "100%",
    backgroundColor: "#f3f3f3",
    marginRight: "1rem",
    border: 0,
  },

  inputBaseTwo: {
    marginRight: "30px",
    height: "48px",
    width: "100%",
    backgroundColor: "#f3f3f3",
    border: 0,
    paddingLeft: "10px",
  },

  iconContainer: {
    marginTop: "2rem",
    marginBottom: ".5rem",
  },
  iconContainerTwo: { display: "flex", flexDirection: "row" },
  inputBaseIcon: {
    paddingLeft: "0.5rem",
  },
  questionContainer: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "center",
    alignItems: "center",
    marginBottom: "30px",
  },
  question: {
    marginLeft: "1.5rem",
    color: "#33333",
    fontSize: "1rem",
    fontWeight: 500,
  },
}));

export default function Form() {
  const classes = useStyles();

  const modesOfTransport = [
    { id: 1, text: "Air Freight", icon: <Plane /> },
    { id: 2, text: "Ocean Freight", icon: <Baot /> },
    { id: 3, text: "Inland \n (Truck and Barge)", icon: <Vehicle /> },
    { id: 4, text: "Customs Clearance)", icon: <Customs /> },
  ];

  return (
    <Box className={classes.formContainer}>
      <Typography className={classes.bookingHeader}>New Booking</Typography>
      <Typography className={classes.helperText}>
        Fill in the information below get a quote or create a new booking.
      </Typography>

      {/* Start of the form */}
      <Box>
        <Box className={classes.servicesContainer}>
          <Typography className={classes.headerText}>
            Select a Service
          </Typography>

          <Box
            display="flex"
            flexDirection="row"
            className={classes.serviceContainer}
          >
            {modesOfTransport.map((item) => (
              <Fragment key={item.id}>
                <Mode text={item.text} icon={item.icon} />
              </Fragment>
            ))}{" "}
          </Box>
        </Box>
      </Box>

      {/* Contact details start */}
      <Box className={classes.servicesContainer}>
        <Typography className={classes.contactDetailsHeader}>
          Your Contact Details
        </Typography>

        <Grid container>
          <Grid item md={4}>
            <Box display="flex" flexDirection="column">
              <label className={classes.labelText} htmlFor="businessName">
                (Business) Name {"  "} <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" className={classes.inputField} required />
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" flexDirection="column">
              <label className={classes.labelText} htmlFor="mobileNumber">
                Mobile Number {"  "} <span style={{ color: "red" }}>*</span>
              </label>
              <input type="tel" className={classes.inputField} required />
            </Box>
          </Grid>
          <Grid item md={4}>
            <Box display="flex" flexDirection="column">
              <label className={classes.labelText} htmlFor="email">
                Your Email
              </label>
              <input type="email" className={classes.inputField} />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Start of the export or import  */}
      <Box
        className={classes.servicesContainer}
        display="flex"
        flexDirection="column"
      >
        <div className={classes.iconContainer}>
          <Tooltip placement="right-end" title="Trade Direction" arrow>
            <InfoIcon />
          </Tooltip>
        </div>
        <Box display="flex" flexDirection="row">
          <div className={classes.mode}></div>

          <Box
            display="flex"
            flexDirection="row"
            style={{ width: "100%", marginBottom: "45px" }}
          >
            <InputBase
              startAdornment={<LocationIcon style={{ paddingLeft: ".5rem" }} />}
              placeholder="From City or Port"
              className={classes.inputBase}
            />

            <InputBase
              startAdornment={<LocationIcon style={{ paddingLeft: ".5rem" }} />}
              placeholder="To City or Port"
              className={classes.inputBase}
            />
          </Box>
        </Box>
        <div className={classes.iconContainerTwo}>
          <Tooltip placement="right-end" title="Trade Direction" arrow>
            <InfoIcon />
          </Tooltip>

          <Typography style={{ marginLeft: ".5rem" }}>What Is This?</Typography>
        </div>
        <Box
          display="flex"
          flexDirection="row"
          style={{ width: "100%", marginBottom: "45px" }}
        >
          <InputBase
            placeholder="Enter HS Code"
            className={classes.inputBaseTwo}
            type="number"
          />

          <InputBase
            endAdornment={
              <Typography style={{ color: "#81868c" }}>
                <b>USD</b>
              </Typography>
            }
            placeholder="Total Cargo Value"
            type="number"
            className={classes.inputBaseTwo}
          />

          <InputBase
            placeholder="Cargo Ready Date"
            type="date"
            className={classes.inputBaseTwo}
          />
        </Box>
        <Box display="flex" flexDirection="column">
          <Box className={classes.questionContainer}>
            <Toggler className="checkbox" />
            <Typography className={classes.question}>
              Do You Have A Form M?
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box className={classes.questionContainer}>
            <Toggler className="checkbox" />
            <Typography className={classes.question}>
              My Shipment Requires NAFDAC Clearance.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box className={classes.questionContainer}>
            <Toggler className="checkbox" />
            <Typography className={classes.question}>
              Transport / Delivery
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Additional services  */}
      <Box>
        <Box className={classes.servicesContainer}>
          <Typography className={classes.headerText}>
            Additional Services
          </Typography>

          <Box display="flex" flexDirection="row">
            <Toggler className="checkbox" />

            <div className={classes.exportContainer}>
              <Typography className={classes.forwarding}>
                Export Forwarding
              </Typography>
              <span>We handle customs clearance and documentation.</span>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
