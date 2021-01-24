import React, { useState, useEffect, forwardRef, useImperativeHandle, } from "react";
import './angrid.css';
import PropTypes from 'prop-types';

const shortText = (text, length, appender) => {
  let textLength = text.length;
  if (textLength > length) return text.substring(0, length) + (appender || '...');
  return text;
}

const AnGrid = forwardRef((props, ref) => {
  console.log(props.rows);
  //=== init
  const formatData = (data, formatted) => {
    if (formatted)
      return [...data.map((r, idx) => ({
        ...r,
        dataRowNumber: ((props.pageNumber || 1) - 1) * (props.pageSize || 9999) + idx + 1
      }))];
    else
      return [...data.map((r, idx) => ({
        data: { ...r },
        hide: r.hide || false,
        index: idx,
        dataRowNumber: ((props.pageNumber || 1) - 1) * (props.pageSize || 9999) + idx + 1
      }))];
  }
  const strings = props.strings || {};
  //=== Hooks
  const [rows, setRows] = useState(props.rows ? formatData(props.rows) : []);
  const [columns, setColumns] = useState(props.columns);
  //=== Recoil
  const _handlePageChange = (newPage) => {
    if (props.onPageChange) props.onPageChange(newPage);
  };

  useEffect(() => {
    setRows(formatData(props.rows));
  }, [props.rows]);

  //=== sort method
  const _hanndleSort = (field) => {
    let col = columns.find(x => x.field === field);
    switch (col.sort) {
      case 1:
        col.sort = 2;
        setColumns([...columns]);
        setRows(r => formatData(r.sort((a, b) => {
          if (a.data[col.field].toString() < b.data[col.field].toString())
            return -1;
          if (a.data[col.field].toString() > b.data[col.field].toString())
            return 1;
          return 0;
        }), true));
        break;
      case 2:
        col.sort = 0;
        setColumns([...columns]);
        setRows(formatData(props.rows));
        break;
      default:
        col.sort = 1;
        setColumns([...columns]);
        setRows(r => formatData(r.sort((a, b) => {
          if (a.data[col.field].toString() < b.data[col.field].toString())
            return 1;
          if (a.data[col.field].toString() > b.data[col.field].toString())
            return -1;
          return 0;
        }), true));
        break;
    }
  }
  useImperativeHandle(ref, () => ({
    addRow: (row, prepend) => {
      row["hide"] = row["hide"] || false;
      if (prepend) setRows((p) => [row, ...p]);
      else setRows((p) => [...p, row]);
    },
    addRows: (newRows, prepend) => {
      if (prepend)
        setRows((p) => [
          ...formatData(newRows),
          ...p,
        ]);
      else
        setRows((p) => [
          ...p,
          ...formatData(newRows),
        ]);
    },
    hideRow: (idx) => {
      let tempRows = [...rows];
      let row = {
        ...tempRows[idx],
        hide: true,
      };
      tempRows[idx] = row;
      setRows((p) => [...tempRows]);
    },
  }));

  return (
    <div className={`angrid ${(props.theme || 'dark')} ${props.className || null} ${rows.length === 0 ? "is-empty" : null}`} style={{ minHeight: props.minHeight || 300, paddingBottom: (props.disabledPaging ? 45 : 0) }}>
      {!props.loading && rows.length === 0 ? (
        props.emptyList ? props.emptyList :
          <p className="empty">
            {strings.notFound || "There Is No Data"}
          </p>

      ) : null}
      {props.loading ?
        <div className='loader'>
          <div className="spinner"></div>
        </div> : null}
      {rows.length !== 0 ? (
        <>
          <table>
            <thead className='thead'>
              <tr>
                <th
                  style={{ width: 25 }}
                  title={(strings.indexTitle || "Row Number")}
                >#</th>
                {columns.map((c, idx) => (
                  <th
                    style={{ width: c.width || 85, cursor: c.sortable ? 'pointer' : 'auto' }}
                    title={c.description}
                    key={idx}
                    {...(c.sortable ? { onClick: () => _hanndleSort(c.field) } : {})}
                  >
                    { shortText(c.headerName)}
                    {c.sortable ? <span className='sort-icon'>↑↓</span> : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className='tbody'>
              {rows
                .filter((x) => !x.hide)
                .map((r, i) => (
                  <tr
                    key={i}
                    className={props.rowClass ? props.rowClass(r) : null}
                  >
                    {props.showRowNumber ? <td>
                      <span>{r.dataRowNumber}</span>
                    </td> : null}

                    {columns.map((c, j) => (
                      <td className={c.cellClass ? c.cellClass(r) : ""} key={j}>
                        {c.renderCell ? c.renderCell(r) : <span>{r.data[c.field]}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
          {!props.disabledPaging ? <div className='angrid-pagination'>
            <span>{strings.pageNumber || "Page Number"}</span>
            <button
              onClick={() => _handlePageChange(props.pageNumber - 1)}
              disabled={props.pageNumber === 1}
            >
              {"‹"}
            </button>
            <strong>{props.pageNumber}</strong>
            <button
              onClick={() => _handlePageChange(props.pageNumber + 1)}
              disabled={props.pageNumber * props.pageSize > props.totalCount}
            >
              {"›"}
            </button>
          </div> : null}
        </>
      ) : null
      }
    </div >
  );
});

AnGrid.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  onPageChange: PropTypes.func,
  loading: PropTypes.bool,
  showRowNumber: PropTypes.bool,
  totalCount: PropTypes.number,
  paging: PropTypes.bool,
}
export default AnGrid;
