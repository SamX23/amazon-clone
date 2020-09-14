import React from "react";
import Product from "../components/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          alt="banner"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        />

        <div className="home__row">
          <Product
            id="11"
            title="Acer Predator Helios 300 Gaming Laptop, Intel i7-10750H, NVIDIA GeForce RTX 2060 6GB, 15.6'' Full HD 144Hz 3ms IPS Display, 16GB Dual-Channel DDR4, 512GB NVMe SSD, Wi-Fi 6, RGB Keyboard"
            price={1196}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51UQDEuqoiL.jpg"
          />

          <Product
            id="14"
            title="Redragon K551 Mechanical Gaming Keyboard RGB LED Rainbow Backlit Wired Keyboard with Red Switches Gaming PC"
            price={43.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71CevTCkBsL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12"
            title="Razer Basilisk X HyperSpeed Wireless Gaming Mouse: Bluetooth & Wireless Compatible - 16K DPI Optical Sensor"
            price={44.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81W3s4ZWMXL.jpg"
          />
          <Product
            id="13"
            title="AMZOYO 23.6'' x 13.7'' Dual-Sided Desk Pad, Office Desk Mat, Multifunctional Table Mat, Waterproof PU Leather Mouse Pad"
            price={9.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/51ZL2A1gW-L.jpg"
          />

          <Product
            id="15"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Headphones with Mic"
            price={29}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/41R+VaxAEbL.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="16"
            title="Samsung Business SR35 Series 24 inch IPS Panel 1080p 75Hz 5 ms Response time Ultra-Thin Bezel Design Computer Monitor for Business with VGA and HDMI (S24R356FHN), Black"
            price={222.79}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91TS0uHjMbL.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

// home
// https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg
