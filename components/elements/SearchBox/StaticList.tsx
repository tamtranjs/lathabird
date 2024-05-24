
import { useState, useEffect } from "react";

interface Props {
  typingWord: string;
  selectedList: string[];
  onSelect: (name: string) => void;
  sourceList: SearchItem[];
}

export default function StaticList(props: Props) {

  const { typingWord, selectedList, sourceList } = props;
  const [displayList, setDisplayList] = useState<SearchItem[]>([]);
  
  useEffect(() => {
    if (typingWord === "") {
      const filteredList = sourceList.filter((item: SearchItem) => {
        return !selectedList.includes(item.name);
      });
      setDisplayList(filteredList)
    } else {
      const filteredList = sourceList.filter((item: SearchItem) => {
        return item.name.toLowerCase().includes(typingWord.toLowerCase());
      })
      .filter((item: SearchItem) => {
        return !selectedList.includes(item.name);
      });
      setDisplayList(filteredList);      
    }
  }, [typingWord, selectedList, sourceList]);
  

  const onSelectCity = (item: SearchItem) => {
    props.onSelect(item.name);
  }

  return (
    <ul className="flex flex-col space-y-1 max-h-56 overflow-x-hidden overflow-y-auto">  
      {displayList.map((item: SearchItem, index: number) => (
        <li
          key={index}
          className="h-10 flex items-center gap-1 hover:bg-blue-300 justify-center p-1 cursor-pointer"
          onClick={() => onSelectCity(item)}
        >
          <span className="text-sm">{item.name}</span>
        </li>
      ))}
    </ul>
  )
}
