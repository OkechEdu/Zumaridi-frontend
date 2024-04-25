import { useEffect } from "react";
import { ZuClose } from "components/icons";

import type { ReactNode } from "react";

type ModalId = string | null;

interface ModalProps {
  title?: string;
  content: ReactNode;
  setOpenModal: (value: ModalId | null) => void;
  [key: string]: any;
}

const Modal = ({ content, title, setOpenModal, ...otherProps }: ModalProps) => {
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY);
    };
  }, [window.scrollY]);

  return (
    <div
      className="w-full h-screen fixed inset-0 flex items-center justify-center p-5"
      {...otherProps}
    >
      <div className="relative w-full md:w-1/2 bg-white rounded-lg overflow-hidden z-50">
        <div className="w-full h-14 flex items-center justify-between px-4 py-2 border-b-2 border-b-gray-200 bg-gray-50 rounded-t-lg">
          <p className="text-black">{title}</p>
          <ZuClose
            size={12}
            onClick={() => {
              setOpenModal(null);
            }}
            className="text-green cursor-pointer"
          />
        </div>
        <div className="p-2 w-full min-h-[40vh] max-h-[80vh] overflow-y-auto">{content}</div>
      </div>
      <div onClick={() => setOpenModal(null)} className="fixed inset-0 bg-black/70 z-10"></div>
    </div>
  );
};

export default Modal;
