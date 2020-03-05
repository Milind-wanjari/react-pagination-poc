
export const start = () => {
  if(pageCount<pgData.maxShow){
    Pagination.Add(1, pageCount + 1);
  } 
};
export const next = n => {
  showSlides((slideIndex += n));
};
export const add = (start, finish) => {
  for (var i = s; i < f; i++) {
    PaginationCode +='<li class="page_itme _page_no" data-value=' + i +"><a>" + i +"</a></li>";
  }
};
export const prev = "PREV";
export const FIRST = "FIRST";
export const LAST = "LAST";
export const CURRENT = "CURRENT";
