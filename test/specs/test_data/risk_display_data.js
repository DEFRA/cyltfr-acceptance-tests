module.exports = {
  riskDisplayData: [

    /* THE DATA FILE HAS BEEN CLEANED AND COMMENTS REMOVED, BUT I HAVE DUPLICATED THE ORIGINAL FILE, SEE risk_display_data_old.js
    NOT ALL PERMUATATIONS ARE CURRENTLY COVERED IN THE TEST DATA AND ANYTHING COMMENTED OUT IN THE OLD FILE MAY REQUIRE A POSTCODE
    THE PLAN WILL BE TO SPLIT THE TEST DATA OUT INTO SPECIFIC ARRAYS FOR EACH RISK TYPE AND CREATE A TEST FOR EACH RISK TYPE
    THIS WILL SPEED UP RUN TIME AND MAKE MAINTENANCE EASIER
    */
    {
      testCase: 0,
      houseNumber: 2,
      postcode: 'LE2 7QA',
      dropDownValue: '1',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: false
    },
    {
      testCase: 1,
      houseNumber: 101,
      postcode: 'LE4 5QD',
      dropDownValue: '25',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'Medium risk',
      reservoirRisk: true
    },
    {
      testCase: 2,
      houseNumber: 65,
      postcode: 'LE4 7SG',
      dropDownValue: '32',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: true
    },
    {
      testCase: 3,
      houseNumber: 11,
      postcode: 'CV37 6YZ',
      dropDownValue: '10',
      riverAndSeaRisk: 'Medium risk',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true
    },
    {
      testCase: 4,
      houseNumber: '20',
      postcode: 'LE3 5FD',
      dropDownValue: '11',
      riverAndSeaRisk: 'Medium risk',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true
    },
    {
      testCase: 5,
      houseNumber: 'THE STABLES HOUSE',
      postcode: 'NN6 8PH',
      dropDownValue: '28',
      riverAndSeaRisk: 'Medium risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false
    },
    {
      testCase: 6,
      houseNumber: 7,
      postcode: 'SW18 1TJ',
      dropDownValue: '0',
      riverAndSeaRisk: 'Low risk',
      surfaceWaterRisk: 'Medium risk',
      reservoirRisk: true
    },
    {
      testCase: 7,
      houseNumber: 21,
      postcode: 'LE3 5JR',
      dropDownValue: '14',
      riverAndSeaRisk: 'Low risk',
      surfaceWaterRisk: 'Medium risk',
      reservoirRisk: true
    },
    {
      testCase: 8,
      houseNumber: 2,
      postcode: 'NN6 6JP',
      dropDownValue: '1',
      riverAndSeaRisk: 'Low risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: true
    },
    {
      testCase: 9,
      houseNumber: 21,
      postcode: 'SW13 0DS',
      dropDownValue: '10',
      riverAndSeaRisk: 'Low risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: true
    },
    {
      testCase: 10,
      houseNumber: '27A',
      postcode: 'S6 4JP',
      dropDownValue: '19',
      riverAndSeaRisk: 'Medium risk',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true
    },
    {
      testCase: 11,
      houseNumber: 42,
      postcode: 'SS8 7EH',
      dropDownValue: '11',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false
    },
    {
      testCase: 12,
      houseNumber: 83,
      postcode: 'LE3 9RD',
      dropDownValue: '41',
      riverAndSeaRisk: 'Low risk',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true
    },
    {
      testCase: 13,
      houseNumber: 43,
      postcode: 'LE3 6AH',
      dropDownValue: '9',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true
    },
    {
      testCase: 14,
      houseNumber: 73,
      postcode: 'LE3 9RD',
      dropDownValue: '36',
      riverAndSeaRisk: 'Medium risk',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true
    },
    {
      testCase: 15,
      houseNumber: 3,
      postcode: 'NN6 6LE',
      dropDownValue: '1',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Medium risk',
      reservoirRisk: false
    },
    {
      testCase: 16,
      houseNumber: 2,
      postcode: 'ME10 2PS',
      dropDownValue: '1',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Medium risk',
      reservoirRisk: false
    },
    {
      testCase: 17,
      houseNumber: 6,
      postcode: 'BS20 6BQ',
      dropDownValue: '4',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false
    },
    {
      testCase: 18,
      houseNumber: 12,
      postcode: 'LE4 9BH',
      dropDownValue: '11',
      riverAndSeaRisk: 'Low risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: true
    },
    {
      testCase: 19,
      houseNumber: '1 BISHOPS COURT',
      postcode: 'DH1 2LY',
      dropDownValue: '0',
      riverAndSeaRisk: 'Low risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: true
    },
    // Very low risk //
    {
      testCase: 20,
      houseNumber: 'KENYON',
      postcode: 'WA3 7ED',
      dropDownValue: '2',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Very low risk',
      reservoirRisk: false
    },
    // Groundwater risk //
    {
      testCase: 21,
      houseNumber: 'BEECH LODGE',
      postcode: 'DN19 7DJ',
      dropDownValue: '0',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Very low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    // Very low risk - in TA but not GW (LTFRI-62)
    {
      testCase: 22,
      houseNumber: '10',
      postcode: 'S41 0FH',
      dropDownValue: '7',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Very low risk',
      reservoirRisk: false
    },
    // Very low risk - in a GW TA (LTFRI-62)
    {
      testCase: 23,
      houseNumber: 'BEECH LODGE',
      postcode: 'DN19 7DJ',
      dropDownValue: '0',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Very low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    // groundwater
    {
      testCase: 24,
      houseNumber: 'PARK VIEW COTTAGE',
      postcode: 'DN19 7DJ',
      dropDownValue: '14',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 25,
      houseNumber: 'BEECH LODGE',
      postcode: 'DN19 7DJ',
      dropDownValue: '0',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Very low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 26,
      houseNumber: 'CORNER COTTAGE',
      postcode: 'DN19 7DJ',
      dropDownValue: '4',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 27,
      houseNumber: 'INVERMAY',
      postcode: 'DN19 7DJ',
      dropDownValue: '7',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 28,
      houseNumber: 'PARKVIEW HOUSE',
      postcode: 'DN19 7DJ',
      dropDownValue: '15',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 29,
      houseNumber: '8',
      postcode: 'IP33 1YH',
      dropDownValue: '5',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true,
      groundwaterRisk: true
    },
    {
      testCase: 30,
      houseNumber: 'KEEDALE',
      postcode: 'DN19 7DJ',
      dropDownValue: '8',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 31,
      houseNumber: '12',
      postcode: 'DN19 7DT',
      dropDownValue: '11',
      riverAndSeaRisk: 'Medium risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 32,
      houseNumber: '17',
      postcode: 'DN19 7DT',
      dropDownValue: '15',
      riverAndSeaRisk: 'Medium risk',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    }
  ]
}
