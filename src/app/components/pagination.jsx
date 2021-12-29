import React from "react";
import _ from "lodash";
const maxPageCountHalf = 2;

const Pagination = ({ pagesCount, onPageChange, currentPage }) => {
  let startPage = Math.max(currentPage - maxPageCountHalf, 1);
  const endPage = Math.min(
    startPage + maxPageCountHalf * 2 + 1,
    pagesCount + 1
  );
  startPage = Math.max(endPage - maxPageCountHalf * 2 - 1, 1);
  let pages = _.range(startPage, endPage);
  console.log(
    "currentPage",
    currentPage,
    "startPage",
    startPage,
    "endPage",
    endPage
  );
  if (startPage === 2) {
    pages = [1, ...pages];
  }
  if (startPage > 2) {
    pages = [1, { content: "... ", idx: startPage - 1 }, ...pages];
  }
  if (endPage === pagesCount) {
    pages = [...pages, pagesCount];
  }
  if (endPage < pagesCount) {
    pages = [...pages, { content: " ...", idx: endPage + 1 }, pagesCount];
  }
  //  if (pagesCount === 1) return null;
  function getPageNum(page) {
    return typeof page === "object" ? page.idx : page;
  }
  function getPageContent(page) {
    return typeof page === "object" ? page.content : page;
  }
  return (
    <nav>
      <ul className="pagination pagination-panel">
        {pages.map((page) => (
          <li
            key={getPageContent(page)}
            role="button"
            className={
              "page-item " + (getPageNum(page) === currentPage ? "active" : "")
            }
          >
            <a
              className="page-link"
              onClick={() => {
                onPageChange(getPageNum(page));
              }}
            >
              {getPageContent(page)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
