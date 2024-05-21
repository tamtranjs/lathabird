import DropdownContent from "@/components/ui/Custom/DropdownContent";
import InputSearch from "./InputSearch";
import MatchingList from "./MatchingList";
import { useEffect, useState } from "react";

export default function SearchBox() {

  const [isOpen, setIsOpen] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

  useEffect(() => {
    setIsOpen(true);
  }, [inputValue]);

  return (
    <DropdownContent
      label={
        <InputSearch
          placeholder="Search for city"
          value={inputValue}
          setValue={setInputValue}
          tagList={tagList}
          setTagList={setTagList}
        />
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <MatchingList 
        typingWord={inputValue}
        selectedCityList={tagList}
        onSelect={(name: string) => {
          setTagList([...tagList, name]);
          setInputValue("");
        }}
      />
    </DropdownContent>
  )
}
