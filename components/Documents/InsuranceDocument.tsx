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
    fontSize: 8,
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
    borderRight: 1,

    borderColor: "#000",
  },
  mainCertificateSection1: {

    borderLeft: 1,
    borderBottom: 1,
    marginBottom: '5',
    paddingBottom: '5',
    borderRight: 1,
    borderColor: "#000",
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
    borderBottomWidth: 1,
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
    padding: 5,
    borderRightWidth: 1,
    borderRightColor: "#000",
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
    flex: 0.5,
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
  underlinetext:
  {
    textDecoration: 'underline'

  },
  lastHeading:
  {
    textAlign: 'center',
    marginTop: '2',

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
  }
})

const InsuranceDocument = () => (
  <Document>
    {/* Page 1: Schedule */}
    <Page size="A4" style={styles.page}>
      {/* */}
      <View style={styles.mainCertificateSection}>
        <View style={styles.header}>
          <View>
            <Image src="/logo.png" style={styles.ageasLogo} width={140} height={70} alt="Ageas Logo" />

          </View>
          <View style={styles.addressBlock}>
            <View style={styles.schedule}>
              <Text style={styles.scheduleTitle}>Schedule</Text>
            </View>
            <View style={styles.schedule}>
              <Text style={styles.insuranceadvisor}>Insurance Advisor: Tempcover Ltd</Text>

            </View>
            <View style={styles.schedule}>
              <Text >2nd Floor Admiral House, Harlington Way</Text>

            </View>
            <View style={styles.schedule}>
              <Text style={styles.addressissuing}>Address of Issuing Office: Way</Text>

            </View>

            <View style={styles.schedule}>
              <Text style={styles.addressissuing1}>Fleet, Hampshire</Text>

            </View>
            <View style={styles.schedule}>
              <Text style={styles.addressissuing2}>GU51 4BB</Text>

            </View>
          </View>

        </View>


      </View>
      <View style={styles.mainCertificateSection}>
        <Text style={styles.schedulesubheading}>
          This schedule should be retained and read in conjunction with your policy wording
        </Text>

        {/* Details of Policyholder Table */}
        <View style={styles.scheduleTable}>
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Details of Policyholder</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellLarge]}>
              <Text>Uzzal Miah</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Additional drivers</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellLarge, styles.scheduleCellLast]}>
              <Text>N/A</Text>
            </View>
          </View>
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Address</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellLarge]}>
              <Text>14 Lindsey Road</Text>
              <Text>Dagenham, Greater London</Text>
              <Text>RM8 2RP</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text></Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellLarge, styles.scheduleCellLast]}>
              <Text></Text>
            </View>
          </View>
        </View>

        {/* Policy Details Table */}
        <View style={styles.scheduleTable}>
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Proposer's Occupation</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellLarge]}>
              <Text>Not required</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>NCD Years Given</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellLarge, styles.scheduleCellLast]}>
              <Text>N/A</Text>
            </View>
          </View>
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Policy Number</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellLarge]}>
              <Text>TCV-MOT-44072540</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Product</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellLarge, styles.scheduleCellLast]}>
              <Text>Private Car</Text>
            </View>
          </View>
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Effective From</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellLarge]}>
              <Text>09/06/2025 15:35</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>To</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellLarge, styles.scheduleCellLast]}>
              <Text>09/06/2026 15:35</Text>
            </View>
          </View>
        </View>
        <View style={styles.scheduleEmptyRow}>
          <Text style={styles.bold}>Vehicle Details:</Text>
        </View>
        {/* Vehicle Details Table */}
        <View style={styles.scheduleTable}>
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Make</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall]}>
              <Text>NISSAN</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Model</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall]}>
              <Text >MICRA TEMPEST</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Body Type</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall, styles.scheduleCellLast]}>
              <Text>N/A</Text>
            </View>
          </View>
          <View style={styles.scheduleEmptyRowSmall}>

          </View>
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall]}>
              <Text style={styles.bold}>CC</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall]}>
              <Text>N/A</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall]}>
              <Text style={styles.bold}>Year of Make</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall]}>
              <Text>N/A</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall]}>
              <Text style={styles.bold}>No. of seats</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellSmall, styles.scheduleCellLast]}>
              <Text>N/A</Text>
            </View>
          </View>
          <View style={styles.scheduleEmptyRowSmall}>

          </View>
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Vehicle Value including accessories and modifications</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text>£1,500 to £3,000</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Date of Purchase</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text>N/A</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Reg No</Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium, styles.scheduleCellLast]}>
              <Text>LF52BVB</Text>
            </View>
          </View>
        </View>

        {/* Cover Applying Table */}
        <View style={styles.scheduleTable}>
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Cover Applying</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text>Fully Comprehensive</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text style={styles.bold}></Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text></Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text style={styles.bold}></Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium, styles.scheduleCellLast]}>
              <Text></Text>
            </View>
          </View>
          <View style={styles.scheduleRow}>
            <View style={[styles.customWidth]}>
              <Text style={styles.bold}></Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text>Please refer to current Certificate of Motor Insurance for permitted drivers and limitations as to use.</Text>
            </View>

          </View>

          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
              <Text style={styles.bold}>Section Applying</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text>See Policy working</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text style={styles.bold}></Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text></Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
              <Text style={styles.bold}></Text>
            </View>
            <View style={[styles.scheduleCell, styles.scheduleCellMedium, styles.scheduleCellLast]}>
              <Text></Text>
            </View>
          </View>
          <View style={styles.scheduleEmptyRow}>
            <Text style={styles.bold}>Premium Details:</Text>
          </View>

        </View>





        {/* Premium Table */}
        <View style={styles.scheduleTable}>
          <View style={styles.scheduleRow}>
            <View style={[styles.customWidthCell, styles.scheduleCellWithoutBorder]}>
              <Text style={styles.bold}>Premium</Text>
            </View>
            <View style={[styles.customWidthCell, styles.scheduleCell1]}>
              <Text>18.00</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.customWidthCell]}>
              <Text style={styles.bold}>Inclusive of IPT:</Text>
            </View>
            <View style={[styles.scheduleCellWithoutBorder, styles.customWidthCell]}>
              <Text>18.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.scheduleEmptyRowWthCenterContent}>
          <Text style={styles.bold}>NOTIFICATION OF CHANGES TO THE RISK</Text>
        </View>

        {/* Notification of Changes to the Risk */}
        <View style={styles.boxedText1}>

          <Text>
            All changes to information previously supplied to us, must be notified to your insurance advisor shown above.

          </Text>
          <Text style={styles.marginTop}>
            If you do not, your policy may be treated as if it never existed, or your claim rejected or not fully paid.

          </Text>
          <Text style={styles.marginTop}>
            Due to the short-term nature of this policy, changes, additions or refunds are not available.

          </Text >
          <Text style={styles.marginTop}>
            For details see the Policy Conditions section of your policy wording.
          </Text>
        </View>

        <View style={styles.scheduleEmptyRow}>
          <Text style={styles.bold}>
            Endorsements Applying (Please also refer to your policy wording for full details of cover)
          </Text>
        </View>



        <View style={styles.scheduleRow}>
          <View style={[styles.scheduleCell2]}>
            <Text style={[styles.underlinetext, styles.bold]}>Code</Text>
            <Text style={styles.marginTop}>1.a</Text>
            <Text style={styles.marginTop}>1.b</Text>
            <Text style={styles.marginTop}>2</Text>
            <Text style={styles.marginTop}>3</Text>

          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={[styles.underlinetext, styles.bold]}>Description (see page 2 for the full endorsement wordings)</Text>
            <Text style={styles.marginTop}>Cooling-off Period</Text>
            <Text style={styles.marginTop}>Cancelling your cover</Text>
            <Text style={styles.marginTop}>Excluded sections</Text>
            <Text style={styles.marginTop}>Compulsory Excess </Text>

          </View>



        </View>
        <View style={styles.scheduleEmptyRow}>
          <Text style={styles.bold}>Policy Excess:</Text>
        </View>


        {/* Endorsements Applying (Summary on Page 1) */}
        <View style={styles.boxedText}>

          <Text style={styles.bold}>Any compulsory, voluntary and young / inexperienced driver accidental damage excesses must be added
          </Text>
          <Text style={styles.bold}>
            together to arrive at the total for each driver.</Text>

          <Text style={styles.bold}>

            The levels of young / inexperienced driver excess are detailed in your policy wording

          </Text>

        </View>
        <View style={styles.scheduleRow2}>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}></Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>Accidental Damage</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>Malicious Damage</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>Fire </Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>Theft</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium, styles.scheduleCellLast]}>
            <Text style={styles.bold}>Windscreen</Text>
          </View>
        </View>
        <View style={styles.scheduleRow2}>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>Voluntary Excess</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder,]}>
            <Text style={styles.bold}>£0.00</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>-</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>-</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>-</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium, styles.scheduleCellLast]}>
            <Text style={styles.bold}>-</Text>
          </View>
        </View>
        <View style={styles.scheduleRow2}>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>Compulsory Excess</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}> £500.00</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>£500.00</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>£500.00</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium]}>
            <Text style={styles.bold}>£500.00</Text>
          </View>
          <View style={[styles.scheduleCellWithoutBorder, styles.scheduleCellMedium, styles.scheduleCellLast]}>
            <Text style={styles.bold}>£50.00</Text>
          </View>
        </View>
        <View style={styles.scheduleRow3}>
          <View style={styles.schedulefirstcolumn}>
            <Text style={styles.bold}>Young Driver</Text>
          </View>
          <View >
            <Text style={styles.bold}> please see your policy wording</Text>
          </View>

        </View>

        {/* Policy Excesses Table */}


        {/* Company Info */}

      </View>
      <View style={styles.scheduleEmptySmallestRow}>

      </View>
      <View style={styles.scheduleRow4}>
        <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
          <Text style={styles.bold}>Reason for Issue</Text>
        </View>
        <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
          <Text>New Business</Text>
        </View>
        <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
          <Text style={styles.bold}>Date of Issue</Text>
        </View>
        <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
          <Text style={styles.bold}>09/06/2025</Text>
        </View>
        <View style={[styles.scheduleCell, styles.scheduleCellMedium]}>
          <Text style={styles.bold}>Policy Booklet Ref:</Text>
        </View>
        <View style={[styles.scheduleCell, styles.scheduleCellMedium, styles.scheduleCellLast]}>
          <Text>MUGR040 March 2014</Text>
        </View>

      </View>

      <View style={styles.lastHeading}>
        <Text >Ageas Insurance Limited, Ageas House, Hampshire Corporate Park, Templers Way, Eastleigh, Hampshire, SO53 3YA</Text>

      </View>
      <View style={styles.mainCertificateSection1}>
        <View style={styles.secondPageFirstContent}>
          <Text style={styles.bold}>
            The below Endorsements amend the policy booklet Optima Car (MUGR040). They should be read in
            conjunction with the Policy booklet, Schedule and the Certificate of Motor Insurance.

          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>
          <Text style={styles.bold}>
            Endorsement 1 a
          </Text>
          <Text >
            The ‘Cooling-off period’ shown on page 4 of the policy booklet does not apply.
          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>
          <Text style={styles.bold}>
            Endorsement 1 b
          </Text>
          <Text >
            Policy condition 6 ‘Cancelling you cover’, shown on page 13 of your policy booklet is removed and replaced by the
            following;

          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>
          <Text style={styles.bold}>
            6 Cancelling your cover
          </Text>
          <Text >
            If you want to cancel your policy you must write to tell us and send us your certificate of motor insurance at the same
            time. Due to the short term nature of this policy there will be no return of premium.

          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>

          <Text >
            We or your insurance broker or intermediary can cancel this policy by sending you seven days’ notice to your last known
            address. The reason for cancellation will be set out clearly in the communication with you. Valid reasons include, but will
            not be limited to, those listed below;
          </Text>
        </View>
        <View style={styles.thirdpagesubcontent}>

          <Text >
            - Changes to the information detailed on your proposal, statement of insurance or statement of fact, schedule or certificate of motor insurance which result in us no longer wishing to provide cover.
          </Text>
          <Text style={styles.marginTop}>
            -  Where the circumstances of a new claim, or an incident we have become aware of, result in us no
            longer wishing to provide cover.
          </Text>
          <Text style={styles.marginTop}>
            -   Where we suspect fraud on this or any other related policy.
          </Text>
          <Text style={styles.marginTop}>
            -   Where you, a person acting on your behalf, or any person covered to drive the vehicle uses
            threatening, intimidating or abusive behaviour or language towards our staff, suppliers or agents acting
            on our behalf, including your insurance adviser.
          </Text>
          <Text style={styles.marginTop}>
            -    Where any person claiming cover under this policy fails to provide us with any reasonable information
            we ask for.
          </Text>
          <Text style={styles.marginTop}>
            -    Where a misrepresentation has been made that results in us no longer wishing to provide cover.

          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>

          <Text >
            You must return the certificate of motor insurance to us. It is an offence under the Road Traffic Act not to return your
            certificate of motor insurance.
          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>

          <Text >
            If you sell or get rid of your car, you must tell us immediately. All cover under this policy will stop from the date the car is
            no longer in your possession.
          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>

          <Text style={styles.bold}>
            Endorsement 2
          </Text>
          <Text >
            The following sections do not apply to our contract with you:
          </Text>
          <View style={styles.listStyle}>
            <Text>
              Section 3 - Personal accident benefits.
            </Text>
            <Text>
              Section 7 - Hotel or travel expenses.
            </Text>
            <Text>
              Section 10 - No claim discount
            </Text>
            <Text>
              Section 11 - Temporary replacement car.
            </Text>
          </View>
        </View>
        <View style={styles.secondpagesubcontent}>
          <Text style={styles.bold}>
            Endorsement 3
          </Text>
          <Text >
            The below has been added to Section 2 – Loss of, or damage to, your car.

          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>
          <Text style={styles.bold}>
            Compulsory excess
          </Text>
          <Text >
            If your car or any of its accessories and spare parts are lost, stolen or damaged. A compulsory £500 excess will apply to
            all drivers. This will be in addition to any other compulsory and voluntary excesses set out in your schedule.

          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>
          <Text style={styles.bold}>
            Ageas Insurance Limited
          </Text>
          <Text >
            Registered office address
          </Text>
          <Text >
            Ageas House, Hampshire Corporate Park.
          </Text>
          <Text >
            Templars Way, Eastleigh, Hampshire SO53 3YA
          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>

          <Text >
            Registered in England and Wales No 354568
          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>

          <Text >
            Ageas Insurance Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct
            Authority and the Prudential Regulation Authority.
          </Text>
        </View>
        <View style={styles.secondpagesubcontent}>

          <Text >
            MU46 Jul 2014
          </Text>
        </View>
      </View>
      <View style={styles.lastHeading}>
        <Text >Ageas Insurance Limited, Ageas House, Hampshire Corporate Park, Templers Way, Eastleigh, Hampshire, SO53 3YA</Text>

      </View>
    </Page>


  </Document >
)

export default InsuranceDocument
