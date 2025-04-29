import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  // Ensure totalPages is never less than 1
  const clampedTotalPages = Math.max(1, totalPages);
  const clampedPage = Math.max(1, Math.min(currentPage, clampedTotalPages));

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= clampedTotalPages && page !== clampedPage) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (clampedTotalPages <= 7) {
      for (let i = 1; i <= clampedTotalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first, last, current, and neighbors
      const pages = new Set<number>();

      pages.add(1);
      pages.add(clampedTotalPages);

      for (let i = clampedPage - 1; i <= clampedPage + 1; i++) {
        if (i > 1 && i < clampedTotalPages) {
          pages.add(i);
        }
      }

      const sortedPages = Array.from(pages).sort((a, b) => a - b);
      for (let i = 0; i < sortedPages.length; i++) {
        pageNumbers.push(sortedPages[i]);

        if (
          i < sortedPages.length - 1 &&
          sortedPages[i + 1] - sortedPages[i] > 1
        ) {
          pageNumbers.push('...');
        }
      }
    }

    return pageNumbers.map((page, idx) =>
      typeof page === 'number' ? (
        <button
          key={idx}
          className={`mx-1 px-3 py-1 rounded ${
            page === clampedPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          onClick={() => handlePageChange(page)}
          aria-current={page === clampedPage ? 'page' : undefined}
        >
          {page}
        </button>
      ) : (
        <span key={idx} className="mx-1 px-2 text-gray-500">
          ...
        </span>
      )
    );
  };

  return (
    <nav className="flex items-center justify-center space-x-2" aria-label="Pagination">
      <button
        onClick={() => handlePageChange(clampedPage - 1)}
        disabled={clampedPage === 1}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(clampedPage + 1)}
        disabled={clampedPage === clampedTotalPages}
        className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  );
};
