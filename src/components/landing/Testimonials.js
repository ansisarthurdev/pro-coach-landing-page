import React, { useState } from "react";
import { Flex, Section, Text, Button, Heading, Box } from "@radix-ui/themes";
import { ArrowRight, ArrowLeft } from "phosphor-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const reviews = [
    {
      name: "Emily T.",
      image: "/images/landing/testimonials-emily.webp",
      description: "Basketball Enthusiast",
      sport: "Basketball",
      selected: true,
      review:
        "I started with zero skills, and withing months, I felt like a whole new athlete.",
      reccommendation:
        "The coaches here know how to mativate and push you without overwhelming you. Joining ProCoach is one of the best decisions I've made!",
    },
    {
      name: "Liam S.",
      image: "/images/landing/testimonials-liam.webp",
      description: "Tennis Player",
      sport: "Tennis",
      selected: false,
      review:
        "I struggled with consistency in my serves. Thanks to ProCoach, my technique and confidence have improved dramatically.",
      reccommendation:
        "ProCoach tailors their guidance to your level and helps you rise higher. Totally worth it!",
    },
    {
      name: "Carlos M.",
      image: "/images/landing/testimonials-carlos.webp",
      description: "Amateur Soccer Player",
      sport: "Soccer",
      selected: false,
      review:
        "Before ProCoach, I was fast but lacked control. Now I'm a more complete player and a better teammate.",
      reccommendation:
        "If you're looking to take your game to the next level, ProCoach delivers real results.",
    },
    {
      name: "Sophia R.",
      image: "/images/landing/testimonials-sophia.webp",
      description: "Competitive Swimmer",
      sport: "Swimming",
      selected: false,
      review:
        "My stamina and form were holding me back. With the coaching here, I've smashed my personal best times.",
      reccommendation:
        "Highly recommend ProCoach for swimmers wanting to refine their technique and boost performance!",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Section>
      <Flex
        maxWidth="var(--container-width)"
        width="100%"
        px="1.5rem"
        justify="between"
        gap="32px"
        style={{ margin: "0 auto" }}
        direction="column"
      >
        <Flex justify="between" align="start" mb="32px">
          <Flex gap="16px" wrap="wrap">
            {reviews?.map((review, idx) => (
              <Button
                key={review.name}
                onClick={() => setSelectedIndex(idx)}
                aria-label={review.sport}
                size="3"
                style={{
                  background:
                    idx === selectedIndex ? "var(--lime-10)" : "var(--gray-2)",
                  color: idx === selectedIndex ? "white" : "black",
                }}
              >
                <Text as="p" style={{ color: "black" }}>
                  {review.sport}
                </Text>
              </Button>
            ))}
          </Flex>

          <Flex gap="8px">
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.96 }}
              style={{
                border: "none",
                background: "none",
                padding: 0,
                margin: 0,
                display: "inline-block",
              }}
              onClick={() =>
                setSelectedIndex(
                  (selectedIndex - 1 + reviews.length) % reviews.length
                )
              }
              aria-label="Previous testimonial"
            >
              <Button
                size="3"
                color="gray"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "transparent",
                  border: "1px solid var(--gray-8)",
                }}
              >
                <ArrowLeft
                  size="18"
                  style={{ minWidth: "18px", color: "black" }}
                />
              </Button>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.96 }}
              style={{
                border: "none",
                background: "none",
                padding: 0,
                margin: 0,
                display: "inline-block",
              }}
              onClick={() =>
                setSelectedIndex((selectedIndex + 1) % reviews.length)
              }
              aria-label="Next testimonial"
            >
              <Button
                size="3"
                color="gray"
                style={{
                  width: "40px",
                  height: "40px",
                  background: "var(--gray-12)",
                  border: "1px solid var(--gray-12)",
                }}
              >
                <ArrowRight
                  size="18"
                  style={{ minWidth: "18px", color: "white" }}
                />
              </Button>
            </motion.button>
          </Flex>
        </Flex>

        <Flex direction="column" align="center" gap="32px">
          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            style={{ width: "100%" }}
          >
            {reviews[selectedIndex] && (
              <Box maxWidth="900px" style={{ margin: "0 auto" }}>
                <Heading as="h3" size="8" weight="regular" align="center">
                  {reviews[selectedIndex].review}{" "}
                  <Text size="8" style={{ color: "var(--gray-8)" }}>
                    {reviews[selectedIndex]?.reccommendation}
                  </Text>
                </Heading>
              </Box>
            )}

            {reviews[selectedIndex] && (
              <Text
                as="p"
                size="3"
                style={{ color: "var(--gray-8)" }}
                align="center"
                mt="32px"
              >
                <Text weight="bold" style={{ color: "black" }}>
                  {reviews[selectedIndex].name},
                </Text>{" "}
                {reviews[selectedIndex].description}
              </Text>
            )}
          </motion.div>

          <Flex>
            {reviews?.map((review, idx) => (
              <motion.img
                key={review.name}
                src={review.image}
                alt={review.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: idx === selectedIndex ? 1.08 : 1,
                  filter:
                    idx === selectedIndex
                      ? "none"
                      : "grayscale(1) brightness(0.7)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginLeft: idx !== 0 ? -16 : 0,
                  boxShadow:
                    idx === selectedIndex
                      ? "0 2px 8px rgba(0,0,0,0.12)"
                      : "none",
                  transition: "filter 0.2s, border 0.2s, box-shadow 0.2s",
                  zIndex: idx === selectedIndex ? 2 : 1,
                  cursor: "pointer",
                }}
                onClick={() => setSelectedIndex(idx)}
              />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};

export default Testimonials;
