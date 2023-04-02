import React ,{ useState, useEffect } from "react";
import "./App.css";

import Post from "./components/Post/Post";
import Search from "./components/Search/Search";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";


const App = () => {
  
  let api = `https://vinay10082.github.io/gun_detail_api/guns_data.json`;

  let [fetchedData, updateFetchedData] = useState([]);
  let {data} = fetchedData;

  useEffect(() => {
    (async function () {
      (async function () {
        let guns = await fetch(api).then((res) => res.json());
        // console.log(data);
        updateFetchedData(guns);
      })();
    })();
  }, [api]);

  return (
<div className="App">
  <h1 className="text-center mb-3">Guns Display</h1>
  <div className="container">
  <div className="row">
    Filter component will be placed here
    <div className="col-lg-8 col-12">
      <div className="row">
        {/* we map cards on page */}
        <Post data = {data} />
      </div>
    </div>
  </div>
  </div>
</div>
  );
};

export default App;