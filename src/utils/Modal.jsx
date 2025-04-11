import React, { useEffect, useState } from 'react';
import Buttons from './buttons';
import { Plus } from 'lucide-react';

const Modal = ({
  open,
  openCTA,
  disableCTA,
  children,
  heading,
  cross,
  handleFirstCta,
  firstCtaText,
  handleSecondCta,
  secondCtaText,
  handleCross,
  className
}) => {
  const [popUp, setPopUp] = useState(open);
  console.log("popUp", popUp)

  useEffect(() => {
    if (typeof open === "boolean") {
      setPopUp(open);
    }
  }, [open]);

  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPopUp(false);
        handleCross && handleCross();
      }
    };

    if (popUp) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [popUp, handleCross]);

  return (
    <div>

      {openCTA && (
        <div
          className='cursor-pointer'
          onClick={() => setPopUp(true)}
        >
          {openCTA}
        </div>
      )}

      <div
        className={`${popUp ? "grid" : "hidden"
          } z-50 md:place-items-center items-end md:p-4 cursor-default backdrop-blur font-normal text-base w-full h-full fixed top-0 left-0 text-black`}
      >
        <div className={`bg-white p-4 md:h-[unset] md:p-8 md:rounded-lg md:border-2 md:max-w-[500px] w-full border-[#ddd] ${className}`}>
          {heading && (
            <div className="flex gap-4 justify-between mb-4 border-b pb-2">
              <span className="text-primary capitalize text-xl font-bold flex gap-1 justify-between">
                {heading}
              </span>
              {cross && (
                <span
                  onClick={() => {
                    setPopUp(false);
                    handleCross && handleCross();
                  }}
                  className="cursor-pointer"
                >
                  <Plus  className='rotate-45'/>
                
                </span>
              )}
            </div>
          )}

          <div className="overflow-y-auto">{children}</div>

          <div className="flex gap-4 justify-center pb-8 m md:mt-4 w-full left-0 p-2 md:p-0 static bottom-0">
            {firstCtaText && (
              <Buttons
                disabled={disableCTA === "firstCta"}
                type="border"
                className="w-full md:w-[unset]"
                onClick={(e) => {
                  handleFirstCta && handleFirstCta(e);
                  setPopUp(false);
                }}
              >
                {firstCtaText}
              </Buttons>
            )}
            {secondCtaText && (
              <Buttons
                disabled={disableCTA === "secondCta"}
                className="w-full md:w-[unset]"
                type={
                  ["Delete", "Block", "Yes"].includes(secondCtaText)
                    ? "danger"
                    : "primary"
                }
                onClick={() => {
                  handleSecondCta && handleSecondCta();
                  setPopUp(false);
                }}
              >
                {secondCtaText}
              </Buttons>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
