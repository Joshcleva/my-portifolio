import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { Typography, Card, Box, withStyles } from "@material-ui/core";
import Helmet from "react-helmet";

const styles = (theme) => ({
  img: {
    width: "100%",
    height: "auto",
    marginBottom: 8,
  },
  card: {
    boxShadow: theme.shadows[2],
  },
  noDecoration: {
    textDecoration: "none !important",
  },
  title: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.secondary.dark,
    },
    "&:active": {
      color: theme.palette.primary.dark,
    },
  },
  link: {
    transition: theme.transitions.create(["background-color"], {
      duration: theme.transitions.duration.complex,
      easing: theme.transitions.easing.easeInOut,
    }),
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  showFocus: {
    "&:focus span": {
      color: theme.palette.secondary.dark,
    },
  },
});

function BlogCard(props) {
  const { classes, url, src, title, snippet, date } = props;

  return (
    <>
          <Helmet>
        <title>Josh Creative Programer Tech Blog</title>
        <meta
        name="description" contact="Get the Latest and Trending tech blog posts in
        kasese, uganda and across the whole world here at joshcreativeprogramer
        , joshcreativeprograma.netlify.app, joshcreativeprogrammer"/>
        <meta
          name="keywords"
          content="Latest and trendingTechnology blog posts, Tech Solutions"
        />
        <link rel="apple-touch-icon" href="/jcp.png" />
        <style type="text/css"></style>
      </Helmet>
    <Card className={classes.card}>
      {src && (
        <NavLink to={url} tabIndex={-1}>
          <img src={src} className={classes.img} alt="" />
        </NavLink>
      )}
      <Box p={2}>
        <Typography variant="body2" color="textSecondary">
          <p>{date}</p>
        </Typography>
        <NavLink
          to={url}
          className={classNames(classes.noDecoration, classes.showFocus)}
        >
          <Typography variant="h6">
            <span className={classes.title}>{title}</span>
          </Typography>
        </NavLink>
        <Typography variant="body1" color="textSecondary">
          {snippet}
          <NavLink to={url} className={classes.noDecoration} tabIndex={-1}>
            <span className={classes.link}> read more...</span>
          </NavLink>
        </Typography>
      </Box>
    </Card>
    </>
  );
}

BlogCard.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  snippet: PropTypes.string.isRequired,
  src: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(BlogCard);
