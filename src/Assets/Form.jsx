import React from "react";
import { useForm } from "react-hook-form";

export default function Form(props) {
  const { register, handleSubmit, reset } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        props.onsubmit(data);
        reset();
      })}
      style={{ border: "2px solid black", padding: "10px" }}
    >
      <label
        htmlFor="City"
        className="card-text"
        style={{ margin: "5px", fontWeight: "bold" }}
      >
        Enter a city :
      </label>
      <input
        type="text"
        {...register("city")}
        style={{ margin: "5px" }}
        placeholder="City"
      />
      <input
        type="submit"
        className="btn btn-info"
        value="Submit"
        style={{ margin: "5px" }}
      />
    </form>
  );
}

// import { Country, State, City } from "country-state-city";
// import Select from "react-select";
// import { useEffect, useState } from "react";

// export default function App() {
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [selectedState, setSelectedState] = useState(null);
//   const [selectedCity, setSelectedCity] = useState(null);
//   useEffect(() => {
//     // console.log(selectedCountry);
//     // console.log(selectedCountry?.isoCode);
//     // console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
//   }, [selectedCountry]);
//   return (
//     <div className="App">
//       <Select
//         options={Country.getAllCountries()}
//         getOptionLabel={(options) => {
//           return options["name"];
//         }}
//         getOptionValue={(options) => {
//           return options["name"];
//         }}
//         value={selectedCountry}
//         onChange={(item) => {
//           setSelectedCountry(item);
//         }}
//       />
//       <Select
//         options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
//         getOptionLabel={(options) => {
//           return options["name"];
//         }}
//         getOptionValue={(options) => {
//           return options["name"];
//         }}
//         value={selectedState}
//         onChange={(item) => {
//           setSelectedState(item);
//         }}
//       />
//       <Select
//         options={City.getCitiesOfState(
//           selectedState?.countryCode,
//           selectedState?.isoCode
//         )}
//         getOptionLabel={(options) => {
//           return options["name"];
//         }}
//         getOptionValue={(options) => {
//           return options["name"];
//         }}
//         value={selectedCity}
//         onChange={(item) => {
//           setSelectedCity(item);
//         }}
//       />
//     </div>
//   );
// }
