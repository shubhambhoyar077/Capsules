import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { paginationCapsules } from '../redux/capsules/capsulesSlice';

const Pagination = () => {
  const { searchList } = useSelector((state) => state.capsules);
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  useEffect(() => {
    dispatch(
      paginationCapsules({ itemOffset: itemOffset, endOffset: endOffset })
    );
    console.log(itemOffset);
    console.log(endOffset);
  }, [itemOffset, searchList]);

  const pageCount = Math.ceil(searchList.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchList.length;
    setItemOffset(newOffset);
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
