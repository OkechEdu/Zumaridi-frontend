import { Link } from "react-router-dom";
import { CONTACT } from "routes/CONSTANTS";

const PrivacyView = () => {
  return (
    <div className="pt-5 md:pt-10 pb-40 px-5 md:px-10 lg:px-20 text-justify space-y-5 md:space-y-10">
      <div className="space-y-3 md:space-y-5">
        <h2>Zumaridi’s Privacy Statement</h2>
        <p>
          Zumaridi values your privacy. In line with internationally recognized privacy laws,
          Zumaridi is committed to ensuring maximum protection of consumer privacy. This privacy
          statement describes the collection and processing of personal data.
        </p>
      </div>

      <div className="space-y-3 md:space-y-5">
        <h4 className="font-bold">What Personal Data does Zumaridi collect?</h4>
        <p>
          In this context, personal data refers to all information about an identifiable person or
          any data that Zumaridi may retain as associated with an individual. We collect and process
          the following data only for service provision, improving user experience with Zumaridi,
          processing user purchases, and customized service to the user’s preference.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-bold">Account information:</span> This includes usernames, email
            addresses, phone numbers, and passwords associated with the user account.{" "}
          </li>
          <li>
            <span className="font-bold">Profile Information:</span> This denotes all information
            connected to your user account such as profile pictures, country of origin, display
            names, and other data as provided by the user.
          </li>
          <li>
            <span className="font-bold">Contacts and Calendar data :</span> To promote user
            experience, Zumaridi links with contacts and calendars. The contacts allow a user to
            invite participants in meetings easily whereas calendar integration allows meeting
            scheduling
          </li>
          <li>
            <span className="font-bold">Registration data:</span> When registering for meetings,
            Zumaridi submits all data to the host as needed, including name, email address, contact
            information, and responses to questions asked by the host.
          </li>
          <li>
            <span className="font-bold">Payment information:</span> We will collect payment
            information for premium users. Such may include credit card information or data
            associated with other online payment platforms such as PayPal and Payoneer to help us
            process your purchases.{" "}
          </li>
          <li>
            <span className="font-bold">Other data:</span> Zumaridi will also collect data about
            devices and operating systems, products usage such as computer and mobile usages, and
            information related to our partners.
          </li>
        </ul>
      </div>

      <div className="space-y-3 md:space-y-5">
        <h4 className="font-bold">How the Data collected is used?</h4>
        <p>
          Unless ordered by an account owner or as required for legal, safety, or security reasons,
          our workers do not access meetings, webinars, or messaging content - specifically, audio,
          video, files, and messages. All data collected is used as below:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <span className="font-bold">To provide services:</span> Zumaridi requires users to
            provide their information to facilitate the identification and allow them to join and
            create meetings. Personal data also helps us to route meeting invitations and other
            communications as regards your meetings.
          </li>
          <li>
            <span className="font-bold">To facilitate product improvement:</span> Collecting data
            about our experiences while using the platform allows us to improve your experience with
            our service.
          </li>
          <li>
            <span className="font-bold">To promote marketing and promotion of our services :</span>{" "}
            Occasionally, Zumaridi will send you marketing information concerning our packages and
            other services offered by us. However, we do not access meeting discussions or content
            and this means we cannot use your meeting data for marketing.
          </li>
          <li>
            <span className="font-bold">To communicate with you:</span> We rely on your contact
            information to communicate with you about our products and services. This contact
            information will also allow us to respond to you whenever you contact us.
          </li>
          <li>
            <span className="font-bold">To meet legal requirements as demanded:</span> Whenever
            legal processes require us to provide any details, we use your data o ensure we comply
            with the law.
          </li>
          <li>
            <span className="font-bold">Personal data protection:</span> We do not supply your data
            to any third parties except in the context of legal proceedings for which we are tied by
            the law to supply your data.
          </li>
        </ul>
      </div>

      <div className="space-y-3 md:space-y-5">
        <h4 className="font-bold">Who can see and share your Data on Zumaridi?</h4>
        <p>
          Your data on Zumaridi is only accessible to the account owner (yourself), meeting hosts
          and participants, panelists and attendees in webinars, live-streamed events and
          recordings, and other third-party applications and integrations that you allow.
        </p>
      </div>

      <div className="space-y-3 md:space-y-5">
        <h4 className="font-bold">Retention of Data</h4>
        <p>
          Zumaridi will retain your personal data for as long as needed to ensure proper engagement
          in the course of you using our services. We determine our retention periods based on:
        </p>
        <ul className="list-disc list-inside">
          <li>
            The length of time we have a direct relationship with you, such as when you have an
            account with us.
          </li>
          <li>
            Whether an account owner modifies or deletes some account information through their
            control panels.
          </li>
          <li>
            Whenever we have a legal requirement to retain your data such as in cases where the law
            requires us to maintain transaction data.
          </li>
          <li>When retention is correct in the prevailing legal position.</li>
        </ul>
      </div>

      <div className="space-y-3 md:space-y-5">
        <h4 className="font-bold">International Transfer</h4>
        <p>
          Your information including personal information, may be transferred to and maintained on
          computers located outside your continent, country, state or any other governmental
          jurisdiction where data protection laws may differ than those from your jurisdiction.
        </p>
        <p>
          If you are located outside Africa or the United States and choose to provide information
          to us, please note that we transfer information, including personal information, to Africa
          and process it here. <br /> Your consent to this privacy policy followed your submission
          of such information represents your agreement to that transfer
        </p>
      </div>

      <div className="space-y-3 md:space-y-5">
        <h4 className="font-bold">California Consumer Privacy Act</h4>
        <p>Residents of California have rights to:</p>
        <ul className="list-disc list-inside">
          <li>
            Access all data that has been collected from them by Zumaridi and associated third
            parties.
          </li>
          <li>Delete personal data use some cases</li>
          <li>
            Opt out of all contracts involving use of personal data in interest-based advertising.
            You may enable the “Do Not Sell My Personal Data” option through the homepage.
          </li>
        </ul>
        <p className="text-gray-200">
          When you enable these functions or opt to enjoy either or all of these rights, Zumaridi
          will not discriminate you in service provision. You may easily exercise your rights under
          CCPA by reaching us with a request via the “contact us” page or simply following the above
          instruction. All requests will be processed within 7 working days and acknowledged by
          email. Note that sch requests may only be made by yourself or an authorized agent.
        </p>
      </div>

      <div className="space-y-3 md:space-y-5">
        <h4 className="font-bold">Privacy Policy Update</h4>
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise you to review this
          page periodically for any changes. We will notify you of any changes by posting the new
          Privacy Policy on this page. These changes are effective immediately, after they are
          posted on this page.
        </p>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to{" "}
          <Link to={CONTACT}>
            <span className="text-green underline">contact us</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PrivacyView;
