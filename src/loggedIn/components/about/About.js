import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import MyProfile from "../myProfile/MyProfile";
import {
  Grid,
  Typography,
  Card,
  Button,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
import WaveBorder from "../../../shared/components/WaveBorder";
import Animates from "../animates/Animates";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";

const styles = (theme) => ({
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    boxShadow: theme.shadows[4],
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),

    [theme.breakpoints.up("xs")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5.5),
      paddingBottom: theme.spacing(5.5),
      paddingLeft: theme.spacing(5),
      paddingRight: theme.spacing(5),
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      width: "auto",
    },
  },
  wrapper: {
    position: "relative",
    backgroundColor: theme.palette.secondary.main,
    paddingBottom: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[4],
  },
  container: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(9),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  containerFix: {
    [theme.breakpoints.up("md")]: {
      maxWidth: "none !important",
    },
  },
  waveBorder: {
    paddingTop: theme.spacing(4),
  },
});

function About(props) {
  const { classes, theme, width } = props;
  return (
    <>
      <Helmet>
        <title>About Josh Creative Programer</title>
        <meta
          name="description"
          contentt="  Hi, I Am Bwambale Joshua also known as Josh Creative
                            Programer with a Bacholar's Degree in Software
                            Engineering. I'm an experienced and well-vetted Web
                            App | Software Developer using the latest and
                            marketable programing languages and tools to produce
                            the best work for my clients, Besides, I Am also
                            professional Electrical Engineer and Logo Designer |
                            Illustrator aiming to elevate remote Tech,
                            Businesses and Personal lifestyle through My Full
                            stack development Skills."
        />
        <meta
          name="keywords"
          content="Java scripts, C++, Ract Native, Python, Php, Kotlin, Html and Word Press"
        />
        <link rel="apple-touch-icon" href="/jcp.png" />
        <style type="text/css"></style>
      </Helmet>
      <Fragment>
        <div className={classNames("lg-p-top", classes.wrapper)}>
          <div className={classNames("container-fluid", classes.container)}>
            <Box display="flex" justifyContent="center" className="row">
              <Card
                className={classes.card}
                data-aos-delay="200"
                data-aos="zoom-in"
              >
                <Animates />
                <div className={classNames(classes.containerFix, "container")}>
                  <Box justifyContent="Center" className="row">
                    <Grid item xs={12} md={5}>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="100%"
                        textAlign="center"
                      >
                        <Box mb={4}>
                          <Typography
                            style={{ textAlign: "center" }}
                            variant={isWidthUp("lg", width) ? "h3" : "h4"}
                          >
                            ABOUT JOSH CREATIVE PROGRAMER
                          </Typography>
                        </Box>
                        <Box mb={4}>
                          <MyProfile style={{ textAlign: "center" }} />
                        </Box>
                        <div>
                          <Box mb={2}>
                            <Typography
                              variant={isWidthUp("lg", width) ? "h6" : "body1"}
                              color="textSecondary"
                            >
                              Hi, I Am Bwambale Joshua also known as Josh
                              Creative Programer with a Bacholar's Degree in
                              Software Engineering. I'm an experienced and
                              well-vetted Web App | Software Developer using the
                              latest and marketable programing languages and
                              tools to produce the best work for my clients,
                              Besides, I Am also professional Electrical
                              Engineer and Logo Designer | Illustrator aiming to
                              elevate remote Tech, Businesses and Personal
                              lifestyle through My Full stack development Skills
                            </Typography>
                          </Box>
                          <NavLink
                            to="/portfolio"
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              variant="contained"
                              color="secondary"
                              fullWidth
                              className={classes.extraLargeButton}
                              classes={{ label: classes.extraLargeButtonLabel }}
                            >
                              My Portfolio
                            </Button>
                          </NavLink>
                        </div>
                      </Box>
                    </Grid>
                  </Box>
                </div>
              </Card>
            </Box>
          </div>
        </div>
        <WaveBorder
          upperColor={theme.palette.secondary.main}
          lowerColor="#FFFFFF"
          className={classes.waveBorder}
          animationNegativeDelay={3}
        />
      </Fragment>
    </>
  );
}

About.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(withStyles(styles, { withTheme: true })(About));
