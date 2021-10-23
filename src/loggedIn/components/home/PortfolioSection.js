import React, { Fragment } from "react";
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

  return (
    <Fragment>
      <div className={classNames("lg-p-top", classes.wrapper)}>
        <div className={classNames("container-fluid", classes.container)}>
          <Box display="flex" justifyContent="center" className="row">
            <Typography
              variant={isWidthUp("lg", width) ? "h2" : "h3"}
              style={{ color: "#fff" }}
            >
              Portfolio
            </Typography>
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
              style={{ marginBottom: "50px" }}
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
                          Kasindi.com
                        </Typography>
                      </Box>
                      <div>
                        <Grid item md={6}>
                          <ZoomImage
                            style={{ marginBottom: "10px" }}
                            src={`${process.env.PUBLIC_URL}/images/kasindy.png`}
                            className={classes.image}
                            alt="header example"
                          />
                        </Grid>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            E-commerce website where you can shop and sell any
                            product of your choice.
                          </Typography>
                        </Box>
                        <NavLink to="/construction" style={{ textDecoration: "none" }}>
                          <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            className={classes.extraLargeButton}
                            classes={{ label: classes.extraLargeButtonLabel }}
                          >
                            Explore Site
                          </Button>
                        </NavLink>
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/kasindy.png`}
                        className={classes.imageSmall}
                        alt="header example"
                      />
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
              style={{ marginBottom: "50px" }}
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
                          sdamusic.com
                        </Typography>
                      </Box>
                      <div>
                        <Grid item md={6}>
                          <ZoomImage
                            style={{ marginBottom: "10px" }}
                            src={`${process.env.PUBLIC_URL}/images/sdamusic.png`}
                            className={classes.image}
                            alt="header example"
                          />
                        </Grid>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Music website with download file options of mp4 &
                            mp3. Listen, Watch and Download the latest sdaMusic
                            around the world.
                          </Typography>
                        </Box>
                        <NavLink to="/construction" style={{ textDecoration: "none" }}>
                          <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            className={classes.extraLargeButton}
                            classes={{ label: classes.extraLargeButtonLabel }}
                          >
                            Explore Site
                          </Button>
                        </NavLink>
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/sdamusic.png`}
                        className={classes.imageSmall}
                        alt="header example"
                      />
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
              style={{ marginBottom: "50px" }}
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
                          Moxie.com
                        </Typography>
                      </Box>
                      <div>
                        <Grid item md={6}>
                          <ZoomImage
                            style={{ marginBottom: "10px" }}
                            src={`${process.env.PUBLIC_URL}/images/moxie.png`}
                            className={classes.image}
                            alt="header example"
                          />
                        </Grid>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Dj's nonstop music website with download tools and
                            dashboards.
                          </Typography>
                        </Box>
                        <NavLink to="/construction" style={{ textDecoration: "none" }}>
                          <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            className={classes.extraLargeButton}
                            classes={{ label: classes.extraLargeButtonLabel }}
                          >
                            Explore Site
                          </Button>
                        </NavLink>
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/moxie.png`}
                        className={classes.imageSmall}
                        alt="header example"
                      />
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
              style={{ marginBottom: "50px" }}
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
                          gleanAssist.com
                        </Typography>
                      </Box>
                      <div>
                        <Grid item md={6}>
                          <ZoomImage
                            style={{ marginBottom: "10px" }}
                            src={`${process.env.PUBLIC_URL}/images/gleanassist1.png`}
                            className={classes.image}
                            alt="header example"
                          />
                        </Grid>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Blog website with best super tools, posts and videos
                            about tech, all how the to videos , digital
                            marketing and making money online.
                          </Typography>
                        </Box>
                        <NavLink to="/construction" style={{ textDecoration: "none" }}>
                          <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            className={classes.extraLargeButton}
                            classes={{ label: classes.extraLargeButtonLabel }}
                          >
                            Explore Site
                          </Button>
                        </NavLink>
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/gleanassist1.png`}
                        className={classes.imageSmall}
                        alt="header example"
                      />
                    </Grid>
                  </Hidden>
                </Box>
              </div>
            </Card>
            <Card
              className={classes.card}
              data-aos-delay="200"
              data-aos="zoom-in"
              style={{ marginBottom: "50px" }}
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
                          Sdaworldwidefm.com
                        </Typography>
                      </Box>
                      <div>
                        <Grid item md={6}>
                          <ZoomImage
                            style={{ marginBottom: "10px" }}
                            src={`${process.env.PUBLIC_URL}/images/sdafm.png`}
                            className={classes.image}
                            alt="header example"
                          />
                        </Grid>
                        <Box mb={2}>
                          <Typography
                            variant={isWidthUp("lg", width) ? "h6" : "body1"}
                            color="textSecondary"
                          >
                            Online Sda radio streaming all the old and latest
                            sda music around the globe.
                          </Typography>
                        </Box>
                        <NavLink to="/construction" style={{ textDecoration: "none" }}>
                          <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            className={classes.extraLargeButton}
                            classes={{ label: classes.extraLargeButtonLabel }}
                          >
                            Explore Site
                          </Button>
                        </NavLink>
                      </div>
                    </Box>
                  </Grid>
                  <Hidden smDown>
                    <Grid item md={6}>
                      <ZoomImage
                        src={`${process.env.PUBLIC_URL}/images/sdafm.png`}
                        className={classes.imageSmall}
                        alt="header example"
                      />
                    </Grid>
                  </Hidden>
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
