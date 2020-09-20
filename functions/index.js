const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQPEeJJyyFi6YacYbt15Dv7e32Wayc1WOfBJFFlAr6VXZOoY1yX6jKF760YwhhC3fd1DhHh0z1AMeClDKanjIzu00uohTXTVo"
);

// API

// - App config
const app = express();

// - Middleware { origin: true }
app.use(cors({ origin: "https://challenge-97a60.web.app/" }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => {
  response.status(200).send(
    "Test : 5 < Origin"
    // "Bismillah, this is Sami Kalammallah cloud functions, visit me on https://samx23.github.io >> New CORS"
  );
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received! amount :", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);
