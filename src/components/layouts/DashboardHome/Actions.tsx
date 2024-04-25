import { useState } from "react";
import { Modal } from "components/modules/modals";
import randomString from "random-string";
import { MeetingService } from "services";
import { toast } from "react-toastify";
import { formatErrorResponse, meetingActions } from "utils";
import env from "configs";
import { JoinMeetingForm, MeetingLink, NewMeetingForm, PlanMeetingForm } from "components/modules";
import { CenterLoader } from "components/widgets";
import { meetingModalEnum } from "utils/enums";
type ModalId = string | null;
const Actions = () => {
  const [openModal, setOpenModal] = useState<ModalId | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleCreateNewMeeting = async (): Promise<void> => {
    setIsLoading(true);
    const meetingId = randomString({ length: 10 });
    const response: any = await MeetingService.createMeeting({ meetingId });
    setIsLoading(false);
    if (response.STATUS === "SUCCESS") {
      toast.success(response.MESSAGE);
      window.open(`${env.MEETING_BASE_URL}/${meetingId}`);
    } else toast.error(formatErrorResponse(response));
  };
  return (
    <div className=" grid grid-cols-2 gap-4 text-white">
      {meetingActions.map((action) => (
        <div
          key={action.id}
          onClick={
            action.id === meetingModalEnum.INSTANT
              ? async () => await handleCreateNewMeeting()
              : () => setOpenModal(action.id)
          }
          className={`rounded-2xl cursor-pointer px-4 py-8 flex flex-col justify-between w-full h-48 ${action.backgroundColor}`}
        >
          <div className={`${action.buttonSyle}`}>
            <img src={action.icon} className="h-4 w-4" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide">{action.task}</p>
            <p className="text-base font-normal">{action.description}</p>
          </div>
        </div>
      ))}
      {isLoading && <CenterLoader />}
      {openModal === meetingModalEnum.INSTANT && (
        <Modal
          content={<NewMeetingForm />}
          title="Schedule a Meeting"
          setOpenModal={() => setOpenModal(null)}
        />
      )}
      {openModal === meetingModalEnum.JOIN && (
        <Modal
          content={<JoinMeetingForm />}
          title="Join Meeting"
          setOpenModal={() => setOpenModal(null)}
        />
      )}

      {openModal === meetingModalEnum.LATER && (
        <Modal
          content={<PlanMeetingForm />}
          title="Schedule for Later"
          setOpenModal={() => setOpenModal(null)}
        />
      )}

      {openModal === meetingModalEnum.LINK && (
        <Modal
          content={<MeetingLink />}
          title="Get a meeting Link"
          setOpenModal={() => setOpenModal(null)}
        />
      )}
    </div>
  );
};

export default Actions;
