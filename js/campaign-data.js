/**
 * Represents an array of arrays of objects.
 * @typedef {Array<Array<{
 *   price: number,
 *   owner: string,
 *   sold: boolean,
 *   ballType: 'americanball' | 'basketball' | 'tennis' | 'football' | 'golf'
 * }>>} campaignData
 */
const campaignData = [
  [
    {
      ballType: "americanball",
      price: 10,
      owner: "JOE SEIGERT",
    },
    {
      ballType: "americanball",
      price: 10,
      owner: "BARBARA TRAVERS",
    },
    {
      ballType: "americanball",
      price: 10,
      owner: "MARY PAT SADDLER",
    },
    {
      ballType: "americanball",
      price: 10,
    },
    {
      ballType: "americanball",
      price: 10,
    },
    {
      ballType: "americanball",
      price: 10,
    },
    {
      ballType: "americanball",
      price: 10,
    },
    {
      ballType: "americanball",
      price: 10,
    },
    {
      ballType: "americanball",
      price: 10,
    },
    {
      ballType: "americanball",
      price: 10,
    },
  ],
  [
    {
      ballType: "tennis",
      price: 20,
      owner: "KEVIN WHITESIDE",
    },
    {
      ballType: "tennis",
      price: 20,
      owner: "BARBARA TRAVERS",
    },
    {
      ballType: "tennis",
      price: 20,
      owner: "ANDREW HAMMER",
    },
    {
      ballType: "tennis",
      price: 20,
      owner: "DREW HALL",
    },
    {
      ballType: "tennis",
      price: 20,
    },
    {
      ballType: "tennis",
      price: 20,
    },
    {
      ballType: "tennis",
      price: 20,
    },
    {
      ballType: "tennis",
      price: 20,
    },
    {
      ballType: "tennis",
      price: 20,
    },
    {
      ballType: "tennis",
      price: 20,
    },
  ],
  [
    {
      ballType: "football",
      price: 30,
      owner: "BARBARA TRAVERS",
    },
    {
      ballType: "football",
      price: 30,
      owner: "BARBARA TRAVERS",
    },
    {
      ballType: "football",
      price: 30,
    },
    {
      ballType: "football",
      price: 30,
    },
    {
      ballType: "football",
      price: 30,
    },
    {
      ballType: "football",
      price: 30,
    },
    {
      ballType: "football",
      price: 30,
    },
    {
      ballType: "football",
      price: 30,
    },
    {
      ballType: "football",
      price: 30,
    },
    {
      ballType: "football",
      price: 30,
    },
  ],
  [
    {
      ballType: "basketball",
      price: 40,
      owner: "KITTY DUFFY",
    },
    {
      ballType: "basketball",
      price: 40,
      owner: "BARBARA TRAVERS",
    },
    {
      ballType: "basketball",
      price: 40,
    },
    {
      ballType: "basketball",
      price: 40,
    },
    {
      ballType: "basketball",
      price: 40,
    },
    {
      ballType: "basketball",
      price: 40,
    },
    {
      ballType: "basketball",
      price: 40,
    },
    {
      ballType: "basketball",
      price: 40,
    },
    {
      ballType: "basketball",
      price: 40,
    },
    {
      ballType: "basketball",
      price: 40,
    },
  ],
  [
    {
      ballType: "golf",
      price: 50,
      owner: "TOM ECK",
    },
    {
      ballType: "golf",
      price: 50,
      owner: "LISA REVORD",
    },
    {
      ballType: "golf",
      price: 50,
      owner: "KEVIN CARROL",
    },
    {
      ballType: "golf",
      price: 50,
      owner: "MIKE BRANT",
    },
    {
      ballType: "golf",
      price: 50,
      owner: "RACHEL DOUGHERTY HENDRICKS",
    },
    {
      ballType: "golf",
      price: 50,
    },
    {
      ballType: "golf",
      price: 50,
    },
    {
      ballType: "golf",
      price: 50,
    },
    {
      ballType: "golf",
      price: 50,
    },
    {
      ballType: "golf",
      price: 50,
    },
  ],
  [
    { ballType: "americanball", price: 60, owner: "BARBARA TRAVERS" },
    { ballType: "americanball", price: 60 },
    { ballType: "americanball", price: 60 },
    { ballType: "americanball", price: 60 },
    { ballType: "americanball", price: 60 },
    { ballType: "americanball", price: 60 },
    { ballType: "americanball", price: 60 },
    { ballType: "americanball", price: 60 },
    { ballType: "americanball", price: 60 },
    { ballType: "americanball", price: 60 },
  ],
  [
    { ballType: "tennis", price: 70, owner: "BARBARA TRAVERS" },
    { ballType: "tennis", price: 70, owner: "BARBARA TRAVERS" },
    { ballType: "tennis", price: 70 },
    { ballType: "tennis", price: 70 },
    { ballType: "tennis", price: 70 },
    { ballType: "tennis", price: 70 },
    { ballType: "tennis", price: 70 },
    { ballType: "tennis", price: 70 },
    { ballType: "tennis", price: 70 },
    { ballType: "tennis", price: 70 },
  ],
  [
    { ballType: "football", price: 80, owner: "BARBARA TRAVERS" },
    { ballType: "football", price: 80, owner: "GABRIELA WHITESIDE" },
    { ballType: "football", price: 80 },
    { ballType: "football", price: 80 },
    { ballType: "football", price: 80 },
    { ballType: "football", price: 80 },
    { ballType: "football", price: 80 },
    { ballType: "football", price: 80 },
    { ballType: "football", price: 80 },
    { ballType: "football", price: 80 },
  ],
  [
    { ballType: "basketball", price: 90, owner: "BARBARA TRAVERS" },
    { ballType: "basketball", price: 90 },
    { ballType: "basketball", price: 90 },
    { ballType: "basketball", price: 90 },
    { ballType: "basketball", price: 90 },
    { ballType: "basketball", price: 90 },
    { ballType: "basketball", price: 90 },
    { ballType: "basketball", price: 90 },
    { ballType: "basketball", price: 90 },
    { ballType: "basketball", price: 90 },
  ],
  [
    { ballType: "golf", price: 100, owner: "MIKE HENN" },
    { ballType: "golf", price: 100, owner: "TIMOTHY BRENNAN" },
    { ballType: "golf", price: 100, owner: "JIMMY McCARTHY" },
    { ballType: "golf", price: 100, owner: "CHARLIE CUOMO" },
    { ballType: "golf", price: 100, owner: "SARAH DAU" },
    { ballType: "golf", price: 100, owner: "JANE ELLIS" },
    { ballType: "golf", price: 100, owner: "TOMMY BAINBRIDGE" },
    { ballType: "golf", price: 100 },
    { ballType: "golf", price: 100 },
    { ballType: "golf", price: 100 },
  ],
];

window.campaignData = campaignData;
