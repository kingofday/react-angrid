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
        const { pageNumber, pageSize } = filter
        const start = (pageNumber -1) * pageSize
        const end = (pageNumber) * pageSize
        setRows(data.slice(start, end));// SetRows
        setTotalCount(data.length);//=== set total page size for pagination part
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
  const randomChangePageSize = ()=>{
    setFilter((p) => ({ ...p, pageSize: Math.floor(Math.random() * 5 + 5) }));
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
      <h2>Without row number</h2>
      <AnGrid
        loading={loading}
        columns={columns}
        rows={rows}
        showRowNumber={false}
        pageSize={filter.pageSize}
        pageNumber={filter.pageNumber}
        totalCount={totalCount}
        onPageChange={_handlePageChange}
        theme="dark"
        minHeight={300}
        emptyList={<strong>There Is No Info</strong>}
      />

      <h2>with dynamic pageSize</h2>
      <div onClick={randomChangePageSize}>click here to change page size randolmy</div>
      <div>current pagesize {filter.pageSize}</div>
      <AnGrid
        loading={loading}
        columns={columns}
        rows={rows}
        showRowNumber={false}
        pageSize={filter.pageSize}
        pageNumber={filter.pageNumber}
        totalCount={totalCount}
        onPageChange={_handlePageChange}
        theme="dark"
        minHeight={300}
      />
    </div>

  );
}

export default App;
