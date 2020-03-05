import React, { Component } from "react";
import DataApi from './api/DataApi';
import "./css/Pagination.css";
class Pagination extends Component {
  render() {
    return (
      <div>
        <h1 className="contact-cls">Pagination</h1>
        <div className="_pagination_container">
          <DataApi />
        </div>
      </div>
    );
  }
}
export default Pagination;
