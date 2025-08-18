"use client";
import React from "react";
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic";
import { FileText } from "lucide-react"
// import { PDFDownloadLink } from "@react-pdf/renderer"
const MotorInsuranceCertificate = React.lazy(() => import("@/components/Documents/motor-insurance-certificate"));
const InsuranceDocument = React.lazy(() => import("@/components/Documents/InsuranceDocument"));
const StatementFactAgeas = React.lazy(() => import("@/components/Documents/StatementFactAgeas"));
const ClientPDFDownloadLink = dynamic(() => import('@/components/ClientPDFDownloadLink'), {
    ssr: false,
});

export default function PolicyDetail() {
    const documents = [
        {
            name: "Certificate of Motor Insurance",
            fileName: "MotorInsuranceCertificate",
            component: <MotorInsuranceCertificate />
        },
        {
            name: "Insurance Product Information",
            fileName: "InsuranceDocument",
            component: <InsuranceDocument />
        },
        {
            name: "Statement of Fact",
            fileName: "StatementFactAgeas",
            component: <StatementFactAgeas />
        },
        {
            name: "Certificate of Motor Insurance",
            fileName: "MotorInsuranceCertificate",
            component: <MotorInsuranceCertificate />
        },
        {
            name: "Insurance Product Information",
            fileName: "InsuranceDocument",
            component: <InsuranceDocument />
        },
        {
            name: "Statement of Fact",
            fileName: "StatementFactAgeas",
            component: <StatementFactAgeas />
        },
        {
            name: "Statement of Fact",
            fileName: "StatementFactAgeas",
            component: <StatementFactAgeas />
        }

    ]
    return (
        <div className="min-h-screen lg:px-0 md:px-0 px-4 bg-gray-50">
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
                        <div className="flex lg:gap-2 md:gap-2 gap-3 justify-between flex-col lg:flex-row md:flex-row lg:py-7 md:py-5 py-4 ">
                            <div className="flex lg:ml-2 lg:items-center md:items-center">
                                <Image
                                    src={"/logo1.png"}
                                    width={300}
                                    height={60}
                                    alt=""
                                    className="lg:w-[330px] md:w-[330px] md:h-[57px] w-[192px] h-[37px] mt-2 lg:h-[57px]"

                                ></Image>
                            </div>
                            <div className="flex flex-col lg:mt-[2px]  text-left lg:text-center md:text-right">
                                <h1 className="lg:text-3xl lg:ml-[3rem] md:text-2xl text-2xl  font-bold text-[#234397] lg:mb-0 md:mb-0 mb-3">SHORT TERM INSURANCE</h1>
                                <p className=" text-[#234397] -mt-[2px] text-[14px]">
                                    We are the UK's largest temporary and short term insurance provider.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Main content */}
            <div className="max-w-4xl mx-auto pt-[20px] bg-gray-50 min-h-screen">
                <div className="lg:py-[45px] md:py-[40px] py-[20px]">
                    <div>
                        <h1 className="text-4xl font-bold text-[#000] mb-5">POLICY DETAILS</h1>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="lg:order-1 md:order-1 order-2">
                            <div className="bg-[#19a4e0] text-white py-[10px] px-[15px] ">
                                <h4 className="text-[18px]">Documents you need now</h4>
                            </div>

                            <div className="bg-white border border-[#19a4e0] border-t-0 pt-4 pb-8 px-4 ">
                                <p className="text-[#555555] mb-2">
                                    Policy documents will be sent to the email address provided. If you need your documents posting to you,
                                    please let us know by emailing <a className="no-underline">contactus@tempcover.com</a>.
                                </p>

                                <div>
                                    <ul className="">
                                        {documents.map((document, index) => (
                                            <li key={index} className="flex gap-6 pt-[4px] items-start">
                                                <div className="w-4 h-6  rounded flex items-start justify-start flex-shrink-0">
                                                    <Image
                                                        src={"/pdf.png"}
                                                        width={10}
                                                        height={10}
                                                        className="w-4 h-6"
                                                        alt=""
                                                    ></Image>
                                                </div>

                                                <ClientPDFDownloadLink
                                                    document={document.component}
                                                    fileName={`${document.fileName}.pdf`}
                                                    label={document.name}
                                                >

                                                </ClientPDFDownloadLink>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>

                            <p className="lg:block md:block hidden text-[#333] mt-7 text-[16px]">
                                Unable to view your documentation? Download Adobe reader for free{" "}
                                <a href="#" className="text-[#19a4e0] hover:underline">
                                    here
                                </a>
                                .
                            </p>
                            <div className="mt-8">
                                <button className="btn btn-secondary px-3 py-1">HOME</button>
                            </div>
                        </div>

                        <div className="lg:px-6 lg:order-2 md:order-2 order-1 ">
                            <div className="border bg-[#F2F2F2] flex text-[16px] flex-col  border-[#333] py-2 px-4">
                                <div className=" text-[#333] "><strong className="font-bold">FROM</strong> Monday, 9th June 2025 at 3:35 PM</div>
                                <div className=" text-[#333] "><strong className="font-bold">TO</strong> Monday, 9th June 2025 at 3:35 PM</div>

                            </div>
                            <div className="border bg-[#F2F2F2] flex gap-2 border-[#333] py-2 px-4">
                                <div className=" text-[#333]">Your reference : <strong className="font-bold">TCV-MOT-44072540</strong></div>
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
    )
}
