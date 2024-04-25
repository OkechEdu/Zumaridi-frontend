import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuMicrophoneSlash = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="M6.67 7.975a.308.308 0 0 1 .066-.34l1.682-1.65a.32.32 0 0 1 .544.221c0 .032-.005.07-.014.1a2.841 2.841 0 0 1-1.884 1.848.323.323 0 0 1-.394-.179ZM10.668 5a.473.473 0 0 0-.478.469c0 2.153-1.786 3.906-3.98 3.906-.344 0-.681-.043-1.004-.128a.48.48 0 0 0-.585.332.468.468 0 0 0 .338.573c.251.067.51.105.773.13v1.437c0 .258.214.468.478.468.263 0 .477-.21.477-.468v-1.43c2.499-.237 4.458-2.308 4.458-4.82a.473.473 0 0 0-.477-.47ZM12.279.137a.484.484 0 0 0-.676 0L9.043 2.65A2.842 2.842 0 0 0 6.21.156c-.758 0-1.478.294-2.032.825a2.81 2.81 0 0 0-.834 1.988v2.5c0 .741.302 1.443.828 1.96l-.796.782A3.846 3.846 0 0 1 2.229 5.47a.473.473 0 0 0-.478-.47.473.473 0 0 0-.477.47c0 1.285.507 2.492 1.427 3.405L.14 11.387a.463.463 0 0 0 0 .663.481.481 0 0 0 .675 0L12.28.8a.463.463 0 0 0 0-.663Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuMicrophoneSlash.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuMicrophoneSlash;
