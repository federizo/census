"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supabase } from "@/utils/supabase/config";
import { redirect } from "next/navigation";
import { authCreateClient } from "@/utils/supabase/server";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface FormProps {
  cookieValue: string | null;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    sfx: "",
    age: "",
    address: "",
    gender: "",
  });
  console.log(formData);
  const [error, setError] = useState<string | null>(null);

  const handleLimitAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 3)
      setFormData({ ...formData, age: e.target.value });
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      gender: e.target.value, // Update formData directly with gender value
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
    console.log(formData.age.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.fname ||
      !formData.lname ||
      !formData.age ||
      !formData.address ||
      !formData.gender
    ) {
      setError("Please fill in all the fields correctly");
      return;
    }
    
    const fullname =
      formData.lname +
      ", " +
      formData.fname +
      " " +
      formData.mname +
      " " +
      formData.sfx +
      " ";
      
    try {
      // Insert data into Supabase
      const { data, error } = await supabase
        .from("info")
        .insert([
          {
            name: fullname,
            age: formData.age,
            address: formData.address,
            gender: formData.gender, // Ensure gender is sent correctly
          },
        ])
        .select();

      if (error) {
        console.error("Supabase insert error:", error.message);
        setError("Error submitting form. Please try again.");
      } else {
        console.log("Data submitted successfully:", data);
        setError(null); // Clear error on success
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Unexpected error occurred. Please try again.");
    }
  };
  return (
    <Card className="w-auto h-full">
      <CardHeader>
        <CardTitle> Welcome to WebCensus!</CardTitle>
        <CardDescription>Please fill up the form below.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center gap-4  ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-3">
              <label htmlFor="name" className="w-[100px]">
                Name:
              </label>
              <div className="flex gap-2 ">
                <input
                  required
                  type="text"
                  id="name"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="col-span-2 p-1 rounded focus:outline-none mb-5 "
                  placeholder="Surname"
                />

                <input
                  required
                  type="text"
                  id="name"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  className="col-span-2 p-1 rounded focus:outline-none mb-5 "
                  placeholder="First Name"
                />
                <input
                  type="text"
                  id="name"
                  name="mname"
                  value={formData.mname}
                  onChange={handleChange}
                  className="col-span-2 p-1 rounded focus:outline-none mb-5 "
                  placeholder="Middle Name"
                />
                <input
                  type="text"
                  id="name"
                  name="sfx"
                  value={formData.sfx}
                  onChange={handleChange}
                  className="col-span-2 p-1 rounded focus:outline-none mb-5 w-[100px]"
                  placeholder="Suffix"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <label htmlFor="age" className="w-[100px]">
                Age:
              </label>
              <input
                required
                type="number"
                id="age"
                name="age"
                inputMode="numeric"
                maxLength={3}
                placeholder="Age"
                value={formData.age}
                onChange={handleLimitAgeInput}
                className="col-span-2 p-1 rounded focus:outline-none mb-5 "
              />
            </div>
            <div className="flex gap-3">
              <label htmlFor="address" className="w-[100px]">
                Address:
              </label>
              <input
                required
                type="text"
                id="address"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="col-span-2 p-1 rounded focus:outline-none mb-5"
              />
            </div>
            <div className="flex gap-3">
              <label className="w-[100px]">Gender:</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleGenderChange}
                    checked={formData.gender === "Male"}
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleGenderChange}
                    checked={formData.gender === "Female"}
                    className="mr-2"
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={handleGenderChange}
                    checked={formData.gender === "Other"}
                    className="mr-2"
                  />
                  Other
                </label>
              </div>
            </div>

            <Button onClick={handleSubmit}>Submit</Button>

            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </CardContent>
    </Card>
  );
};
export default Form;
