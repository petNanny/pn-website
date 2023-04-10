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
  selectedDate: Date[]| undefined;
  noDogs: boolean;
  noChildren: boolean;
  fencedBackyard: boolean;
  smallDog: number;
  mediumDog: number;
  largeDog: number;
  giantDog: number;
  cat: number;
  smallAnimal: number;
  totalPets: number;
}

const searchFilterSchema = Yup.object().shape({
  location: Yup.string(),
  petService: Yup.string(),
  selectedDate: Yup.array(),
  noDogs: Yup.boolean(),
  noChildren: Yup.boolean(),
  fencedBackyard: Yup.boolean(),
  smallDog: Yup.number(),
  mediumDog: Yup.number(),
  largeDog: Yup.number(),
  giantDog: Yup.number(),
  cat: Yup.number(),
  smallAnimal: Yup.number(),
  totalPets: Yup.number(),
});

const SearchCard = () => {
  const [petService,setPetService] = useState("Dog boarding");
  const [latitude,setLatitude] = useState(0);
  const [longitude,setLongitude] = useState(0);
  const [location,setlocation] = useState("");
  const [selectedDate,setSelectedDate] = useState<Date[]|undefined>(undefined);

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

  const changeSelectedDate = (date: Date[] | undefined) => {
    setSelectedDate(date);
  };

  const formik: FormikProps<SearchFormValues> = useFormik<SearchFormValues>({
    initialValues: {
      location: "",
      latitude: 0,
      longitude: 0,
      petService: "Dog boarding",
      selectedDate: [],
      noDogs: false,
      noChildren: false,
      fencedBackyard: false,
      smallDog: 0,
      mediumDog: 0,
      largeDog: 0,
      giantDog: 0,
      cat: 0,
      smallAnimal: 0,
      totalPets: 0,
    },
    validationSchema: searchFilterSchema,
    onSubmit: (values) => {
      values.petService = petService;
      values.latitude = latitude;
      values.longitude = longitude;
      values.location = location;
      values.selectedDate = selectedDate;
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="card w-fit shadow-2xl bg-base-100 mx-auto">
      <div className="card-body" >
        <form className="grid grid-cols-2 gap-4 items-end form-control" onSubmit={formik.handleSubmit}>
          <ServiceInput changePetService={changePetService}/>
          <AddressInput changeLatAndLon={changeLatAndLon} changeLocation= {changeLocation}/>
          <DateInput changeSelectedDate={changeSelectedDate}/>
          <button type="submit" className="btn btn-accent normal-case border-2 border-slate-300">Search now</button>
        </form>
      </div>
    </div>
  );
};

export default SearchCard;
