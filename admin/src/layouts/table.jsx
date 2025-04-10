import React from 'react'
import Pagination from './pagination';
import { PencilLine, ShieldOff } from 'lucide-react';

export default function Table() {
  return (
        <div className="card">
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                        <thead className="table-header">
                            <tr className="table-row">
                                <th className="table-head">ID</th>
                                <th className="table-head">Gram Panchayat</th>
                                <th className="table-head">ग्राम पंचायत</th>
                                <th className="table-head">Taluka</th>  
                                {/* <th className="table-head">Status</th>
                                <th className="table-head">Actions</th> */}
                            </tr>
                        </thead>

                        <tbody className="table-body">
                                {currentItems.length > 0 ? (
                                    currentItems.map((panchayat, index) => {
                                        const taluka = talukaData.find(cat => cat.taluka_id == panchayat.taluka_id);
                                        return (
                                        <tr key={panchayat.id} className="table-row">
                                            <td className="table-cell">{indexOfFirstItem + index + 1}</td>
                                            <td className="table-cell">{panchayat.panchayat_eng}</td>
                                            <td className="table-cell">{panchayat.panchayat_marathi}</td>
                                            <td className="table-cell">{taluka ? taluka.taluka_name_eng : 'N/A'}</td>
                                            <td>
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium w-fit
                                                    ${panchayat.status === "Active" ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}>
                                                    {panchayat.status}
                                                </span>
                                            </td>
                                            <td className="table-cell">
                                                <div className="flex items-center gap-x-4">
                                                    <button className="flex justify-center items-center text-xs text-white bg-blue-500 w-[50px] h-full rounded dark:text-white" onClick={() => handleEditForm(panchayat)}>
                                                        <PencilLine size={20} />
                                                    </button>
                                                    <button className="flex justify-center items-center text-xs text-white bg-red-500 w-[50px] h-full rounded  dark:text-white" onClick={() => deactivatePanchayat(panchayat.panchayat_id)}>
                                                        <ShieldOff size={20} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center p-4">Fetching Data Not Available</td>
                                    </tr>
                                )}
                            </tbody>

                         </table>
                    </div>
                    <Pagination
                        filteredData={filteredData}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        itemsPerPage={itemsPerPage}
                        />

                </div>
            </div>
  )
}
