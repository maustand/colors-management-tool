import { ChangeEvent } from "react";
import "./searchBox.scss";

type SearchBoxProps = {
  placeHolder?: string;
  debounceTime?: number;
  searchTextChanged: (query: string) => void;
};

function SearchBox({
  placeHolder,
  debounceTime = 300,
  searchTextChanged,
}: SearchBoxProps) {
  let timeoutId = 0;

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(
      () => searchTextChanged(event.target.value),
      debounceTime
    );
  }

  return (
    <>
      <form>
        <div className="position-relative">
          <input
            type="search"
            className="form-control"
            placeholder={placeHolder}
            spellCheck="false"
            onChange={handleInputChange}
          />
          <i className="position-absolute bi bi-search"></i>
        </div>
      </form>
    </>
  );
}

export default SearchBox;
