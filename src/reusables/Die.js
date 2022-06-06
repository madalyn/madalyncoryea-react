import React from "react";

// Taken from my Bonko code
export default function Die({ currentNumber, isDisabled }) {
  // Get the correct appearance based on the current number
  const getDiePips = (number) => {
    if (number === 1) {
      return (
        <>
          <span className="material-icons">fiber_manual_record</span>
        </>
      );
    }
    if (number === 2) {
      return (
        <>
          <div className="align-self-start">
            <span className="material-icons">fiber_manual_record</span>
          </div>
          <div className="align-self-end">
            <span className="material-icons">fiber_manual_record</span>
          </div>
        </>
      );
    }
    if (number === 3) {
      return (
        <>
          <div className="align-self-start">
            <span className="material-icons">fiber_manual_record</span>
          </div>
          <div>
            <span className="material-icons">fiber_manual_record</span>
          </div>
          <div className="align-self-end">
            <span className="material-icons">fiber_manual_record</span>
          </div>
        </>
      );
    }
    if (number === 4) {
      return (
        <>
          <div className="d-flex justify-content-between">
            <span className="material-icons">fiber_manual_record</span>{" "}
            <span className="material-icons">fiber_manual_record</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="material-icons">fiber_manual_record</span>{" "}
            <span className="material-icons">fiber_manual_record</span>
          </div>
        </>
      );
    }
    if (number === 5) {
      return (
        <>
          <div className="d-flex justify-content-between">
            <span className="material-icons">fiber_manual_record</span>{" "}
            <span className="material-icons">fiber_manual_record</span>
          </div>
          <div>
            <span className="material-icons">fiber_manual_record</span>{" "}
          </div>
          <div className="d-flex justify-content-between">
            <span className="material-icons">fiber_manual_record</span>{" "}
            <span className="material-icons">fiber_manual_record</span>
          </div>
        </>
      );
    }
    if (number === 6) {
      return (
        <>
          <div>
            <span className="material-icons">fiber_manual_record</span>{" "}
            <span className="material-icons">fiber_manual_record</span>{" "}
            <span className="material-icons">fiber_manual_record</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="material-icons">fiber_manual_record</span>{" "}
            <span className="material-icons">fiber_manual_record</span>{" "}
            <span className="material-icons">fiber_manual_record</span>
          </div>
        </>
      );
    } else {
      return <>{number}</>;
    }
  };
  return (
    <div
      className={`d-flex align-items-center border border-dark fixed rounded mr-2 p-2 ${
        isDisabled ? "disabled-color" : ""
      }`}
    >
      <div
        className={`d-flex flex-column align-content-center w-100 h-100 ${
          currentNumber === 1
            ? "justify-content-center"
            : "justify-content-between"
        }`}
      >
        {getDiePips(currentNumber)}
      </div>
    </div>
  );
}
