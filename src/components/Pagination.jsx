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
  }, [searchList, dispatch]);

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
        className="flex justify-center py-12"
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        previousLinkClassName="border px-3 py-2 md:px-6 md:py-4"
        pageLinkClassName="border px-3 py-2 md:px-4 md:py-4 hover:bg-white hover:text-black"
        nextLinkClassName="border px-3 py-2 md:px-6 md:py-4"
        disabledLinkClassName="bg-[#292929] cursor-not-allowed"
        activeLinkClassName="text-black bg-white"
      />
    </>
  );
};

export default Pagination;
