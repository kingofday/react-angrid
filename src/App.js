import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import AnGrid from './component/AnGrid'

function App() {
  const table = useRef(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState({
    pageSize: 4,
    pageNumber: 1,
  });
  const [totalCount, setTotalCount] = useState(3);
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
    },
    {
      field: "age",
      headerName: "Age",
      description: "age of user",
      width: 50,
    }
  ];
  let active = true;
  //=== events
  const _fetchData = async () => {
    if (!active) return;
    //mock api, you can call your api then set data to table like commented line below
    return new Promise((resolve) => {
      setTimeout(() => {
        table.current.replaceRows([{
          userId: 1,
          fullName: 'mohammad karimi',
          age: 34
        }, {
          userId: 2,
          fullName: 'shahrooz bazrafshan',
          age: 31
        }, {
          userId: 3,
          fullName: 'mehran norouzi',
          age: 34
        },
        {
          userId: 4,
          fullName: 'mehdi emrani',
          age: 35
        },
        {
          userId: 5,
          fullName: 'navid montazeripoor',
          age: 30
        }]);//=== set rows with new rows
        resolve();
      }, 1000);
    });
  }

  useEffect(() => {
    _fetchData();
    return () => {
      active = false;
    }
  }, [filter]);
  const _handlePageChange = ()=>{

  }
  return (
    <div className="App">
      <h1>an grid</h1>
      <p>simple data grid with rtl and paging support</p>
      <hr />
      <h2>minimal feature</h2>
      <h2>full feature</h2>
      <AnGrid
        ref={table}
        loading={loading}
        columns={columns}
        showRowNumber={true}
        pageSize={filter.pageSize}
        pageNumber={filter.pageNumber}
        totalCount={totalCount}
        onPageChange={_handlePageChange}
        theme="dark"
      />
    </div>
  );
}

export default App;
