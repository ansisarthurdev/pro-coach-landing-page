import React from "react";
import {
  Flex,
  Section,
  Button,
  Text,
  Grid,
  Heading,
  Box,
} from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { ArrowRight } from "phosphor-react";
import { motion } from "framer-motion";

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

const StatItem = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{ height: "100%" }}
    >
      <Flex direction="column" gap="16px" style={{ height: "100%" }}>
        <Text as="p" size="9" weight="medium">
          {stat.value}
        </Text>
        <Heading as="h3" size="3" weight="medium" mt="8px">
          {stat.title}
        </Heading>
        <Text as="p" size="3" style={{ color: "var(--gray-9)" }}>
          {stat.description}
        </Text>
      </Flex>
    </motion.div>
  );
};

const About = () => {
  const stats = [
    {
      value: "10,000+",
      title: "Athletes Trained Since 2015",
      description:
        "Over the past 8 years, helped more than 10,000 individuals reach their athletic goals.",
    },
    {
      value: "97%",
      title: "Satisfaction Rate",
      description:
        "Almost all of our participants report significant improvements, both physically and mentally.",
    },
    {
      value: "10+",
      title: "Years of Professional Experience",
      description:
        "Our team consists of seasoned professional with extensive expertise.",
    },
  ];

  return (
    <Section>
      <Flex
        maxWidth="var(--container-width)"
        width="100%"
        px="1.5rem"
        justify="between"
        gap="32px"
        style={{ margin: "0 auto" }}
        direction={{ initial: "column", md: "row" }}
      >
        <FadeIn delay={0}>
          <Flex justify={{ initial: "center", md: "start" }}>
            <Link to="/">
              <Box minWidth="200px">
                <Button
                  type="submit"
                  size="3"
                  width="100%"
                  style={{
                    backgroundColor: "black",
                  }}
                >
                  <Text style={{ color: "white" }}>Sydney, Australia</Text>

                  <ArrowRight size="18" color="white" />
                </Button>
              </Box>
            </Link>
          </Flex>
        </FadeIn>

        <Flex
          direction="column"
          gap="32px"
          maxWidth={{ initial: "100%", md: "700px" }}
        >
          <FadeIn delay={0.15}>
            <Text as="p" size="5">
              At ProCoach, we're a team of passionate professionals helping over
              10,000 athletes since 2015 unlock their potential{" "}
              <Text style={{ color: "var(--gray-9)" }}>
                crush their goals, and elevate their performance
              </Text>
            </Text>
          </FadeIn>

          <Grid
            columns={{ initial: "1", sm: "3" }}
            gap={{ initial: "32px", sm: "16px" }}
          >
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </Grid>
        </Flex>
      </Flex>
    </Section>
  );
};

export default About;
