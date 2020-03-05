import React, { Component } from "react";

class PagiantionContaint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: Math.ceil(this.props.dataList.paginationData.length / this.props.dataList.dataSize),
      PaginationCode:[],
      containtCode:[],
      currentPage:this.props.dataList.selectedPage,      
    };    
    this.Click = this.Click.bind(this);
    this.Start = this.Start.bind(this);
  }
  getData = (s, f) => { 
    this.state.containtCode=[]; 
    this.state.containtCode = this.props.dataList.paginationData.slice(s,f);
  }
  Add = (Start, finish) => {  
    //this.state.PaginationCode=[];
    for (var i = Start; i < finish; i++) {        
      this.state.PaginationCode.push(i)
    }
  };
  First=()=> {
    this.state.PaginationCode.push('1');
    this.state.PaginationCode.push('...');
  }
  Last=()=> {
    this.state.PaginationCode.push('...');
     this.state.PaginationCode.push(this.state.pageCount);
  }
  Click = (e)=>{
    e.stopPropagation();
    let clickedPage = Number( e.currentTarget.getAttribute('data-value')); 
    this.setState((state, props) => {
      return {currentPage: clickedPage}
    });      
    this.Start();
  }
  Next =()=>{
    if(this.state.currentPage==this.state.pageCount){
        return;
    }else{
      this.setState((state, props) => {
        return {currentPage: this.state.currentPage+1}
      });      
      this.Start();  
    }  
  }
  Prev =(e)=>{
    e.preventDefault();
    if(this.state.currentPage==1){
        return;
    }else{
    this.setState((state, props) => {
      return {currentPage: this.state.currentPage-1}
    });      
    this.Start();
    }
  } 
  Start = ()=>{
    let $state = this.state;
    let $props = this.props.dataList;
     this.state.PaginationCode=[];
    if($state.pageCount<$props.maxShow){
       this.Add(1, $state.pageCount + 1); 
       this.getData(($state.currentPage-1)*$props.dataSize,$state.currentPage*$props.dataSize);
    } 
    else if($state.pageCount > $props.maxShow && $state.currentPage <  $props.maxShow-3){       
      this.Add(1, $props.maxShow);
      this.Last();
      this.getData(($state.currentPage-1)*$props.dataSize,$state.currentPage*$props.dataSize);
    }
    else if($state.currentPage > ($state.pageCount-$props.maxShow)){
      this.First();
      this.Add($state.pageCount - $props.maxShow+1,$state.pageCount+1);
      this.getData(($state.currentPage-1)*$props.dataSize,$state.currentPage*$props.dataSize);
    }
    else{
      this.First();
      this.Add($state.currentPage-3,$state.currentPage+4);
      this.Last();
      this.getData(($state.currentPage-1)*$props.dataSize,$state.currentPage*$props.dataSize);
    }
  }
  componentDidUpdate() {
        // console.log('update');
        // console.log('start==== '+this.state.currentPage)
  }
  render() {
    let pgData = this.props.dataList;   
    console.log(this.state.pageCount)
    return (
      <div>
      {this.Start()} 
        <div className="_page_containt">
          {this.state.containtCode.map((data, index) => {      
            //console.log(data)        
              return (
                <div className="data_info dynm_data" data-containt={index + 1} key={data.data}>
                  <span className="page_info">{data.data} </span>
                  <span className="page_info">{data.name} </span>
                  <span className="page_info">{data.work} </span>
                </div>
              );                     
          })}
        </div>
         <div className="_page_nav_section">
         <a className={"_prev_page page_itme " + (this.state.currentPage==1 ? 'disabled' : ' ')} data-value="prev" onClick={this.Prev}>Prev</a>
          <ul className="_page_ul">           
           {this.state.PaginationCode.map((no, index) => { 
             //console.log(no)
            if(this.state.currentPage == no){
              return(
                <li className="page_itme _page_no active" onClick={this.Click} data-value={no} key={no} ><a>{no}</a></li>
              ) 
            }else{
              if(isNaN(no)){
                return(                
                  <li className="page_itme  page_ellipsis" data-value="ellipsis" key={no+index}>{no}</li> 
                ) 
              }
              else{
                return(
                  <li className="page_itme _page_no" onClick={this.Click} data-value={no} key={no}><a>{no}</a></li>
                ) 
              }
            }                      
          })}
          </ul>          
          <a className={"next_page page_itme " + (this.state.currentPage==this.state.pageCount ? 'disabled' : ' ')} data-value="next" onClick={this.Next}>Next</a>
        </div>       
      </div>
    );
  }
}
export default PagiantionContaint;
