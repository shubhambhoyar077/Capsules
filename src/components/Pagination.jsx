import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { paginationCapsules } from '../redux/capsules/capsulesSlice';

const Pagination = () => {
  const { searchList } = useSelector((state) => state.capsules);
  const dispatch = useDispatch();

  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(paginationCapsules({ itemOffset: 0, endOffset: itemsPerPage }));
  }, [searchList]);

  const pageCount = Math.ceil(searchList.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchList.length;

    dispatch(
      paginationCapsules({
        itemOffset: newOffset,
        endOffset: newOffset + itemsPerPage,
      })
    );
  };

  return (
    <>
      <ReactPaginate
        className="flex justify-center"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
