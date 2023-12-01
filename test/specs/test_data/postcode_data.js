module.exports = {

  invalidPostcode: [
    {
      testCase: 1,
      postcode: 'WA4'
    },
    {
      testCase: 2,
      postcode: ''
    },
    {
      testCase: 3,
      postcode: 'WA4 1ABZ'
    },
    {
      testCase: 4,
      postcode: 'ZZZ ZZZ'
    },
    {
      testCase: 5,
      postcode: '£$% @~#*'
    },
    {
      testCase: 6,
      postcode: '0123456789'
    },
    {
      testCase: 7,
      postcode: 'ڀځڂڃڄڅ'
    },
    {
      testCase: 8,
      postcode: 'https://flood-warning-information.service.gov.uk/'
    },
    {
      testCase: 9,
      postcode: 'àáâãäåçèéêëìíîðñòôõöö'
    },
    {
      testCase: 10,
      postcode: '“ ‘ ` | / , ; : & < > ^ * ? Tab'
    },
    {
      testCase: 11,
      postcode: '‘select * from customer'
    },
    {
      testCase: 12,
      postcode: '^M'
    }
  ],
    //script injection results in silverline error message - use below for a seperate test
    silverlineError:[
    {
       testCase: 1,
      postcode: '<script>alert(\'alerting\')</script>'
     }
  ],
  northerIrelandPostcode: [
    {
      testCase: 1,
      postcode: 'BT8 4AA'
    }
  ],
  // added for Welsh and Scotland postcode error messages
  outsideUKpostcodes: [
    {
      testCase: 1,
      postcode: 'EH1 1HR'
    },
    {
      testCase: 2,
      postcode: 'CF14 3BL'
    }
  ],
  // added for valid postcode but results in empty result set
  emptyPostcode: [
    {
      testcase: 1,
      postcode: 'TQ72PM'
    }
  ]
}
