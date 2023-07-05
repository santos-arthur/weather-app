import React, { FormEvent } from 'react';
import { FaLocationDot, FaMagnifyingGlass } from 'react-icons/fa6';

interface SearchBoxProps {
  search: (query: string) => void
}

const SearchBox: React.FC<SearchBoxProps> = ({ search }) => {

  
  function handleSearch(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const location = document.getElementById('location') as HTMLInputElement
    if(location.value != '')
      search(location.value)
  }

  return (
    <form className='searchBox flex w-full justify-between' id='searchForm' onSubmit={handleSearch}>
      <FaLocationDot className='text-3xl' />
      <input
        type='text'
        id='location'
        className='rounded-lg w-3/4 p-1 text-lg font-semibold bg-sky-50'
        placeholder='Enter your location!'
      />
      <button
        type='submit'
        className='p-2 text-center rounded-full bg-teal-500 hover:bg-sky-900 text-gray-900 hover:text-teal-200 transition-all ease-in duration-400'
      >
        <FaMagnifyingGlass className='text-xl' />
      </button>
    </form>
  );
};

export default SearchBox;
