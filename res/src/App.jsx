import "./App.css";
import countryData from "./resources/countryData.json";
import { useState } from "react";

console.log(countryData);

function App() {
  let [value, changeValue] = useState("");
  let [related, changeRelated] = useState([]);
  let [show, changeShow] = useState(true);

  let check = (val) => {
    let filteredCountries = countryData.filter((ele) =>
      ele.name.toLowerCase().startsWith(val.toLowerCase())
    );
    val === ""
      ? changeRelated([])
      : changeRelated(filteredCountries.map((ele) => ele.name));
  };
  let focus = (key) => {
    if (key.code == "Escape") {
      key.target.blur();
      changeShow(false);
    }
  };

  console.log(related);

  return (
    <>
      <h1>Search</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          changeValue(e.target.value);
          check(e.target.value);
          changeShow(true);
        }}
        onKeyDown={(key) => {
          focus(key);
        }}
      />
      <button>Search</button>
      <div style={show ? { visibility: "visible" } : { visibility: "hidden" }}>
        {related.map((name) => (
          <p>{name}</p>
        ))}
      </div>
    </>
  );
}

export default App;