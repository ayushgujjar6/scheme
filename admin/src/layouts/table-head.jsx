// src/components/TableHead.jsx

import React from 'react';

export default function TableHead({ searchTerm, setSearchTerm, selectedStatus, setSelectedStatus, onNewClick }) {
  return (
    <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-3 py-2 rounded w-full md:w-auto"
      />

      {/* Filter Dropdown */}
      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="border px-3 py-2 rounded"
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="deactive">Deactive</option>
      </select>

      {/* New Button */}
      <button
        onClick={onNewClick}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        + New
      </button>
    </div>
  );
}
