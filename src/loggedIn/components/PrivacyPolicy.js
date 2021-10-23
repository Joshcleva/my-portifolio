import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../shared/components/ColoredButton";
import { NavLink } from "react-router-dom";

const styles = (theme) => ({
  termsConditionsListitem: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
  },
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  backIcon: {
    marginRight: theme.spacing(1),
  },
});

function PrivacyPolicy(props) {
  const { classes, onClose, theme } = props;
  return (
    <Dialog open scroll="paper" onClose={onClose} hideBackdrop>
      <DialogTitle>Privacy Policy</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          This privacy policy sets out how JCP uses and protects any
          information that you volunteer when you use this website.
        </Typography>
        <Typography paragraph>Last Updated: 20-11-2021</Typography>
        <Typography paragraph>
          We are committed to ensuring that your privacy is protected. Should we
          ask you to provide certain information by which you can be identified
          when using this website, then you can be assured that it will only be
          used in accordance with this privacy statement.
        </Typography>
        <Typography paragraph>
          We can be reached via email at support@jcp.com
        </Typography>
        <Typography paragraph>
          This Privacy Policy explains how information about you is collected,
          used, and disclosed by JCP (“Company,” “we,” “us” or “our”).
          This Privacy Policy applies to information we collect when you use our
          websites, mobile applications, and the services, content, and
          materials made available through our websites or mobile applications
          (collectively, the “Services”), or when you otherwise interact with
          us.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          The Important Stuff
        </Typography>
        <Typography paragraph>
          We will not sell, distribute or lease your personal information to
          third parties unless we have your explicit permission or are required
          by law to do so. We may use your personal information to send you
          promotional information about third parties which we think you may
          find interesting if you tell us that you wish this to happen.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          More Important Stuff
        </Typography>
        <Typography paragraph>
          If you believe that any information we are holding about you is
          incorrect, incomplete or wish for it to be deleted, please write to or
          email us as soon as possible, at the above address or email address.
          We will promptly correct any information found to be incorrect or
          remove any information you request to be deleted.
        </Typography>
        <Typography paragraph>
          We may change this Privacy Policy from time to time. If we make
          changes, we will notify you by revising the “Last Updated” date at the
          top of this policy and, in some cases, we may provide you with
          additional notice (such as by adding a statement to our website or by
          sending you a notification). We encourage you to review our Privacy
          Policy whenever you access the Services or otherwise interact with us
          to stay informed about our information practices and the ways you can
          help protect your privacy.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Collection of Information
        </Typography>
        <Typography variant="h7" color="primary" paragraph>
          Information You Provide to Us
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          We collect information you provide directly to us. For example, we
          collect information when you create an account, participate in any
          interactive features of the Services, subscribe to a newsletter or
          email list, participate in an event, survey, contest or promotion,
          make a purchase, communicate with us via third-party social media
          sites, request customer support or otherwise communicate with us.
        </Typography>
        <Typography paragraph>
          The types of information we may collect include your:
        </Typography>
        <Typography paragraph>
          <li>Name</li>
          <li>Email Address</li>
          <li>Postal address</li>
          <li>Password</li>
          <li>Phone Number</li>
          <li>Employer Information</li>
          <li>Photo</li>
          <li>
            Securely stored payment information (such as your credit or debit
            card and billing address)
          </li>
          <li>Preference or interest data</li>
          <li>Any other information you choose to provide.</li>
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Information We Collect Automatically
        </Typography>
        <Typography paragraph>
          When you access or use our Services, we automatically collect
          information about you, including:
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Log Information
        </Typography>
        <Typography paragraph>
          We collect log information about your use of the Services, including
          your Internet Protocol (“IP”) address, web request, access times,
          pages viewed, web browser, links clicked and the page you visited
          before navigating to the Services.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Information We Collect Automatically
        </Typography>
        <Typography paragraph>
          When you access or use our Services, we automatically collect
          information about you, including:
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Mobile Device Information
        </Typography>
        <Typography paragraph>
          We collect information about the mobile device you use to access our
          Services, including the hardware model, operating system and version,
          unique device identifiers, mobile network information and information
          about your use of our mobile applications.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Information Collected by Cookies and Other Tracking Technologies
        </Typography>
        <Typography paragraph>
          We and our service providers use various technologies to collect
          information, including cookies and web beacons. Cookies are small data
          files stored on your hard drive or in device memory that help us
          improve our Services and your experience, see which areas and features
          of our Services are popular, and count visits. Web beacons are
          electronic images that may be used in our Services or emails and help
          deliver cookies, count visits, and understand usage and campaign
          effectiveness. For more information about cookies, and how to disable
          them, please see “Your Choices” below.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Information We Collect From Other Sources
        </Typography>
        <Typography paragraph>
          We may also obtain information from other sources and combine that
          with information we collect through our Services. For example, if you
          create or log into your account through a third-party social media
          site, we will have access to certain information from that site, such
          as JCP, account information, and friends lists, in accordance
          with the authorization procedures determined by such social media
          site; we may also collect information about you when you post content
          to our pages/feeds on third-party social media sites.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Use of Information
        </Typography>
        <Typography paragraph>
          We may use information about you for various purposes, including to:
        </Typography>
        <Typography paragraph>
          <li>
            Provide, maintain, improve and promote our products and services;
          </li>
          <li>
            Provide and deliver the information, products and services you
            request, process transactions and send you related information,
            including confirmations and receipts;
          </li>
          <li>
            Send you technical notices, updates, security alerts, and support
            and administrative messages;
          </li>
          <li>
            Respond to your comments, questions and requests, and provide
            customer service;
          </li>
          <li>
            Communicate with you about products, services, surveys, offers,
            promotions, rewards and events offered by
          </li>
          <li>
            Company and others, and provide news and information we think will
            be of interest to you;
          </li>
          <li>
            Monitor and analyze trends, usage and activities in connection with
            our Services;
          </li>
          <li>
            Personalize and improve the Services and provide advertisements,
            content or features that match user profiles or interests;
          </li>
          <li>
            Facilitate contests, sweepstakes and promotions, and process and
            deliver entries and rewards;
          </li>
          <li>
            Link or combine with information we get from others to help
            understand your needs and provide you with better service; and
          </li>
          <li>
            Carry out any other purpose for which the information was collected.
          </li>
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Sharing of Information
        </Typography>
        <Typography paragraph>
          We may share information about you as follows or as otherwise
          described in this Privacy Policy:
        </Typography>
        <Typography paragraph>
          <li>
            With vendors, consultants, and other service providers who need
            access to such information to carry out work or perform services on
            our behalf;
          </li>
          <li>
            When you participate in the interactive areas of our Services,
            certain information you provide may be displayed to other users,
            such as JCP photo, comments and other information you choose
            to provide;
          </li>
          <li>
            In response to a request for information if we believe disclosure is
            in accordance with or required by, any applicable law, regulation,
            or legal process;
          </li>
          <li>
            If we believe your actions are inconsistent with our user agreements
            or policies, or to protect the rights, property, and safety of the
            Company or others;
          </li>
          <li>
            In connection with, or during negotiations of, any merger, sale of
            company assets, financing or acquisition of all or a portion of our
            business by another company; and
          </li>
          <li>With your consent or at your direction.</li>
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Social Sharing Features
        </Typography>
        <Typography paragraph>
          The Services may offer social sharing features and other integrated
          tools (such as the Facebook “Like” button), which let you share
          actions you take on our Services with other media, and vice versa.
          Your use of such features enables the sharing of information with your
          friends or the public, depending on the settings you establish with
          the entity that provides the social sharing feature. For more
          information about the purpose and scope of data collection and
          processing in connection with social sharing features, please visit
          the privacy policies of the entities that provide these features.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Advertising and Analytics Services Provided by Others
        </Typography>
        <Typography paragraph>
          We may allow others to serve advertisements on our behalf across the
          Internet and to provide analytics services. These entities may use
          cookies, web beacons and other technologies to collect information
          about your use of the Services and other websites, including your IP
          address, web browser, pages viewed, time spent on pages, links clicked
          and conversion information. This information may be used by Company
          and others to, among other things, analyze and track data, determine
          the popularity of certain content, deliver advertising and content
          targeted to your interests on our Services and other websites and
          better understand your online activity. For more information about
          interest-based ads, or to opt out of having your web browsing
          information used for behavioral advertising purposes by companies that
          participate in the Digital Advertising Alliance, please visit
          www.aboutads.info/choices
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Affiliate Disclosure
        </Typography>
        <Typography paragraph>
          JCP is an affiliate of many online tools, services, and
          products. Links on the Site may be affiliate links and JCP may
          earn commissions for purchases that are made by visitors to the Site.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Security
        </Typography>
        <Typography paragraph>
          Company takes reasonable measures to help protect information about
          you from loss, theft, misuse and unauthorized access, disclosure,
          alteration and destruction.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Your Choices
        </Typography>
        <Typography variant="h7" color="primary" paragraph>
          Account Information
        </Typography>
        <Typography paragraph>
          You may review, correct or modify information maintained in your
          online account at any time by logging into your account and updating
          your profile information or by emailing us at SUPPORT@JCP.COM.
          If you wish to delete or deactivate your account, please email us at
          SUPPORT@JCP.COM, but note that some information you provide
          through the Services may continue to be accessible (e.g., comments you
          submit through the Services) and that we may continue to store
          information about you as required by law or for legitimate business
          purposes. We may also retain cached or archived copies of information
          about you for a certain period of time.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Cookies
        </Typography>
        <Typography paragraph>
          Most web browsers are set to accept cookies by default. If you prefer,
          you can usually choose to set your browser to remove or reject browser
          cookies. Please note that if you choose to remove or reject cookies,
          this could affect the availability or functionality of our Services
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Promotional Communications
        </Typography>
        <Typography paragraph>
          You may opt-out of receiving promotional communications from us by
          following the instructions in those communications or by sending an
          email to SUPPORT@JCP.COM. If you opt-out, we may still send you
          non-promotional communications, such as those about your account or
          our ongoing business relations.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about this Privacy Policy, please contact us
          at SUPPORT@JCP.COM
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          Refund Policy
        </Typography>
        <Typography paragraph>
          To be eligible for a refund, you must make a refund request through
          our customer service team (SUPPORT@JCP.COM) within the
          applicable time period for your program as set forth below. Your
          online access to all program materials is contingent on maintaining
          good standing in all of our programs for which you have registered. A
          failure to pay an installment for any program may result in the
          suspension or termination of your account and access to programs. Our
          standard refund policy is a 30-Day, 100% Money-Back Guarantee. If you
          don’t love one of our programs, just email SUPPORT@JCP.COM at
          ANY TIME during the first 60 days and show us you’re doing the
          exercises and not getting results. We’ll refund 100% of the purchase
          price.
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <ColoredButton
                  type="cancel"
            onClick={onClose}
            variant="contained"
            color={theme.palette.common.black}
          >
            <ArrowBackIcon className={classes.backIcon} />
            Back
          </ColoredButton>
        </NavLink>
      </DialogActions>
    </Dialog>
  );
}

PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PrivacyPolicy);
