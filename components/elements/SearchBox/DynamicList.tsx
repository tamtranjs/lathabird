
import { getCitiesBySearch } from "@/actions/worldCities";
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
    <ul className="flex flex-col space-y-1">  
      {displayList.map((item: WorldCity, index: number) => (
        <li
          key={index}
          className="h-10 flex items-center gap-1 hover:bg-blue-300 justify-center p-1 cursor-pointer"
          onClick={() => onSelectCity(item)}
        >
          <span className="text-sm">{item.city}</span>
        </li>
      ))}
    </ul>
  )
}
