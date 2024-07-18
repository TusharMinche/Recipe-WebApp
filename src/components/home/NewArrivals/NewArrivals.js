import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

import bannerImgOn from "../../../assets/images/products/feat1.jpg";
import bannerImgtw from "../../../assets/images/products/feat2.jpg";
import bannerImgth from "../../../assets/images/products/feat3.jpg";
import bannerImgf from "../../../assets/images/products/pexels-bulbfish-1143754.jpg";

import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="Featured" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={bannerImgOn}
            productName="Steak"
            rate="4.0"
            categ="Quick Meals"
            des="Begin by bringing your steak to room temperature, allowing it to rest outside of the refrigerator for a while. This ensures even cooking. Next, gently pat the steak dry with paper towels to remove any excess moisture. This step helps in achieving a better sear. Season the steak generously with salt and black pepper on both sides. Optionally, you can add minced garlic or fresh herbs for added flavor"
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={bannerImgtw}
            productName="Bread dessert"
            rate="2.0"
            categ="Desert"
            des="
            To prepare a bread dessert, start by gathering your ingredients. You'll need bread slices (preferably slightly stale), eggs, milk, sugar, vanilla extract, cinnamon, and butter.
            
            Begin by preheating your oven to 350°F (175°C). While the oven is heating, slice the bread into thick slices, removing the crust if desired.
            
            In a shallow dish, whisk together eggs, milk, sugar, vanilla extract, and cinnamon to create a custard-like mixture."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={bannerImgth}
            productName="green cucumber"
            rate="8.0"
            categ="Vegetarian"
            des="
            To prepare a green cucumber dish, you'll need fresh cucumbers, garlic, olive oil, lemon juice, salt, pepper, and optionally, fresh herbs like dill or parsley.
            
            Start by washing the cucumbers thoroughly under running water to remove any dirt or impurities. Then, slice the cucumbers into thin rounds or chunks, depending on your preference.
            
            Peel and finely chop garlic cloves."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={bannerImgf}
            productName="Avocado Salad"
            rate="6.1"
            categ="Vegetarian"
            des="To prepare an avocado salad, gather fresh ingredients such as ripe avocados, tomatoes, cucumbers, red onion, and fresh cilantro or parsley. You'll also need olive oil, lime or lemon juice, salt, and pepper.

            Start by washing and chopping the tomatoes, cucumbers, and red onion into bite-sized pieces. Cut the avocados in half, remove the pits, and scoop out the flesh into a bowl. Gently mash the avocado with a fork, leaving some chunks for texture."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={bannerImgth}
            productName="Corbeje"
            rate="7.0"
            categ="Vegetarians"
            des="To prepare a classic cheeseburger recipe, you'll need ground beef, hamburger buns, cheese slices (such as cheddar or American), lettuce, tomatoes, onions, pickles, ketchup, mustard, mayonnaise, salt, and black pepper.

            Begin by dividing the ground beef into equal portions and shaping them into patties. Season each patty with salt and black pepper to taste."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
