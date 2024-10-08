"use client";
import React, { useState } from "react";

import { supabase } from "@/utils/supabase/config";

interface FormProps {
  cookieValue: string | null;
}

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !address) {
      setError("Please fill in all the fields correctly");
      return;
    }

    const { data, error } = await supabase
      .from("info")
      .insert([{ name: name, age: age, address: address }])
      .select();

    if (error) console.log(error);
    setError("Please fill in all the fields correctly");
    if (data) console.log(data);
    setError(null);
  };

  return (
    <div className="page create">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};
export default Form;
