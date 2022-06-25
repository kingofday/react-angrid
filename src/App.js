import "./App.css";
import React, { useState, useEffect } from "react";
import AnGrid from './lib/index';
//import AnGrid from 'react-angrid';
import data from './data'

function App() {
  console.log("app")
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState([]);
  const [filter, setFilter] = useState({
    pageSize: 4,
    pageNumber: 1,
  });
  const [totalCount, setTotalCount] = useState(3);

  const _delete = (data) => {
    setRows(rows.filter(x => x.userId !== data.userId))
  }
  const columns = [
    {
      field: "userId",
      headerName: "User Id",
      description: "user id that is unique",
      width: 50,
    },
    {
      field: "fullName",
      headerName: "Fullname",
      description: "full name of user",
      width: 100,
      sortable: true
    },
    {
      field: "age",
      headerName: "Age",
      description: "age of user",
      width: 50,
    },
    {
      field: "delete",
      headerName: "delete(component cell)",
      description: "delete user",
      width: 50,
      renderCell: (row) => {
        return row.data.userId === 1 ? "-" : <button onClick={() => _delete(row.data)}>X</button>
      }
    }
  ];
  let active = true;
  //=== events
  const _fetchData = async () => {
    console.log('=== fetch data');
    if (!active) return;
    //mock api, you can call your api then set data to table like commented line below
    return new Promise((resolve) => {
      setLoading(true);
      setTimeout(() => {
        if (filter.pageNumber === 1)
          setRows(data.filter(x => x.userId < 5));// Set Rows
        else
          setRows(data.filter(x => x.userId >= 5));// SetRows
        setTotalCount(7);//=== set total page size for pagination part
        resolve();
        setLoading(false);
      }, 2000);
    });
  }

  useEffect(() => {
    _fetchData();
    return () => {
      active = false;
    }
  }, [filter]);
  const _handlePageChange = (newPage) => {
    setFilter((p) => ({ ...p, pageNumber: newPage }));
  }
  return (
    <div className="app">
      <h1>an grid</h1>
      <p>simple data grid with paging, sorting and rtl support</p>
      <hr />
      <h2>minimal feature</h2>
      <AnGrid
        columns={columns}
        rows={rows}
        showRowNumber={true}
        disabledPaging={true}
      />
      <h2>full feature</h2>
      <AnGrid
        loading={loading}
        columns={columns}
        rows={rows}
        showRowNumber={true}
        pageSize={filter.pageSize}
        pageNumber={filter.pageNumber}
        totalCount={totalCount}
        onPageChange={_handlePageChange}
        theme="dark"
        minHeight={300}
        emptyList={<strong>There Is No Info</strong>}
      />
      <h2>custome pagination</h2>
      <AnGrid
        loading={loading}
        columns={columns}
        rows={rows}
        showRowNumber={true}
        pageSize={filter.pageSize}
        pageNumber={filter.pageNumber}
        totalCount={totalCount}
        onPageChange={_handlePageChange}
        theme="dark"
        minHeight={300}
        emptyList={<strong>There Is No Info</strong>}
        customPagination={<div>custom</div>}
      />
    </div>
  );
}

export default App;
