import React from "react";
import PropTypes from "prop-types";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  withStyles
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ColoredButton from "../../shared/components/ColoredButton";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";

const styles = theme => ({
  termsConditionsListitem: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1)
  },
  dialogActions: {
    justifyContent: "flex-start",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  backIcon: {
    marginRight: theme.spacing(1)
  }
});

function TermsOfService(props) {
  
  const { classes, onClose, theme } = props;
  return (
    <>
      <Helmet>
        <title>About Josh Creative Programer</title>
        <meta
          name="description"
          content=" Jcp Terms Of Service"
        />
        <meta
          name="keywords"
          content="Java scripts, C++, Ract Native, Python, Php, Kotlin, Html and Word Press"
        />
        <link rel="apple-touch-icon" href="/jcp.png" />
        <style type="text/css"></style>
      </Helmet>
    <Dialog open scroll="paper" onClose={onClose} hideBackdrop>
      <DialogTitle>Terms of Service</DialogTitle>
      <DialogContent>
        <Typography variant="h6" color="primary" paragraph>
          Introduction
        </Typography>
        <Typography paragraph>
          Welcome to our website. This site is maintained as a service to our
          customers. If you continue to browse and use this website, you are
          agreeing to comply with and be bound by the following terms and
          conditions of use, which together with our privacy policy govern
          JCP relationship with you in relation to this website. Please
          review these terms and conditions carefully. If you do not agree to
          these terms and conditions, you should not use this site.
        </Typography>
        <Typography paragraph>
          GUARANTEE: ALL PRODUCTS COME WITH A 30-DAY, MONEY BACK GUARANTEE. IF
          BUYER IS NOT FULLY SATISFIED THEY MAY EMAIL OR CALL, PRESENT PROOF
          THEY'VE DONE THE WORK, TRIED IMPLEMENTING THE STRATEGIES AND THEY WILL
          RECEIVE A FULL REFUND. ANY PURCHASE ON THIS SITE CONSTITUTES AGREEMENT
          TO THESE TERMS & CONDITIONS.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          1. Agreement.
        </Typography>
        <Typography paragraph>
          This Agreement (the “Agreement’”) specifies the Terms and Conditions
          for access to and use of ryrob.com (the “Site”) and describes the
          terms and conditions applicable to your access to and use of the Site.
        </Typography>
        <Typography paragraph>
          This Agreement may be modified at any time by JCP upon posting
          of the modified agreement. Any such modifications shall be effective
          immediately. You can view the most recent version of these terms at
          any time at https://jcp.com/terms TERMS PAGE. Each use by you
          shall constitute and be deemed your unconditional acceptance of this
          Agreement.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          2. Intellectual Property Ownership.
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          (a) Our Content. All content included on this site is and shall
          continue to be the property of JCP or its content suppliers and
          is protected under applicable copyright, patent, trademark, and other
          proprietary rights. Any copying, redistribution, use, or publication
          by you of any such content or any part of the Site is prohibited
          without express written permission by JCP. Under no
          circumstances will you acquire any ownership rights or other interest
          in any content by or through your use of this site. [Trademark] is the
          trademark or registered trademark of JCP. Other product and
          company names mentioned on this Site may be trademarks of their
          respective owners.
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          (b) User Supplied Content. By accessing our forum, bulletin board,
          chat room, or any other user interactive area of our site, and placing
          any information in any of those areas, you hereby grant us a
          perpetual, irrevocable, royalty free license in and to such materials,
          including but not limited to the right to post, publish, transmit,
          distribute, create derivative works based upon, create translations
          of, modify, amend, enhance, change, display, and publicly perform such
          materials in any form or media, whether now known or later discovered.
          You also grant to others who access the forum, bulletin board, chat
          room or any other user interactive area of our site a perpetual,
          non-revocable, royalty free license to view, download, store and
          reproduce your postings but such license is limited to the personal
          use and enjoyment of such other party.
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          (c) Personal Use. JCP grants you a limited, revocable,
          nonexclusive license to use this site and our proprietary content
          solely for your own personal use and not for republication,
          distribution, assignment, sublicense, sale, preparation of derivative
          works, or other use. You agree not to copy materials on the site,
          reverse engineer or break into the site, or use materials, products,
          or services in violation of any law. The use of this website is at the
          discretion of JCP and JCP may terminate your use of this
          website at any time.
        </Typography>
        <Typography className={classes.termsConditionsListitem}>
          (d) Other Uses. All other use of Content from the Site, including, but
          not limited to uploading, downloading, modification, publication,
          transmission, participation in the transfer or sale of, copying,
          reproduction, republishing, creation of derivative works from,
          distribution, performance, display, incorporation into another web
          site, reproducing the Site (whether by linking, framing or any other
          method), or in any other way exploiting any of the Content, in whole
          or in part, is strictly prohibited without JCP prior express
          written consent.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          3. Disclaimers.
        </Typography>
        <Typography paragraph>
          (a) DISCLAIMER OF WARRANTIES. THE INFORMATION ON THIS SITE IS PROVIDED
          ON AN ”AS IS,” “AS AVAILABLE” BASIS. YOU AGREE THAT USE OF THIS SITE
          IS AT YOUR SOLE RISK. JCP DISCLAIMS ALL WARRANTIES OF ANY KIND,
          INCLUDING BUT NOT LIMITED TO ANY EXPRESS WARRANTIES, STATUTORY
          WARRANTIES, AND ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
          A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. YOUR SOLE AND EXCLUSIVE
          REMEDY RELATING TO YOUR USE OF THE SITE SHALL BE TO DISCONTINUE USING
          THE SITE. FURTHERMORE, JCP DOES NOT WARRANT THAT USE OF THE SITE
          WILL BE UNINTERRUPTED, AVAILABLE AT ANY TIME OR FROM ANY LOCATION,
          SECURE OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE
          SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. JCP, ITS
          SUBSIDIARIES, VENDORS, AND AFFILIATES DISCLAIM ANY RESPONSIBILITY FOR
          THE DELETION, FAILURE TO STORE, OR UNTIMELY DELIVERY OF ANY
          INFORMATION OR MATERIALS, AND ANY MATERIAL DOWNLOADED OR OTHERWISE
          OBTAINED THROUGH THE SITE. USE OF THE SITE’S SERVICES IS DONE AT YOUR
          OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY
          DAMAGES TO YOU COMPUTER SYSTEMS OR LOSS OF DATA THAT MAY RESULT FROM
          THE DOWNLOAD OF SUCH INFORMATION OR MATERIAL.
        </Typography>
        <Typography paragraph>
          (b) LIMITATION OF LIABILITY. JCP SHALL NOT BE RESPONSIBLE OR
          LIABLE TO PROVIDERS OR ANY THIRD PARTIES UNDER ANY CIRCUMSTANCES FOR
          ANY INDIRECT, CONSEQUENTIAL, SPECIAL, PUNITIVE OR EXEMPLARY DAMAGES OR
          LOSSES, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS,
          GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES WHICH MAY BE INCURRED
          IN CONNECTION WITH JCP OR THE SITE, OR USE THEREOF, OR ANY OF
          THE DATA OR OTHER MATERIALS TRANSMITTED THROUGH OR RESIDING ON THE
          SITE OR ANY SERVICES, OR INFORMATION PURCHASED, RECEIVED OR SOLD BY
          WAY OF THE SITE, REGARDLESS OF THE TYPE OF CLAIM OR THE NATURE OF THE
          CAUSE OF ACTION, EVEN IF JCP HAS BEEN ADVISED OF THE POSSIBILITY
          OF DAMAGE OR LOSS.
        </Typography>
        <Typography paragraph>
          (c) EARNINGS DISCLAIMERS. The information presented in this Website is
          intended to be for your educational and entertainment purposes only.
        </Typography>
        <Typography paragraph>
          We are not presenting you with a business opportunity.
        </Typography>
        <Typography paragraph>
          We are not making any claims as to income you may earn.
        </Typography>
        <Typography paragraph>
          We are not presenting you with an opportunity to get rich.
        </Typography>
        <Typography paragraph>
          Before entering any agreement, please use caution and seek the advice
          your own personal professional advisors, such as your attorney and
          your accountant.
        </Typography>
        <Typography paragraph>
          Where income figures are mentioned (if any), those income figures are
          anecdotal information passed on to us concerning the results achieved
          by the individual sharing the information. We have performed no
          independent verification of the statements made by those individuals.
          Please do not assume that you will make those same income figures.
        </Typography>
        <Typography paragraph>
          Please do not construe any statement in this website as a claim or
          representation of average earnings. There are NO average earnings.
          Testimonials and statements of individuals are not to be construed as
          claims or representations of average earnings. We cannot, do not, and
          will not make any claims as to earnings, average, or otherwise.
        </Typography>
        <Typography paragraph>
          Success in any endeavor is based on many factors individual to you. We
          do not know your educational background, your skills, your prior
          experience, or the time you can and will devote to the endeavor.
        </Typography>
        <Typography paragraph>
          Please perform your own due diligence before embarking on any course
          of action. Follow the advice of your personal qualified advisors.
        </Typography>
        <Typography paragraph>
          There are risks inherent to any endeavor that are not suitable for
          everyone. If you use capital, only “risk” capital should be used.
        </Typography>
        <Typography paragraph>
          There is no guarantee that you will earn any money using any of the
          ideas presented in our in materials. Examples in our materials are not
          to be interpreted as a promise or guarantee of earnings. Many factors
          will be important in determining your actual results and no guarantees
          are made that you will achieve results similar to ours or anybody
          else’s. No guarantee is made that you will achieve any result at all
          from the ideas in our material.
        </Typography>
        <Typography paragraph>
          You agree that we will not share in your success, nor will we be
          responsible for your failure or for your actions in any endeavor you
          may undertake.
        </Typography>
        <Typography paragraph>
          Please understand that past performance cannot be an indication of
          possible future results.
        </Typography>
        <Typography paragraph>
          Materials in our product and our website may contain information that
          includes or is based upon forward-looking statements within the
          meaning of the securities litigation reform act of 1995.
          Forward-looking statements give our expectations or forecasts of
          future events. You can identify these statements by the fact that they
          do not relate strictly to historical or current facts. They use words
          such as “anticipate,” “estimate,” “expect,” “project,” “intend,”
          “plan,” “believe,” and other words and terms of similar meaning in
          connection with a description of potential earnings or financial
          performance.
        </Typography>
        <Typography paragraph>
          Any and all forward looking statements in our materials are intended
          to express our opinion of earnings potential. They are opinions only
          and should not be relied upon as fact.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          4. Terms Relating to User Supplied Site Content.
        </Typography>
        <Typography paragraph>
          (a) Participate at Your Own Risk. You enter and participate in our
          forum, bulletin board, chat room, or any other user interactive area
          of our site, and gain access to the materials contained thereon at
          your own risk.
        </Typography>
        <Typography paragraph>
          (b) No Monitoring. We do not monitor or screen communications on our
          forum, bulletin board, chat room, or any other user interactive area
          of our site and we are not responsible for any material that any of
          our forum, bulletin board, chat room, or any other user interactive
          area of our site participant posts and we do not assume the
          responsibility to do so. In the event that we are notified by any
          party that any communications contained in our forum, bulletin board,
          chat room, or any other user interactive area of our site is contrary
          to these terms, we may, but are not obligated to, investigate the
          situation and determine in our own discretion, whether to remove such
          communication from our forum, bulletin board, chat room, or any other
          user interactive area of our site. We have no liability or
          responsibility to investigate or remove any content from our forum,
          bulletin board, chat room, or any other user interactive area of our
          site based upon a complaint or otherwise.
        </Typography>
        <Typography paragraph>
          (c) Your Reliance at Your Risk. We do not make any representations or
          warranties as to the truth or accuracy of any statement made or
          materials posted on or through our forum, bulletin board, chat room,
          or any other user interactive area of our site. You agree and
          acknowledge that you assume the risk of any actions you take in
          reliance upon the information that may be contained in our forum,
          bulletin board, chat room, or any other user interactive area of our
          site.
        </Typography>
        <Typography paragraph>
          (d) No Endorsement. We do not endorse or lend any credence for any
          statements that are made by any participant in our forum, bulletin
          board, chat room, or any other user interactive area of our site. Any
          opinions or views expressed by our forum, bulletin board, chat room,
          or any other user interactive area of our site participants are their
          own. We do not endorse or support or otherwise give any credence or
          reason for reliance on any such statements or opinions.
        </Typography>
        <Typography paragraph>
          (e) You are Responsible. You are fully responsible for your own
          statements and materials that you post in our forum, bulletin board,
          chat room, or any other user interactive area of our site and any
          consequences, whether or not foreseen, to any party who may rely upon
          these statements. You agree that you will not take any action directed
          towards attempting to hold us responsible for any such materials or
          statements.
        </Typography>
        <Typography paragraph>
          (f) Removal of Material. As a participant in our forum, bulletin
          board, chat room, or any other user interactive area of our site, you
          agree that we may remove any materials from our forum, bulletin board,
          chat room, or any other user interactive area of our site for any
          reason, in our sole discretion, or for no reason at all. This includes
          material which is disruptive, abusive, offensive, illegal, vulgar,
          pornographic, or any other material. You hold us harmless from and
          against any damage you or others may suffer as a result of our removal
          of any content from our forum, bulletin board, chat room, or any other
          user interactive area of our site or from the discontinuance of our
          forum, bulletin board, chat room, or any other user interactive area
          of our site at any time.
        </Typography>
        <Typography paragraph>
          (g) Right to Expel. We have the right to remove, expel, or disqualify
          any party from participation and access to our forum, bulletin board,
          chat room, or any other user interactive area of our site for any time
          and for any reason, or for no reason whatsoever, in our sole and
          absolute discretion. This includes, but is not limited to any
          violation of this agreement, disruptive behavior, complaints from
          other parties, any allegedly illegal activity, or for any other reason
          or for no reason at all.
        </Typography>
        <Typography paragraph>
          (h) Right to Terminate. We reserve the right to terminate our forum,
          bulletin board, chat room, or any other user interactive area of our
          site at any time and all users hold us harmless from and against any
          claims, damages, suits, threats, demands, liabilities, actions, causes
          of action, or injuries that may result therefrom, including but not
          limited to any consequential, incidental, and special damages of every
          nature and type.
        </Typography>
        <Typography paragraph>
          (i) Prohibitions. You agree that you will not:
        </Typography>
        <Typography paragraph>
          1. use our forum, bulletin board, chat room, or any other user
          interactive area of our site for any illegal purpose,
        </Typography>
        <Typography paragraph>
          2. place any material in our forum, bulletin board, chat room, or any
          other user interactive area of our site that violates the copyrights,
          trademarks, trade secrets, confidential information or other rights of
          any other party,
        </Typography>
        <Typography paragraph>
          3. place any material in our forum, bulletin board, chat room, or any
          other user interactive area of our site that contains a false
          statement about any person, infringes upon the privacy rights of any
          other person, or threatens, harasses, abuses or embarrasses any other
          person,
        </Typography>
        <Typography paragraph>
          4. place any obscene, pornographic, sexually explicit or violent
          materials, graphics, photographs, text or otherwise in our forum,
          bulletin board, chat room, or any other user interactive area of our
          site,
        </Typography>
        <Typography paragraph>
          5. place any advertising, attempted business solicitation, marketing
          materials or sales promotional materials in our forum, bulletin board,
          chat room, or any other user interactive area of our site,
        </Typography>
        <Typography paragraph>
          6. pretend to be another person that you are not,
        </Typography>
        <Typography paragraph>
          7. place materials in our forum, bulletin board, chat room, or any
          other user interactive area of our site that are disruptive or
          off-topic.
        </Typography>
        <Typography paragraph>
          (j) Hold Harmless and Indemnify. You hold us harmless from, and
          indemnify us against, any and all claims for damages from third
          parties arising from your participation, use or conduct in our forum,
          bulletin board, chat room, or any other user interactive area of our
          site.
        </Typography>
        <Typography variant="h6" color="primary" paragraph>
          5. Miscellaneous.
        </Typography>
        <Typography paragraph>
          (a) Prohibition Against Data Mining. You are prohibited from data
          mining, scraping, crawling, email harvesting, or using any process or
          processes that send automated queries to JCP or the
          HTTPS://JCP.COM website. You may not use JCP or the
          HTTPS://JCP.COM website to compile a collection of listings,
          including a competing listing product or service. You may not use the
          Site or any Materials for any unsolicited commercial email.
        </Typography>
        <Typography paragraph>
          (b) Compliance with Laws. You agree to comply with all applicable laws
          regarding your use of the website. You further agreed that information
          provided by you is truthful and accurate to the best of your
          knowledge.
        </Typography>
        <Typography paragraph>
          (c) Indemnification. You agree to indemnify, defend and hold JCP
          and our partners, employees, and affiliates, harmless from any
          liability, loss, claim, and expense, including reasonable attorney’s
          fees, related to your violation of this Agreement or use of the Site.
        </Typography>
        <Typography paragraph>
          (d) Privacy. Your visit to our site is also governed by our Privacy
          Policy. Please review our Privacy Policy at
          https://jcp.com/privacy-policy/. JCP reserves the right,
          and you authorize us, to use and assign all information regarding Site
          uses by you and all information provided by you in any manner
          consistent with our Privacy Policy.
        </Typography>
        <Typography paragraph>
          (e) DMCA Notice. If you believe your work has been copied in a way
          that constitutes copyright infringement, please provide a notice
          containing all of the following information to our Copyright Agent:
        </Typography>
        <Typography paragraph>
          1. An electronic or physical signature of the person authorized to act
          on behalf of the owner of the copyright interest;
        </Typography>
        <Typography paragraph>
          2. A description of the copyrighted work that you claim has been
          infringed;
        </Typography>
        <Typography paragraph>
          3. A description of where the material that you claim is infringing is
          located on the Site;
        </Typography>
        <Typography paragraph>
          4. Your address, telephone number, and email address;
        </Typography>
        <Typography paragraph>
          5. A statement by you that you have a good faith belief that the
          disputed use is not authorized by the copyright owner, its agent, or
          the law; and
        </Typography>
        <Typography paragraph>
          6. A statement by you, made under penalty of perjury, that the above
          information in your notice is accurate and that you are the copyright
          owner or authorized to act on the copyright owner’s behalf.
        </Typography>
        <Typography paragraph>
          (f) Affiliate Disclosure. JCP is an affiliate of many online
          tools, services, and products. Links on the Site may be affiliate
          links and JCP may earn commissions for purchases that are made
          by visitors to the Site. Our Copyright Agent for Notice of claims of
          copyright infringement on the Site is JCP, who can be reached as
          follows: By Email: support@jcp.com
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <ColoredButton
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
    </>
  );
}

TermsOfService.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TermsOfService);
