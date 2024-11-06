"use client"

import { useEffect, useState, useRef } from "react";
import moment from "moment";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { IoPerson } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { TbChartPieFilled, TbArrowsMaximize, TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import { LuAsterisk } from "react-icons/lu";

import { v4 as uuidv4 } from 'uuid';
const AgeComputation = (dob: string): string => {
    const age = moment().diff(dob, 'years');
    return age.toString();
}

const MemberForm = ({ setFormData, formData }: any) => {

    const [minimizeForm, setMinimizeForm] = useState<boolean>(false)
    const [memberForm, setMemberForm] = useState({
        memberid: "",
        fname: "",
        lname: "",
        minitial: "",
        relationship: "",
        dob: "",
        age: "",
        gender: "",
        civilstatus: "",
        occupation: { status: "", other: "" },
        elemgrad: false,
        hsgrad: false,
        collegegrad: false,
        others_osc_osy: false,
        religion: { status: "", other: "" },
        src: false,
        sp: false,
        fourps: false,
        pwd: false,
        lactating: { status: false, months: "" }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setMemberForm({
            ...memberForm,
            [name]: value.toUpperCase(),
        });
    };

    useEffect(() => {
        if (memberForm.dob !== "") {
            const age = AgeComputation(memberForm.dob)
            setMemberForm({ ...memberForm, ["age"]: age })
        }
    }, [memberForm.dob])

    useEffect(() => {
        setMemberForm((prev: any) => ({ ...prev, memberid: uuidv4() }))
    }, [formData])

    const saveMemberFormData = () => {
        const { fname, lname, relationship, dob, age, gender, civilstatus, } = memberForm
        const check = fname.trim() !== "" && lname.trim() !== "" && relationship.trim() !== "" && dob.trim() !== "" && age.trim() !== "" && gender.trim() !== "" && civilstatus.trim() !== ""

        if (!check) {
            alert("Fill  data")
        }
        else {
            setFormData((prevState: any) => ({
                ...prevState,
                members: [...prevState.members, memberForm], // Add the new member to the members array
            }));
            setMemberForm({
                memberid: "",
                fname: "",
                lname: "",
                minitial: "",
                relationship: "",
                dob: "",
                age: "",
                gender: "",
                civilstatus: "",
                occupation: { status: "", other: "" },
                elemgrad: false,
                hsgrad: false,
                collegegrad: false,
                others_osc_osy: false,
                religion: { status: "", other: "" },
                src: false,
                sp: false,
                fourps: false,
                pwd: false,
                lactating: { status: false, months: "" }
            })
        }

    }

    return (
        <div className={`${minimizeForm ? "h-[100vh] xl:h-[70vh]" : "h-[60px]"} duration-300 flex flex-col gap-2 overflow-hidden w-5xl px-3 py-2 rounded border-[1px]`}>
            <div className="flex items-center justify-between">
                <label className="px-2 rounded bg-slate-200 text-black w-fit ]"></label>
                <label className="font-thin tracking-wider  bg-slate-500 bg-opacity-50 text-slate-400 w-fit h-fit px-2 rounded"></label>
            </div>
            <div className="flex w-full justify-between items-center">
                <label className="font-semibold  flex items-center gap-2"><IoPerson />PERSONAL INFORMATION </label>

                <a onClick={() => setMinimizeForm(!minimizeForm)} className="text-[1.2rem] cursor-pointer hover:text-blue-500">{minimizeForm ? <TbArrowsDiagonalMinimize2 /> : <TbArrowsMaximize />}</a>
            </div>

            <>
                <div className="flex gap-5 w-full flex-wrap mt-5">
                    <div className="flex xl:gap-5 gap-2 w-full">

                        <div className="flex flex-col items-center gap-0.5 w-full">
                            <input type="text"
                                name="lname"
                                value={memberForm.lname}
                                onChange={handleChange}
                                className="text-white border-[0.5px] bg-transparent p-2 rounded w-full max-w-2xl" />
                            <label className="font-light tracking-wider italic text-[0.7rem] flex"><LuAsterisk className="text-red-500 text-[0.8rem]" />SURNAME</label>
                        </div>

                        <div className="flex flex-col items-center gap-0.5 w-full">
                            <input type="text"
                                name="fname"
                                value={memberForm.fname}
                                onChange={handleChange}
                                className="text-white border-[0.5px] bg-transparent p-2 rounded  w-full" />
                            <label className="font-light  tracking-wider italic text-[0.7rem] flex"><LuAsterisk className="text-red-500 text-[0.8rem]" />FIRSTNAME</label>
                        </div>

                        <div className="flex flex-col  items-center gap-0.5 shrink-0 w-fit">
                            <input type="text"
                                name="minitial"
                                value={memberForm.minitial}
                                onChange={handleChange}
                                className="text-white border-[0.5px] bg-transparent p-2 rounded w-[80%]" />
                            <label className="font-light  tracking-wider italic text-[0.7rem]">M INITIAL</label>
                        </div>

                    </div>
                    <div className="flex flex-wrap gap-2 gap-y-6 mt-5 ">
                        <div className="flex items-center gap-2">
                            <label className="font-semibold tracking-wider flex"><LuAsterisk className="text-red-500 text-[0.8rem]" />RELATIONSHIP</label>
                            <Select
                                name="relationship"
                                value={memberForm.relationship}
                                onValueChange={(value) => setMemberForm((prev: any) => ({ ...prev, relationship: value }))}
                            >
                                <SelectTrigger className="w-[180px] bg-black rounded">
                                    <SelectValue placeholder="Choose Relationship" />
                                </SelectTrigger>
                                <SelectContent className="bg-black text-white rounded">
                                    <SelectItem value="father">Father</SelectItem>
                                    <SelectItem value="mother">Mother</SelectItem>
                                    <SelectItem value="son">Son</SelectItem>
                                    <SelectItem value="daughter">Daughter</SelectItem>
                                    <SelectItem value="brother">Brother</SelectItem>
                                    <SelectItem value="sister">Sister</SelectItem>
                                    <SelectItem value="grandfather">Grandfather</SelectItem>
                                    <SelectItem value="grandmother">Grandmother</SelectItem>
                                    <SelectItem value="grandson">Grandson</SelectItem>
                                    <SelectItem value="granddaughter">Granddaughter</SelectItem>
                                    <SelectItem value="uncle">Uncle</SelectItem>
                                    <SelectItem value="aunt">Aunt</SelectItem>
                                    <SelectItem value="nephew">Nephew</SelectItem>
                                    <SelectItem value="niece">Niece</SelectItem>
                                    <SelectItem value="cousin">Cousin</SelectItem>
                                    <SelectItem value="stepfather">Stepfather</SelectItem>
                                    <SelectItem value="stepmother">Stepmother</SelectItem>
                                    <SelectItem value="stepson">Stepson</SelectItem>
                                    <SelectItem value="stepdaughter">Stepdaughter</SelectItem>
                                    <SelectItem value="half-brother">Half-Brother</SelectItem>
                                    <SelectItem value="half-sister">Half-Sister</SelectItem>
                                    <SelectItem value="father-in-law">Father-in-Law</SelectItem>
                                    <SelectItem value="mother-in-law">Mother-in-Law</SelectItem>
                                    <SelectItem value="brother-in-law">Brother-in-Law</SelectItem>
                                    <SelectItem value="sister-in-law">Sister-in-Law</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center gap-2 ">
                            <label className="font-semibold tracking-wider flex"><LuAsterisk className="text-red-500 text-[0.8rem]" />DATE OF BIRTH</label>
                            <input type="date" name="dob" onChange={handleChange} value={memberForm.dob} className="text-white border-[0.5px] bg-transparent p-2 rounded uppercase " />
                        </div>

                        <div className="flex items-center gap-2 ">
                            <label className="font-semibold tracking-wider flex"><LuAsterisk className="text-red-500 text-[0.8rem]" />AGE</label>
                            <label className="text-white border-[0.5px] bg-transparent p-2 w-[60px] h-[40px] rounded" >
                                {memberForm.dob !== "" && AgeComputation(memberForm.dob)}
                            </label>
                        </div>

                        <div className="flex items-center gap-2 ">
                            <label className="font-semibold tracking-wider flex"><LuAsterisk className="text-red-500 text-[0.8rem]" />GENDER</label>
                            <Select
                                name="gender"
                                value={memberForm.gender}
                                onValueChange={(value) => setMemberForm((prev: any) => ({ ...prev, gender: value }))}
                            >
                                <SelectTrigger className="w-[180px] bg-black rounded">
                                    <SelectValue placeholder="Choose Gender" />
                                </SelectTrigger>
                                <SelectContent className="bg-black text-white rounded">
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center gap-2 ">
                            <label className="font-semibold tracking-wider flex"><LuAsterisk className="text-red-500 text-[0.8rem]" />CIVIL STATUS</label>
                            <Select
                                name="civilstatus"
                                value={memberForm.civilstatus}
                                onValueChange={(value) => setMemberForm((prev: any) => ({ ...prev, civilstatus: value }))}
                            >
                                <SelectTrigger className="w-[180px] bg-black rounded">
                                    <SelectValue placeholder="Choose Civil Status" />
                                </SelectTrigger>
                                <SelectContent className="bg-black text-white rounded">
                                    <SelectItem value="Single">Single</SelectItem>
                                    <SelectItem value="Married">Married</SelectItem>
                                    <SelectItem value="Li">LI</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center gap-2 ">
                            <label className="font-semibold tracking-wider">OCCUPATION</label>
                            <Select
                                name="occupation"
                                value={memberForm.occupation.status}
                                onValueChange={(value) =>
                                    setMemberForm((prev: any) => ({
                                        ...prev,
                                        occupation: { ...prev.occupation, status: value },
                                    }))
                                }
                            >
                                <SelectTrigger className="w-[180px] bg-black rounded">
                                    <SelectValue placeholder="Choose Occupation" />
                                </SelectTrigger>
                                <SelectContent className="bg-black text-white rounded">
                                    <SelectItem value="GE">{"(GE)"} General Election</SelectItem>
                                    <SelectItem value="PE">{"(PE)"} Pop Eyes</SelectItem>
                                    <SelectItem value="OFW">{"(OFW)"} On For Way</SelectItem>
                                    <SelectItem value="OTHER">OTHER</SelectItem>
                                </SelectContent>
                            </Select>
                            {memberForm.occupation.status === "OTHER" && (
                                <input
                                    type="text"
                                    name="otheroccupation"
                                    placeholder="Enter custom occupation"
                                    onChange={(e) =>
                                        setMemberForm((prev: any) => ({
                                            ...prev,
                                            occupation: { ...prev.occupation, other: e.target.value },
                                        }))
                                    }
                                    className="p-2.5 bg-black text-white border rounded"
                                />
                            )}
                        </div>

                    </div>
                </div>
            </>

            <label className="font-semibold mt-5 flex items-center gap-2"><FaGraduationCap />EDUCATION </label>
            <div className=" flex items-center flex-wrap gap-4">
                <div className="flex gap-2 items-center">
                    <label className="font-semibold tracking-wider">ELEMNTARY GRADUATE</label>
                    <Checkbox
                        className="h-6 w-6"
                        name="elemgrad"
                        checked={memberForm.elemgrad}
                        onCheckedChange={(value: boolean) =>
                            setMemberForm((prev: any) => ({
                                ...prev,
                                elemgrad: value,  // Directly set based on the boolean value
                            }))
                        }
                    />


                </div>
                <div className="flex gap-2 items-center">
                    <label className="font-semibold tracking-wider">HIGH SCHOOL GRADUATE</label>
                    <Checkbox className="h-6 w-6" name="hsgrad"
                        checked={memberForm.hsgrad}
                        onCheckedChange={(value: boolean) =>
                            setMemberForm((prev: any) => ({
                                ...prev,
                                hsgrad: value,  // Directly set based on the boolean value
                            }))
                        }
                    />
                </div>
                <div className="flex gap-2 items-center">
                    <label className="font-semibold tracking-wider">COLLEGE GRADUATE</label>
                    <Checkbox className="h-6 w-6" name="collegegrad"
                        checked={memberForm.collegegrad}
                        onCheckedChange={(value: boolean) =>
                            setMemberForm((prev: any) => ({
                                ...prev,
                                collegegrad: value,  // Directly set based on the boolean value
                            }))
                        }
                    />
                </div>
                <div className="flex gap-2 items-center">
                    <label className="font-semibold tracking-wider">OTHERS OSC/OSY</label>
                    <Checkbox className="h-6 w-6" name="others_osc_osy"
                        checked={memberForm.others_osc_osy}
                        onCheckedChange={(value: boolean) =>
                            setMemberForm((prev: any) => ({
                                ...prev,
                                others_osc_osy: value,  // Directly set based on the boolean value
                            }))
                        } />
                </div>
            </div>

            <div className="flex items-center gap-2 mt-5">
                <label className="font-semibold flex items-center gap-2"><GiWhiteBook />RELIGION</label>
                <Select
                    name="religion"
                    value={memberForm.religion.status}
                    onValueChange={(value) =>
                        setMemberForm((prev: any) => ({
                            ...prev,
                            religion: { ...prev.religion, status: value },
                        }))
                    }
                >
                    <SelectTrigger className="w-[180px] bg-black rounded">
                        <SelectValue placeholder="Choose Religion" />
                    </SelectTrigger>
                    <SelectContent className="bg-black text-white rounded">
                        <SelectItem value="RC">{"(RC)"} Roman Catholic</SelectItem>
                        <SelectItem value="INC">{"(INC)"} Iglesia Ni Cristo</SelectItem>
                        <SelectItem value="BC">{"(BC)"} Bible Baptist Church</SelectItem>
                        <SelectItem value="OTHER">OTHER</SelectItem>
                    </SelectContent>
                </Select>
                {memberForm.religion.status === "OTHER" && (
                    <input
                        type="text"
                        name="otherreligion"
                        placeholder="Enter custom religion"
                        onChange={(e) =>
                            setMemberForm((prev: any) => ({
                                ...prev,
                                religion: { ...prev.religion, other: e.target.value },
                            }))
                        }
                        className="p-2.5 bg-black text-white border rounded"
                    />
                )}
            </div>

            <>
                <div className="flex flex-col  xl:flex-wrap w-full gap-5 mt-5">

                    <div className="flex gap-2">
                        <label className="font-semibold flex items-center gap-2 pr-3 border-r-[1px] "><TbChartPieFilled />SECTOR</label>
                        <div className="flex gap-2 items-center">
                            <label className="font-semibold tracking-wider">Sr.C</label>
                            <Checkbox className="h-6 w-6" name="src"
                                checked={memberForm.src}
                                onCheckedChange={(value: boolean) =>
                                    setMemberForm((prev: any) => ({
                                        ...prev,
                                        src: value,
                                    }))
                                }
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="font-semibold tracking-wider">SP</label>
                            <Checkbox className="h-6 w-6" name="sp"
                                checked={memberForm.sp}
                                onCheckedChange={(value: boolean) =>
                                    setMemberForm((prev: any) => ({
                                        ...prev,
                                        sp: value,
                                    }))
                                }
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            <label className="font-semibold tracking-wider">4PS</label>
                            <Checkbox className="h-6 w-6" name="fourps"
                                checked={memberForm.fourps}
                                onCheckedChange={(value: boolean) =>
                                    setMemberForm((prev: any) => ({
                                        ...prev,
                                        fourps: value,  // Directly set based on the boolean value
                                    }))
                                }
                            />
                        </div>
                    </div>

                    <div className="flex gap-2 items-center">
                        <label className="font-semibold tracking-wider">PWD{" (SPECIFY)"}</label>
                        <input
                            type="text"
                            name="pwd"
                            placeholder="Enter PWD Specification"
                            onChange={(e) => setMemberForm((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))}
                            className="p-1 bg-black text-white border rounded"
                        />
                    </div>

                    <div className="flex gap-2 items-center">
                        <label className="font-semibold tracking-wider">LACTATING {"(0-24 MONTHS)"}</label>
                        <Checkbox
                            className="h-6 w-6"
                            name="lactatingstatus"
                            checked={memberForm.lactating.status}
                            onCheckedChange={(value: boolean) =>
                                setMemberForm((prev: any) => ({
                                    ...prev,
                                    lactating: {
                                        ...prev.lactating,
                                        status: value,
                                    },
                                }))
                            }
                        />
                        {memberForm.lactating.status && (
                            <input
                                type="text"
                                name="lactatingmonths"
                                placeholder="Enter Months"
                                value={memberForm.lactating.months}
                                onChange={(e) =>
                                    setMemberForm((prev: any) => ({
                                        ...prev,
                                        lactating: {
                                            ...prev.lactating,
                                            months: parseInt(e.target.value, 10) || 0,
                                        },
                                    }))
                                }
                                className="p-1 bg-black text-white border rounded"
                            />
                        )}
                    </div>

                </div>
            </>
            <div className="flex w-full flex-col items-center justify-center">
                <div className="h-[0.5px] bg-gray-200 w-[70%] mb-2 mt-2" />
                <button onClick={() => saveMemberFormData()} type="button" className="text-center h-[30px] bg-slate-100 text-black px-2 font-semibold rounded hover:bg-green-800 duration-300 hover:text-white">ADD MEMBER</button>
            </div>
        </div>
    )
}

export default MemberForm