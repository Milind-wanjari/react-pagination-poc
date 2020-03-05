import React, { Component } from "react";
import PagiantionContaint from "../pages/PagiantionContaint";
import PaginationCount from "../pages/PaginationCount";

class DataApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPage: this.selectedPage || 1,
      dataSize: this.dataSize || 3,
      maxShow: this.maxShow || 11,     
      paginationData: [
        { data: "data 1" , name:"Mil",work:"IT" },
        { data: "data 2" , name:"Mil",work:"IT" },
        { data: "data 3" , name:"Mil",work:"IT" },
        { data: "data 4" , name:"Mil",work:"IT" },
        { data: "data 5" , name:"Mil",work:"IT" },
        { data: "data 6" , name:"Mil",work:"IT" },
        { data: "data 7" , name:"Mil",work:"IT" },
        { data: "data 8" , name:"Mil",work:"IT" },
        { data: "data 9" , name:"Mil",work:"IT" },
        { data: "data 10" , name:"Mil",work:"IT" },
        { data: "data 11" , name:"Mil",work:"IT" },
        { data: "data 12" , name:"Mil",work:"IT" },
        { data: "data 13" , name:"Mil",work:"IT" },
        { data: "data 14" , name:"Mil",work:"IT" },
        { data: "data 15" , name:"Mil",work:"IT" },
        { data: "data 16" , name:"Mil",work:"IT" },
        { data: "data 17" , name:"Mil",work:"IT" },
        { data: "data 18" , name:"Mil",work:"IT" },
        { data: "data 19" , name:"Mil",work:"IT" },
        { data: "data 20" , name:"Mil",work:"IT" },
        { data: "data 21" , name:"Mil",work:"IT" },
        { data: "data 22" , name:"Mil",work:"IT" },
        { data: "data 23" , name:"Mil",work:"IT" },
        { data: "data 24" , name:"Mil",work:"IT" },
        { data: "data 25" , name:"Mil",work:"IT" },
        { data: "data 26" , name:"Mil",work:"IT" },
        { data: "data 27" , name:"Mil",work:"IT" },
        { data: "data 28" , name:"Mil",work:"IT" },
        { data: "data 29" , name:"Mil",work:"IT" },
        { data: "data 30" , name:"Mil",work:"IT" },
        { data: "data 31" , name:"Mil",work:"IT" },
        { data: "data 32" , name:"Mil",work:"IT" },
        { data: "data 33" , name:"Mil",work:"IT" },
        { data: "data 34" , name:"Mil",work:"IT" },
        { data: "data 35" , name:"Mil",work:"IT" },
        { data: "data 36" , name:"Mil",work:"IT" },
        { data: "data 37" , name:"Mil",work:"IT" },
        { data: "data 38" , name:"Mil",work:"IT" },
        { data: "data 39" , name:"Mil",work:"IT" },
        { data: "data 40" , name:"Mil",work:"IT" },
        { data: "data 41" , name:"Mil",work:"IT" },
        { data: "data 42" , name:"Mil",work:"IT" },
        { data: "data 43" , name:"Mil",work:"IT" },
        { data: "data 44" , name:"Mil",work:"IT" },
        { data: "data 45" , name:"Mil",work:"IT" },
        { data: "data 46" , name:"Mil",work:"IT" },
        { data: "data 47" , name:"Mil",work:"IT" },
        { data: "data 48" , name:"Mil",work:"IT" },
        { data: "data 49" , name:"Mil",work:"IT" },
        { data: "data 50" , name:"Mil",work:"IT" },
        { data: "data 51" , name:"Mil",work:"IT" },
        { data: "data 52" , name:"Mil",work:"IT" },
        { data: "data 53" , name:"Mil",work:"IT" },
        { data: "data 54" , name:"Mil",work:"IT" },
        { data: "data 55" , name:"Mil",work:"IT" },
        { data: "data 56" , name:"Mil",work:"IT" },
        { data: "data 57" , name:"Mil",work:"IT" },
        { data: "data 58" , name:"Mil",work:"IT" },
        { data: "data 59" , name:"Mil",work:"IT" },
        { data: "data 60" , name:"Mil",work:"IT" },
        { data: "data 61" , name:"Mil",work:"IT" }
      ]
    };
  }
  render() {    
    const { selectedPage, dataSize, maxShow } = this.state;
    return (
      <div>
        <PagiantionContaint dataList={this.state} />
                
      </div>
    );
  }
}
export default DataApi;
// <PaginationCount dataList={this.state} />