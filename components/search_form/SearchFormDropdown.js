import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class SearchFormDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { title, desc, contents } = this.props;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} block>
        <DropdownToggle caret>{title}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>{desc}</DropdownItem>
          <DropdownItem divider />
          {contents.map(item => {
            <DropdownItem>{item}</DropdownItem>;
          })}
        </DropdownMenu>
      </Dropdown>
    );
  }
}
