import { useState } from "react";
import { ErrorAlert, SuccessAlert } from "components/modules/Alerts";
import { RESPONSE_ERROR, RESPONSE_SUCCESS } from "services/CONSTANTS";
import { formatErrorResponse } from "utils";
interface IMessage {
  status: typeof RESPONSE_SUCCESS | typeof RESPONSE_ERROR;
  content: string;
}

function useAlertMessage() {
  const [message, setMessage] = useState<IMessage | null>();

  const AlertMessage = () => {
    if (message?.status) {
      if (message.status === RESPONSE_SUCCESS)
        return <SuccessAlert handleClose={closeAlert}>{message?.content}</SuccessAlert>;
      return (
        <ErrorAlert handleClose={closeAlert}>{formatErrorResponse(message?.content)}</ErrorAlert>
      );
    }
    return null;
  };

  const closeAlert = () => {
    setMessage(null);
  };

  return { AlertMessage, setMessage };
}

export default useAlertMessage;
