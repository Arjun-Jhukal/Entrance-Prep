import React from "react";

export default function layout({
  children,
  activity,
  activityGraph,
}: {
  children: React.ReactElement;
  activity: React.ReactElement;
  activityGraph: React.ReactElement;
}) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-9">{activity}</div>
        <div className="col-span-3">{activityGraph}</div>
      </div>
      {children}
    </>
  );
}
