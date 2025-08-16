"use client"

import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer"

// You can register custom fonts if needed, for example:
// Font.register({ family: 'Roboto', src: '/fonts/Roboto-Regular.ttf' });

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    fontFamily: "Helvetica", // Default font, widely supported
    fontSize: 10,
    lineHeight: 1.4,
    position: "relative", // For absolute positioning of elements if needed
  },
  header: {

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  addressBlock: {
    borderWidth: 1,
    borderColor: "#000",
    fontWeight: "bold",
    padding: 10,
    width: "60%", // Adjust width as needed
    marginBottom: 20,
  },
  ageasLogo: {
    width: 130,
    height: 100,
    position: "absolute",
    top: 0,
    right: 0,
  },
  certification: {
    borderLeft: 1,
    borderRight: 1,
    borderTop: 0.5,
    borderBottom: 1,
    borderColor: "#000",
    padding: 10,
    textAlign: "justify",

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
    marginBottom: 10,
  },
  certificateTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  mainCertificateSection: {
    borderTop: 1,
    borderLeft: 1,
    borderRight: 1,
    borderColor: "#000",
    padding: 10,

  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  listItemNumber: {
    width: 10,
    marginRight: 5,
  },
  listItemContent: {
    flex: 1,
  },
  subListItem: {
    marginLeft: 20,
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
  TCV: {
    width: 150,
    marginLeft: 20,
    fontWeight: 'bold'
  },
  LF:
  {
    marginLeft: 80
  },
  marginTop:
  {
    marginTop: 10
  },
  marginTop2:
  {
    marginTop: 5
  },
  office:
  {
    textAlign: "center",
    marginTop: 10

  },
  heading:
  {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center'
  }
})

const MotorInsuranceCertificate = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.addressBlock}>
          <Text>Uzzal Miah</Text>
          <Text>14 Lindsey Road</Text>
          <Text>Dagenham, Greater London</Text>
          <Text>RM8 2RP</Text>
        </View>

        <Image src="/logo.png" style={styles.ageasLogo} width={140} height={70} alt="Ageas Logo" />
      </View>

      <Text style={{ textAlign: "center", marginBottom: 10, fontSize: 10 }}>
        Please detach the certificate of insurance below and keep it in a safe place
      </Text>
      <View style={styles.dottedLine} />
      <Text style={styles.certificateTitle}>CERTIFICATE OF MOTOR INSURANCE</Text>

      <View style={styles.mainCertificateSection}>

        <View style={styles.listItem}>
          <Text style={styles.listItemNumber}>1.</Text>
          <Text style={styles.listItemContent}>
            <Text>a) Registration mark of vehicle. </Text>
          </Text>
          <Text style={styles.TCV}>TCV-MOT-44072540</Text>

        </View>
        <View style={[styles.listItem, styles.subListItem]}>
          <Text style={[styles.listItemContent, styles.LF]}>
            <Text style={styles.bold}>LF52BVB</Text>
          </Text>
        </View>
        <View style={[styles.listItem, styles.marginTop]}>
          <Text style={styles.listItemNumber}></Text>
          <Text style={styles.listItemContent}>
            b) Any vehicle supplied to the policyholder under an agreement between Ageas Insurance Limited and a repairer,
            whilst the vehicle shown in a) above is being repaired by that repairer as a direct result of damage covered
            by this policy, unless cover is provided by the repairer’s own insurance policy.
          </Text>
        </View>
        <View style={[styles.listItem, styles.marginTop2]}>
          <Text style={styles.listItemNumber}>2.</Text>
          <Text style={styles.listItemContent}>
            <Text>Description of vehicle.</Text>

          </Text>
        </View>
        <View style={[styles.listItem, styles.subListItem]}>
          <Text style={[styles.listItemContent, styles.LF]}>
            <Text style={styles.bold}>NISSAN MICRA TEMPEST</Text>
          </Text>
        </View>
        <View style={[styles.listItem, styles.marginTop2]}>
          <Text style={styles.listItemNumber}>3.</Text>
          <Text style={styles.listItemContent}>
            <Text>Name of policyholder.</Text>

          </Text>
        </View>
        <View style={[styles.listItem, styles.subListItem]}>
          <Text style={[styles.listItemContent, styles.LF]}>
            <Text style={styles.bold}>Mr Uzzal Miah</Text>
          </Text>
        </View>
        <View style={[styles.listItem, styles.marginTop2]}>
          <Text style={styles.listItemNumber}>4.</Text>
          <Text style={styles.listItemContent}>
            <Text>Effective date of commencement of insurance for the purposes of the relevant law.</Text>

          </Text>
        </View>
        <View style={[styles.listItem, styles.subListItem]}>
          <Text style={[styles.listItemContent, styles.LF]}>
            <Text style={styles.bold}>09 Jun 2025 15:35</Text>
          </Text>
        </View>
        <View style={[styles.listItem, styles.marginTop2]}>
          <Text style={styles.listItemNumber}>5.</Text>
          <Text style={styles.listItemContent}>
            <Text>Date of expiry of insurance.</Text>

          </Text>
        </View>
        <View style={[styles.listItem, styles.subListItem]}>
          <Text style={[styles.listItemContent, styles.LF]}>
            <Text style={styles.bold}>09 Jun 2025 16:35</Text>
          </Text>
        </View>
        <View style={[styles.listItem, styles.marginTop2]}>
          <Text style={styles.listItemNumber}>6.</Text>
          <Text style={styles.listItemContent}>
            <Text>Persons or classes of persons entitled to drive.</Text>
            <Text>
              Those specified below; provided that the person driving holds a licence to drive the vehicle or has held
              and is not disqualified from holding or obtaining such a licence.
            </Text>

          </Text>
        </View>
        <View style={[styles.listItem, styles.subListItem]}>
          <Text style={[styles.listItemContent, styles.LF]}>
            <Text style={styles.bold}>Mr Uzzal Miah</Text>
          </Text>
        </View>


        <View style={[styles.listItem, styles.marginTop2]}>
          <Text style={styles.listItemNumber}>7.</Text>
          <Text style={styles.listItemContent}>
            <Text>Limitations as to use subject to the exclusions below.</Text>
            <Text style={[styles.bold, { marginTop: 5 }]}>

            </Text>
            <Text style={[styles.bold, { marginTop: 5 }]}>The insurance does not cover:</Text>
            <Text style={styles.subListItem}>
              Use for racing, pacemaking, competition, rallies trials or speedtesting.
            </Text>
            <Text style={styles.subListItem}>
              Use to secure the release of a motor vehicle, which has been seized by, or on behalf of, any Government or
              public authority.
            </Text>
          </Text>
        </View>
        <View style={[styles.listItem, styles.subListItem]}>
          <Text style={[styles.listItemContent, styles.LF]}>
            <Text style={styles.bold}> Use for social Domestic and Pleasure purposes and use in person by the Policyholder in connection with
              their business or profession.</Text>
          </Text>
        </View>

        <View style={[styles.listItem, styles.marginTop2]}>


          <Text style={styles.subListItem}>
            The insurance does not cover:
          </Text>


        </View>
        <View style={[styles.listItem]}>


          <Text style={styles.subListItem}>
            Use for racing, pacemaking, competition, rallies trials or speedtesting.
          </Text>


        </View>
        <View style={[styles.listItem]}>


          <Text style={styles.subListItem}>
            Use to secure the release of a motor vehicle, which has been seized by, or on behalf of, any Government or
            public authority.
          </Text>


        </View>




      </View>
      <View style={styles.certification}>
        <View>
          <Text>
            I hereby certify that the policy to which this certificate relates satisfies the requirements of the
            relevant law applicable in Great Britain, Northern Ireland, the Isle of Man, the Island of Guernsey, the
            Island of Jersey and the Island of Alderney
          </Text>
        </View>
        <View style={[styles.listItem, styles.subListItem]}>
          <Text style={[styles.listItemContent, styles.LF]}>
            <Text style={styles.bold}>TEMPCOVER LTD</Text>
          </Text>
        </View>
        <View style={styles.marginTop2}>
          <Text>
            AUTHENTICATED as authorised agent on behalf of the Insurer
          </Text>
        </View>
      </View>

      <View style={styles.certification}>
        <View>
          <Text>
            NOTE : for full details of the insurance cover reference should be made to the policy
          </Text>
        </View>
        <View>
          <Text>
            ADVICE TO THIS PARTIES: Nothing contained in this certificate affects your as a third party to make a calm
          </Text>
        </View>
        <View>
          <Text>
            WARNING: This certificate has been prepared using a laser printer and is not valid if altered in any way
          </Text>
        </View>

      </View>
      <View >
        <Text style={styles.office}>
          Registered office address: Ageas House, Hampshire Corporate Park, Templers Way, Eastleigh, Hampshire, SO53 3YA Registered in England and Wales No 354568
        </Text>
      </View>
      <Text style={styles.heading}>Claims Hotline: 03332413392</Text>


    </Page>
  </Document>
)

export default MotorInsuranceCertificate
