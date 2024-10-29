import { Button } from "@/components/ui/button";
import HomeImage from "../assets/homeImage.png";
import BikeImage from "../assets/mountain-bike.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookImage, CheckCheck, Bike } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { Link } from "react-router-dom";

const Home = () => {

    const bikeData = [
        { title: "City Bikes", image: BikeImage },       // Replace `Bike` with actual image source
        { title: "Mountain Bikes", image: BikeImage },   // Replace `Bike` with actual image source
        { title: "Electric Bikes", image: BikeImage },   // Replace `Bike` with actual image source
        { title: "Road Bikes", image: BikeImage },       // Replace `Bike` with actual image source
        { title: "Kid's Bikes", image: BikeImage },      // Replace `Bike` with actual image source
        { title: "City Bikes", image: BikeImage }        // Replace `Bike` with actual image source
      ];

    const workingSteps = [
        {
            "step": "Browse and Select",
            "description": "Choose from a wide selection of bikes, suited to your needs and preferences.",
            "icon": <BookImage />
        },
        {
            "step": " Book Online",
             "description": "Select your rental dates and reserve your bike in just a few clicks.",
             "icon":   <CheckCheck />
        },
        {
            "step": "Ride and Enjoy",
             "description": "Pick up your bike at a convenient location and start your ride!",
             "icon":     <Bike />
        }
      ]

      const FAQs = [
        {
            question: " What types of bikes do you offer for rent?",
            answer: "We offer a wide range of bikes, including city bikes, mountain bikes, electric bikes, road bikes, and kids' bikes. Whether you're commuting, exploring off-road trails, or just enjoying a leisurely ride, we have the perfect bike for you."
        },
        {
            question: "How do I rent a bike?",
            answer: "Renting a bike is simple! \n Step 1: Browse our selection of bikes and choose the one that suits your needs. \n Step 2: Select the rental dates and confirm your booking. \n Step 3: Pick up your bike at a convenient location, and you're ready to ride!*"
        },
        {
            question: " What are your rental rates?",
            answer: "Our rental rates vary based on the type of bike and the duration of the rental. We offer hourly, daily, and weekly rates to provide flexible options for all riders. You can view detailed pricing when selecting a bike for rent."
        },
        {
            question: "Do I need to bring my own helmet?",
            answer: "No, you don't need to bring your own helmet. We provide helmets with all our rentals at no extra cost to ensure your safety while riding."
        }
      ]

  return (
    <div className="">
      <div className="h-screen flex md:flex-row flex-col justify-around max-md:justify-center items-center md:pl-16 max-md:mt-10 m-auto w-full max-sm:h-fit">
        <div>
          <h2 className="text-lg md:text-3xl text-red-500 font-semibold">
            Ride the City, Explore the Outdoors – Rent a Bike Today!
          </h2>
          <p className="max-md:text-sm mt-3">
            Choose from a variety of bikes, perfect for every journey. Flexible
            rentals, affordable prices.
          </p>
          <div className="flex gap-5 *:bg-red-500 mt-6 hover:*:bg-red-700">
            <Button><Link to="/explore-bikes"> Explore Bikes</Link> </Button>
            <Button>Rent Now</Button>
          </div>
        </div>
        <img
          src={HomeImage}
          alt="Bike"
          className="object-contain h-full md:w-[600px] max-sm:h-[250px]"
        />
      </div>

      <div>
      <h2 className="text-lg md:text-3xl font-semibold my-4">
        Find the Perfect Bike for Your Adventure
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {bikeData.map((bike, index) => (
          <Card key={index} className="max-h-[400px] max-w-[300px] mx-auto">
            <CardHeader>
              <CardTitle>{bike.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img className="h-full" src={bike.image} alt={`${bike.title} image`} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>

      <div className="my-16">
        <h2 className="text-xl md:text-3xl font-semibold text-red-500 mt-10 mb-4">How it works</h2>
        <div>
            {workingSteps.map((steps, index) => {
                return (
                    <div key={index} className="mb-4">
                    <p className="font-semibold flex gap-2 ">
                      {" "}
                     <span className="scale-90"> {steps.icon}</span>  <span className="text-red-500">Step {index + 1}: </span> {steps.step}  
                    </p> 
                    <p className="pl-14">
                      {steps.description}
                    </p>
                  </div>
                )
            })}
        </div>
      </div>

      <div className="my-10">
        <h2 className="text-xl md:text-3xl font-semibold text-red-500">Frequently Asked Questions</h2>
        {
            FAQs.map((faq, index) => {
                return (
                    <Accordion key={index} type="single" collapsible>
                    <AccordionItem value="item 1">
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                    {faq.answer}
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
                )
            })
        }
      </div>
      <Toaster/>
    </div>
  );
};

export default Home;
