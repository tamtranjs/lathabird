
import { useState, useEffect, useMemo } from "react";

export type City = {
  name: string;
  type: string;
}

interface Props {
  typingWord: string;
  selectedCityList: string[];
  onSelect: (name: string) => void;
}

const sourceCityList: City[] = [
  { name: "S. America", type: "City" },
  { name: "Can Tho", type: "City" },
  { name: "Ha Noi", type: "City" },
  { name: "Nghe An", type: "City" },
  { name: "Da Nang", type: "City" },
  { name: "Hue", type: "City" },
  { name: "Hai Phong", type: "City" },
  { name: "Quang Nam", type: "City" },
  { name: "Quang Ngai", type: "City" },
  { name: "Quang Ninh", type: "City" },
  { name: "Quang Tri", type: "City" },
  { name: "Quang Binh", type: "City" },
  { name: "Quang Nam", type: "City" },
  { name: "Quang Ngai", type: "City" },
  { name: "Quang Ninh", type: "City" },
  { name: "Quang Tri", type: "City" },
]

export default function MatchingList(props: Props) {

  const [displayCityList, setDisplayCityList] = useState<City[]>([]);

  // 
  
  useEffect(() => {
    if (props.typingWord === "") {
      setDisplayCityList([]);
      return;
    } else {
      const filteredCityList = sourceCityList.filter((city: City) => {
        return city.name.toLowerCase().includes(props.typingWord.toLowerCase());
      })
      .filter((city: City) => {
        return !props.selectedCityList.includes(city.name);
      });

      setDisplayCityList(filteredCityList.slice(0, 5));      
    }
  }, [props.typingWord, props.selectedCityList]);
  

  const onSelectCity = (city: City) => {
    props.onSelect(city.name);
  }

  return (
    <ul className="flex flex-col space-y-1">  
      {displayCityList.map((city: City, index: number) => (
        <li
          key={index}
          className="h-10 flex items-center gap-1 hover:bg-blue-300 justify-center p-1 cursor-pointer"
          onClick={() => onSelectCity(city)}
        >
          <span className="text-sm">{city.name}</span>
        </li>
      ))}
    </ul>
  )
}
