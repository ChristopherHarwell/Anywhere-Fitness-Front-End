import React from "react";
import styled from "styled-components";

const bar = styled.input`
  background-color: gray;
  text: #20c8dd;
  padding: 0.2%;
`;

function SearchClass(props) {
  return (
    <section>
      <bar
        value={props.value}
        palceholder="Search Classes"
        onChange={props.onChange}
      />
    </section>
  );
}
export default SearchClass;
