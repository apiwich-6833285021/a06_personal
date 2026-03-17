"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  const [venue, setVenue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log("Booking submitted:", Object.fromEntries(formData));
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Book a Venue
      </h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <TextField
            variant="standard"
            name="Name-Lastname"
            label="Name-Lastname"
            fullWidth
          />
          <TextField
            variant="standard"
            name="Contact-Number"
            label="Contact-Number"
            fullWidth
          />
          <FormControl variant="standard" fullWidth>
            <InputLabel id="venue-label">Venue</InputLabel>
            <Select
              labelId="venue-label"
              id="venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              name="venue"
            >
              <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
              <MenuItem value="Spark">Spark Space</MenuItem>
              <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>
          </FormControl>
          <DateReserve />
          <Button
            type="submit"
            variant="contained"
            name="Book Venue"
          >
            Book Venue
          </Button>
        </form>
      </div>
    </main>
  );
}
