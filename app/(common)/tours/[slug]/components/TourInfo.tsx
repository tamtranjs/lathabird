import {
  FiMapPin,
  FiClock,
  FiActivity,
  FiUsers,
  FiGlobe,
  FiDollarSign,
} from "react-icons/fi";

import type { IconType } from "react-icons";

interface ItemProps {
  Icon: IconType;
  title: string;
  value: string;
}

const InfoItem: React.FC<ItemProps> = ({ Icon, title, value }) => (
  <li className="inline-flex items-center mr-5 mt-5">
    <Icon className="size-6 stroke-[1.5] text-red-500" />
    <div className="ms-3">
      <p className="font-medium">{title}</p>
      <span className="text-slate-400 font-medium text-sm">{value}</span>
    </div>
  </li>
);

interface Props {
  tourInfo: {
    title: string;
    place: string;
    duration: number;
    activityType: string;
    groupSize: number;
    language: string;
    costPerDay: number;
  };
}

export default function TourInfo({ tourInfo }: Props) {
  const {
    title,
    place,
    duration,
    activityType,
    groupSize,
    language,
    costPerDay,
  } = tourInfo;

  return (
    <>
      <h2 className="text-2xl font-semibold mt-5">{title}</h2>
      <p className="flex items-center text-slate-400 font-medium mt-2">
        <FiMapPin className="size-4 mr-1" /> {place}
      </p>

      <ul className="list-none">
        <InfoItem Icon={FiClock} title="Duration" value={`${duration} days`} />
        <InfoItem Icon={FiActivity} title="Type" value={activityType} />
        <InfoItem
          Icon={FiUsers}
          title="Group Size"
          value={`${groupSize} Peoples`}
        />
        <InfoItem Icon={FiGlobe} title="Languages" value={language} />
        <InfoItem
          Icon={FiDollarSign}
          title={`$${costPerDay} / Person`}
          value="1 Day"
        />
      </ul>
    </>
  );
}
