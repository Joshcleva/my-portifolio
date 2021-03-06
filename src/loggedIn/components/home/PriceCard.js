import React from "react";
import PropTypes from "prop-types";
import { Typography, Box, withStyles } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import Helmet from "react-helmet";

const styles = (theme) => ({
  card: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginTop: theme.spacing(2),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
  },
  cardHightlighted: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    border: `3px solid ${theme.palette.primary.dark}`,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  extraLargeButtonLabel: {
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  extraLargeButton: {
    marginTop: theme.spacing(2.5),
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
  title: {
    color: theme.palette.primary.main,
  },
});

function PriceCard(props) {
  const { classes, theme, title, pricing, features, highlighted } = props;
  return (
    <div className={highlighted ? classes.cardHightlighted : classes.card}>
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
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h5" : "h6"}
          className={highlighted ? "text-white" : classes.title}
        >
          {title}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography
          variant={highlighted ? "h3" : "h4"}
          className={highlighted ? "text-white" : null}
        >
          {pricing}
        </Typography>
      </Box>
      {features.map((feature, index) => (
        <Box display="flex" alignItems="center" mb={1} key={index}>
          <CheckIcon
            style={{
              color: highlighted
                ? theme.palette.common.white
                : theme.palette.primary.dark,
            }}
          />
          <Box ml={1}>
            <Typography
              className={highlighted ? "text-white" : null}
              variant={highlighted ? "h6" : "body1"}
            >
              {feature}
            </Typography>
          </Box>
        </Box>
      ))}
      <NavLink to="/contact" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="secondary"
          style={{ borderRadius: "45px" }}
          fullWidth
          className={classes.extraLargeButton}
          classes={{ label: classes.extraLargeButtonLabel }}
        >
          Request Qoute
        </Button>
      </NavLink>
    </div>
  );
}

PriceCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  pricing: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  highlighted: PropTypes.bool
};

export default withStyles(styles, { withTheme: true })(PriceCard);
