import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  let badgeClasses = "";
  let label = "";

  if (score > 70) {
    badgeClasses = "bg-badge-green text-green-600";
    label = "Strong";
  } else if (score > 49) {
    badgeClasses = "bg-badge-yellow text-yellow-600";
    label = "Good start";
  } else {
    badgeClasses = "bg-badge-red text-red-600";
    label = "Needs work";
  }

  return (
    <div
      className={`inline-flex items-center rounded-full px-3 py-1 ${badgeClasses}`}
    >
      <p className="text-sm font-semibold">{label}</p>
    </div>
  );
};

export default ScoreBadge;
