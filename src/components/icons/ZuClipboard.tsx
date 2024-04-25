import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuClipboard = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 71 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M33.079 27.489a1.752 1.752 0 1 0-2.478-2.478l-4.942 4.942-1.39-1.267a1.75 1.75 0 0 0-2.359 2.583l2.625 2.398a1.75 1.75 0 0 0 2.415-.056l6.125-6.125.004.003Zm0 15.022a1.75 1.75 0 0 1 0 2.478l-6.125 6.125a1.75 1.75 0 0 1-2.419.053l-2.625-2.398a1.75 1.75 0 0 1 2.36-2.583l1.389 1.27 4.942-4.945a1.75 1.75 0 0 1 2.478 0Zm5.76 2.114a1.75 1.75 0 0 0 0 3.5h8.75a1.75 1.75 0 1 0 0-3.5h-8.75Zm-1.75-15.75a1.75 1.75 0 0 1 1.75-1.75h8.75a1.75 1.75 0 1 1 0 3.5h-8.75a1.75 1.75 0 0 1-1.75-1.75ZM30.09 7a5.25 5.25 0 0 0-4.952 3.5H19.59a5.25 5.25 0 0 0-5.25 5.25v42A5.25 5.25 0 0 0 19.59 63h31.5a5.25 5.25 0 0 0 5.25-5.25v-42a5.25 5.25 0 0 0-5.25-5.25h-5.548A5.25 5.25 0 0 0 40.59 7h-10.5Zm-1.75 5.25a1.75 1.75 0 0 1 1.75-1.75h10.5a1.75 1.75 0 1 1 0 3.5h-10.5a1.75 1.75 0 0 1-1.75-1.75ZM19.59 14h5.548a5.25 5.25 0 0 0 4.953 3.5h10.5a5.25 5.25 0 0 0 4.952-3.5h5.548a1.75 1.75 0 0 1 1.75 1.75v42a1.75 1.75 0 0 1-1.75 1.75h-31.5a1.75 1.75 0 0 1-1.75-1.75v-42A1.75 1.75 0 0 1 19.59 14Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuClipboard.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuClipboard;
