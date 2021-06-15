import React, { useState, useEffect } from "react";
import Table from "./Table";
import axios from "axios";
import GitHubButton from "react-github-btn";
import "./App.css";

function getColumns(obj) {
  const columns = Object.keys(obj).map((key) => {
    return { Header: key, accessor: key };
  });

  return columns;
}

function App() {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/vehicles");
      const resData = await res.data;
      const vehicles = resData.vehicles.map((vehicle) => {
        vehicle['moreInfo'] = JSON.stringify(vehicle['moreInfo']);
        return vehicle;
      });
      setData(vehicles);
      setColumns(getColumns(resData.vehicles[0]));
    })();
  }, []);

  return (
    <>
      <main>
        <nav class="grey darken-2">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo center">
              {" "}
              Vehicle API{" "}
            </a>
          </div>
        </nav>
        <div class="container">
          <div class="z-depth-5" id="vehicles-table">
            <Table columns={columns} data={data} />
          </div>
        </div>
        <footer class="page-footer grey darken-2">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Vehicle API</h5>
                <p class="grey-text text-lighten-4">
                  Data based on <a href="http://fipeapi.appspot.com/"> FIPEAPI</a>.
                </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li>
                    <GitHubButton
                      href="https://github.com/vicaescorcio/vehicle-api"
                      data-size="large"
                      aria-label="Watch ntkme/github-buttons on GitHub"
                    >
                      Watch
                    </GitHubButton>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright"></div>
        </footer>
      </main>
    </>
  );
}

export default App;
