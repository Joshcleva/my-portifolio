import React, { memo, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import { withStyles } from "@material-ui/core";
import NavBar from "./navigation/NavBar";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import CookieRulesDialog from "./cookies/CookieRulesDialog";
import CookieConsent from "./cookies/CookieConsent";
import dummyBlogPosts from "../dummy_data/blogPosts";
import dummyNewsPosts from "../dummy_data/newsPosts";
import Routing from "./Routing";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";
import Helmet from "react-helmet";

AOS.init({ once: true });

const styles = (theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden",
  },
});

function Main(props) {

  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [newsPosts, setNewsPosts] = useState([]);
  const [isCookieRulesDialogOpen, setIsCookieRulesDialogOpen] = useState(false);

  const selectHome = useCallback(() => {
    smoothScrollTop();
    document.title = "JoshCreativeProgramer | Full Stack Web Developer";
    setSelectedTab("Home");
  }, [setSelectedTab]);

  const selectBlog = useCallback(() => {
    smoothScrollTop();
    document.title = "Jcp - Blog";
    setSelectedTab("Blog");
  }, [setSelectedTab]);

  const selectNews = useCallback(() => {
    smoothScrollTop();
    document.title = "Jcp - News";
    setSelectedTab("News");
  }, [setSelectedTab]);

  const selectContact = useCallback(() => {
    smoothScrollTop();
    document.title = "Contact - Me";
    setSelectedTab("Contact");
  }, [setSelectedTab]);

  const selectAbout = useCallback(() => {
    smoothScrollTop();
    document.title = "About - Me";
    setSelectedTab("About");
  }, [setSelectedTab]);

  const selectFeatureSection = useCallback(() => {
    smoothScrollTop();
    document.title = "JCP-Services";
    setSelectedTab("FeatureSection");
  }, [setSelectedTab]);

  const selectPortfolioSection = useCallback(() => {
    smoothScrollTop();
    document.title = "JCP-Portfolio";
    setSelectedTab("PortfolioSection");
  }, [setSelectedTab]);

  const selectPricingSection = useCallback(() => {
    smoothScrollTop();
    document.title = "JCP-Pricing";
    setSelectedTab("PricingSection");
  }, [setSelectedTab]);

  const selectPrivacyPolicy = useCallback(() => {
    smoothScrollTop();
    document.title = "PrivacyPolicy";

    setSelectedTab("PrivacyPolicy");
  }, [setSelectedTab]);

  const selectTermsOfService = useCallback(() => {
    smoothScrollTop();
    document.title = "TermsOfService";
    setSelectedTab("TermsOfService");
  }, [setSelectedTab]);

  const selectConstruction = useCallback(() => {
    smoothScrollTop();
    document.title = "Jcp - Construction";
    setSelectedTab("Construction");
  }, [setSelectedTab]);

  const handleMobileDrawerOpen = useCallback(() => {
    setIsMobileDrawerOpen(true);
  }, [setIsMobileDrawerOpen]);

  const handleMobileDrawerClose = useCallback(() => {
    setIsMobileDrawerOpen(false);
  }, [setIsMobileDrawerOpen]);

  const fetchBlogPosts = useCallback(() => {
    const blogPosts = dummyBlogPosts.map((blogPost) => {
      let title = blogPost.title;
      title = title.toLowerCase();
      /* Remove unwanted characters, only accept alphanumeric and space */
      title = title.replace(/[^A-Za-z0-9 ]/g, "");
      /* Replace multi spaces with a single space */
      title = title.replace(/\s{2,}/g, " ");
      /* Replace space with a '-' symbol */
      title = title.replace(/\s/g, "-");
      blogPost.url = `/blog/post/${title}`;
      blogPost.params = `?id=${blogPost.id}`;
      return blogPost;
    });
    setBlogPosts(blogPosts);
  }, [setBlogPosts]);

  const fetchNewsPosts = useCallback(() => {
    const newsPosts = dummyNewsPosts.map((newsPost) => {
      let title = newsPost.title;
      title = title.toLowerCase();
      /* Remove unwanted characters, only accept alphanumeric and space */
      title = title.replace(/[^A-Za-z0-9 ]/g, "");
      /* Replace multi spaces with a single space */
      title = title.replace(/\s{2,}/g, " ");
      /* Replace space with a '-' symbol */
      title = title.replace(/\s/g, "-");
      newsPost.url = `/news/post/${title}`;
      newsPost.params = `?id=${newsPost.id}`;
      return newsPost;
    });
    setNewsPosts(newsPosts);
  }, [setNewsPosts]);

  const handleCookieRulesDialogOpen = useCallback(() => {
    setIsCookieRulesDialogOpen(true);
  }, [setIsCookieRulesDialogOpen]);

  const handleCookieRulesDialogClose = useCallback(() => {
    setIsCookieRulesDialogOpen(false);
  }, [setIsCookieRulesDialogOpen]);

  useEffect(fetchBlogPosts, [fetchBlogPosts]);
  useEffect(fetchNewsPosts, [fetchNewsPosts]);

  return (
    <div className={classes.wrapper}>
      <Helmet>
        <title>About Josh Creative Programer</title>
        <meta
          name="description"
          content="  Hi, I Am Bwambale Joshua also known as Josh Creative
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
      <ScrollToTop />

      {!isCookieRulesDialogOpen && (
        <CookieConsent
          handleCookieRulesDialogOpen={handleCookieRulesDialogOpen}
        />
      )}
      <CookieRulesDialog
        open={isCookieRulesDialogOpen}
        onClose={handleCookieRulesDialogClose}
      />
      <NavBar
        selectedTab={selectedTab}
        selectTab={setSelectedTab}
        mobileDrawerOpen={isMobileDrawerOpen}
        handleMobileDrawerOpen={handleMobileDrawerOpen}
        handleMobileDrawerClose={handleMobileDrawerClose}
      />
      <Routing
        blogPosts={blogPosts}
        newsPosts={newsPosts}
        selectHome={selectHome}
        selectBlog={selectBlog}
        selectNews={selectNews}
        selectContact={selectContact}
        selectAbout={selectAbout}
        selectFeatureSection={selectFeatureSection}
        selectPortfolioSection={selectPortfolioSection}
        selectPricingSection={selectPricingSection}
        selectPrivacyPolicy={selectPrivacyPolicy}
        selectTermsOfService={selectTermsOfService}
        selectConstruction={selectConstruction}
      />
      <Footer />
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
