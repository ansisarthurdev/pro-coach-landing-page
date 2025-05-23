import React, { useState } from "react";
import {
  Section,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Grid,
} from "@radix-ui/themes";
import { ArrowRight, ArrowLeft } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    style={{ height: "100%" }}
  >
    {children}
  </motion.div>
);

const mattersData = [
  {
    name: "Programs",
    image: {
      link: "/images/landing/matters-programs.webp",
      heading: "Personalised Training Programs",
      description:
        "Focus on training programs tailored to each participant's individual needs and goals.",
    },
    description:
      "At ProCoach, we know everyone's unique. That's why we create custom programs tailored to your skills, schedule, and goals whether you're just starting or aiming for your next big win.",
  },
  {
    name: "Coaches",
    image: {
      link: "/images/landing/matters-coaches.webp",
      heading: "Experienced Coaches",
      description:
        "Learn from professionals who’ve trained top athletes and know how to get the best out of you.",
    },
    description:
      "Our coaching staff brings a mix of elite experience, motivation, and strategy to push you to the next level in your game.",
  },
  {
    name: "Nutrition",
    image: {
      link: "/images/landing/matters-nutrition.webp",
      heading: "Optimized Nutrition Plans",
      description:
        "Get meal plans and advice that complement your training goals and fuel your performance.",
    },
    description:
      "We believe that proper nutrition is key to performance. Our tailored plans ensure you’re eating right for your goals.",
  },
  {
    name: "Support",
    image: {
      link: "/images/landing/matters-support.webp",
      heading: "Continuous Support",
      description:
        "Access guidance and encouragement whenever you need it throughout your journey.",
    },
    description:
      "We’re with you every step of the way. Whether it’s motivation, advice, or feedback — our support team has your back.",
  },
  {
    name: "Community",
    image: {
      link: "/images/landing/matters-community.webp",
      heading: "Supportive Community",
      description:
        "Join a network of like-minded athletes who share, grow, and win together.",
    },
    description:
      "Training doesn’t have to be lonely. Our community gives you a tribe to lean on, compete with, and celebrate victories alongside.",
  },
];

const Matters = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (idx) => setSelectedIndex(idx);
  const handlePrev = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? mattersData.length - 1 : prev - 1
    );
  const handleNext = () =>
    setSelectedIndex((prev) =>
      prev === mattersData.length - 1 ? 0 : prev + 1
    );
  const selected = mattersData[selectedIndex];

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
        <Flex
          justify="between"
          gap="32px"
          direction={{ initial: "column", md: "row" }}
        >
          <FadeIn delay={0}>
            <Box maxWidth={{ initial: "100%", md: "600px" }}>
              <Heading as="h3" size="9" weight="medium">
                <Text style={{ color: "var(--gray-10)" }}>
                  Here's Why Coaching{" "}
                </Text>
                Makes a Difference
              </Heading>
            </Box>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Flex
              wrap="wrap"
              gap="8px"
              justify={{ initial: "center", md: "end" }}
              maxWidth={{ initial: "100%", md: "600px" }}
            >
              {mattersData.map((matter, idx) => (
                <Button
                  key={matter.name}
                  size="3"
                  width="100%"
                  onClick={() => handleSelect(idx)}
                  style={{
                    backgroundColor:
                      idx === selectedIndex
                        ? "var(--lime-10)"
                        : "var(--gray-2)",
                    color: idx === selectedIndex ? "white" : "black",
                    transition: "background 0.2s, color 0.2s",
                  }}
                >
                  <Text style={{ color: "black" }}>{matter.name}</Text>
                </Button>
              ))}
            </Flex>
          </FadeIn>
        </Flex>

        <Grid columns={{ initial: "1", sm: "2" }} gap="32px">
          <FadeIn delay={0.2}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ height: "100%" }}
              >
                <Box
                  height="400px"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={selected.image.link}
                    alt="Section Img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      pointerEvents: "none",
                    }}
                  />

                  <Flex
                    height="100%"
                    p="16px"
                    direction="column"
                    justify="between"
                    style={{ zIndex: 1, position: "relative" }}
                  >
                    <Box
                      py="8px"
                      px="16px"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        borderRadius: "999px",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                        backdropFilter: "blur(2px)",
                        display: "inline-block",
                        alignSelf: "flex-start",
                      }}
                    >
                      <Text as="p" size="3" style={{ color: "white" }}>
                        {selected.image.heading}
                      </Text>
                    </Box>

                    <Box maxWidth="70%">
                      <Text
                        size="3"
                        style={{
                          color: "white",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                        }}
                      >
                        {selected.image.description}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </motion.div>
            </AnimatePresence>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Flex
              height="100%"
              direction="column"
              gap="16px"
              align="start"
              justify="end"
            >
              <img
                src="./images/logo.svg"
                alt="Logo"
                style={{
                  height: "30px",
                  width: "auto",
                  objectFit: "contain",
                  filter: "brightness(0) saturate(100%)",
                }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex + "desc"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{ width: "100%" }}
                >
                  <Text as="p" size="3">
                    {selected.description}
                  </Text>
                </motion.div>
              </AnimatePresence>

              <Flex gap="8px" mt="24px">
                <FadeIn delay={0.4}>
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
                  >
                    <Button
                      size="3"
                      color="gray"
                      onClick={handlePrev}
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
                </FadeIn>
                <FadeIn delay={0.5}>
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
                  >
                    <Button
                      size="3"
                      color="gray"
                      onClick={handleNext}
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
                </FadeIn>
              </Flex>
            </Flex>
          </FadeIn>
        </Grid>
      </Flex>
    </Section>
  );
};

export default Matters;
