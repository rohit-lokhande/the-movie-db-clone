import React from 'react';
import { Col, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import useCollapse from 'react-collapsed';
import { BsChevronDown, BsChevronRight } from 'react-icons/bs';
import CustomDropDown from '../custom-dropdown/CustomDropdown';
import './style.css'

function ExpandableContainer(props) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({defaultExpanded: true});
    return (
        <div className="collapsible">
            <div className="collapsible-header" {...getToggleProps()}>
                <span>Sort</span>
                {isExpanded ? <BsChevronDown /> : <BsChevronRight />}

            </div>
            <div {...getCollapseProps()}>
                <Row className="collapsible-body">
                    <a>Sort Results By</a>
                    <br></br>
                    <CustomDropDown onItemClick={props.onItemClick} />


                </Row>
            </div>
        </div>
    );
}

export default ExpandableContainer;