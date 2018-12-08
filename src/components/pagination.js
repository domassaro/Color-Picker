import React from 'react';
import navRight from '../icons/nav-right.svg';
import navLeft from '../icons/nav-left.svg';

const Pagination = ({pageCount, currentPage, paginate}) => {
    currentPage = parseInt(currentPage);
    var isEnd = (pageCount >= 8) && (currentPage >= 6) && (currentPage > (pageCount - 5));
    var isMiddlePage = pageCount >= 8 && (currentPage <= pageCount - 5) && (currentPage >= 6);

    return(
        <div>{pageCount > 1 &&
            <div className="container-pagination">
                <style jsx>{`
                    .container-pagination {
                        font-style: italic;
                        line-height: 1.43;
                        font-size: 14px;
                        color: #67a63a;
                        text-align: center;
                        margin: 40px 0;
                    }
                    .container-pagination > div {
                        display: inline-block;
                    }
                    .paging, 
                    .paging-first-last {
                        display: inline-block;
                        cursor: pointer;
                    }
                    .paging {
                        padding: 0 10px;
                    }
                    
                    .paging-first-last {
                        padding-left: 10px;
                        padding-right: 20px;
                    }
                    .paging-selected {
                        color: #696969;
                        border-bottom: 1px #696969 solid;
                        padding: 0 3px;
                        margin: 0 7px;
                    }
                    .arrow-next {
                        padding-left: 16px;
                        cursor: pointer;
                    }
                    .arrow-previous {
                        padding-right: 16px;
                        cursor: pointer;
                    }
                    .middle-details, .first-page-number {
                        color: #67a63a;
                        font-size: 14px;
                    }
                    .first-page-display,
                    .last-page-display {
                        color: #67a63a;
                        font-size: 14px;
                        padding-left: 10px;
                        cursor: pointer;
                    }
                    .first-page-display {
                        padding-right: 10px;
                    }
            
            `}</style>
                {/* previous arrow */}
                {currentPage != 1 && <div className="arrow-previous" 
                    onClick={() => paginate(parseInt(currentPage) - 1)}>
                    <img src={navLeft} alt="" width="10px" height="10px"/>
                </div>}
                {/* if there are less than 8 pages display all of them */}
                {pageCount < 8 && Array(pageCount).fill(1).map((x,i) => 
                    <span className="first-page-display" 
                        key={i} 
                        className={currentPage == i + 1 ? "paging-selected" : "paging"} 
                        onClick={() => paginate(i+1)}>
                        {i+1}
                    </span>)}
                {/* if there are >= 8 pages and you're on one of the first 5 */}
                {pageCount >= 8 && currentPage < 6 && <div> { Array(5).fill(1).map((x,i) => 
                    <span key={i} 
                        className={currentPage == i + 1 ? "paging-selected" : "paging"} 
                        onClick={() => paginate(i+1)}>
                        {i+1}
                    </span>)}
                    <span className="middle-details"> ... </span> 
                    <span className="last-page-display" 
                        onClick={() => paginate(pageCount)}>
                        {pageCount}
                    </span>
                </div>}
                {/* if there are >= 8 pages and you're on one of the last 5 */}
                {isEnd && <div> 
                    <span className="first-page-display" onClick={() => paginate(1)}> 1 </span>
                    <span className="middle-details"> ... </span> 
                    {Array(5).fill(1).map((x,i) => 
                        <span key={i} 
                            className={currentPage == pageCount - 4 + i ? "paging-selected" : "paging"} 
                            onClick={() => paginate(parseInt(pageCount) - 4 + i)}>
                                {pageCount - 4 + i}
                        </span>)}
                </div>}  
                {/* if there are >= 8 pages and you're somewhere in the middle  */}
                {isMiddlePage && <div> 
                    <span className="paging-first-last" onClick={() => paginate(1)}> 1 </span>
                    <span className="middle-details"> ... </span> 
                    <span className="paging" onClick={() => paginate(parseInt(currentPage) - 1)}>
                        {currentPage - 1}
                    </span>
                    <span className="paging-selected" onClick={() => paginate(currentPage)}>
                        {currentPage}
                    </span>
                    <span className="paging" onClick={() => paginate(parseInt(currentPage) + 1)}>
                        {currentPage + 1}
                    </span>
                    <span className="middle-details"> ... </span> 
                    <span className="paging-first-last" onClick={() => paginate(pageCount)}>
                        {pageCount}
                    </span>
                </div>}
                {/* next arrow */}
                {currentPage != pageCount && 
                    <div className="arrow-next" onClick={() => paginate(parseInt(currentPage) + 1)}>
                        <img src={navRight} alt="" width="10px" height="10px"/>
                    </div>}                              
            </div>}
        </div>
    );
};

export default Pagination;