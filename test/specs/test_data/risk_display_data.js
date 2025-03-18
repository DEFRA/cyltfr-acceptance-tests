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
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'Medium to High risk',
      riverAndSeaDepth: true,
      surfaceWaterDepth: true,
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 1,
      houseNumber: 99,
      postcode: 'LE4 5QD',
      dropDownValue: '25',
      riverAndSeaRisk: 'Medium to High risk',
      surfaceWaterRisk: 'Low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 2,
      houseNumber: 65,
      postcode: 'LE4 7SG',
      dropDownValue: '32',
      riverAndSeaRisk: 'Low to Medium risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    // High RS with Very Low SW data is missing at the moment
    {
      testCase: 3,
      houseNumber: 11,
      postcode: 'CV37 6YZ',
      dropDownValue: '10',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 4,
      houseNumber: 61,
      postcode: 'S6 4JP',
      dropDownValue: '12',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'Low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 5,
      houseNumber: '12',
      postcode: 'DN19 7DT',
      dropDownValue: '11',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: false,
      groundwaterRisk: true
    },
    // Medium RS with Very Low SW missing
    {
      testCase: 6,
      houseNumber: 83,
      postcode: 'LE3 9RD',
      dropDownValue: '41',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 7,
      houseNumber: 21,
      postcode: 'LE3 5JR',
      dropDownValue: '14',
      riverAndSeaRisk: 'Medium to High risk',
      surfaceWaterRisk: 'Low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 8,
      houseNumber: 21,
      postcode: 'SW13 0DS',
      dropDownValue: '10',
      riverAndSeaRisk: 'Low risk',
      surfaceWaterRisk: 'Low to Medium risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 9,
      houseNumber: '71',
      postcode: 'WA4 1AB',
      dropDownValue: '2',
      riverAndSeaRisk: 'Low to Medium risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 10,
      houseNumber: '3',
      postcode: 'DL10 7RZ',
      dropDownValue: '2',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 11,
      houseNumber: '4',
      postcode: 'DL10 7UA',
      dropDownValue: '3',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 12,
      houseNumber: '1',
      postcode: 'DL7 0RT',
      dropDownValue: '0',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 13,
      houseNumber: '2',
      postcode: 'DL7 0RX',
      dropDownValue: '1',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 14,
      houseNumber: '6',
      postcode: 'DN14 5AD',
      dropDownValue: '5',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'Very low to Low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 15,
      houseNumber: '8',
      postcode: 'DN14 5AN',
      dropDownValue: '6',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 16,
      houseNumber: 12,
      postcode: 'LE2 7QA',
      dropDownValue: '7',
      riverAndSeaRisk: 'High risk',
      surfaceWaterRisk: 'Low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 17,
      houseNumber: '10',
      postcode: 'TA8 1LD',
      dropDownValue: '9',
      riverAndSeaRisk: 'Low to no data risk',
      surfaceWaterRisk: 'Low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 18,
      houseNumber: '27a',
      postcode: 'S6 4JP',
      dropDownValue: '21',
      riverAndSeaRisk: 'Medium risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: true,
      groundwaterRisk: false
    },
    {
      testCase: 19,
      houseNumber: '66',
      postcode: 'TW3 1XL',
      dropDownValue: '8',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Very low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 20,
      houseNumber: '315',
      postcode: 'TW3 3SE',
      dropDownValue: '11',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: false,
      groundwaterRisk: false
    },
    {
      testCase: 21,
      houseNumber: '315',
      postcode: 'TW3 3SE',
      dropDownValue: '11',
      riverAndSeaRisk: 'Very low risk',
      surfaceWaterRisk: 'Low risk',
      riverAndSeaDepth: false,
      surfaceWaterDepth: false,
      reservoirRisk: false,
      groundwaterRisk: false
    }
  ]
}
