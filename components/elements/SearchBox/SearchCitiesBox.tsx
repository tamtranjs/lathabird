import DropdownContent from "@/components/ui/Custom/DropdownContent";
import InputSearch from "./InputSearch";
import DynamicList from "./DynamicList";
import { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onChange: (values: string) => void;
}

export default function SearchCitiesBox(props: Props) {

  const { onChange } = props;
  const [isOpen, setIsOpen] = useState(false);

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
      dataType={"dynamic"}
    >  
      <DynamicList
        typingWord={inputValue}
        selectedList={tagList}
        onSelect={(name: string) => {
          if (name === "") {
            setInputValue("");
            return;
          } else {
            setTagList([...tagList, name]);
            setInputValue("");
          }
        }}
      /> 
    </DropdownContent>
  )
}
