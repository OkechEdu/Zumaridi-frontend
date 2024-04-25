import { Dashboard } from "components";
import ReferAFriendView from "./ReferAFriendView";
import { userData } from "services/users.service";

export const ReferAFriendContainer = () => {
  const referralMessage = `Achieve more with the Zumaridi Video Conferencing!
  Trust me, you won't regret it!`;
  const refId = userData?.refId as string;

  const url = window.location.href.includes(refId)
    ? window.location.href
    : window.location.href + "/" + refId;

  return (
    <Dashboard>
      <ReferAFriendView referral={url} title={referralMessage} />
    </Dashboard>
  );
};
