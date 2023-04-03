import React from "react";
import { ChangeEvent } from "react";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

const PlacesAutocomplete = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: any) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
      });
    };

  const renderSuggestions = () => {
    return (
      <ul
        tabIndex={0}
        className="drop-shadow-md dropdown-content menu p-4 shadow bg-base-100 rounded-box absolute"
      >
        {data.map((suggestion) => {
          const {
            place_id,
            structured_formatting: { main_text, secondary_text },
          } = suggestion;

          return (
            <li key={place_id} className="items-start max-w-xs" onClick={handleSelect(suggestion)}>
              <span className="max-w-xs">
                {main_text},{secondary_text}
              </span>
              {/* <strong>{main_text}</strong> <small>{secondary_text}</small> */}
            </li>
          );
        })}
      </ul>
      // <ul tabIndex={0} className="absolute bg-primary-content">
      //   {data.map((suggestion) => {
      //     const {
      //       place_id,
      //       structured_formatting: { main_text, secondary_text },
      //     } = suggestion;

      //     return (
      //       <li key={place_id} className="truncate max-w-xs" onClick={handleSelect(suggestion)}>
      //         <strong>{main_text}</strong> <small>{secondary_text}</small>
      //       </li>
      //     );
      //   })}
      // </ul>
    );
  };
  // data.map((suggestion) => {
  //   const {
  //     place_id,
  //     structured_formatting: { main_text, secondary_text },
  //   } = suggestion;

  //   return (
  //     <option key={place_id}
  //     className="w-full max-w-xs absolute" onClick={handleSelect(suggestion)}>
  //       <strong>{main_text}</strong> <small>{secondary_text}</small>
  //     </option>
  //   );
  // });

  return (
    <div ref={ref}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        className="input input-bordered w-full max-w-xs"
        placeholder="Type here"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};

const AddressInput = () => {
  return (
    <div className="form-control">
      <label tabIndex={0} className="label">
        <span className="label-text">Near</span>
      </label>
      {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
      <PlacesAutocomplete />
    </div>
  );
};

export default AddressInput;
