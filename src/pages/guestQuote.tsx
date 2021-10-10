import React from "react";
import { Link } from "react-router-dom";
import { Box, makeStyles, Typography } from "@material-ui/core";

//Assets
import Logo from "../assets/logo.jpg";
import { ReactComponent as BackIcon } from "../assets/icons/ArrowBack.svg";
import Form from "../components/form";

const useStyles = makeStyles(() => ({
  logoContainer: {
    backgroundColor: "#0747a6",
    padding: "0 45px",
  },
  logo: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
  loginText: {
    color: "#fff",
  },
  mainContainer: {
    backgroundColor: "#f1f2f5",
  },
  backIcon: {
    marginLeft: "4.25rem",
    marginTop: "3rem",
  },
  formContainer: {
    marginTop: "1.68rem",
    marginLeft: "5.5rem",
  },
  bookingHeader: {
    fontSize: "26px",
    color: "#303030",
  },
  helperText: {
    color: "#81868c",
  },
}));
export default function GuestQuote() {
  const classes = useStyles();

  return (
    <>
      {/* Start of the navbar */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        className={classes.logoContainer}
      >
        <a
          href="https://freight.send.ng/shipments"
          rel="noreferrer noopener"
          target="_blank"
        >
          <img src={Logo} alt="" className={classes.logo} />
        </a>
        <Typography className={classes.loginText}>
          Have an account?{" "}
          <Link to="/">
            <b>Log in</b>
          </Link>
        </Typography>
      </Box>

      <Box display="flex" flexDirection="row" className={classes.mainContainer}>
        <BackIcon className={classes.backIcon} />
        <Form />
      </Box>
    </>
  );
}
