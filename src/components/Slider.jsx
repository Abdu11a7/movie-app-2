import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

export default function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    { bgImage: "public/img/slider1.png" },
    { bgImage: "public/img/slider2.png" },
    { bgImage: "public/img/slider3.png" },
  ];

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      controls={true}
      indicators={true}
    >
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${slide.bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              textAlign: "center",
              color: "white",
              padding: "0 20px 100px",
            }}
          >
            <div
              style={{
                marginBottom: "40px",
                width: "100%",
                maxWidth: "800px",
              }}
            ></div>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                marginBottom: "20px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              The Best Streaming Experience
            </h1>
            <p
              style={{
                fontSize: "1rem",
                maxWidth: "1000px",
                marginBottom: "30px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              StreamVibe is the best streaming experience for watching your
              favorite movies and shows on demand, anytime, anywhere. With
              StreamVibe, you can enjoy a wide variety of content, including the
              latest blockbusters, classic movies, popular TV shows, and more.
              You can also create your own watchlists, so you can easily find
              the content you want to watch.
            </p>
            <Button
              variant="danger"
              className="slider-button d-flex justify-content-center align-items-center"
              size="lg"
              style={{
                background: "var(--main-color)",
                gap: "10px",
                padding: "10px 30px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                borderRadius: "20px",
                margin: "0 auto",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              <FaPlay className="me-2" />
              Start Watching Now
            </Button>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
