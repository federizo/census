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
    const familyMemberId = uuidv4();
    const { data, error } = await supabase
      .from("FamilyMember_duplicate")
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
        },
      ])
      .select();

    console.log(data);
    if (error) {
      console.error("Supabase insert error:", error.message);

      return "Error submitting form. Please try again.";
    } else {
      console.log("Data submitted successfully:", data);
      return "Successfully Submitted";
    }
  } catch (err) {
    console.error("Form submission error:", err);
    return "Unexpected error occurred. Please try again.";
  }
}
