module.exports = {
  riskDisplayData: [
    
    /* NOTE THIS FILE IS JUST A BACK UP OF THE ORINGINAL DATA FILE.  THERES LOTS OF STUFF COMMENTED OUT AND ITS JUST ONE LARGE DATA FILE
    THOUGHTS THIS CAN BE BROKEN DOWN PER RISK TYPE AND THE TEST SPLIT OUT, THIS WILL REDUCE RUN TIME AND MAKE IT EASIER FOR MAINTAINANCE.
    IT'S LIKELY THIS FILE WILL BE REMOVED AT SOME POINT SOON.
    */
    
    
    // * Lines commented out do not currently have postcode to meet the test case permuatation//
    // ** Each permuatation duplicated with a view that reservoir flood risk may be added at later date//

    // At Risk Sign Up - High R&S Risk with variant SW Risk //

    //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.High, reservoirRisk: true },
    {
      testCase: 0,
      houseNumber: 2,
      postcode: 'LE2 7QA',
      dropDownValue: '1',
      riverAndSeaRisk: 'High Risk',
      surfaceWaterRisk: 'High Risk',
      reservoirRisk: false
    },
    //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: 'Medium', reservoirRisk: true },
    {
      testCase: 1,
      houseNumber: 101,
      postcode: 'LE4 5QD',
      dropDownValue: '25',
      riverAndSeaRisk: 'High Risk',
      surfaceWaterRisk: 'Medium Risk',
      reservoirRisk: true
    }
    //  { postcode: 'POSTCODE', dropDownValue: XX2465065006,
    // riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: 'Medium', reservoirRisk: true },
    {
      testCase: 2,
      houseNumber: 65,
      postcode: 'LE4 7SG',
      dropDownValue: '32',
      riverAndSeaRisk: 'High',
      surfaceWaterRisk: 'Low',
      reservoirRisk: true
    },
    // //  { postcode: 'POSTCODE', dropDownValue: XX,
    // //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: 'Low', reservoirRisk: true },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: 'Low', reservoirRisk: false },

    // // Medium R&S Risk with variant SW Risk//
    {
      testCase: 3,
      houseNumber: 11,
      postcode: 'CV37 6YZ',
      dropDownValue: '10',
      riverAndSeaRisk: 'Medium Risk',
      surfaceWaterRisk: 'High Risk',
      reservoirRisk: true
    },
    // //  { postcode: 'POSTCODE', dropDownValue: 77079867,
    // //  riverAndSeaRisk: 'Medium', surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
    {
      testCase: 4,
      houseNumber: '20',
      postcode: 'LE3 5FD',
      dropDownValue: '11',
      riverAndSeaRisk: 'Medium Risk',
      surfaceWaterRisk: 'High Risk',
      reservoirRisk: true
    },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: 'Medium', surfaceWaterRisk: 'Medium', reservoirRisk: false },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: 'Medium', surfaceWaterRisk: 'Low', reservoirRisk: true },
    {
      testCase: 5,
      houseNumber: 'THE STABLES HOUSE',
      postcode: 'NN6 8PH',
      dropDownValue: '28',
      riverAndSeaRisk: 'Medium Risk',
      surfaceWaterRisk: 'Low',
      reservoirRisk: false
    },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: 'Medium', surfaceWaterRisk: 'Low', reservoirRisk: true },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: 'Medium', surfaceWaterRisk: 'Low', reservoirRisk: false },

    // // Low R&S Risk with variant SW Risk//
    {
      testCase: 6,
      houseNumber: 7,
      postcode: 'SW18 1TJ',
      dropDownValue: '0',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Medium Risk',
      reservoirRisk: true
    },
    // //   houseNumber: 70,
    // //   postcode: 'W6 0XL',
    // //   dropDownValue: 34002373,
    // //   riverAndSeaRisk: 'Low',
    // //   surfaceWaterRisk: RiskLevel.High,
    // //   reservoirRisk: false },
    // //  { postcode: 'POSTCODE', dropDownValue: XX77079867,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Medium', reservoirRisk: true },
    {
      testCase: 7,
      houseNumber: 21,
      postcode: 'LE3 5JR',
      dropDownValue: '14',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Medium Risk',
      reservoirRisk: true
    },
    {
      testCase: 8,
      houseNumber: 2,
      postcode: 'NN6 6JP',
      dropDownValue: '1',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Low',
      reservoirRisk: true
    },
    {
      testCase: 9,
      houseNumber: 21,
      postcode: 'SW13 0DS',
      dropDownValue: '10',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Low',
      reservoirRisk: true
    },
    // //   houseNumber: 28,
    // //   postcode: 'TW9 3BH',
    // //   dropDownValue: 100022308486,
    // //   riverAndSeaRisk: 'Low',
    // //   surfaceWaterRisk: 'Low',
    // //   reservoirRisk: true },
    // //   houseNumber: 'KELSON HOUSE',
    // //   postcode: 'E14 3JL',
    // //   dropDownValue: 6080809,
    // //   riverAndSeaRisk: 'Low',
    // //   surfaceWaterRisk: 'Low',
    // //   reservoirRisk: false },

    // // Very Low R&S Risk with variant SW Risk//
    {
      testCase: 10,
      houseNumber: '27A',
      postcode: 'S6 4JP',
      dropDownValue: '19',
      riverAndSeaRisk: 'Medium Risk',
      surfaceWaterRisk: 'High Risk',
      reservoirRisk: true
    },
    // // { postcode: 'SS8 9RH', dropDownValue: 100090372402,
    // // riverAndSeaRisk: 'Low', surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Medium', reservoirRisk: true },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Medium', reservoirRisk: false },
    // // { postcode: 'POSTCODE', dropDownValue: 100090378533,
    // // riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Low', reservoirRisk: true },
    {
      testCase: 11,
      houseNumber: 42,
      postcode: 'SS8 7EH',
      dropDownValue: '11',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Low',
      reservoirRisk: false
    },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Low', reservoirRisk: true },
    // //  { postcode: 'POSTCODE', dropDownValue: XX,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Low', reservoirRisk: false },

    // // At Risk Monitor - High R&S Risk with variant SW Risk //

    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.High, reservoirRisk: true },
    // //  { postcode: 'POSTCODE', dropDownValue: xx,
    // //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: 'Medium', reservoirRisk: true },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: 'Medium', reservoirRisk: false },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: 'Low', reservoirRisk: true },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: 'Low', reservoirRisk: false },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // // riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: 'Low', reservoirRisk: true },
    // // { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: RiskLevel.High, surfaceWaterRisk: 'Low', reservoirRisk: false },

    // // Medium R&S Risk with variant SW Risk//
    {
      testCase: 12,
      houseNumber: 83,
      postcode: 'LE3 9RD',
      dropDownValue: '41', // Target area https://flood-warning-information.service.gov.uk/target-area/034WAF402 expanded February 2018
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'High Risk',
      reservoirRisk: true
    },
    // //  { postcode: 'POSTCODE', dropDownValue: 77079867,
    // //  riverAndSeaRisk: 'Medium', surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: 'Medium', surfaceWaterRisk: 'Medium', reservoirRisk: true },
    // // { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // // riverAndSeaRisk: 'Medium', surfaceWaterRisk: 'Medium', reservoirRisk: false },
    // // { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // // riverAndSeaRisk: 'Medium', surfaceWaterRisk: 'Low', reservoirRisk: true },
    {
      testCase: 13,
      houseNumber: 43,
      postcode: 'LE3 6AH',
      dropDownValue: '9',
      riverAndSeaRisk: 'High Risk',
      surfaceWaterRisk: 'High Risk',
      reservoirRisk: true
    },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: 'Medium', surfaceWaterRisk: 'Low', reservoirRisk: true },
    // // { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // // riverAndSeaRisk: 'Medium', surfaceWaterRisk: 'Low', reservoirRisk: false },

    // // Low R&S Risk with variant SW Risk//
    {
      testCase: 14,
      houseNumber: 73,
      postcode: 'LE3 9RD',
      dropDownValue: '36',
      riverAndSeaRisk: 'Medium Risk',
      surfaceWaterRisk: 'High Risk',
      reservoirRisk: true
    },
    // //  { postcode: 'POSTCODE', dropDownValue: xxx,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
    // //  { postcode: 'POSTCODE', dropDownValue: XX77079867,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Medium', reservoirRisk: true },
    {
      testCase: 15,
      houseNumber: 3,
      postcode: 'NN6 6LE',
      dropDownValue: '1',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Medium Risk Risk',
      reservoirRisk: false
    },
    // // Very Low R&S Risk with variant SW Risk//
    // //  { postcode: 'POSTCODE', dropDownValue: XX879331,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: RiskLevel.High, reservoirRisk: true },
    // //  { postcode: 'POSTCODE', dropDownValue: xx,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: RiskLevel.High, reservoirRisk: false },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Medium', reservoirRisk: true },
    {
      testCase: 16,
      houseNumber: 2,
      postcode: 'ME10 2PS',
      dropDownValue: '1',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Medium Risk Risk',
      reservoirRisk: false
    },

    // // Low Risk permuatations //
    // //  { postcode: 'POSTCODE', dropDownValue: XX33001217,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Low', reservoirRisk: true },
    // //  { postcode: 'POSTCODE', dropDownValue: XX33010458,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Low', reservoirRisk: true },
    // //  { postcode: 'POSTCODE', dropDownValue: xx77079867,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Low', reservoirRisk: false },
    // //  { postcode: 'POSTCODE', dropDownValue: XX200000879311,
    // //  riverAndSeaRisk: 'Low', surfaceWaterRisk: 'Low', reservoirRisk: true },
    {
      testCase: 17,
      houseNumber: 6,
      postcode: 'BS20 6BQ',
      dropDownValue: '4',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Low',
      reservoirRisk: false
    },
    {
      testCase: 18,
      houseNumber: 12,
      postcode: 'LE4 9BH',
      dropDownValue: '11',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Low',
      reservoirRisk: true
    },
    {
      testCase: 19,
      houseNumber: '1 BISHOPS COURT',
      postcode: 'DH1 2LY',
      dropDownValue: '0',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Low',
      reservoirRisk: true
    },
    // Very low risk //
    {
      testCase: 20,
      houseNumber: 'KENYON',
      postcode: 'WA3 7ED',
      dropDownValue: '2',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Low',
      reservoirRisk: false
    },
    // Groundwater risk //
    {
      testCase: 21,
      houseNumber: 'BEECH LODGE',
      postcode: 'DN19 7DJ',
      dropDownValue: '0',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Low',
      reservoirRisk: false,
      isGroundwaterArea: true
    },
    // Very low risk - in TA but not GW (LTFRI-62)
    {
      testCase: 22,
      houseNumber: '10',
      postcode: 'S41 0FH',
      dropDownValue: '7',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Low',
      reservoirRisk: false
    },
    // Very low risk - in a GW TA (LTFRI-62)
    {
      testCase: 23,
      houseNumber: 'BEECH LODGE',
      postcode: 'DN19 7DJ',
      dropDownValue: '0',
      riverAndSeaRisk: 'Low',
      surfaceWaterRisk: 'Low',
      reservoirRisk: false,
      isGroundwaterArea: true
    }
  ]
}

