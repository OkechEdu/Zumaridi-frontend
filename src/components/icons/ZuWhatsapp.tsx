import { SVGProps } from "react";
/* eslint-disable prettier/prettier */
type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;
const SvgZuWhatsapp = ({ size, color, className, ...props }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <path
        d="m.53 19.735 1.281-4.707a9.43 9.43 0 0 1-1.285-4.767A9.474 9.474 0 0 1 10 .787a9.473 9.473 0 0 1 9.474 9.474A9.473 9.473 0 0 1 10 19.735a9.43 9.43 0 0 1-4.765-1.284L.53 19.735ZM6.581 5.816a.91.91 0 0 0-.351.095c-.103.058-.197.13-.279.216-.114.107-.178.2-.247.29a2.585 2.585 0 0 0-.536 1.59c.002.463.124.915.313 1.338.388.854 1.025 1.76 1.867 2.598.203.201.401.404.614.593a8.952 8.952 0 0 0 3.638 1.938l.54.082c.175.01.35-.003.526-.012.276-.014.545-.089.79-.219.123-.064.244-.133.362-.208 0 0 .04-.027.118-.086.128-.094.207-.162.313-.272a1.09 1.09 0 0 0 .199-.286c.074-.155.148-.45.178-.695.023-.187.016-.29.013-.353-.003-.102-.088-.207-.18-.251l-.551-.247s-.824-.36-1.327-.589a.473.473 0 0 0-.168-.039.459.459 0 0 0-.358.12v-.001c-.005 0-.068.054-.753.884a.331.331 0 0 1-.349.123 1.342 1.342 0 0 1-.18-.063c-.118-.049-.159-.068-.24-.103l-.004-.002a5.693 5.693 0 0 1-1.488-.947c-.119-.104-.23-.218-.344-.328a5.968 5.968 0 0 1-.966-1.201l-.056-.09a.874.874 0 0 1-.096-.195c-.036-.139.057-.25.057-.25s.23-.253.338-.389c.089-.113.172-.231.249-.353.112-.18.147-.365.088-.508a78.884 78.884 0 0 0-.822-1.934c-.056-.127-.222-.218-.373-.236a4.19 4.19 0 0 0-.153-.015 3.206 3.206 0 0 0-.382.004v.001Z"
        fill="currentColor"
      />
    </svg>
  );
};
SvgZuWhatsapp.defaultProps = {
  size: 16,
  color: "currentColor"
};
export default SvgZuWhatsapp;