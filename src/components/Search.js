import { useState } from "react"
import { BiSearch,BiCaretDown,BiCheckboxChecked } from "react-icons/bi"


function DropDown({drop,sortBy,onSortChange}){
  if(!drop){
    return null;
  }
  return(
    <ul>
      <li
      onClick={() => onSortChange('petName')}>
        애기명 
       {(sortBy === 'petName') && <BiCheckboxChecked />}
        </li>
      <li
      onClick={() => onSortChange('ownerName')}>
        예약자명 
        {(sortBy === 'ownerName') && <BiCheckboxChecked />}
        </li>
      <li
      onClick={() => onSortChange('aptDate')}>
        날짜 
        {(sortBy === 'aptDate') && <BiCheckboxChecked />}
        </li>
    </ul>
  )
}



export default function Search({query,sortBy,onQueryChange,onSortChange}){
  const [drop,setDrop] = useState(false);
  return(
    <div id="search">
      <p>
        <BiSearch />
        <input type='text'
        onChange={e => {onQueryChange(e.target.value)}
        }
        value={query}
        />
        <button type="button" onClick={() => {setDrop(!drop)}}><BiCaretDown /></button> 
      </p>
      <DropDown drop={drop}
      sortBy={sortBy}
      onSortChange = {mySort => onSortChange(mySort)}/>
    </div>
  )
}