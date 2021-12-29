import React from "react";

const statuses = [
  { statusName: "Alive", statusClassName: "background-color-green" },
  { statusName: "Dead", statusClassName: "background-color-red" },
  { statusName: "unknown", statusClassName: "background-color-gray" },
];

const defaultStatus = statuses[statuses.length - 1];

const ContentStatus = ({ status, species }) => {
  const getStatusColor = () => {
    const idx = statuses.findIndex((item) => {
      return item.statusName === status;
    });
    return idx > -1
      ? statuses[idx].statusClassName
      : defaultStatus.statusClassName;
  };
  return (
    <div className="">
      <span className="card-text d-flex flex-row bd-highlight mb-3 align-items-center">
        <div className={"circle me-2 " + getStatusColor()}></div>
        <small>{status}</small>
        <small className="me-1 ms-1">{"-"}</small>
        <small>{species} </small>
      </span>
    </div>
  );
};

export default ContentStatus;
