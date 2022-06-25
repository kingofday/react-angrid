function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import './angrid.css';
import PropTypes from 'prop-types';
const AnGrid = /*#__PURE__*/forwardRef((props, ref) => {
  //=== init
  const formatData = (data, formatted) => {
    if (formatted) return [...data.map((r, idx) => ({ ...r,
      dataRowNumber: ((props.pageNumber || 1) - 1) * (props.pageSize || 9999) + idx + 1
    }))];else return [...data.map((r, idx) => ({
      data: { ...r
      },
      hide: r.hide || false,
      index: idx,
      dataRowNumber: ((props.pageNumber || 1) - 1) * (props.pageSize || 9999) + idx + 1
    }))];
  };

  const strings = props.strings || {}; //=== Hooks

  const [rows, setRows] = useState(props.rows ? formatData(props.rows) : []);
  const [columns, setColumns] = useState(props.columns); //=== Recoil

  const _handlePageChange = newPage => {
    if (props.onPageChange) props.onPageChange(newPage);
  };

  useEffect(() => {
    setRows(formatData(props.rows));
  }, [props.rows]);
  useEffect(() => {
    setColumns(props.columns);
  }, [props.columns]); //=== sort method

  const _hanndleSort = field => {
    let col = columns.find(x => x.field === field);

    switch (col.sort) {
      case 1:
        col.sort = 2;
        setColumns([...columns]);
        setRows(r => formatData(r.sort((a, b) => {
          if (a.data[col.field].toString() < b.data[col.field].toString()) return -1;
          if (a.data[col.field].toString() > b.data[col.field].toString()) return 1;
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
          if (a.data[col.field].toString() < b.data[col.field].toString()) return 1;
          if (a.data[col.field].toString() > b.data[col.field].toString()) return -1;
          return 0;
        }), true));
        break;
    }
  };

  useImperativeHandle(ref, () => ({
    addRow: (row, prepend) => {
      row["hide"] = row["hide"] || false;
      if (prepend) setRows(p => [row, ...p]);else setRows(p => [...p, row]);
    },
    addRows: (newRows, prepend) => {
      if (prepend) setRows(p => [...formatData(newRows), ...p]);else setRows(p => [...p, ...formatData(newRows)]);
    },
    hideRow: idx => {
      let tempRows = [...rows];
      let row = { ...tempRows[idx],
        hide: true
      };
      tempRows[idx] = row;
      setRows(p => [...tempRows]);
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: `angrid ${props.theme || 'dark'} ${props.className || null} ${rows.length === 0 ? "is-empty" : null}`,
    style: {
      minHeight: props.minHeight || 300,
      paddingBottom: props.disabledPaging ? 0 : 45
    }
  }, !props.loading && rows.length === 0 ? props.emptyList ? props.emptyList : /*#__PURE__*/React.createElement("p", {
    className: "empty"
  }, strings.notFound || "There Is No Data") : null, props.loading ? /*#__PURE__*/React.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/React.createElement("div", {
    className: "spinner"
  })) : null, rows.length !== 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", {
    className: "thead"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 25
    },
    title: strings.indexTitle || "Row Number"
  }, "#"), columns.map((c, idx) => /*#__PURE__*/React.createElement("th", _extends({
    style: {
      width: c.width || 85,
      cursor: c.sortable ? 'pointer' : 'auto'
    },
    title: c.description,
    key: idx
  }, c.sortable ? {
    onClick: () => _hanndleSort(c.field)
  } : {}), c.headerName, c.sortable ? /*#__PURE__*/React.createElement("span", {
    className: "sort-icon"
  }, "\u2191\u2193") : null)))), /*#__PURE__*/React.createElement("tbody", {
    className: "tbody"
  }, rows.filter(x => !x.hide).map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    className: props.rowClass ? props.rowClass(r) : null
  }, props.showRowNumber ? /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", null, r.dataRowNumber)) : null, columns.map((c, j) => /*#__PURE__*/React.createElement("td", {
    className: c.cellClass ? c.cellClass(r) : "",
    key: j
  }, c.renderCell ? c.renderCell(r) : /*#__PURE__*/React.createElement("span", null, r.data[c.field]))))))), !props.disabledPaging ? props.customPagination || /*#__PURE__*/React.createElement("div", {
    className: "angrid-pagination"
  }, /*#__PURE__*/React.createElement("span", null, strings.pageNumber || "Page Number"), /*#__PURE__*/React.createElement("button", {
    onClick: () => _handlePageChange(props.pageNumber - 1),
    disabled: props.pageNumber === 1
  }, "‹"), /*#__PURE__*/React.createElement("strong", null, props.pageNumber), /*#__PURE__*/React.createElement("button", {
    onClick: () => _handlePageChange(props.pageNumber + 1),
    disabled: props.pageNumber * props.pageSize > props.totalCount
  }, "›")) : null) : null);
});
AnGrid.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  onPageChange: PropTypes.func,
  loading: PropTypes.bool,
  showRowNumber: PropTypes.bool,
  totalCount: PropTypes.number,
  paging: PropTypes.bool
};
export default AnGrid;