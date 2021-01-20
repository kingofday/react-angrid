import React, { useState, useEffect, forwardRef, useImperativeHandle, } from "react";
import './angrid.css';
export const shortText = (text, length, appender) => {
  let textLength = text.length;
  if (textLength > length) return text.substring(0, length) + (appender || '...');
  return text;
}


const Table = (props, ref) => {
  console.log(props);
  //=== init
  let { columns } = props;
  const strings = props.strings || {};
  if (props.showRowNumber) {
    columns = [
      {
        field: "dataRowNumber",
        headerName: "#",
        description: strings.index || "Row Number",
        width: 20,
      },
      ...columns,
    ];
  }
  //=== Hooks
  const [rows, setRows] = useState([]);
  //=== Recoil
  useEffect(() => { }, []);
  const _handlePageChange = (newPage) => {
    if (props.onPageChange) props.onPageChange(newPage);
  };
  useImperativeHandle(ref, () => ({
    addRow: (row, prepend) => {
      row["hide"] = row["hide"] || false;
      if (prepend) setRows((p) => [row, ...p]);
      else setRows((p) => [...p, row]);
    },
    addRows: (newRows, prepend) => {
      if (prepend)
        setRows((p) => [
          ...newRows.map((r, idx) => ({
            ...r,
            hide: r.hide || false,
            tableIndex: idx,
            dataRowNumber: (props.pageNumber - 1) * props.pageSize + idx + 1,
          })),
          ...p,
        ]);
      else
        setRows((p) => [
          ...p,
          ...newRows.map((r, idx) => ({
            ...r,
            hide: r.hide || false,
            tableIndex: idx,
            dataRowNumber: (props.pageNumber - 1) * props.pageSize + idx + 1,
          })),
        ]);
    },
    replaceRows: (newRows) => {
      setRows([
        ...newRows.map((r, idx) => ({
          ...r,
          hide: r.hide || false,
          tableIndex: idx,
          dataRowNumber: (props.pageNumber - 1) * props.pageSize + idx + 1,
        })),
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
    <div className={`angrid ${(props.theme || 'dark')} ${props.className || null} ${rows.length === 0 ? "is-empty" : null}`}>
      {!props.loading && rows.length === 0 ? (
        props.emptyList ? <props.emptyList /> :
          <p className="empty">
            {strings.notFound || "There Is No Data"}
          </p>

      ) : null}
      {props.loading ? (
        <div className='loader'>
          <div className="spinner"></div>
        </div>
      ) : null}
      {rows.length !== 0 ? (
        <>
          <table>
            <thead className='thead'>
              <tr>
                {columns.map((c, idx) => (
                  <th
                    style={{ width: c.width || 85 }}
                    title={c.description}
                    key={idx}
                  >
                    {shortText(c.headerName)}
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
                    {columns.map((c, j) => (
                      <td className={c.cellClass ? c.cellClass(r) : ""} key={j}>
                        {c.renderCell ? (
                          c.renderCell(r)
                        ) : (
                            <span>{r[c.field]}</span>
                          )}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
          <div className={`angrid-pagination`}>
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
          </div>
        </>
      ) : null}
    </div>
  );
};
export default forwardRef(Table);
