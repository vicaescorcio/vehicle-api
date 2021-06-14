import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import Table from './Table'
import axios from 'axios';
import './App.css';
import styled from 'styled-components'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`



function getColumns(obj) {
  const columns = Object.keys(obj).map((key) => {
    return { Header: key, accessor: key}
  });

  return columns;
}

function App() {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get('/api/vehicles');
      const resData = await res.data;
      setData(resData.vehicles);
      setColumns(getColumns(resData.vehicles[0]));
    })();
  }, []);


  return (
    <div className="App">
      <div id='container' class='center'>
        <Styles>
          <Table columns={columns} data={data} />
        </Styles>
      </div>
    </div>
  );
}

export default App;
