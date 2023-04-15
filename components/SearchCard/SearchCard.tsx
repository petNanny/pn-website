import React from "react";
import ServiceInput from "./ServiceInput/ServiceInput";
import AddressInput from "./AddressInput/AddressInput";
import DateInput from "./DateInput/DateInput";
import { useFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { useState, useCallback } from "react";

export interface SearchFormValues {
  location: string;
  latitude: number | undefined;
  longitude: number | undefined;
  petService: string;
  startDate: string;
  endDate: string;
}

const searchFilterSchema = Yup.object().shape({
  location: Yup.string(),
  petService: Yup.string(),
  startDate: Yup.string(),
  endDate: Yup.string(),
});

const SearchCard = () => {
  const [petService, setPetService] = useState("Dog boarding");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [location, setlocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const changePetService = (value: string) => {
    setPetService(value);
  };

  const changeLatAndLon = (Lat: number, Lon: number) => {
    setLatitude(Lat);
    setLongitude(Lon);
  };

  const changeLocation = (Location: string) => {
    setlocation(Location);
  };

  const changeSelectedStartAndEndDate = (startDate: string, endDate: string) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const formik: FormikProps<SearchFormValues> = useFormik<SearchFormValues>({
    initialValues: {
      location: "",
      latitude: 0,
      longitude: 0,
      petService: "Dog boarding",
      startDate: "",
      endDate: "",
    },
    validationSchema: searchFilterSchema,
    onSubmit: (values) => {
      values.petService = petService;
      values.latitude = latitude;
      values.longitude = longitude;
      values.location = location;
      values.startDate = startDate;
      values.endDate = endDate;
      // const openUrl = `http://localhost:3000/?petService=${values.petService}&latitude=${values.latitude}&longitude=${values.longitude}&location=${values.location}&startDate=${values.startDate}&endDate=${values.endDate}`;
      const openUrl = `${process.env.NEXT_PUBLIC_BOARDING_PAGE_URL}?petService=${values.petService}&latitude=${values.latitude}&longitude=${values.longitude}&location=${values.location}&startDate=${values.startDate}&endDate=${values.endDate}`;
      openInNewTab(openUrl);
    },
  });

  return (
    <div className="card w-fit shadow-2xl bg-base-100 mx-auto">
      <div className="card-body">
        <form
          className="grid grid-cols-2 gap-4 items-end form-control"
          onSubmit={formik.handleSubmit}
        >
          <ServiceInput changePetService={changePetService} />
          <AddressInput changeLatAndLon={changeLatAndLon} changeLocation={changeLocation} />
          <DateInput changeSelectedStartAndEndDate={changeSelectedStartAndEndDate} />
          <button type="submit" className="btn btn-accent normal-case border-2 border-slate-300">
            Search now
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchCard;
