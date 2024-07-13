
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductItem from './layer/ProductItem';



const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <ProductItem/>
          </div>
        ))}
    </>
  );
}




const Pagination = ({itemsPerPage}) => {
   // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex flex-wrap gap-x-10 gap-y-12 '>
      <Items currentItems={currentItems} />
      </div>
    <div className='flex  justify-between mt-12 items-end'>
    <ReactPaginate
        breakLabel="..."
        nextLabel=""
        nextClassName="hidden"
        previousClassName="hidden"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="pagination flex gap-x-[15px] mt-[50px] "
        pageClassName="page-item   w-[36px] h-[36px] border border-[#F0F0F0] inline-block  py-4 px-2 "
         pageLinkClassName="page-link  w-full h-full flex justify-center items-center"
         activeClassName="active bg-[#262626] text-white "
      />
            <p className=''>Products from {itemOffset+1} to {endOffset > items.length ?items.length :endOffset} of {items.length}</p>
    </div>
    </>
  )
}
export default Pagination
