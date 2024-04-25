const template = ({ componentName, jsx, imports }, { tpl }) => tpl`
${imports}
/* eslint-disable prettier/prettier */

type Props = {
  size?: number;
  color?: string;
  className?: string;
} & SVGProps<SVGSVGElement>;

const ${componentName} = ({ size, color, className, ...props }: Props) => {
  return (${jsx})
}

${componentName}.defaultProps = {
  size: 16,
  color: "currentColor"
}

export default ${componentName}
`;

module.exports = {
  template,
  icon: true,
  typescript: true,
  ignoreExisting: true,
  jsxRuntime: "automatic",
  outDir: "src/components/icons",
  svgProps: {
    fill: `{color}`,
    width: `{size}`,
    height: `{size}`,
    className: `{className}`,
    preserveAspectRatio: `xMidYMid meet`
  }
};
