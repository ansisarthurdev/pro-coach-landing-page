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
import { ArrowDown, ArrowRight, Play } from "phosphor-react";
import { motion, AnimatePresence } from "framer-motion";

const howItWorksDataInit = [
  {
    name: "Sign Up and Set Your Goals",
    description:
      "Getting started is simple. Sign up, tell us about yourself, and set the goals that matter most to you — whether it's gaining strength, improving technique, or preparing for competition.",
  },
  {
    name: "Meet Your Coach",
    description:
      "You’ll be matched with a coach who understands your goals and training style. They’ll become your guide, motivator, and partner every step of the way.",
  },
  {
    name: "Start Training",
    description:
      "At ProCoach, we know everyone's unique. That's why we create custom programs tailored to your skills, schedule, and goals whether you're just starting or aiming for your next big win.",
  },
  {
    name: "Track Your Progress",
    description:
      "Stay motivated with regular check-ins, milestone tracking, and performance reviews. See how far you’ve come — and where you’re headed next.",
  },
];

// FadeIn animation wrapper as in Matters.js and About.js
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

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
          direction={{ initial: "column", sm: "row" }}
        >
          <FadeIn delay={0}>
            <Box maxWidth={{ initial: "100%", md: "500px" }}>
              <Heading as="h3" size="9" weight="medium">
                <Text style={{ color: "var(--gray-10)" }}>Pick Your Game </Text>
                We'll Coach the Rest
              </Heading>
            </Box>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Button
              size="3"
              color="gray"
              style={{
                background: "var(--gray-12)",
                border: "1px solid var(--gray-12)",
                minWidth: "150px",
              }}
            >
              <Text as="p" size="3">
                Learn More
              </Text>
              <ArrowRight size="18" />
            </Button>
          </FadeIn>
        </Flex>

        <Grid gap="32px" columns={{ initial: "1", sm: "2" }}>
          <FadeIn delay={0.2}>
            <Flex direction="column" width="100%" gap="8px">
              {howItWorksDataInit.map((item, index) => {
                const selected = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    style={{ width: "100%" }}
                  >
                    <Flex
                      direction="column"
                      gap="16px"
                      p="12px"
                      width="100%"
                      style={{
                        borderBottom: !selected && "1px solid var(--gray-4)",
                        borderRadius: selected && "20px",
                        background: selected && "var(--gray-12)",
                        boxShadow: selected && "0 2px 16px rgba(0,0,0,0.12)",
                        transition: "background 0.2s, box-shadow 0.2s",
                      }}
                    >
                      <Flex justify="between" align="center">
                        <Heading
                          as="h2"
                          size="5"
                          weight="regular"
                          style={{ color: selected ? "white" : "black" }}
                        >
                          {item.name}
                        </Heading>

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
                          onClick={() => setOpenIndex(selected ? -1 : index)}
                          aria-label={
                            selected
                              ? `Collapse ${item.name}`
                              : `Expand ${item.name}`
                          }
                        >
                          <Button
                            size="3"
                            color="gray"
                            style={{
                              width: "40px",
                              height: "40px",
                              background: selected
                                ? "var(--lime-10)"
                                : "transparent",
                              border: selected
                                ? "1px solid var(--lime-10)"
                                : "1px solid var(--gray-8)",
                            }}
                          >
                            <ArrowDown
                              size="18"
                              style={{
                                minWidth: "18px",
                                color: "black",
                                transform: selected
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                                transition: "transform 0.2s",
                              }}
                            />
                          </Button>
                        </motion.button>
                      </Flex>
                      <AnimatePresence initial={false}>
                        {selected && (
                          <motion.div
                            key="desc"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: "hidden" }}
                          >
                            <Text
                              as="p"
                              size="3"
                              style={{
                                color: "white",
                                lineHeight: "1.8",
                                marginTop: 8,
                              }}
                            >
                              {item.description}
                            </Text>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Flex>
                  </motion.div>
                );
              })}
            </Flex>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Box
              width="100%"
              height="400px"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src="/images/landing/howitworks-tennis.webp"
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
                <Flex justify="between" align="center">
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
                      Tennis
                    </Text>
                  </Box>

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
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "var(--lime-10)",
                        border: "1px solid var(--lime-10)",
                      }}
                    >
                      <Play
                        size="18"
                        weight="fill"
                        style={{
                          minWidth: "18px",
                          color: "black",
                        }}
                      />
                    </Button>
                  </motion.button>
                </Flex>

                <Box maxWidth="100%">
                  <Text
                    size="3"
                    style={{
                      color: "white",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    ProCoach offers coaching for all levels. Whether you're
                    starting out or leveling up, our expert coaches are here to
                    guide you. Pick your sport and start your journey!
                  </Text>
                </Box>
              </Flex>
            </Box>
          </FadeIn>
        </Grid>
      </Flex>
    </Section>
  );
};

export default HowItWorks;
