import DropdownContent from "@/components/ui/Custom/DropdownContent";
import InputSearch from "./InputSearch";
import DynamicList from "./DynamicList";
import StaticList from "./StaticList";
import { useEffect, useState } from "react";

interface Props {
  placeholder?: string;
  onChange: (values: string) => void;
  sourceList: SearchItem[];
  dataType?: string;
}

export default function SearchBox(props: Props) {

  const { sourceList, onChange, dataType = "dynamic" } = props;
  const [isOpen, setIsOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

  useEffect(() => {
    if (dataType === "dynamic") {
      if (inputValue === "") {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    }
  }, [inputValue, dataType]);

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
      dataType={dataType}
    >
      { dataType === "static" && (
        <StaticList
          typingWord={inputValue}
          selectedList={tagList}
          onSelect={(name: string) => {
            setTagList([...tagList, name]);
            setInputValue("");
          }}
          sourceList={sourceList}
        />
      )}
      {
        dataType === "dynamic" && (
          <DynamicList
            typingWord={inputValue}
            selectedList={tagList}
            onSelect={(name: string) => {
              setTagList([...tagList, name]);
              setInputValue("");
            }}
            sourceList={sourceList}
          />
        )
      }
    </DropdownContent>
  )
}
