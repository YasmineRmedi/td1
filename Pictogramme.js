import React from "react";
import Icone from "../Composant/Icone";
import { useState } from "react";
class Pictogramme extends React.Component {
  render() {
    return (
      <div>
        <Icone />
        <hr />
        <div>
          <button type="button" class="btn no-outline btn-secondary ">
            <i
              class="fa fa-thumbs-o-up fa-4 align-middle"
              aria-hidden="true"
            ></i>
            &nbsp;
            <span class="align-middle">J'aime</span>
          </button>
        </div>
      </div>
    );
  }
}
export default Pictogramme;
