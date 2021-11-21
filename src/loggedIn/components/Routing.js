import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import FeatureSection from "./home/FeatureSection";
import PortfolioSection from "./home/PortfolioSection";
import PricingSection from "./home/PricingSection";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import About from "./about/About";
import BlogPost from "./blog/BlogPost";
import PrivacyPolicy from "./PrivacyPolicy";
import Construction from "./Construction";
import TermsOfService from "./TermsOfService";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";
import Helmet from "react-helmet";

function Routing(props) {

  const {
    blogPosts,
    selectBlog,
    selectHome,
    selectContact,
    selectAbout,
    selectFeatureSection,
    selectPortfolioSection,
    selectPricingSection,
    selectPrivacyPolicy,
    selectTermsOfService,
    selectConstruction,
  } = props;
  useLocationBlocker();
  return (
    <>
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
      <Switch>
        {blogPosts.map((post) => (
          <PropsRoute
            path={post.url}
            component={BlogPost}
            title={post.title}
            key={post.title}
            src={post.src}
            date={post.date}
            content={post.content}
            otherArticles={blogPosts.filter(
              (blogPost) => blogPost.id !== post.id
            )}
          />
        ))}
        <PropsRoute
          exact
          path="/blog"
          component={Blog}
          selectBlog={selectBlog}
          blogPosts={blogPosts}
        />

        <PropsRoute
          exact
          path="/contact"
          component={Contact}
          selectContact={selectContact}
        />
        <PropsRoute
          exact
          path="/about"
          component={About}
          selectAbout={selectAbout}
        />
        <PropsRoute
          exact
          path="/services"
          component={FeatureSection}
          selectFeatureSection={selectFeatureSection}
        />
        <PropsRoute
          exact
          path="/portfolio"
          component={PortfolioSection}
          selectPortfolioSection={selectPortfolioSection}
        />
        <PropsRoute
          exact
          path="/pricing"
          component={PricingSection}
          selectPricingSection={selectPricingSection}
        />
        <PropsRoute
          exact
          path="/privacy-policy"
          component={PrivacyPolicy}
          selectPrivacyPolicy={selectPrivacyPolicy}
        />
        <PropsRoute
          exact
          path="/terms-of-service"
          component={TermsOfService}
          selectTermsOfService={selectTermsOfService}
        />
        <PropsRoute
          exact
          path="/construction"
          component={Construction}
          selectConstruction={selectConstruction}
        />
        <PropsRoute path="/" component={Home} selectHome={selectHome} />
      </Switch>
    </>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
  selectNews: PropTypes.func.isRequired,
  selectContact: PropTypes.func.isRequired,
  selectTermsOfService: PropTypes.func.isRequired,
  selectPrivacyPolicy: PropTypes.func.isRequired,
  selectConstruction: PropTypes.func.isRequired,
};

export default (memo(Routing));
