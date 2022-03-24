import React from "react";

import { InputGroup, FormControl } from "react-bootstrap";
export default function Search({setSearch}) {
  return (
    <div>
     
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <i class="fa-solid fa-magnifying-glass"></i>
        </InputGroup.Text>
        <FormControl
          placeholder="search by title "
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(e)=> setSearch(e.target.value) }
        />
      </InputGroup>
    </div>
  );
}
