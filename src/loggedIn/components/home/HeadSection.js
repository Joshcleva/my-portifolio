import React, { Fragment, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Card,
  Button,
  Hidden,
  Box,
  withStyles,
  withWidth,
  isWidthUp,
} from "@material-ui/core";
import WaveBorder from "../../../shared/components/WaveBorder";
import ZoomImage from "../../../shared/components/ZoomImage";
import { NavLink } from "react-router-dom";
import { init } from "ityped";
import "./style.css";
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

  imageSmall: {
    maxWidth: "100%",
    verticalAlign: "middle",
  },
  image: {
    maxWidth: "100%",
    verticalAlign: "middle",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  container: {
    marginTop: theme.spacing(0.5),
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

function HeadSection(props) {
  const { classes, theme, width } = props;
  const textRef = useRef();
  const compRef = useRef();
  const buildRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      strings: [
        "a full stack web developer",
        "a Software Engineer",
        "an App devloper",
        "an Electrical Engineer",
        "a Logo Designer",
        "an Illustrator",
      ],
    });
  }, []);

  useEffect(() => {
    init(compRef.current, {
      showCursor: false,
      typeSpeed: 250,
      backSpeed: 60,
      backDelay: 6000,
      loop: true,
      strings: ["mobile", "android", "IOS", "mac"],
    });
  }, []);

  useEffect(() => {
    init(buildRef.current, {
      showCursor: false,
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 6000,
      loop: true,
      strings: ["Company", "Organisation", "Business", "Personel"],
    });
  }, []);

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <Helmet>
          <title>Josh Creative Programer, Kasese, Uganda</title>
          <meta
            name="description"
            content="Stand Out from the competition and get the stunning mobile friendly website | App now at extremely cheap prices
                            and promote Your Company | Organisation | Business
                            across the Globe. If you're seeking a web presence or are looking to hire,
                            contact me here"
          />
          <meta
            name="keywords"
            content="Stand Out from the competition and get the stunning mobile friendly website | App now at extremely cheap prices
                            and promote Your Company | Organisation | Business
                            across the Globe. If you're seeking a web presence or are looking to hire,
                            contact me here"
          />
          <link rel="apple-touch-icon" href="/jcp.png" />
          <style type="text/css"></style>
        </Helmet>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
            >
              <div className={classNames(classes.containerFix, "container")}>
                <Box justifyContent="space-between" className="row">
                  <Grid item xs={12} md={5}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="space-between"
                      height="100%"
                    >
                      <Box mb={4}>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          JOSH CREATIVE PROGRAMER is
                        </Typography>
                        <Typography
                          variant={isWidthUp("lg", width) ? "h3" : "h4"}
                        >
                          <span ref={textRef} style={{ color: "crimson" }}>
                            <div className="ityped-cursor"></div>
                          </span>
                        </Typography>
                      </Box>
                      <div>
                        <Grid item md={6}>
                          <ZoomImage
                            style={{ marginBottom: "10px" }}
                            src={`${process.env.PUBLIC_URL}/images/webDesigning.png`}
                            className={classes.image}
                            alt="header example"
                          />
                        </Grid>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Stand Out from the competition and get the stunning
                            <span
                              ref={compRef}
                              style={{ color: "crimson", margin: "0px 5px" }}
                            ></span>
                            friendly website | App now at extremely cheap prices
                            and promote Your Company | Organisation | Business
                            across the Globe. If you're a
                            <span
                              ref={buildRef}
                              duration={5000}
                              style={{ color: "crimson", margin: "0px 5px" }}
                            ></span>
                            seeking a web presence or are looking to hire,
                            contact me here
                          </Typography>
                        </Box>
                        <NavLink
                          to="/services"
                          style={{ textDecoration: "none" }}
                        >
                          <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            className={classes.extraLargeButton}
                            classes={{ label: classes.extraLargeButtonLabel }}
                          >
                            Get Started
                          </Button>
                        </NavLink>
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/webDesigning.png`}
                        className={classes.imageSmall}
                        alt="header example"
                      />
                    </Grid>
                  </Hidden>
                  <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844539134729812"
                    crossorigin="anonymous"
                  ></script>
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
  );
}

HeadSection.propTypes = {
  classes: PropTypes.object,
  width: PropTypes.string,
  theme: PropTypes.object,
};

export default withWidth()(
  withStyles(styles, { withTheme: true })(HeadSection)
);
