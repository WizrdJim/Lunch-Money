const SchoolList = [

{ Name: "Dudley",
  Donations: 5600,
  Image: "url",
  State: "North Carolina",
  Id: 1,
  Founded: 1930,
  DonationsNeeded: 12000,
  Phone: 3365555555,
  Email: "dudley@edu.com",
  City: "Greensboro",
  Zip: 12345,
  Mascot: "Eagle",
  Address: "123 Seasame Street",
},

{
  Name: "Jackson Middle School",
  Donations: 15600,
  Image: "url",
  State: "Georgia",
  Id: 2,
  Founded: 1900,
  DonationsNeeded: 21000,
  Phone: 4045555555,
  Email: "jacksonmiddle@edu.com",
  City: "Atlanta",
  Zip: 12346,
  Mascot: "Dragon",
  Address: "9010 Willough Lane",
},

{
Name: "Victor Scott Elementry",
  Donations: 7600,
  Image: "url",
  State: "Texas",
  Id: 3,
  Founded: 1930,
  DonationsNeeded: 12000,
  Phone: 3365555555,
  Email: "victorscottk5@edu.com",
  City: "Dallas",
  Zip: 12445,
  Mascot: "Lion",
  Address: "123 Seasame Street",
},

{
Name: "Bradley Cooper Elementary",
  Donations: 500,
  Image: "url",
  State: "California",
  Id: 4,
  Founded: 1913,
  DonationsNeeded: 10060,
  Phone: 8085555555,
  Email: "bradleycoopermiddle@edu.com",
  City: "Palo Alto",
  Zip: 33856,
  Mascot: "Patriot",
  Address: "90 Sussman Drive",
},

{
Name: "Charlie Kelly Middle School",
  Donations: 0,
  Image: "url",
  State: "Pennsylvania",
  Id: 5,
  Founded: 2000,
  DonationsNeeded: 10000,
  Phone: 3035555555,
  Email: "chrliekllymdl@edu.com",
  City: "Philadelphia",
  Zip: 37005,
  Mascot: "Bird",
  Address: "709 Bullyton Lane",
},

{
Name: "James B. Morgan",
  Donations: 5900,
  Image: "url",
  State: "New York",
  Id: 6,
  Founded: 1930,
  DonationsNeeded: 12390,
  Phone: 9095555555,
  Email: "jamesbmorgan@edu.com",
  City: "Brooklyn",
  Zip: 89845,
  Mascot: "Tiger",
  Address: "168 16th ave",
},

{
Name: "Weaver Academy",
  Donations: 6600,
  Image: "url",
  State: "North Carolina",
  Id: 7,
  Founded: 1930,
  DonationsNeeded: 35900,
  Phone: 8965555555,
  Email: "weaveracademy@edu.com",
  City: "Charlotte",
  Zip: 19045,
  Mascot: "Bear",
  Address: "938 Sir Walter Raleigh Drive",
}

];



export default SchoolList;

const moneyFormat = (float) =>  {
  let end = Math.round((float % 1) / 0.01) || '00';
  if (0 < end && end < 10) end = '0' + end;
  let left = Math.floor(float).toString();
  let str = `${left.slice(-3)}.${end}`;
  left = left.slice(0, -3);
  while(left.length > 3) {
    const nextThree = left.slice(-3);
    str = `${nextThree} ${str}`;
    left = left.slice(0, -3);
  }
  str = `${left} ${str}`;
  return str;
}