import React, { useEffect } from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";

const Styles = styled.div`
  padding: 1rem;
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #c5d7ed;
    color: #686868;
  }

  .pagination {
    padding: 0.5rem;
    float: right;
  }
`;

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  useEffect(() => {
    setPageSize(10);
  }, [setPageSize]);

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {pageOptions.length !== 0 ? (
        <div className="pagination">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            style={{ background: "#c5d7ed", color: "#686868" }}
          >
            {"<"}
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            style={{ background: "#c5d7ed", color: "#686868" }}
          >
            {">"}
          </button>{" "}
        </div>
      ) : null}
    </>
  );
}

function PaginationTable({ rows, columns }) {
  return (
    <Styles>
      <Table columns={columns} data={rows} />
    </Styles>
  );
}

export default PaginationTable;
