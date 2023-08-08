import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({
  totalObjects,
  pageSize,
  onPageChange,
  activePage,
}) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      pageCount={totalObjects ? Math.ceil(totalObjects / pageSize): 1}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      renderOnZeroPageCount={null}
      onPageChange={(e) => onPageChange(e.selected)}
      containerClassName={styles.pagination}
      forcePage={Number(activePage)}
    />
  );
};

export default Pagination;