import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

const DateTimePick = ({ fieldName }) => {
  const [value, setValue] = useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props) => (
          <TextField
            {...props}
            className="w-full md:w-[calc(50%-5px)] min-w-[190px] mb-[5px] sm:mb-0"
          />
        )}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        InputProps={{
          style: {
            backgroundColor: "#ffffff",
            borderRadius: "40px",
            height: 50,
            marginBottom: 5
          },
          name: fieldName,
        }}
      />
    </LocalizationProvider>
  );
};

export default DateTimePick;
