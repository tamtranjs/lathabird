import DropdownContent from "@/components/ui/Custom/DropdownContent";
import InputSearch from "./InputSearch";
import StaticList from "./StaticList";
import { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onChange: (values: string) => void;
  sourceList: SearchItem[] | WorldCity[];
}

export default function SearchDateBox(props: Props) {

  const { sourceList, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

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
      dataType={"static"}
    >
      <StaticList
        typingWord={inputValue}
        selectedList={tagList}
        onSelect={(name: string) => {
          setTagList([...tagList, name]);
          setInputValue("");
        }}
        sourceList={sourceList as SearchItem[]}
      /> 
    </DropdownContent>
  )
}
