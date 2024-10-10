"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supabase } from "@/utils/supabase/config";

interface FormProps {
  cookieValue: string | null;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleLimitAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 3)
      setFormData({ ...formData, age: e.target.value });
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
    if (!formData.name || !formData.age || !formData.address) {
      setError("Please fill in all the fields correctly");
      return;
    }

    const { data, error } = await supabase
      .from("info")
      .insert([
        { name: formData.name, age: formData.age, address: formData.address },
      ])
      .select();

    if (error) console.log(error);
    setError("Please fill in all the fields correctly");
    if (data) console.log(data);
    setError(null);
  };

  return (
    <Card className="w-[350px] h-full">
      <CardHeader>
        <CardTitle> Welcome to WebCensus!</CardTitle>
        <CardDescription>Please fill up the form below.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center gap-4  ">
          <div className="flex flex-col space-y-1.5 mb">
            <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-4">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="col-span-2 p-1 text-white rounded focus:outline-none mb-5 "
                placeholder="Surname/First Name/M.I"
              />
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                inputMode="numeric"
                maxLength={3}
                value={formData.age}
                onChange={handleChange}
                className="col-span-2 p-1 text-white rounded focus:outline-none mb-5 "
              />
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="col-span-2 p-1 text-white rounded focus:outline-none mb-5"
              />
              <button
                onClick={handleSubmit}
                className="col-span-3 bg-gray-900 outline-double-gray-500 text-white p-2 rounded hover:bg-gray-700 mt-4 mb-4"
              >
                Submit
              </button>

              {error && <p className="error">{error}</p>}
            </form>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default Form;
