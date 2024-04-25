function Success({ children, handleClose }: { children: any; handleClose: () => void }) {
  return (
    <div
      className="bg-alerts-success-bgColor border border-alerts-success-bgColor text-alerts-success-color px-4 py-3 my-2 rounded relative"
      role="alert"
    >
      <p className="pr-5 text-left">{children}</p>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={handleClose}>
        <svg
          className="fill-current h-6 w-6 text-alerts-success-color"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
}
export default Success;
