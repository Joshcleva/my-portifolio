import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { MdMonetizationOn } from "react-icons/md";
import { MdAccessibility } from "react-icons/md";
import { GiNewspaper } from "react-icons/gi";
import { FaAt } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
import { GoGlobe } from "react-icons/go";
import { GoTools } from "react-icons/go";
import NavigationDrawer from "../../../shared/components/NavigationDrawer";

const styles = (theme) => ({
  img: {
    width: 30,
    cursor: "pointer",
    fontSize: 1.5,
    display: "flex",
    marginRight: 7,
  },
  logo: {
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
  },
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight,
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400,
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab,
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />,
    },
    {
      link: "/about",
      name: "About",
      icon: (
        <MdAccessibility
          style={{ fontSize: "1.5rem" }}
          className="text-white"
        />
      ),
    },
    {
      link: "/services",
      name: "Services",
      icon: <GoTools style={{ fontSize: "1.5rem" }} className="text-white" />,
    },
    {
      link: "/portfolio",
      name: "Portfolio",
      icon: <GoGlobe style={{ fontSize: "1.5rem" }} className="text-white" />,
    },
    {
      link: "/pricing",
      name: "Pricing",
      icon: (
        <MdMonetizationOn
          style={{ fontSize: "1.5rem" }}
          className="text-white"
        />
      ),
    },
    {
      link: "/blog",
      name: "Blog",
      icon: <ImBlog style={{ fontSize: "1.5rem" }} className="text-white" />,
    },
    {
      link: "/news",
      name: "News",
      icon: (
        <GiNewspaper style={{ fontSize: "1.5rem" }} className="text-white" />
      ),
    },
    {
      link: "/contact",
      name: "Contact",
      icon: <FaAt style={{ fontSize: "1.5rem" }} className="text-white" />,
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to={"/"} className={classes.noDecoration}>
            <div className={classes.logo}>
              <img className={classes.img} src="/images/jcp.png" alt="logo" />
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="primary"
              >
                J
              </Typography>
              <Typography
                variant="h4"
                className={classes.brandText}
                display="inline"
                color="secondary"
              >
                CP
              </Typography>
            </div>
          </Link>

          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map((element) => {
                if (element.link) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(NavBar));
