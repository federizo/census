import { supabase } from "@/utils/supabase/config";

const api = async (formdata: any) => {
  try {
    // Insert location first to get LocationId
    const locationId = await LocationINSERT(formdata);
    if (!locationId) {
      alert("Location insert failed.");
      return false;
    }

    // Now insert house profile, members, and pets
    const houseprofilestatus = await HouseProfileINSERT({
      ...formdata,
      LocationId: locationId,
    });
    const memberstatus = await MemberINSERT(formdata, locationId);
    const petstatus = await PetINSERT(formdata, locationId);

    if (houseprofilestatus && memberstatus && petstatus) {
      alert("Successfully Uploaded!!");
      return true;
    } else {
      alert("Upload failed for one or more sections.");
      return false;
    }
  } catch (error) {
    console.error("Something went wrong.", error);
    return false;
  }
};

export default api;

const HouseProfileINSERT = async (data: any) => {
  const { houseprofileid, nofammembers, LocationId } = data;

  const { data: insertedData, error } = await supabase
    .from("HouseProfile")
    .insert({
      houseprofileid,
      nofammembers,
      LocationId,
    });

  if (error) {
    console.error("Error inserting house profile:", error.message);
    return false;
  }

  return !!insertedData;
};

const LocationINSERT = async (data: any) => {
  const { housenumber, bcno, street, subd, km, blk, lot, phase, LocationId } =
    data;
  const { data: locationData, error: locationError } = await supabase
    .from("Location")
    .insert({
      LocationId: parseInt(LocationId, 10) || null,
      Street: street || null,
      Subdivision: subd || null,
      Kilometer: km ? parseFloat(km) : null, // Example conversion to float
      Block: blk || null,
      Lot: lot || null,
      Phase: phase || null,
    })
    .select("LocationId")
    .single();

  if (locationError) {
    console.error("Error inserting location:", locationError.message);
    return false;
  }

  return locationData ? locationData.LocationId : false;
};

const MemberINSERT = async (data: any, houseprofileid: any) => {
  const { members } = data;
  let successfulInserts = 0;

  const Insert = async (member: any) => {
    try {
      const { data: memberData, error } = await supabase
        .from("members") // Replace "members" with your actual table name
        .insert({
          membername: member.membername, // Replace with actual member fields
          age: member.age, // Replace with actual member fields
          relationship: member.relationship, // Replace with actual member fields
          houseprofileid: houseprofileid, // Foreign key from HouseProfile
          locationId: location, // Foreign key from Location
        });

      if (error) {
        console.error("Insertion failed for member:", member.memberid, error);
        return false;
      }
      return true;
    } catch (error) {
      console.error("Insertion failed for member:", member.memberid, error);
      return false;
    }
  };

  // Insert each member
  for (let index = 0; index < members.length; index++) {
    const insertStatus: boolean = await Insert(members[index]);
    if (insertStatus) successfulInserts++;
  }

  return successfulInserts === members.length;
};

const PetINSERT = async (data: any, houseprofileid: any) => {
  const { pets } = data;
  let successfulInserts = 0;

  const Insert = async (pet: any) => {
    try {
      const { error } = await supabase.from("Pet").insert({
        ...pet,
        houseprofileid, // Associate the pet with houseprofileid
      });

      if (error) {
        console.error("Insertion failed for pet:", pet.petid, error);
        return false;
      }
      return true;
    } catch (error) {
      console.error("Insertion failed for pet:", pet.petid, error);
      return false;
    }
  };

  for (let index = 0; index < pets.length; index++) {
    const insertStatus: boolean = await Insert(pets[index]);
    if (insertStatus) successfulInserts++;
  }

  return successfulInserts === pets.length;
};
