import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import TimesSolid from "../assets/icons/times-solid.svg";
import { BreakpointContext } from "../contexts/BreakpointContext";

export default function Popup() {
  const [isPopupClose, setPopupClose] = useState(false);
  const { language } = useTranslation();
  const { isMobileView } = useContext(BreakpointContext);

  return (
    !isPopupClose && (
      <div className="absolute left-1/2 translate-x-[-50%] mt-2 max-w-[95%] w-full bg-white rounded border border-black-800 rounded-xl p-3">
        <div className="flex flex-row-reverse">
          <img
            src={TimesSolid}
            className="w-7 h-7 cursor-pointer mb-2"
            alt=""
            onClick={() => setPopupClose(true)}
          />
        </div>
        <Link
          onClick={() => setPopupClose(true)}
          to={
            language === "ko"
              ? "/notice/events/6752935a4764ab48ae24989b"
              : "/notice/events/674d6523bfb7cc75578032aa"
          }
        >
          <img
            className="hover:opacity-70 transition-opacity ease duration-200"
            src={
              isMobileView
                ? "/banners/2025_RCOPEN_Poster.jpg"
                : "/banners/2025_RCOPEN.jpg"
            }
            alt="2025_RCOPEN.png"
          />
        </Link>
      </div>
    )
  );
}
