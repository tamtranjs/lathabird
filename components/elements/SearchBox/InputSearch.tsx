import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  value: string;
  placeholder?: string;
  className?: string;
  setValue?: (value: string) => void;
  tagList: string[];
  setTagList: (tags: string[]) => void;
}

export default function InputSearch(props: Props) {

  const { value, tagList, setTagList } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (tagList.length < 5) {
      props.setValue && props.setValue(event.target.value);
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !value && tagList.length > 0) {
      setTagList(tagList.slice(0, -1));
    }
  };

  const handleTagRemove = (tag: string) => {
    setTagList(tagList.filter(t => t !== tag));
  }

  const renderTag = (tag: string, index: number) => {
    return (
      <div key={index} className="flex items-center bg-[#c7edfc] rounded-full px-1.5 py-1 text-sm">
        <span>{tag}</span>
        <button
          type="button"
          className="ml-2 rounded-full bg-white size-5 hover:bg-cyan-500 hover:text-white transition-colors duration-200 ease-in-out"
          onClick={() => handleTagRemove(tag)}>x</button>
      </div>
    );
  }

  const onClickParent = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      inputRef.current?.focus();
    }
  }

  return (
    <div className={cn(props.className,  "flex flex-wrap justify-center items-center px-1 py-1 gap-1")} onClick={onClickParent}>
      {tagList.map((tag: string, index: number) => renderTag(tag, index))}
      <input
        ref={inputRef}
        type="text"
        placeholder={tagList.length > 0 ? "" : props.placeholder}
        className="outline-none flex-initial text-center"
        style={ tagList.length > 0 ? { width: `${Math.max(8, value.length * 10)}px` } : {}}
        onChange={handleInputChange}
        value={value}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  )
}
