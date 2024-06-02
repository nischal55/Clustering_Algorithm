const express = require("express");
const app = express();

let datas = [
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e57",
    },
    CustomerID: 1,
    VisitsPerMonth: 12,
    AveragePurchaseValue: 150,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e58",
    },
    CustomerID: 2,
    VisitsPerMonth: 4,
    AveragePurchaseValue: 60,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e59",
    },
    CustomerID: 3,
    VisitsPerMonth: 10,
    AveragePurchaseValue: 200,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e60",
    },
    CustomerID: 4,
    VisitsPerMonth: 3,
    AveragePurchaseValue: 50,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e61",
    },
    CustomerID: 5,
    VisitsPerMonth: 8,
    AveragePurchaseValue: 120,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e62",
    },
    CustomerID: 6,
    VisitsPerMonth: 2,
    AveragePurchaseValue: 30,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e63",
    },
    CustomerID: 7,
    VisitsPerMonth: 15,
    AveragePurchaseValue: 300,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e64",
    },
    CustomerID: 8,
    VisitsPerMonth: 1,
    AveragePurchaseValue: 20,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e65",
    },
    CustomerID: 9,
    VisitsPerMonth: 14,
    AveragePurchaseValue: 250,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e66",
    },
    CustomerID: 10,
    VisitsPerMonth: 5,
    AveragePurchaseValue: 70,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e67",
    },
    CustomerID: 11,
    VisitsPerMonth: 9,
    AveragePurchaseValue: 180,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e68",
    },
    CustomerID: 12,
    VisitsPerMonth: 3,
    AveragePurchaseValue: 40,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e69",
    },
    CustomerID: 13,
    VisitsPerMonth: 7,
    AveragePurchaseValue: 100,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e70",
    },
    CustomerID: 14,
    VisitsPerMonth: 4,
    AveragePurchaseValue: 60,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e71",
    },
    CustomerID: 15,
    VisitsPerMonth: 11,
    AveragePurchaseValue: 160,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e72",
    },
    CustomerID: 16,
    VisitsPerMonth: 6,
    AveragePurchaseValue: 90,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e73",
    },
    CustomerID: 17,
    VisitsPerMonth: 8,
    AveragePurchaseValue: 120,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e74",
    },
    CustomerID: 18,
    VisitsPerMonth: 2,
    AveragePurchaseValue: 30,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e75",
    },
    CustomerID: 19,
    VisitsPerMonth: 13,
    AveragePurchaseValue: 220,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e76",
    },
    CustomerID: 20,
    VisitsPerMonth: 3,
    AveragePurchaseValue: 40,
  },
  {
    _id: {
      $oid: "665c4ab4c472cf1c66564e77",
    },
    CustomerID: 21,
    VisitsPerMonth: 9,
    AveragePurchaseValue: 180,
  },
];

let regular_customers = [];
let irregular_customers = [];

let centroid_regular = { VisitsPerMonth: 15, AveragePurchaseValue: 200 };
let centroid_irregular = { VisitsPerMonth: 3, AveragePurchaseValue: 100 };
datas.map((data) => {
  let regCheckVisits = data.VisitsPerMonth - centroid_regular.VisitsPerMonth;
  let irregCheckVisits =
    data.VisitsPerMonth - centroid_irregular.VisitsPerMonth;
  let regAvgPurchaseCheck =
    data.AveragePurchaseValue - centroid_regular.AveragePurchaseValue;
  let irregAvgPurchaseCheck =
    data.AveragePurchaseValue - centroid_irregular.AveragePurchaseValue;

  let d_reg = Math.sqrt(
    regCheckVisits * regCheckVisits + regAvgPurchaseCheck * regAvgPurchaseCheck
  );
  let d_irreg = Math.sqrt(
    irregCheckVisits * irregCheckVisits +
      irregAvgPurchaseCheck * irregAvgPurchaseCheck
  );

  if (d_reg < d_irreg) {
    regular_customers.push({
      CustomerID: data.CustomerID,
      VisitsPerMonth: data.VisitsPerMonth,
      AveragePurchaseValue: data.AveragePurchaseValue,
    });
  } else {
    irregular_customers.push({
      CustomerID: data.CustomerID,
      VisitsPerMonth: data.VisitsPerMonth,
      AveragePurchaseValue: data.AveragePurchaseValue,
    });
  }
});

app.get("/regular", function (req, res) {
  res.send(regular_customers);
});
app.get("/irregular", function (req, res) {
  res.send(irregular_customers);
});

app.listen(4000);
