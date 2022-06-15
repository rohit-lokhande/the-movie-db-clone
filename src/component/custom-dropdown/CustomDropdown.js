import React, { useState } from "react";
import './style.css';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import { sortFilter } from "../../model/filter";

function CustomDropDown(props) {

    const [isExpanded, setExpanded] = useState(false);
    const [selected, setSelected] = useState(sortFilter[0]);

    const headerClick = () => {
        setExpanded(!isExpanded);
    }

    const onItemClick = (item) => {
        setExpanded(!isExpanded);
        setSelected(item);
        props.onItemClick(item);
    }

    return (
        <div className="drop">

            <div className="drop-header" onClick={headerClick}>
                <a>{selected.name}</a>
                {isExpanded ? <BsChevronDown /> : <BsChevronRight />}
            </div>
            {
                isExpanded && <div className="drop-content" >
                    {
                        sortFilter.map((filter, index) =>
                          (selected.id === filter.id) ? <div className='content-seleted' onClick={() => {
                                onItemClick(filter);
                            }}>{filter.name}</div> :
                                <div className='conent-list' onClick={() => {
                                    onItemClick(filter);
                                }}>{filter.name}</div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default CustomDropDown;