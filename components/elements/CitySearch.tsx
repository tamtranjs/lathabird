import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  placeholder?: string;
  className?: string;
}

export default function CitySearch(props: Props) {

  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState<string[]>(["S. America", "Aberdeen"]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (tags.length < 5) {
      setInputValue(event.target.value);
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue) {
      setTags(prevTags => [...prevTags, inputValue]);
      setInputValue('');
    }
    if (event.key === "Backspace" && !inputValue && tags.length > 0) {
      setTags(prevTags => prevTags.slice(0, -1));
    }
  };

  const handleTagRemove = (tag: string) => {
    setTags(prevTags => prevTags.filter(t => t !== tag));
  }

  const renderTag = (tag: string, index: number) => {
    return (
      <div key={index} className="flex items-center bg-gray-200 rounded-full px-2 py-1 text-sm">
        <span>{tag}</span>
        <button
          type="button"
          className="ml-2"
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
    <div className={cn(props.className,  "flex flex-wrap justify-center items-center px-2 py-1 space-x-1 space-y-1")} onClick={onClickParent}>
      {tags.map((tag: string, index: number) => renderTag(tag, index))}
      <input
        ref={inputRef}
        type="text"
        className="outline-none flex-initial"
        style={{ width: `${Math.max(30, inputValue.length * 10)}px` }}
        onChange={handleInputChange}
        value={inputValue}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  )
}
