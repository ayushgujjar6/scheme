import React from 'react'
import { useState } from 'react';

export default function Pagination({ filteredData = [], currentPage, setCurrentPage, itemsPerPage }) {

            
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
            
            const nextPage = () => {
                if (currentPage < Math.ceil(filteredData.length / itemsPerPage)) {
                    setCurrentPage(currentPage + 1);
                }
            };
            
            const prevPage = () => {
                if (currentPage > 1) {
                        setCurrentPage(currentPage - 1);
                    }
                };
  return (
        <div className="flex lg:justify-end  justify-start gap-4 ">
            <button onClick={prevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-300 rounded-md">Previous</button>
            <button onClick={nextPage} disabled={currentPage >= Math.ceil(filteredData.length / itemsPerPage)} className="px-4 py-2 bg-gray-300 rounded-md">Next</button>
        </div>
     )
}
