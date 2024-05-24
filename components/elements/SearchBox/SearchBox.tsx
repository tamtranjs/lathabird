import DropdownContent from "@/components/ui/Custom/DropdownContent";
import InputSearch from "./InputSearch";
import MatchingList from "./MatchingList";
import { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onChange: (values: string) => void;
}

export default function SearchBox(props: Props) {

  const { onChange } = props;
  const [isOpen, setIsOpen] = useState(true);

  const [inputValue, setInputValue] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

  useEffect(() => {
    if (inputValue === "") {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [inputValue]);

  useEffect(() => {
    if (tagList.length === 0) {
      onChange && onChange("");
      return;
    } else {
      onChange && onChange(tagList.join(","));
    }
  }, [tagList, onChange]);

  return (
    <DropdownContent
      label={
        <InputSearch
          placeholder={props.placeholder || "Search"}
          value={inputValue}
          setValue={setInputValue}
          tagList={tagList}
          setTagList={setTagList}
        />
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onClickOutSide={() => {setInputValue("")}}
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
