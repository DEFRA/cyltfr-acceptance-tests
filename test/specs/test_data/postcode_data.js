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
      postcode: 'WA4 ABZ'
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
  // script injection results in silverline error message - use below for a seperate test
  silverlineError: [
    {
      testCase: 1,
      postcode: '<script>alert(\'alerting\')</script>'
    }
  ],
  northerIrelandPostcode: [
    {
      testCase: 1,
      postcode: 'BT38 7BG'
    }
  ],
  // added for Welsh and Scotland postcode error messages
  scotlandPostcode: [
    {
      testCase: 1,
      postcode: 'EH1 1HR'
    }
  ],
  walesPostcode: [
    {
      testCase: 1,
      postcode: 'CF14 3BL'
    }
  ]
}
