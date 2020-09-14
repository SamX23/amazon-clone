# My amazon clone project

I create this front end and back end (cloud functions) of Amazon with working basket, account and payment using stripe. The technology used in this projects are :

- React, Context api, router dom
- Material Icons/Ui
- Firebase (deployment, database, cloud functions)
- Stripe (payment) @stripe/stripe-js, @stripe/react-stripe-js
- Axios, Cors and Express for backend

## Usage

- Visit the page
- Login using fake emails
- add basket
- proceed orders
- doing payment using fake CC 42424242(until the end)
- submit. (notes)

### Cloud functions (payment) only supported until Feb 15, 2021.

Notes:

Currently using node 8 and I have a bit problem with the cors API, so the payment will not going through after the order page. Once fixed, you can see your successful order on the orders page.

## Screenshot

![Home page](https://github.com/SamX23/amazon-clone/blob/master/screenshot/amazon-1.png)

![Cart page](https://github.com/SamX23/amazon-clone/blob/master/screenshot/amazon-2.png)

![Login page](https://github.com/SamX23/amazon-clone/blob/master/screenshot/amazon-3.png)
