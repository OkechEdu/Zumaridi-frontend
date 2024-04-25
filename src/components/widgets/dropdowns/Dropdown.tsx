import { useMemo, cloneElement, Children } from "react";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  button: ReactNode;
}

const Dropdown = ({ children, button }: Props) => {
  const dropdownElements = useMemo(() => {
    const childrenArray = Children.toArray(children);
    const className = "last:border-b-0 border-1 transition-colors rounded-none whitespace-nowrap";

    return childrenArray.map((child: any) => {
      return cloneElement(child, { ...child.props, className });
    });
  }, [children]);

  return (
    <div className="group relative">
      {button}
      <div className="min-w-full hidden absolute group-hover:block transition-transform duration-1000 z-20">
        <div className="p-3 bg-white rounded overflow-hidden">{dropdownElements}</div>
      </div>
    </div>
  );
};

export default Dropdown;
