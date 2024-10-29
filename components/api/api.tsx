import { useState } from "react";
import { supabase } from "@/utils/supabase/config";
import { v4 as uuidv4 } from "uuid";
export async function insertDataForm(formData: any) {
  try {
    const fullname =
      formData.lname +
      ", " +
      formData.fname +
      " " +
      formData.mname +
      " " +
      formData.sfx +
      " ";
    const familyMemberId = Math.floor(Math.random() * 10000);

    const currentDate = new Date().toISOString();
    const { data, error } = await supabase
      .from("FamilyMember")

      .insert([
        {
          Name: fullname,
          FamilyMember: formData.familymember,
          Age: formData.age,
          Gender: formData.gender,
          Birthday: formData.birthday,
          CivilStatus: formData.civilstatus,
          Occupation: formData.occupation,
          Education: formData.education,
          Religion: formData.religion,
          Sector: formData.sector,
          PWD: formData.pwd,
          Lactating: formData.lactating,
          FamilyMemberId: familyMemberId,
        },
      ])
      .select();

    console.log(data);

    if (error) {
      console.error("Supabase FamilyMember insert error:", error.message);

      return false;
    }
    const familyid = Math.floor(Math.random() * 10000);

    const { data: data1, error: error1 } = await supabase
      .from("FamilyProfile_duplicate")
      .insert([
        {
          FamilyMemberId: familyMemberId,
          FamilyId: familyid,
          HouseNumber: formData.housenumber,
          NoOfFamilyMember: formData.nooffamilymember,
          DateCreated: new Date().toISOString(),
        },
      ]);

    if (error1) {
      console.error("Supabase FamilyProfile insert error:", error1.message);
      return false;
    }
    const { data: data2, error: error2 } = await supabase
      .from("Location")
      .insert([
        {
          LocationId:location,
          Street:formData.location,
          Block:formData.block,
          Lot:formData.lot,
          Phase:formData.phase,
          Kilometer:formData.km,
          SubdivisionName:formData.subdivision,

        },
      ]);

    if (error2) {
      console.error("Supabase Location insert error:", error2.message);
      return false;
    }

    console.log("FamilyMember data submitted successfully:", data);
    console.log("FamilyProfile data submitted successfully:", data1);
    return true;
  } catch (err) {
    console.error("Form submission error:", err);
  }
}
