"use client";

import { Label } from "@/components/ui/label"
import Image from "next/image"
import React, { useEffect } from "react";
import { formatDate } from "./utils/date-utils";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { DatePickerModal } from "@/components/DatePickerModal";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
export default function TempCoverValidation() {
  const n = useRouter();

  const [isInvalidCredentail, setIsInvalidCredentail] = useState(false);
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

  function formatDate(date: Date) {
    const day = date.getDate(); // 1 - 31
    const month = date.getMonth() + 1; // 0-indexed, so add 1
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  const handleLogin = () => {
    console.log(selectedDateOfPolicy);
    const params = new URLSearchParams(window.location.search);
    const t = params.get('token');
    if (t) {
      const decoded = jwtDecode(t);
      if (decoded?.surname == surname && decoded?.dob == formatDate(selectedDateOfBirth) && decoded?.startDate == formatDate(selectedDateOfPolicy)) {
        n.push("/PolicyDetails");
      }
      else {
        setIsInvalidCredentail(true);
      }
      console.log("Decoded JWT:", decoded);
    } else {
      console.log("No token provided");
    }


  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header >
        <div className="w-full lg:block md:block hidden bg-[#F2F2F2]">
          <div className="max-w-4xl  mx-auto ">
            <div className="pt-[1px]  flex  justify-end mr-[15px] items-center  text-sm">
              <div className="flex items-center space-x-4 ">
                <Link href="#" className="text-[#234397] text-[12px] font-normal hover:underline">
                  Who we cover - eligibility
                </Link>
                <span className="text-[#19a4e0]">|</span>
                <Link href="#" className="text-[#234397] text-[12px] hover:underline">
                  Why choose Tempcover?
                </Link>
                <span className="text-[#19a4e0]">|</span>
                <Link href="#" className="text-[#234397] text-[12px] hover:underline">
                  FAQ's
                </Link>
                <nav id="social-navigation" className="social-navigation -ml-1  hidden-sm">
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
            <div className="flex  md:gap-2 gap-3 justify-between flex-col lg:flex-row md:flex-row lg:py-7 md:py-5 py-4 ">
              <div className="flex lg:ml-2 lg:items-center md:items-center">
                <Image
                  src={"/logo1.png"}
                  width={300}
                  height={60}
                  alt=""
                  className="lg:w-[330px] md:w-[330px] md:h-[57px] w-[192px] h-[37px] mt-2 lg:h-[57px]"

                ></Image>
              </div>
              <div className="flex  flex-col lg:mt-[2px]  text-left lg:text-center md:text-right">
                <div>
                  <h1 className="lg:text-3xl lg:ml-[3rem] md:text-2xl text-2xl  font-bold text-[#234397] lg:mb-0 md:mb-0 mb-3">SHORT TERM INSURANCE</h1>

                </div>
                <div className="-ml-2">
                  <p className=" text-[#234397] -mt-[2px] text-[14px]">
                    We are the UK's largest temporary and short term insurance provider.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Main content */}
      <main className=" max-w-[1040px] lg:pl-[14px] md:px-0 px-2 mx-auto lg:py-14 md:py-10 py-9">

        <div className="lg:ml-12 flex flex-col pl-2 mb-4">
          <h2 className="text-[35px]   font-bold text-[#000] mb-2">USER VALIDATION</h2>

          <p className="text-[#333] word-spacing-[1rem]  text-[16px] md:leading-[20px] leading-[30px] lg:leading-[40px]">
            FOR SECURITY PURPOSES, BEFORE ACCESSING YOUR POLICY DOCUMENTS, PLEASE CONFIRM THE FOLLOWING INFORMATION.
          </p>
          {
            isInvalidCredentail ?
              (
                <div className="lg:ml-[10rem] lg:mr-[11.7rem] lg:mt-4">
                  <div className="alert alert-danger text-center">
                    The values entered do not match the stored credentials
                  </div>
                </div>
              ) : null
          }


        </div>

        <div className="flex lg:mt-0 md:mt-0 mt-6 justify-center">
          <div className="w-full max-w-[1000px]">
            <div className="flex lg:flex-row md:flex-row flex-col  lg:gap-20 md:gap-9 gap-4">
              {/* Left column - Form */}
              <div className="lg:ml-[1.4rem] space-y-[0.9rem] lg:order-1 md:order-1 order-2 lg:w-[55%]">
                <div className="flex flex-col  lg:flex-row lg:gap-3 md:gap-3">
                  <div className="lg:w-[41%]  flex    lg:justify-end  ">
                    <Label htmlFor="surname"
                      className={`${isSurnameError ? 'text-[#E92A1B]' : surname != "" ? 'text-[#6BA125]' : 'text-[#234397]'} font-bold text-[1rem] `}

                    >
                      Policyholder surname
                    </Label>
                  </div>
                  <div className="lg:w-[58%]">
                    <div className="flex">
                      <input name="surname" value={surname} onChange={(e) => setSurname(e.target.value)} id="surname" placeholder="Surname" className="w-full form-control" onBlur={handleSurnameBlur} />
                      {
                        isSurnameError ? <div className="flex w-[30%] justify-center items-center">
                          <Image src={"Cross-removebg-preview.png"} className="w-[40px] h-[40px]" width={50} height={5} alt=""></Image>

                        </div> : null
                      }
                      {
                        surname != "" ? <div className="flex w-[30%] justify-center items-center">
                          <Image src={"Approve-removebg-preview.png"} className="w-[40px] h-[40px]" width={50} height={5} alt=""></Image>

                        </div> : null
                      }
                    </div>
                    {isSurnameError ? <span className="text-sm text-[#E92A1B]">Surname is not supplied</span> : null}

                  </div>

                </div>

                <div className="flex flex-col lg:flex-row  lg:gap-3 md:gap-2 ">
                  <div className="flex lg:w-[41%] -mt-2  lg:justify-end  ">
                    <Label
                      htmlFor="dob"
                      className={`font-bold text-[1rem] ${isDOBError
                        ? 'text-[#E92A1B]' // Error state: red
                        : selectedDateOfBirth != null
                          ? 'text-[#6BA125]' // Success state: green
                          : 'text-[#234397]' // Default state: blue
                        }`}
                    >
                      Policyholder date of birth
                    </Label>

                  </div>
                  <div className="lg:w-[58%] relative">


                    <div className="flex ">
                      <input
                        type="text"
                        placeholder="Date of birth"
                        className={`form-control ${isDOBError ? '!border-[#E92A1B] ' : ''} `}
                        value={selectedDateOfBirth ? formatDate(selectedDateOfBirth) : ""}
                        onClick={() => setIsModalOpen(true)}
                        onFocus={() => setIsModalOpen(true)}
                        readOnly
                        onBlur={handleDOBBlur}
                      />
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        onFocus={() => setIsModalOpen(true)}
                        onBlur={handleDOBBlur}
                        aria-label="Select date"
                        className="w-10 h-[44px] border-[1px] border-[#7F8BA0] flex items-center justify-center   bg-white hover:bg-gray-200 calendar-icon-button"
                      >

                      </button>
                      {
                        isDOBError ? <div className="flex w-[30%] justify-center items-center">
                          <Image src={"Cross-removebg-preview.png"} className="w-[40px] h-[40px]" width={50} height={5} alt=""></Image>

                        </div> : null
                      }
                      {
                        selectedDateOfBirth != null ? <div className="flex w-[30%] justify-center items-center">
                          <Image src={"Approve-removebg-preview.png"} className="w-[40px] h-[40px]" width={50} height={5} alt=""></Image>

                        </div> : null
                      }
                    </div>
                    {isDOBError ? <span className="text-sm text-[#E92A1B]">Date of birth is not supplied</span> : null}

                  </div>
                </div>
                {isModalOpen && (
                  <DatePickerModal
                    heading="Date Of Birth"
                    initialDate={selectedDateOfBirth || new Date(2008, 11, 20)}
                    onSelect={handleSelectDateOfBirth}
                    onCancel={handleCancel}
                  />
                )}
                <div className="flex flex-col lg:flex-row lg:gap-3 md:gap-3 ">
                  <div className="flex -mt-2 lg:w-[41%]  lg:justify-end ">
                    <Label htmlFor="startdate" className={`${isPolicyError ? 'text-[#E92A1B]' : selectedDateOfPolicy ? 'text-[#6BA125]' : 'text-[#234397]'} font-bold text-[1rem]`}>
                      Policy start date
                    </Label>
                  </div>
                  <div className="relative lg:w-[58%]">
                    <div className="flex ">
                      <input
                        type="text"
                        placeholder="Policy start date"
                        className={`form-control ${isPolicyError ? '!border-[#E92A1B] ' : ''}`}
                        value={selectedDateOfPolicy ? formatDate(selectedDateOfPolicy) : ""}
                        onClick={() => setIsPolicyModalOpen(true)}
                        onFocus={() => setIsPolicyModalOpen(true)}
                        readOnly
                        onBlur={handlePolicyBlur}
                      />
                      <button
                        type="button"
                        onClick={() => setIsPolicyModalOpen(true)}
                        onFocus={() => setIsPolicyModalOpen(true)}

                        onBlur={handlePolicyBlur}
                        aria-label="Select date"
                        className="w-10 h-[44px] border-[1px] border-[#7F8BA0] flex items-center justify-center   bg-white hover:bg-gray-200 calendar-icon-button"
                      >

                      </button>
                      {
                        isPolicyError ? <div className="flex w-[30%] justify-center items-center">
                          <Image src={"/Cross-removebg-preview.png"} className="w-[40px] h-[40px]" width={50} height={5} alt=""></Image>

                        </div> : null
                      }
                      {
                        selectedDateOfPolicy != null ? <div className="flex w-[30%] justify-center items-center">
                          <Image src={"/Approve-removebg-preview.png"} className="w-[40px] h-[40px]" width={50} height={5} alt=""></Image>

                        </div> : null
                      }
                    </div>
                    {isPolicyError ? <span className="text-sm text-[#E92A1B]">Start Date  is not supplied</span> : null}

                  </div>


                </div>

                {isPolicyModalOpen && (
                  <DatePickerModal
                    heading="Policy Date"
                    initialDate={selectedDateOfPolicy || new Date(2008, 11, 20)}
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
                    <button onClick={handleLogin} className="bg-[#6BA125] !py-[6px] !px-[12px] btn text-white cursor-pointer">SUBMIT</button>

                    {/* () => { n.push("/PolicyDetails") }} */}
                  </div>
                </div>


              </div>

              <div className="lg:order-2 lg:mx-4 md:order-2 lg:w-[40%] order-1">
                <div className="">
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
        </div>
      </main>
    </div>
  )
}
