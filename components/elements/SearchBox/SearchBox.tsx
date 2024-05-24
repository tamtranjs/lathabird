import DropdownContent from "@/components/ui/Custom/DropdownContent";
import InputSearch from "./InputSearch";
import MatchingList from "./MatchingList";
import { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onChange: (values: string) => void;
  sourceList: SearchItem[];
}

// const sourceList: SearchItem [] = [
//   { name: "S. America", type: "City" },
//   { name: "Can Tho", type: "City" },
//   { name: "Ha Noi", type: "City" },
//   { name: "Nghe An", type: "City" },
//   { name: "Da Nang", type: "City" },
//   { name: "Hue", type: "City" },
//   { name: "Hai Phong", type: "City" },
//   { name: "Quang Nam", type: "City" },
//   { name: "Quang Ngai", type: "City" },
//   { name: "Quang Ninh", type: "City" },
//   { name: "Quang Tri", type: "City" },
//   { name: "Quang Binh", type: "City" },
//   { name: "Quang Nam", type: "City" },
//   { name: "Quang Ngai", type: "City" },
//   { name: "Quang Ninh", type: "City" },
//   { name: "Quang Tri", type: "City" },
// ]

export default function SearchBox(props: Props) {

  const { sourceList, onChange } = props;
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
        selectedList={tagList}
        onSelect={(name: string) => {
          setTagList([...tagList, name]);
          setInputValue("");
        }}
        sourceList={sourceList}
      />
    </DropdownContent>
  )
}
