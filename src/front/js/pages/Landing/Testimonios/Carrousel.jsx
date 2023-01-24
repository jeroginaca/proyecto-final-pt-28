import React, { useState, useEffect } from "react";
import "./carrousel.css";

import Fade from "react-reveal/Fade";

const Carrousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Juansito",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui vitae pariatur alias perferendis quaerat.",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Pedrito",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui vitae pariatur alias perferendis quaerat.",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      name: "Laurita",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui vitae pariatur alias perferendis quaerat.",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
  ];

  const handleNext = () => {
    if (currentTestimonial === testimonials.length - 1) {
      setCurrentTestimonial(0);
    } else {
      setCurrentTestimonial(currentTestimonial + 1);
    }
  };

  const handlePrev = () => {
    if (currentTestimonial === 0) {
      setCurrentTestimonial(testimonials.length - 1);
    } else {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carrousel-container">
      <Fade bottom cascade>
        <p
          style={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "2rem",

            marginTop: "3rem",
          }}
        >
          Lo que dicen nuestros usuarios
        </p>
      </Fade>
      <Fade>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div className={currentTestimonial === 0 ? "big" : "small"}>
            <img src={testimonials[0].image} alt={testimonials[0].name} />
            <h3>{testimonials[0].name}</h3>
            <p>{testimonials[0].text}</p>
          </div>
          <div className={currentTestimonial === 1 ? "big" : "small"}>
            <img src={testimonials[1].image} alt={testimonials[1].name} />
            <h3>{testimonials[1].name}</h3>
            <p>{testimonials[1].text}</p>
          </div>
          <div className={currentTestimonial === 2 ? "big" : "small"}>
            <img src={testimonials[2].image} alt={testimonials[2].name} />
            <h3>{testimonials[2].name}</h3>
            <p>{testimonials[2].text}</p>
          </div>
          {/*
                  <div className="testimonio">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                    />
                    <h3>{testimonials[currentTestimonial].name}</h3>
                    <p>{testimonials[currentTestimonial].text}</p>
                  </div>*/}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{
              color: "#e8e8e8",
              backgroundColor: "transparent",
              border: "none",
              margin: "0 1rem 2rem 1rem",

              fontSize: "2rem",
            }}
            onClick={handlePrev}
          >
            {" "}
            &lt;{" "}
          </button>
          <button
            style={{
              color: "#e8e8e8",
              backgroundColor: "transparent",
              border: "none",
              margin: "0 1rem 2rem 1rem",
              fontSize: "2rem",
            }}
            onClick={handleNext}
          >
            {" "}
            &gt;{" "}
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Carrousel;
