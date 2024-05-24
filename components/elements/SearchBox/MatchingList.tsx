
import { useState, useEffect, useMemo } from "react";

interface Props {
  typingWord: string;
  selectedList: string[];
  onSelect: (name: string) => void;
  sourceList: SearchItem[];
}

export default function MatchingList(props: Props) {

  const { typingWord, selectedList, sourceList } = props;
  const [displayList, setDisplayList] = useState<SearchItem[]>([]);
  
  useEffect(() => {
    if (typingWord === "") {
      setDisplayList([]);
      return;
    } else {
      const filteredList = sourceList.filter((city: SearchItem) => {
        return city.name.toLowerCase().includes(typingWord.toLowerCase());
      })
      .filter((city: SearchItem) => {
        return !selectedList.includes(city.name);
      });

      setDisplayList(filteredList.slice(0, 5));      
    }
  }, [typingWord, selectedList, sourceList]);
  

  const onSelectCity = (city: SearchItem) => {
    props.onSelect(city.name);
  }

  return (
    <ul className="flex flex-col space-y-1">  
      {displayList.map((city: SearchItem, index: number) => (
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
