import React from "react";

interface TaskModalProps {
  //   isOpen: boolean;
  //   hide: () => void;
  size: string;
  title?: string;
  content: React.ReactNode;
}

const TaskModal = ({ size, title, content }: TaskModalProps) => {
  return (
    <div>
      <p>{size}</p>
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
};

export default TaskModal;
