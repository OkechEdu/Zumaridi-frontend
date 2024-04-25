import {
  ZuRoundFacebook,
  ZuRoundLinkedin,
  ZuRoundPintrest,
  ZuRoundSnapchat,
  ZuRoundTelegram,
  ZuRoundTicktock,
  ZuRoundTwitter,
  ZuRoundWhatsapp,
  ZuRoundYoutube
} from "components";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import { toast } from "react-toastify";
import { sendReferral, userData } from "services/users.service";
import { ReactMultiEmail } from "react-multi-email";
import "react-multi-email/dist/style.css";
import { Loader } from "components/widgets";

export interface IRefer {
  firstName: string;
  lastName: string;
  email: string;
  refId: string;
}

const ReferAFriendView: FC<{ referral: string; title: string }> = ({ referral, title }) => {
  const [emails, setEmails] = useState<string[]>([]);
  const [copyState, setCopyState] = useState<string>("COPY");
  const [isLoading, setIsLoading] = useState<boolean>();
  const error = copyState.includes("NOT COPIED!");

  const handleCopy = (referral: string) => {
    type CopyFn = (text: string) => Promise<boolean>; // Return success
    const copy: CopyFn = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopyState("COPIED!");
        setTimeout(() => setCopyState("COPY"), 5000);
        return true;
      } catch (error) {
        setCopyState("NOT COPIED!");
        setTimeout(() => setCopyState("COPY"), 5000);
        return false;
      }
    };
    void copy(referral);
  };

  const handleSend = (emails: string[]) => {
    if (emails.length) {
      setIsLoading(true);
      const result = emails.map(async (email) => {
        const details: IRefer = {
          firstName: userData?.name?.firstName,
          lastName: userData?.name?.lastName,
          email,
          refId: userData?.refId
        };

        try {
          const response: any = await sendReferral(details);
          toast.success((response?.MESSAGE as string) + ` to ${email}`);
          return response;
        } catch (error: any) {
          toast.error((error?.MESSAGE as string) + ` to ${email}`);
        }
      });

      Promise.all(result)
        .then(() => {
          setIsLoading(false);
          setEmails([]);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <div>
      <div>
        <p className="text-[24px] font-thin">Your Company Matters A Lot! Ask Them To Join</p>
        <p className="mt-4">
          With your friends and family here, you can create unforgettable adventure here.
        </p>
      </div>
      <div className="mt-10">
        <p>Copy your referral code and invite them directly</p>
        <div
          className={`flex ${
            error ? "border-red-400" : "border-green"
          } bg-white rounded-md lg:max-w-[978px] max-w-full h-[54px] border-[1px] items-center justify-between px-4 mt-2`}
        >
          <p className="w-4/5 overflow-hidden mr-2">{referral}</p>
          <button
            className={`${
              error ? "border-red-400 text-red-400" : "border-primary text-green"
            } rounded-md border-[1px] h-[34px] w-[102px]`}
            onClick={() => handleCopy(referral)}
          >
            {copyState}
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="lg:max-w-[978px] max-w-full">
          <p>Enter their email address and we send them your referral code</p>
        </div>
        <div className="flex border-green bg-white rounded-md w-full lg:max-w-[978px] max-w-full h-[54px] border-[1px] items-center justify-between px-4 mt-2">
          <ReactMultiEmail
            placeholder="Enter emails"
            emails={emails}
            className="flex flex-col w-5/6 mr-2 -ml-3  h-4/5 border-none no-scrollbar overflow-x-auto overflow-y-hidden"
            onChange={(_emails: string[]) => {
              setEmails(_emails);
            }}
            getLabel={(email: string, index: number, removeEmail: (index: number) => void) => {
              return (
                <div data-tag key={index}>
                  <div data-tag-item>{email}</div>
                  <span data-tag-handle onClick={() => removeEmail(index)}>
                    ×
                  </span>
                </div>
              );
            }}
          />
          <button
            className="bg-green border-green text-white rounded-md border-[1px] h-[34px] w-[102px]"
            onClick={() => handleSend(emails)}
          >
            {isLoading ? (
              <div className="flex justify-center">
                <Loader />
              </div>
            ) : (
              "SEND"
            )}
          </button>
        </div>
      </div>
      <div className="flex w-full lg:max-w-[978px] max-w-full mt-8">
        <hr className="w-3/6 h-[1px] mr-7 mt-3 border-0 bg-slate-400"></hr>
        <p className="text-slate-400 ">OR</p>
        <hr className="w-3/6 h-[1px] ml-7 mt-3 border-0 bg-slate-400"></hr>
      </div>
      <div className="mt-10 font-thin text-[24px] max-w-full">
        <p className="">Share via social media</p>
        <div className="flex bg-white mt-2 -ml-8 lg:max-w-[1054px] h-[106px] rounded-lg items-center">
          <TwitterShareButton url={referral} className="md:ml-6 ml-4 md:mr-10 mr-5" title={title}>
            <ZuRoundTwitter />
          </TwitterShareButton>
          <Link to={"/"} className="md:mr-10 mr-5">
            <ZuRoundSnapchat />
          </Link>
          <FacebookShareButton url={referral} className="md:mr-10 mr-5" title={title}>
            <ZuRoundFacebook />
          </FacebookShareButton>
          <WhatsappShareButton url={referral} className="md:mr-10 mr-5" title={title}>
            <ZuRoundWhatsapp />
          </WhatsappShareButton>
          <Link to={"/"} className="md:mr-10 mr-5">
            <ZuRoundTicktock />
          </Link>
          <Link to={"/"} className="md:mr-10 mr-5">
            <ZuRoundYoutube />
          </Link>
          <TelegramShareButton url={referral} className="md:mr-10 mr-5" title={title}>
            <ZuRoundTelegram />
          </TelegramShareButton>
          <Link to={"/"} className="md:mr-10 mr-5">
            <ZuRoundPintrest />
          </Link>
          <LinkedinShareButton url={referral} className="md:mr-6 mr-4" title={title}>
            <ZuRoundLinkedin />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default ReferAFriendView;
