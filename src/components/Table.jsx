import React from "react";

/* 
 * Fragments let you group a list of children 
 * without adding extra nodes to the DOM.
 */
function Column() {
  return (
    <React.Fragment>
      <td>Hello World!</td>
      <td>Happy Hacking!</td>
    </React.Fragment>
  );
}

/* 
 * A copy of the previous function, but
 * using the Short Syntax for fragments 
 */
function ColumnTwo() {
  return (
    <>
      <td>Happy Hacking!</td>
      <td>Hello World!</td>
    </>
  );
}

export default function Table() {
  return (
    <table>
      <tr>
        <Column />
        <ColumnTwo />
      </tr>
    </table>
  );
}
