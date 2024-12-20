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
import { useRouter } from "next/navigation";
import { authCreateClient } from "@/utils/supabase/server";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { insertDataForm } from "@/components/api/api";

const Form: React.FC = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    sfx: "",
    age: "",
    address: "",
    gender: "",
    familymember: "",
    birthday: "",
    civilstatus: "",
    occupation: "",
    education: "",
    religion: "",
    sector: "",
    pwd: "",
    lactating: "",
    housenumber: "",
    nooffamilymember: "",
    contactnofamily: "",
  });

  console.log(formData);
  const [error, setError] = useState<string | null>(null);

  const handleLimitAgeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 3)
      setFormData({ ...formData, age: e.target.value });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value.charAt(0).toUpperCase() + value.slice(1));

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
    console.log(formData.age.length);
  };

 const Submit = async (e: React.FormEvent) => {
      e.preventDefault();
    };
 
  return (
    <div className="w-full h-full flex items-center justify-center px-[5rem] ">
      <Card className=" overflow-hidden flex flex-col items-center md:container md:mx-auto ">
        <CardHeader>
          <CardTitle> Welcome to WebCensus!</CardTitle>
          <CardDescription>Please fill up the form below.</CardDescription>
        </CardHeader>
        <CardTitle className="flex w-full items-center mb-5 ml-5">
          Family Profile
        </CardTitle>
        <CardContent>
          <div className="flex xl:w-full items-center gap-4  ">
            <form onSubmit={Submit} className="flex flex-col gap-4">
              <div className="flex gap-3 items-center w-full">
                <label className="w-[100px]">No. of Family Members</label>
                <input
                  type="number"
                  id="numberoffamilymember"
                  name="numberoffamilymember"
                  inputMode="numeric"
                  maxLength={2}
                  placeholder="No. of Family Members"
                  value={formData.nooffamilymember}
                  onChange={handleChange}
                  className="col-span-2 p-1 rounded focus:outline-none  "
                />
                <label className="w-[100px]">Contact number of Family</label>
                <input
                  type="number"
                  id="numberoffamily"
                  name="numberoffamily"
                  inputMode="numeric"
                  maxLength={11}
                  placeholder="No. of Family"
                  value={formData.contactnofamily}
                  onChange={handleChange}
                  className="col-span-2 p-1 rounded focus:outline-none"
                />
                <label className="w-[80px]">House no.</label>
                <input
                  type="number"
                  id="housenumber"
                  name="housenumber"
                  inputMode="numeric"
                  maxLength={3}
                  placeholder="House no."
                  value={formData.housenumber}
                  onChange={handleChange}
                  className="col-span-2 p-1 rounded focus:outline-none"
                />
                <label className="w-[50px]">BC no.</label>
                <input
                  type="number"
                  id="bcno."
                  name="bcno."
                  inputMode="numeric"
                  maxLength={3}
                  placeholder="BC no."
                  value={formData.age}
                  onChange={handleLimitAgeInput}
                  className="col-span-2 p-1 rounded focus:outline-none "
                />
                <label className="w-[50px]">Street</label>
                <input
                  type="text"
                  id="name"
                  name="sfx"
                  value={formData.sfx}
                  onChange={handleChange}
                  className="col-span-2 p-1 rounded focus:outline-none w-[100px]"
                />
                <label className="w-[80px]">Subdivision</label>
                <input
                  type="text"
                  id="name"
                  name="sfx"
                  value={formData.sfx}
                  onChange={handleChange}
                  className="col-span-2 p-1 rounded focus:outline-none w-[100px]"
                />
                <label className="w-[30px]">KM</label>
                <input
                  type="number"
                  id="km"
                  name="km"
                  inputMode="numeric"
                  maxLength={3}
                  placeholder="KM"
                  value={formData.age}
                  onChange={handleChange}
                  className="col-span-2 p-1 rounded focus:outline-none "
                />
              </div>
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
                <label htmlFor="familymember" className="w-[100px]">
                  Family Member:
                </label>
                <input
                  required
                  type="text"
                  id="familymember"
                  name="familymember"
                  placeholder="Family Member"
                  value={formData.familymember}
                  onChange={handleChange}
                  className="col-span-2 p-1 rounded focus:outline-none mb-5 "
                />
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
                <label className="w-[100px]">Gender:</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={handleChange}
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
                      onChange={handleChange}
                      checked={formData.gender === "Female"}
                      className="mr-2"
                    />
                    Female
                  </label>
                  <label className="flex items-center">
                    <input
                      required
                      type="text"
                      id="name"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="mr-2 "
                      placeholder="Other"
                    />
                  </label>
                </div>
              </div>
              <div className="flex gap-3">
                <label className="w-[100px]">Civil Status:</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="civilstatus"
                      value="S"
                      onChange={handleChange}
                      checked={formData.civilstatus === "S"}
                      className="mr-2"
                    />
                    S
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="civilstatus"
                      value="M"
                      onChange={handleChange}
                      checked={formData.civilstatus === "M"}
                      className="mr-2"
                    />
                    M
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="civilstatus"
                      value="LI"
                      onChange={handleChange}
                      checked={formData.civilstatus === "LI"}
                      className="mr-2"
                    />
                    LI
                  </label>
                </div>
              </div>
              <div className="flex gap-3">
                <label className="w-[100px]">Occupation:</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="occupation"
                      value="GE"
                      onChange={handleChange}
                      checked={formData.occupation === "GE"}
                      className="mr-2"
                    />
                    GE
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="occupation"
                      value="PE"
                      onChange={handleChange}
                      checked={formData.occupation === "PE"}
                      className="mr-2"
                    />
                    PE
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="occupation"
                      value="OFW"
                      onChange={handleChange}
                      checked={formData.occupation === "OFW"}
                      className="mr-2"
                    />
                    OFW
                  </label>
                  <label className="flex items-center">
                    <input
                      required
                      type="text"
                      id="occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                      className="mr-2 "
                      placeholder="Other"
                    />
                  </label>
                </div>
              </div>
              <div className="flex gap-3">
                <label className="w-[100px]">Education:</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="education"
                      value="Elem Graduate"
                      onChange={handleChange}
                      checked={formData.education === "Elem Graduate"}
                      className="mr-2"
                    />
                    Elem Graduate
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="education"
                      value="HS Graduate"
                      onChange={handleChange}
                      checked={formData.education === "HS Graduate"}
                      className="mr-2"
                    />
                    HS Graduate
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="education"
                      value="College"
                      onChange={handleChange}
                      checked={formData.education === "College"}
                      className="mr-2"
                    />
                    College
                  </label>
                  <label className="flex items-center">
                    <input
                      required
                      type="text"
                      id="education"
                      name="Other"
                      value={formData.education}
                      onChange={handleChange}
                      className="mr-2 "
                      placeholder="Other OSC / OSY"
                    />
                  </label>
                </div>
              </div>
              <div className="flex gap-3">
                <label className="w-[100px]">Religion:</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="religion"
                      value="RC"
                      onChange={handleChange}
                      checked={formData.religion === "RC"}
                      className="mr-2"
                    />
                    RC
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="religion"
                      value="INC"
                      onChange={handleChange}
                      checked={formData.religion === "INC"}
                      className="mr-2"
                    />
                    INC
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="religion"
                      value="BC"
                      onChange={handleChange}
                      checked={formData.religion === "BC"}
                      className="mr-2"
                    />
                    BC
                  </label>
                  <label className="flex items-center">
                    <input
                      required
                      type="text"
                      id="religion"
                      name="Other"
                      value={formData.religion}
                      onChange={handleChange}
                      className="mr-2 "
                      placeholder="Other"
                    />
                  </label>
                </div>
              </div>
              <div className="flex gap-3">
                <label className="w-[100px]">Sector:</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sector"
                      value="Sr.C"
                      onChange={handleChange}
                      checked={formData.sector === "Sr.C"}
                      className="mr-2"
                    />
                    Sr.C
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sector"
                      value="SP"
                      onChange={handleChange}
                      checked={formData.sector === "SP"}
                      className="mr-2"
                    />
                    SP
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="sector"
                      value="4PS"
                      onChange={handleChange}
                      checked={formData.sector === "4PS"}
                      className="mr-2"
                    />
                    4PS
                  </label>
                </div>
              </div>
              <div className="flex gap-3">
                <label className="w-[80px] mt-6">PWD:</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      required
                      type="text"
                      id="pwd"
                      name="pwd"
                      value={formData.pwd}
                      onChange={handleChange}
                      className="mr-2 "
                      placeholder="PWD (SPECIFY)"
                    />
                  </label>
                </div>
                <div className="flex gap-3">
                  <label className="w-[80px] mr-5">
                    Lactating (0-24 Months):
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="lactating"
                        value="lactating"
                        onChange={handleChange}
                        checked={formData.gender === "Lactating"}
                        className="mr-2"
                      />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input
                        type="number"
                        id="lactating"
                        name="lactating"
                        inputMode="numeric"
                        maxLength={2}
                        placeholder="How many Months?"
                        value={formData.age}
                        onChange={handleLimitAgeInput}
                        className="col-span-2 p-1 rounded focus:outline-none  "
                      />
                    </label>
                  </div>
                </div>
              </div>
              <Button>Submit and Next</Button>

              {error && <p className="error">{error}</p>}
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default Form;
