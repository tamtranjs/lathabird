
"use client";

import { getCitiesBySearch } from "@/actions/mongo.worldCities";
import { useState, useEffect, useRef } from "react";
import { debounce } from "lodash";

interface Props {
  typingWord: string;
  selectedList: string[];
  onSelect: (name: string) => void;
}

export default function DynamicList(props: Props) {

  const { typingWord, selectedList } = props;
  const [displayList, setDisplayList] = useState<WorldCity[]>([]);
  
  const debouncedSearch = useRef(debounce((value: string) => {
    if (value.length > 1) {
      const fetchData = async () => {
        const sourceList: WorldCity[] = await getCitiesBySearch(value);
        setDisplayList(sourceList.slice(0, 10));  
      }
      fetchData();
    } else {
      setDisplayList([]);
    }
  }, 300)).current;

  useEffect(() => {
    debouncedSearch(typingWord);
  }, [typingWord, debouncedSearch]);

  const onSelectCity = (item: WorldCity) => {
    if (selectedList.includes(item.city)) {
      props.onSelect("");
    } else {
      props.onSelect(item.city);
    }
  }

  return (
    <ul className="flex flex-col max-h-80 overflow-x-hidden overflow-y-auto">  
      {displayList.map((item: WorldCity) => (
        <li
          key={item.id}
          className="flex flex-col gap-1 hover:bg-blue-300 p-2 cursor-pointer border-b border-gray-200"
          onClick={() => onSelectCity(item)}
        >
          <span className="text-sm">{item.city}</span>
          <span className="text-xs text-slate-500">{item.country}</span>
        </li>
      ))}
    </ul>
  )
}
