'use strict'

module.exports = {
  riskDisplayData: [

    /* THE DATA FILE HAS BEEN CLEANED AND COMMENTS REMOVED, BUT I HAVE DUPLICATED THE ORIGINAL FILE, SEE risk_display_data_old.js
    NOT ALL PERMUATATIONS ARE CURRENTLY COVERED IN THE TEST DATA AND ANYTHING COMMENTED OUT IN THE OLD FILE MAY REQUIRE A POSTCODE.
    THERE MAY ALSO BE DUPLICATES IN TERMS OF RISK COMBINATIONS WHICH SHOULD BE REMOVED IF FOUND
    */
    {
      testCase: 0,
      houseNumber: 2,
      postcode: 'LE2 7QA',
      dropDownValue: '1',
      riverAndSeaRisk: 'Rivers and the seaHigh risk of flooding',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 1,
      houseNumber: 101,
      postcode: 'LE4 5QD',
      dropDownValue: '25',
      riverAndSeaRisk: 'Rivers and the seaHigh risk of flooding',
      surfaceWaterRisk: 'Medium risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 2,
      houseNumber: 65,
      postcode: 'LE4 7SG',
      dropDownValue: '32',
      riverAndSeaRisk: 'Rivers and the seaHigh risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 3,
      houseNumber: 11,
      postcode: 'CV37 6YZ',
      dropDownValue: '10',
      riverAndSeaRisk: 'Rivers and the seaMedium risk of flooding',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 4,
      houseNumber: '20',
      postcode: 'LE3 5FD',
      dropDownValue: '11',
      riverAndSeaRisk: 'Rivers and the seaMedium risk of flooding',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 5,
      houseNumber: 'The Stables House',
      postcode: 'NN6 8PH',
      dropDownValue: '28',
      riverAndSeaRisk: 'Rivers and the seaMedium risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 6,
      houseNumber: 7,
      postcode: 'SW18 1TJ',
      dropDownValue: '0',
      riverAndSeaRisk: 'Rivers and the seaLow risk of flooding',
      surfaceWaterRisk: 'Medium risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 7,
      houseNumber: 21,
      postcode: 'LE3 5JR',
      dropDownValue: '14',
      riverAndSeaRisk: 'Rivers and the seaLow risk of flooding',
      surfaceWaterRisk: 'Medium risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 8,
      houseNumber: 2,
      postcode: 'NN6 6JP',
      dropDownValue: '1',
      riverAndSeaRisk: 'Rivers and the seaLow risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 9,
      houseNumber: 21,
      postcode: 'SW13 0DS',
      dropDownValue: '10',
      riverAndSeaRisk: 'Rivers and the seaLow risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 10,
      houseNumber: '27a',
      postcode: 'S6 4JP',
      dropDownValue: '21',
      riverAndSeaRisk: 'Rivers and the seaMedium risk of flooding',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 11,
      houseNumber: 42,
      postcode: 'SS8 7EH',
      dropDownValue: '11',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 12,
      houseNumber: 83,
      postcode: 'LE3 9RD',
      dropDownValue: '41',
      riverAndSeaRisk: 'Rivers and the seaLow risk of flooding',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 13,
      houseNumber: 43,
      postcode: 'LE3 6AH',
      dropDownValue: '9',
      riverAndSeaRisk: 'Rivers and the seaHigh risk of flooding',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 14,
      houseNumber: 73,
      postcode: 'LE3 9RD',
      dropDownValue: '36',
      riverAndSeaRisk: 'Rivers and the seaMedium risk of flooding',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 15,
      houseNumber: 3,
      postcode: 'NN6 6LE',
      dropDownValue: '1',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'Medium risk',
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 16,
      houseNumber: 2,
      postcode: 'ME10 2PS',
      dropDownValue: '1',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'Medium risk',
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 17,
      houseNumber: 6,
      postcode: 'BS20 6BQ',
      dropDownValue: '4',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 18,
      houseNumber: 12,
      postcode: 'LE4 9BH',
      dropDownValue: '11',
      riverAndSeaRisk: 'Rivers and the seaLow risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 19,
      houseNumber: '1 Bishops Court',
      postcode: 'DH1 2LY',
      dropDownValue: '0',
      riverAndSeaRisk: 'Rivers and the seaLow risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: true,
      groundwaterRisk: false
    },
    // Very low risk //
    {
      testCase: 20,
      houseNumber: 'Kenyon',
      postcode: 'WA3 7ED',
      dropDownValue: '2',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'Very low risk',
      reservoirRisk: false,
      groundwaterRisk: false
    },
    // Groundwater risk //
    {
      testCase: 21,
      houseNumber: 'Beech Lodge',
      postcode: 'DN19 7DJ',
      dropDownValue: '0',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
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
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'Very low risk',
      reservoirRisk: false,
      groundwaterRisk: false
    },
    // Very low risk - in a GW TA (LTFRI-62)
    {
      testCase: 23,
      houseNumber: 'Beech Lodge',
      postcode: 'DN19 7DJ',
      dropDownValue: '0',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'Very low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    // groundwater
    {
      testCase: 24,
      houseNumber: 'Park View Cottage',
      postcode: 'DN19 7DJ',
      dropDownValue: '14',
      riverAndSeaRisk: 'Rivers and the seaHigh risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 25,
      houseNumber: 'Beech Lodge',
      postcode: 'DN19 7DJ',
      dropDownValue: '0',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'Very low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 26,
      houseNumber: 'Corner Cottage',
      postcode: 'DN19 7DJ',
      dropDownValue: '4',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 27,
      houseNumber: 'Invermay',
      postcode: 'DN19 7DJ',
      dropDownValue: '7',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 28,
      houseNumber: 'Parkview House',
      postcode: 'DN19 7DJ',
      dropDownValue: '15',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 29,
      houseNumber: '8',
      postcode: 'IP33 1YH',
      dropDownValue: '5',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'High risk',
      reservoirRisk: true,
      groundwaterRisk: true
    },
    {
      testCase: 30,
      houseNumber: 'Keedale',
      postcode: 'DN19 7DJ',
      dropDownValue: '8',
      riverAndSeaRisk: 'Rivers and the seaVery low risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 31,
      houseNumber: '12',
      postcode: 'DN19 7DT',
      dropDownValue: '11',
      riverAndSeaRisk: 'Rivers and the seaMedium risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    },
    {
      testCase: 32,
      houseNumber: '17',
      postcode: 'DN19 7DT',
      dropDownValue: '15',
      riverAndSeaRisk: 'Rivers and the seaMedium risk of flooding',
      surfaceWaterRisk: 'Low risk',
      reservoirRisk: false,
      groundwaterRisk: true
    }
  ]
}
