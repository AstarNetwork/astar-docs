import "./astarButton.css";

export function AstarButton({ href = "", color = "blue", size = "md", children }) {
  const buttonClass = `astarButton ${color} ${size}`;
  const innerButtonClass = `innerButton ${size}`;
  const circleClass = `circle ${color} ${size}`;
  const innerCircleClass = `innerCircle ${color} ${size}`;
  const arrowClass = `arrow ${color} ${size}`;

  return (
    <button className={buttonClass} type="button">
      {href && (
        <a
          href={href}
          target={href.includes("https") ? "_blank" : "_self"}
          className="astarButtonLink"
        />
      )}
      <span className={innerButtonClass}>
        {children}
        <span className={circleClass}>
          <span className={innerCircleClass}>
            <ArrowRightIcon arrowClass={arrowClass} />
          </span>
        </span>
      </span>
    </button>
  );
}

export function ArrowRightIcon({ arrowClass }: { arrowClass: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={arrowClass}
    >
      <title>Arrow right</title>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}