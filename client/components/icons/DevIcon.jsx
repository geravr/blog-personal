// Style
import style from "./icon.module.scss";

const DevIcon = ({ size = "35", color = "" }) => {
  return (
    <svg
      t="1608565294963"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="7922"
      width={size}
      height={size}
      className={style[color]}
    >
      <path
        d="M341.333333 128C294.4 128 256 166.4 256 213.333333L256 384C256 430.933333 217.6 469.333333 170.666667 469.333333L128 469.333333 128 554.666667 170.666667 554.666667C217.6 554.666667 256 593.066667 256 640L256 810.666667C256 857.6 294.4 896 341.333333 896L426.666667 896 426.666667 810.666667 341.333333 810.666667 341.333333 597.333333C341.333333 550.4 302.933333 512 256 512 302.933333 512 341.333333 473.6 341.333333 426.666667L341.333333 213.333333 426.666667 213.333333 426.666667 128M682.666667 128C729.6 128 768 166.4 768 213.333333L768 384C768 430.933333 806.4 469.333333 853.333333 469.333333L896 469.333333 896 554.666667 853.333333 554.666667C806.4 554.666667 768 593.066667 768 640L768 810.666667C768 857.6 729.6 896 682.666667 896L597.333333 896 597.333333 810.666667 682.666667 810.666667 682.666667 597.333333C682.666667 550.4 721.066667 512 768 512 721.066667 512 682.666667 473.6 682.666667 426.666667L682.666667 213.333333 597.333333 213.333333 597.333333 128 682.666667 128Z"
        p-id="7923"
      ></path>
    </svg>
  );
};

export default DevIcon;
