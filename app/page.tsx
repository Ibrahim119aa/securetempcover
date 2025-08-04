"use client";

import { Label } from "@/components/ui/label"
import Image from "next/image"
import React from "react";
import { formatDate } from "./utils/date-utils";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { DatePickerModal } from "@/components/DatePickerModal";
import { useState } from "react";
export default function TempCoverValidation() {
  const n = useRouter();

  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isPolicyModalOpen, setIsPolicyModalOpen] = React.useState(false)

  const [selectedDateOfBirth, setSelectedDateOfBirth] = React.useState<Date | null>(null)

  const handleSelectDateOfBirth = (date: Date) => {
    setSelectedDateOfBirth(date)
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const [selectedDateOfPolicy, setSelectedDateOfPolicy] = React.useState<Date | null>(null)

  const handleSelectDateOfPolicy = (date: Date) => {
    setSelectedDateOfPolicy(date)
    setIsModalOpen(false)
  }

  const handlePolicyCancel = () => {
    setIsPolicyModalOpen(false)
  }

  // Set initial date to Dec 31, 2008 as seen in the image
  const initialDate = React.useMemo(() => new Date(2008, 11, 31), [])

  const [isDOBTouched, setIsDOBTouched] = useState(false);
  const handleDOBBlur = () => {
    setIsDOBTouched(true);
  };

  const isDOBError = isDOBTouched && !selectedDateOfBirth;

  const [isPolicyTouched, setIsPolicyTouched] = useState(false);
  const handlePolicyBlur = () => {
    setIsPolicyTouched(true);
  };

  const isPolicyError = isPolicyTouched && !selectedDateOfPolicy;

  const [surname, setSurname] = useState("");


  const [isSurnameTouched, setIsSurnameTouched] = useState(false);
  const handleSurnameBlur = () => {
    setIsSurnameTouched(true);
  };

  const isSurnameError = isSurnameTouched && surname === '';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header >
        <div className="w-full lg:block md:block hidden bg-[#F2F2F2]">
          <div className="max-w-4xl  mx-auto ">
            <div className="pt-[2px] flex  justify-end items-center  text-sm">
              <div className="flex items-center space-x-4 text-blue-600">
                <Link href="#" className="text-[#234397] text-[12px] hover:underline">
                  Who we cover - eligibility
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="#" className="text-[#234397] text-[12px] hover:underline">
                  Why choose Tempcover?
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="#" className="text-[#234397] text-[12px] hover:underline">
                  FAQ's
                </Link>
                <nav id="social-navigation" className="social-navigation hidden-sm">
                  <a href="https://twitter.com/tempcover" className="twitter" title="Visit tempcover's Twitter feed" target="_blank">Twitter</a>
                  <a href="https://www.facebook.com/tempcover" className="facebook" title="Visit tempcover's Facebook page" target="_blank">Facebook</a>
                  <a href="https://www.youtube.com/user/tempcover" className="youtube" title="Visit tempcover's YouTube channel" target="_blank">YouTube</a>
                  <a href="https://www.linkedin.com/company/temporary-cover-ltd?trk=tyah" className="linkedin" title="Visit tempcover's LinkedIn feed" target="_blank">Linkedin</a>
                  <a href="https://plus.google.com/+tempcover/posts" className="google" title="Visit tempcover's Google + page" target="_blank">Google +</a>
                </nav>
              </div>
            </div>



          </div>
        </div>
        <div className="w-full">
          <div className="max-w-4xl lg:px-0 md:px-0 px-4 mx-auto ">
            <div className="flex lg:gap-2 md:gap-2 gap-3 flex-col lg:flex-row md:flex-row lg:py-7 md:py-5 py-4 justify-between">
              <div className="flex lg:items-center md:items-center">
                <Image
                  src={"/logo1.png"}
                  width={300}
                  height={60}
                  alt=""
                  className="lg:w-[330px] md:w-[330px] md:h-[57px] w-[192px] h-[37px] mt-2 lg:h-[57px]"

                ></Image>
              </div>
              <div className="text-left lg:text-right md:text-right">
                <h1 className="text-3xl font-bold text-[#234397] lg:mb-0 md:mb-0 mb-3">SHORT TERM INSURANCE</h1>
                <p className="text-[#234397] text-[14px]">
                  We are the UK's largest temporary and short term insurance provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">USER VALIDATION</h2>

        <div className="text-center mb-8">
          <p className="text-gray-600 text-sm">
            FOR SECURITY PURPOSES, BEFORE ACCESSING YOUR POLICY DOCUMENTS, PLEASE CONFIRM THE FOLLOWING INFORMATION.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex lg:flex-row md:flex-row flex-col  lg:gap-12 md:gap-9 gap-4">
              {/* Left column - Form */}
              <div className="space-y-3 lg:order-1 md:order-1 order-2 lg:w-[55%]">
                <div className="flex flex-col  lg:flex-row lg:gap-4 md:gap-3">
                  <div className="lg:w-[40%]  flex lg:self-center  lg:justify-end  ">
                    <Label htmlFor="surname" className={`${isSurnameError ? 'text-[#E92A1B]' : 'text-[#234397]'} font-bold text-[0.9rem] `}>
                      Policyholder surname
                    </Label>
                  </div>
                  <div className="lg:w-[60%]">
                    <input name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} id="surname" placeholder="Surname" className="w-full form-control" onBlur={handleSurnameBlur} />
                    {isSurnameError ? <span className="text-sm text-[#E92A1B]">Surname is not supplied</span> : null}
                  </div>

                </div>

                <div className="flex flex-col lg:flex-row  lg:gap-4 md:gap-2 ">
                  <div className="flex lg:w-[40%]  lg:justify-end  lg:self-center">
                    <Label htmlFor="dob" className={`${isDOBError ? 'text-[#E92A1B]' : 'text-[#234397]'}  font-bold text-[0.9rem]`}>
                      Policyholder date of birth
                    </Label>
                  </div>
                  <div className="lg:w-[60%] relative">


                    <div className="flex ">
                      <input
                        type="text"
                        placeholder="Date of birth"
                        className="form-control"
                        value={selectedDateOfBirth ? formatDate(selectedDateOfBirth) : ""}
                        onClick={() => setIsModalOpen(true)}
                        onFocus={() => setIsModalOpen(true)}
                        readOnly
                        onBlur={handleDOBBlur}
                      />
                      <button
                        type="button"
                        aria-label="Select date"
                        className="w-10 h-[44px] border-[1px] border-[#7F8BA0] flex items-center justify-center   bg-white hover:bg-gray-200 calendar-icon-button"
                      >

                      </button>
                    </div>
                    {isDOBError ? <span className="text-sm text-[#E92A1B]">Date of birth is not supplied</span> : null}

                  </div>
                </div>
                {isModalOpen && (
                  <DatePickerModal
                    initialDate={selectedDateOfBirth || initialDate}
                    onSelect={handleSelectDateOfBirth}
                    onCancel={handleCancel}
                  />
                )}
                <div className="flex flex-col lg:flex-row lg:gap-4 md:gap-3 ">
                  <div className="flex lg:w-[40%]  lg:justify-end lg:self-center">
                    <Label htmlFor="startdate" className={`${isPolicyError ? 'text-[#E92A1B]' : 'text-[#234397]'} font-bold text-[0.9rem]`}>
                      Policy start date
                    </Label>
                  </div>
                  <div className="relative lg:w-[60%]">
                    <div className="flex ">
                      <input
                        type="text"
                        placeholder="Policy start date"
                        className="form-control"
                        value={selectedDateOfPolicy ? formatDate(selectedDateOfPolicy) : ""}
                        onClick={() => setIsPolicyModalOpen(true)}
                        onFocus={() => setIsPolicyModalOpen(true)}
                        readOnly
                        onBlur={handlePolicyBlur}
                      />
                      <button
                        type="button"
                        aria-label="Select date"
                        className="w-10 h-[44px] border-[1px] border-[#7F8BA0] flex items-center justify-center   bg-white hover:bg-gray-200 calendar-icon-button"
                      >

                      </button>
                    </div>
                    {isPolicyError ? <span className="text-sm text-[#E92A1B]">Start Date  is not supplied</span> : null}

                  </div>


                </div>

                {isPolicyModalOpen && (
                  <DatePickerModal
                    initialDate={selectedDateOfBirth || initialDate}
                    onSelect={handleSelectDateOfPolicy}
                    onCancel={handlePolicyCancel}
                  />
                )}

                {/* reCAPTCHA */}
                <div className="flex ">
                  <div className="lg:w-[40%]">

                  </div>
                  <div className="lg:w-[60%] flex items-center space-x-3 bg-gray-100 p-4 border">
                    <input type="checkbox" className="w-6 h-6" />
                    <span className="text-gray-700">{"I'm not a robot"}</span>
                    <div className="ml-auto">
                      <div className="text-xs text-gray-500">
                        <div>reCAPTCHA</div>
                        <div>Privacy - Terms</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="lg:w-[40%] hidden">

                  </div>
                  <div className="lg:w-[60%] flex lg:justify-end">
                    <button onClick={() => { n.push("/PolicyDetails") }} className="bg-[#6BA125]  cursor-pointer text-white px-4 py-2 font-bold">SUBMIT</button>

                  </div>
                </div>


              </div>

              <div className="lg:order-2 md:order-2 order-1">
                <div className="border bg-[#F2F2F2] flex gap-2 border-[#333] py-2 px-4">
                  <div className="text-[#333]">Your reference:</div>
                  <div className="font-bold">TCV-MOT-44072540</div>
                </div>
                <div className="border bg-[#F2F2F2] flex gap-2 border-[#333] py-2 px-4">
                  <div className=" text-[#333]  font-bold">Policy:</div>
                  <div className="font-bold text-[#333]">Fully comprehensive cover</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
