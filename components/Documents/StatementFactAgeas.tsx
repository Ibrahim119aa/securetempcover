"use client"

import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer"

// You can register custom fonts if needed, for example:
// Font.register({ family: 'Roboto', src: '/fonts/Roboto-Regular.ttf' });

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: '#000',

    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Helvetica", // Default font, widely supported
    fontSize: 9,
    paddingTop: '5',
    lineHeight: 1.2,
    position: "relative", // For absolute positioning of elements if needed
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5
  },
  addressBlock: {
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 8,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

  },
  ageasLogo: {
    width: 130,
    height: 100,
    position: "absolute",
    top: 0,
    right: 0,
  },
  Logo1: {
    width: 180,
    height: 40,
    paddingLeft: 10,
    paddingTop: 5,
    marginTop: '15'
  },
  certification: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    textAlign: "justify",
    marginBottom: 20,
  },
  companyDetails: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    textAlign: "left",
    marginBottom: 20,
  },
  companyName: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 5,
  },
  ceo: {
    marginTop: 10,
  },
  instruction: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginBottom: 30,
    textAlign: "left",
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "dotted",
    marginBottom: 20,
  },
  certificateTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  mainCertificateSection: {
    borderTop: 1,
    borderLeft: 1,
    paddingRight: '5',
    borderRight: 1,
    borderBottom: 1,
    paddingBottom: '10',


    borderColor: "#000",
  },
  mainCertificateSection1: {


    paddingBottom: '5',
    borderColor: "#000",
    paddingRight: '30'
  },
  listItem: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  listItemNumber: {
    width: 20,
    marginRight: 5,
  },
  listItemContent: {
    flex: 1,
  },
  subListItem: {
    marginLeft: 20,
    marginTop: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  noteWarning: {
    marginTop: 10,
    marginBottom: 5,
  },
  footer: {
    marginTop: "auto", // Pushes footer to the bottom of the page
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
  },
  footerLeft: {
    textAlign: "left",
    fontSize: 8,
    flex: 1,
  },
  footerRight: {
    textAlign: "right",
    fontSize: 8,
    width: 80, // Fixed width for alignment
  },
  claimsHotline: {
    marginTop: 10,
    fontSize: 10,
    fontWeight: "bold",
  },
  signatureSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 10,
  },
  signatureImage: {
    width: 150,
    height: 50,
  },
  signatureText: {
    textAlign: "right",
    fontSize: 9,
  },
  // New styles for Schedule page
  scheduleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 10,
  },
  scheduleTable: {

    borderColor: "#000",

  },
  scheduleRow: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  scheduleRow4: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  scheduleRow2: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  scheduleRow3: {
    flexDirection: "row",
    alignItems: "stretch",
    marginLeft: 5
  },
  scheduleEmptyRow:
  {
    height: '25',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingLeft: 5,
    paddingTop: 5,
    // padding:10,
    backgroundColor: '#f0f0f0',
    width: '100%'
  },
  scheduleEmptySmallestRow:
  {
    height: '3',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,

    borderColor: '#000',

    paddingLeft: 5,
    paddingTop: 5,
    // padding:10,

    width: '100%'
  },
  scheduleEmptyRowWthCenterContent:
  {
    height: '25',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingLeft: 5,
    paddingTop: 5,
    // padding:10,
    backgroundColor: '#f0f0f0',
    width: '100%',
    textAlign: 'center'
  },
  scheduleEmptyRowSmall:
  {
    height: '5',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingLeft: 5,
    paddingTop: 5,
    // padding:10,
    backgroundColor: '#f0f0f0',
    width: '100%'
  },
  scheduleCell: {
    paddingLeft: '10',
    paddingTop: '10',
    flex: 1,
    justifyContent: "center",
  },
  scheduleCell2: {
    padding: 5,
    width: '20%',
    justifyContent: "center",
    textAlign: 'center'
  },
  scheduleCell1: {
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: "#000",
    justifyContent: 'flex-start'
  },
  customWidthCell:
  {
    width: '15%',
    marginRight: 5,
  },
  scheduleCellWithoutBorder: {
    padding: 5,
    flex: 1,
    justifyContent: "center",
  },
  scheduleCellWithoutBorder2: {
    padding: 5,
    backgroundColor: 'red'
  },
  scheduleCellLast: {
    borderRightWidth: 0,
  },
  scheduleHeaderCell: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  scheduleCellSmall: {
    width: '30%',
    paddingLeft: '10',
    paddingTop: '10'

  },
  scheduleCellLarge: {
    flex: 2,
  },
  scheduleCellMedium: {
    flex: 1.5,
  },
  scheduleCellAuto: {
    flex: "auto",
    width: "auto",
  },
  schedulefirstcolumn:
  {
    width: '16.5%',
  },
  boxedText: {


    borderColor: "#000",
    padding: 5,
    marginBottom: 10,
  },
  boxedText1: {

    borderBottomWidth: 1,
    borderColor: "#000",
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    textAlign: 'center'
  },
  endorsementSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  endorsementTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  endorsementListItem: {
    marginBottom: 5,
  },
  endorsementSubListItem: {
    marginLeft: 10,
    marginBottom: 3,
  },
  companyInfoBlock: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 9,
  },

  schedule:
  {
    alignItems: 'flex-end',

  },
  insuranceadvisor:
  {
    marginRight: 100
  },
  addressissuing:
  {
    marginRight: 140
  },
  addressissuing1:
  {
    marginRight: 92
  },
  addressissuing2:
  {
    marginRight: 117
  },
  schedulesubheading:
  {
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: '#000'
  },
  customWidth:
  {
    width: '16.8%',
    borderRightWidth: 1,
    borderColor: '#000'
  },
  marginTop:
  {
    marginTop: 2
  },
  marginTop1:
  {
    marginTop: 10
  },
  underlinetext:
  {
    textDecoration: 'underline'

  },
  lastHeading:
  {
    textAlign: 'center',
    marginTop: '2',

  },
  lastHeading1:
  {
    textAlign: 'center',
    marginTop: '250',
    fontSize: '7'

  },
  secondPageFirstContent:
  {
    marginTop: '25',
    fontSize: '10',
    paddingLeft: '5',
    paddingRight: '5'
  },
  secondpagesubcontent:
  {
    marginTop: '15',
    paddingLeft: '5',
    paddingRight: '5',
    fontSize: '10',
  },
  thirdpagesubcontent:
  {
    marginTop: '15',
    paddingLeft: '15',
    paddingRight: '5',
    fontSize: '10',
  },
  listStyle:
  {
    marginLeft: '15',
    paddingTop: '1'
  },
  logo:
  {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  heading:
  {
    fontWeight: 'bold',
    fontSize: '16',
    marginBottom: '20'
  },
  heading1:
  {
    fontWeight: 'bold',
    fontSize: '8',
    marginBottom: '5'
  },
  flexBox:
  {
    display: 'flex',
    flexDirection: 'row',
    gap: '20',
    width: '48%',
    paddingLeft: '8',

  },
  flexBox1:
  {
    display: 'flex',
    flexDirection: 'row',
    gap: '20',
    width: '45%',

  },
  leftSpace:
  {
    paddingLeft: '20'
  },
  underLine:
  {

    marginLeft: '10',
    marginRight: '10',
    marginTop: '10',
    borderWidth: '1',
    borderColor: 'black',
    height: '2'
  },
  importantNote:
  {

    marginLeft: '10',
    marginRight: '10',
    marginTop: '15',
    backgroundColor: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '9',
    color: 'white',
    paddingTop: '5',
    fontWeight: 'bold',
    paddingBottom: '5'

  },
  firstpagefooter:
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSm:
  {
    fontSize: '8'
  }

})

const StatementFactAgeas = () => (
  <Document>
    {/* Page 1: Schedule */}
    <Page size="A4" style={styles.page}>
      {/* */}
      <View style={styles.logo}>
        <Image src="/logo.png" style={styles.ageasLogo} width={140} height={70} alt="Ageas Logo" />

      </View>
      <View style={styles.heading}>
        <Text >STATEMENT OF FACT - Short Term Insurance</Text>
      </View>

      <View style={styles.mainCertificateSection}>

        <View style={styles.scheduleTable}>
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Your Agent</Text>
              <Text>Agent</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellLarge]}>
              <Text>Tempcover Limited</Text>
            </View>


          </View>
          <View style={[styles.marginTop, styles.scheduleRow]}>
            <View style={[styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Your Details - Name Address</Text>
              <Text style={styles.marginTop}>Surname</Text>
              <Text style={styles.marginTop}>Forename(s)</Text>
              <Text style={styles.marginTop}>Title</Text>
              <Text style={styles.marginTop}>Telephone Number</Text>
              <Text style={styles.marginTop}>Email Address</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Miah</Text>
              <Text style={styles.marginTop}>Uzzal</Text>
              <Text style={styles.marginTop}>Mr</Text>
              <Text style={styles.marginTop}>14 Lindsey Road, Dagenham, Greater London, RM8 2RP</Text>
              <Text style={styles.marginTop}>07352101466</Text>
              <Text style={styles.marginTop}>testersgbp@gmail.com</Text>
            </View>

          </View>
          <View style={[styles.marginTop, styles.scheduleRow]}>
            <View style={[styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Policy Cover:</Text>
              <Text style={styles.marginTop}>Effective Date</Text>
              <Text style={styles.marginTop}>Expiry Date</Text>
              <Text style={styles.marginTop}>Policy Cover</Text>
              <Text style={styles.marginTop}>Number of Drivers (including you)</Text>
              <Text style={styles.marginTop}>Class of Use</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text></Text>

              <Text style={styles.bold}>15:35 09 June 2025</Text>
              <Text style={styles.marginTop}> 16:35 09 June 2025</Text>
              <Text style={styles.marginTop}> FULLY COMPREHENSIVE</Text>
              <Text style={styles.marginTop}>1</Text>
              <Text style={styles.marginTop}>User for Social domestic and pleasure purposes, and business use by the Policyholder in connection with their business or profession EXCLUDING use for hire or reward ,racing pacemaking, speed testing, commerical travelling or use for any purpose in connection with the motor trade.</Text>
            </View>

          </View>

          <View>
            <Text style={[styles.bold, styles.leftSpace]}>Driver Details (including You)</Text>

          </View>

          <View style={[styles.scheduleRow]}>

            <View style={[styles.flexBox]}>
              <View sty>
                <Text > Full Name</Text>
                <Text style={styles.marginTop}> Sex</Text>
                <Text style={styles.marginTop}> Date of birth</Text>
                <Text style={styles.marginTop}> Licence Type</Text>
                <Text style={styles.marginTop}> Occupation</Text>

              </View>
              <View>
                <Text style={styles.marginTop}>Uzzal</Text>
                <Text style={styles.marginTop}> Male</Text>
                <Text style={styles.marginTop}> 02 November 1978</Text>
                <Text style={styles.marginTop}> Full UK licence</Text>
                <Text style={styles.marginTop}> Not required</Text>

              </View>
            </View>
            <View style={[styles.flexBox1]}>
              <View>
                <Text > Full Name</Text>
                <Text style={styles.marginTop}> Sex</Text>
                <Text style={styles.marginTop}> Date of birth</Text>
                <Text style={styles.marginTop}> Licence Type</Text>
                <Text style={styles.marginTop}> Occupation</Text>

              </View>
              <View>
                <Text style={styles.marginTop}>--</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>

              </View>
            </View>

          </View>
          <View style={[styles.marginTop, styles.scheduleRow]}>
            <View style={[styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Vehicle Details:</Text>
              <Text style={styles.marginTop}>Make</Text>
              <Text style={styles.marginTop}>Model</Text>
              <Text style={styles.marginTop}>Registration number</Text>
              <Text style={styles.marginTop}>Vehicle Value</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text></Text>

              <Text style={styles.bold}> NISSAN</Text>
              <Text style={styles.marginTop}>MICRA TEMPEST</Text>
              <Text style={styles.marginTop}>LF52BVB</Text>
              <Text style={styles.marginTop}>£1,500 to £5,000</Text>
            </View>

          </View>


          <View style={styles.marginTop1}>
            <Text style={[styles.bold, styles.leftSpace]}>Accident / Claim Details</Text>

          </View>

          <View style={[styles.scheduleRow]}>

            <View style={[styles.flexBox]}>
              <View >
                <Text > Driver Name</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Date of Claims</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Costs</Text>
                <Text style={styles.marginTop}> Fault or Non-Fault</Text>

              </View>
              <View >
                <Text style={styles.marginTop}>Uzzal Miah</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>

              </View>
            </View>
            <View style={[styles.flexBox1]}>
              <View >
                <Text > Driver Name</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Date of Claims</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Costs</Text>
                <Text style={styles.marginTop}> Fault or Non-Fault</Text>

              </View>
              <View>
                <Text style={styles.marginTop}>--</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>

              </View>
            </View>

          </View>
          <View style={styles.underLine}></View>
          <View style={[styles.scheduleRow, styles.marginTop1]}>

            <View style={[styles.flexBox]}>
              <View >
                <Text > Driver Name</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Date of Claims</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Costs</Text>
                <Text style={styles.marginTop}> Fault or Non-Fault</Text>

              </View>
              <View >
                <Text style={styles.marginTop}>Uzzal Miah</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>

              </View>
            </View>
            <View style={[styles.flexBox1]}>
              <View >
                <Text > Driver Name</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Date of Claims</Text>
                <Text style={[styles.marginTop, { marginLeft: 2 }]}>Costs</Text>
                <Text style={styles.marginTop}> Fault or Non-Fault</Text>

              </View>
              <View>
                <Text style={styles.marginTop}>--</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>
                <Text style={styles.marginTop}>-</Text>

              </View>
            </View>

          </View>
          <View style={styles.importantNote}>
            <Text>
              IMPORTANT - You also must read the Ageas Insurance Proposer Declaration & important Notes on Pages 2 & 3
            </Text>
          </View>
        </View>



      </View>
      <View style={styles.firstpagefooter}>
        <Image src="/tempcover.png" style={styles.Logo1} width={90} height={30} alt="Ageas Logo" />

      </View>
      <View style={styles.lastHeading}>
        <Text >Ageas Insurance Limited, Ageas House, Hampshire Corporate Park, Templers Way, Eastleigh, Hampshire, SO53 3YA</Text>

      </View>
      <View style={styles.logo}>
        <Image src="/logo.png" style={styles.ageasLogo} width={140} height={100} alt="Ageas Logo" />

      </View>
      <View style={styles.mainCertificateSection1}>
        <View style={styles.heading}>
          <Text >
            Ageas /  PROPOSER DECLARATION</Text>
        </View>
        <View>
          <View>
            <Text style={styles.bold}>
              1)   I declare that I,or any named driver covered:
            </Text>
          </View>
          <View style={styles.leftSpace}>
            <Text style={styles.marginTop}>
              a)   Have been a permanent UK resident for at least 60 months (5 Years).
            </Text>
            <Text style={styles.marginTop}>
              b)   Am NOT Unemployed, or a Professional Sportsperson; or have a full or part-time occupation which is
              connected with the following trades or professions: Couriers, Entertainment Industry, Fast Food Delivery,
              Parcel Delivery
            </Text>

            <Text style={styles.marginTop}>
              c)   Have not been disqualified from driving within the last 3 years.
            </Text>
            <Text style={styles.marginTop}>
              d)   Have no more than 6 penalty points on my/their driving licence, in the last 3 years, and have no prosecution
              or police enquiry pending.
            </Text>
            <Text style={styles.marginTop}>
              e)   Have no criminal convictions, a current Anti-Social Behaviour Order (ASBO) or a Criminal Behaviour Order
              (CBO).
            </Text>
            <Text style={styles.marginTop}>
              f)   Have no more than one fault accident/loss/claim within the last 3 years (a pending claim or non-recoverable
              claim is considered a fault claim).

            </Text>
            <Text style={styles.marginTop}>
              f)   Have not had any previous motor insurance policy cancelled or declared void.

            </Text>
          </View>
        </View>

        <View style={styles.marginTop1}>
          <View>
            <Text style={styles.bold}>
              2)  I declare that the vehicle:
            </Text>
          </View>
          <View style={styles.leftSpace}>
            <Text style={styles.marginTop}>
              a)   Will only be used for social domestic and pleasure purposes and use in person by the Policyholder in
              connection with their business.
            </Text>
            <Text style={styles.marginTop}>
              b)   Will not be used for hire or reward, racing, pace-making, speed testing, commercial travelling or use for any
              purpose in connection with the motor trade.
            </Text>

            <Text style={styles.marginTop}>
              c)    Will not be used to carry hazardous goods or be driven at a hazardous location.
            </Text>
            <Text style={styles.marginTop}>
              d)   Has not been modified from the manufacturer's standard specification, except for the addition of
              manufacturer optional extras eg alloy wheels.
            </Text>
            <Text style={styles.marginTop}>
              e)   Has no more than 7 seats in total and is right hand drive only.
            </Text>
            <Text style={styles.marginTop}>
              f)   Has a minimum value of £1000 and I am aware that the maximum amount payable under the policy in
              respect of loss or damage to the vehicle insured is £65,000.
            </Text>
            <Text style={styles.marginTop}>
              g)   Is registered in the UK at the start of the policy and will not be exported from the UK during the duration of
              the policy.
            </Text>
            <Text style={styles.marginTop}>
              h)   Is not a ‘Q’ Plated or Diplomatic vehicle.
            </Text>
          </View>
        </View>
        <View style={styles.marginTop1}>
          <Text style={styles.bold}>
            3)   I am aware that temporary insurance cannot be used for Hire or Loan Vehicles (i.e. Vehicle Rentals,
            Vehicle Salvage/Recovery Agents, Credit Hire Vehicles/Companies and Accident Management
            Companies).
          </Text>
        </View>
        <View style={styles.marginTop}>
          <Text style={styles.bold}>
            4)   I declare that any certificate of motor insurance and other documents issued will not be used as
            evidence of insurance for the recovery of impounded vehicles.
          </Text>
        </View>
        <View style={styles.marginTop}>
          <Text style={styles.bold}>
            5)   I am aware that foreign use is not permitted for any demonstrator vehicle or courtesy car.
          </Text>
        </View>

        <View style={styles.marginTop}>
          <Text style={styles.bold}>
            6)  I am aware that this policy has a total excess in respect of Accidental Damage, Malicious Damage, Fire
            and Theft claims of £500.00.
          </Text>
        </View>
        <View style={styles.lastHeading1}>
          <Text >Ageas Insurance Limited, Ageas House, Hampshire Corporate Park, Templers Way, Eastleigh, Hampshire, SO53 3YA</Text>

        </View>
      </View>
      <View style={styles.logo}>
        <Image src="/logo.png" style={styles.ageasLogo} width={140} height={100} alt="Ageas Logo" />

      </View>
      <View style={styles.mainCertificateSection1}>
        <View style={styles.heading}>
          <Text >
            IMPORTANT NOTES</Text>
        </View>
        <View>
          <View>
            <Text style={styles.textSm}>
              This is an important document and must be read in conjunction with your Policy, Schedule, and Certificate of Motor Insurance, which together form your contract of
              Insurance. Please read it carefully and inform your insurance adviser immediately should any of the information be wrong or there is anything missing. Failure to
              supply accurate and complete answers may mean that your policy is invalid and that it does not operate in the event of a claim. If correct and complete, keep this
              document in a safe place together with your Policy, Schedule, and Certificate of Motor Insurance.

            </Text>
          </View>
          <View >
            <Text style={[styles.marginTop, styles.textSm]}>
              1.   Your policy will be based on the answers provided in this statement of facts. Your answers will influence the acceptance and assessment of this proposal. If you
              are in any doubt about whether a piece of information is relevant to your answer, your insurance adviser will be happy to give advice.
            </Text>
            <Text style={[styles.marginTop, styles.textSm]}>
              2.   Important notice-You are required by the Consumer Insurance (Disclosure and Representations) Act to take reasonable care to supply accurate and complete
              answers to all the questions on the statement of facts and to make sure that all information supplied is true and correct. Failure to supply accurate and complete
              answers may mean that your policy is invalid and that it does not operate in the event of a claim.
            </Text>

            <Text style={[styles.marginTop, styles.textSm]}>
              3.    It is an offence under the Road Traffic Act to make a false statement or withhold any information for the purposes of obtaining a Certificate of Motor Insurance.
            </Text>
            <Text style={[styles.marginTop, styles.textSm]}>
              4.     We recommend that you keep a copy of this Statement of Facts and a record of all information (including copies of any letter or other documents) supplied to us.
              We will give you a photocopy of this Statement of Facts if you ask us within 3 months of the start of cover.
            </Text>
            <Text style={[styles.marginTop, styles.textSm]}>
              5.     Cover will not start until an Ageas Certificate of Motor Insurance or Cover Note is issued.
            </Text>
            <Text style={[styles.marginTop, styles.textSm]}>
              6.     Unless we agree otherwise, English law will apply to this contract of insurance.
            </Text>
            <Text style={[styles.marginTop, styles.textSm]}>
              7.     A specimen of our current policy is available on request.
            </Text>
            <Text style={[styles.marginTop, styles.textSm]}>
              8.     This is our standard client agreement upon which we intend to rely. For your own benefit and protection you should read these terms carefully. If you do not understand any point please ask for further information.
            </Text>

          </View>
        </View>
        <View style={[styles.heading1, styles.marginTop1]}>
          <Text style={styles.bold}>
            DATA PROTECTION</Text>
        </View>
        <View>
          <View>
            <Text style={[styles.textSm]}>
              We may use information we hold about you to contact you about Insurance. Information may be used by us, other companies in the Ageas group and by our agents
              and service partners acting under our instruction for the purpose of arranging and handling your insurance policy, and to make sure that any claim is settled effectively.
              We may use information for research, marketing or statistical purposes. We will not use your information or pass it on to any other person for the purpose of marketing
              any further products or services to you. We may share your personal information with operators of registers used by the insurance industry to check information and
              prevent fraudulent claims. These include the Claims and Underwriting Exchange register, and the Motor Insurance Anti-Fraud and Theft Register and the Motor Insurance
              Database. We may pass information relating to your insurance policy and any incident (such as an accident or theft), to the operators of these registers. Under the
              conditions of your policy, you must tell us about any incident (such as an accident or theft) which may or may not give rise to a claim.
            </Text>
          </View>
          <View style={styles.marginTop1}>
            <Text >
              We may use your personal information to prevent crime. In order to prevent crime we may check your personal information against our own databases and share it with
              fraud prevention agencies. Your personal information will be checked with and recorded by a fraud prevention agency. Other companies within the financial services
              industry may also search such fraud prevention agencies when you make an application to them for financial products (including credit, savings, insurance, stock
              broking or money transmission services). If such companies suspect fraud, we will share your relevant personal information with them. The information we share may
              be used by those companies when making decisions about you.

            </Text>
          </View>
          <View style={styles.marginTop1}>
            <Text style={[styles.textSm]}>
              Data from the Motor Insurance Database (MID) may be used to establish whether a driver is insured to drive a vehicle and/or for preventing or detecting crime. If you
              are involved in an accident in the UK or abroad, the MID may be searched to obtain relevant policy information. You can find out more at www.mib.org.uk. You should
              show this notice to anyone insured to drive the car covered under the policy.

            </Text>
          </View>
          <View style={[styles.heading1, styles.marginTop1]}>
            <Text style={styles.bold}>
              CUSTOMER SERVICE</Text>
          </View>
          <View >
            <Text style={[styles.textSm]}>
              We do everything possible to ensure that all persons taking out Optima Car are provided with the high standard of service they would expect of us. In the event that
              you have any cause for dissatisfaction in relation to your insurance policy, please write to the customer service advisor at our registered address. These procedures do
              not affect your legal rights.
            </Text>
          </View>

          <View style={[styles.heading1, styles.marginTop1]}>
            <Text style={styles.bold}>
              MAKING A CLAIM</Text>
          </View>
          <View >
            <Text style={[styles.textSm]}>
              If you want to make a claim, please phone 0845 126 2596 (+44 23 8062 1982 if you are phoning from outside the United Kingdom) as soon as possible. Lines are open
              24 hours a day. For broken glass, please phone 0800 174 764.
              Should your car be involved in an accident, phone us directly and we will validate your claim and discuss with you how your claim will be progressed.

            </Text>
          </View>


          <View style={[styles.heading1, styles.marginTop1]}>
            <Text style={styles.bold}>
              INSURER INFORMATION</Text>
          </View>
          <View >
            <Text style={[styles.textSm]}>
              Registered office address: Ageas Insurance Limited, Ageas House, Hampshire Corporate Park, Templars Way, Eastleigh, Hampshire, SO53 3YA. Registered in England
              and Wales No 354568.
              Ageas Insurance Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority.


            </Text>
          </View>
          <View style={styles.importantNote}>
            <Text>
              IMPORTANT
            </Text>
            <Text>
              There is no need to sign this document, as by agreeing to the declaration during the quotation process you have confirmed that you have read and agree to the Ageas / Proposer's Declaration

            </Text>
          </View>
          {/* <View style={styles.lastHeading1}>
            <Text >Ageas Insurance Limited, Ageas House, Hampshire Corporate Park, Templers Way, Eastleigh, Hampshire, SO53 3YA</Text>

          </View> */}
        </View>

      </View>
    </Page>


  </Document >
)

export default StatementFactAgeas;
