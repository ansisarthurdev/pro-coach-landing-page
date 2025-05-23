import React from "react";
import { Box, Button, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "phosphor-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Flex position="relative" height="100%" minHeight="800px">
      <img
        src="/images/landing/hero.webp"
        alt="Header Section"
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          filter: "brightness(0.8) blur(1px)",
        }}
      />

      <Flex
        width="100%"
        maxWidth="var(--container-width)"
        pt="110px"
        pb="40px"
        px="1.5rem"
        direction="column"
        justify="between"
        style={{ margin: "0 auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ width: "100%" }}
        >
          <Flex width="100%" maxWidth={{ initial: "100%", md: "600px" }}>
            <Heading
              as="h1"
              size="9"
              weight="regular"
              align={{ initial: "center", md: "left" }}
              style={{
                zIndex: 1,
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              Get pro-level coaching that changes the game for you!
            </Heading>
          </Flex>
        </motion.div>

        <Flex
          direction={{ initial: "column", md: "row" }}
          justify="between"
          align={{ initial: "center", md: "end" }}
          gap="16px"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{ width: "100%" }}
          >
            <Flex
              direction="column"
              gap="24px"
              width="100%"
              minWidth="200px"
              maxWidth={{ initial: "90%", md: "400px" }}
              mt={{ initial: "60px", md: "0" }}
              mb={{ initial: "80px", md: "0" }}
              align={{ initial: "center", md: "start" }}
            >
              <Text
                as="p"
                size="4"
                weight="regular"
                align={{ initial: "center", md: "left" }}
                style={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                Get expert coaching that takes your game to the next level.
                Reach your full potential with guidance that's all about you.
              </Text>

              <Flex
                gap={{ initial: "16px", xs: "8px" }}
                direction={{ initial: "column-reverse", xs: "row" }}
                align={{ initial: "center", md: "start" }}
              >
                <Link to="/">
                  <Button size="3">
                    <Text size="3">Find Expert</Text>
                  </Button>
                </Link>
                <Link to="/">
                  <Button
                    size="3"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.4)",
                      borderRadius: "999px",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                      backdropFilter: "blur(2px)",
                    }}
                  >
                    <Text
                      size="3"
                      style={{
                        color: "white",
                        letterSpacing: "0.01em",
                      }}
                    >
                      Learn more what is ProCoach
                    </Text>
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </motion.div>

          <Flex
            gap={{ initial: "32px", sm: "8px" }}
            align="end"
            justify="end"
            width="100%"
            direction={{ initial: "column", sm: "row" }}
          >
            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ width: "100%" }}
            >
              <Flex
                direction="column"
                gap="16px"
                p="12px"
                width="100%"
                maxWidth={{ initial: "100%", md: "300px" }}
                style={{
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  backdropFilter: "blur(2px)",
                }}
              >
                <Flex justify="between" align="center">
                  <Heading
                    as="h2"
                    size="5"
                    weight="regular"
                    style={{ color: "white" }}
                  >
                    Testimonial
                  </Heading>

                  <Flex
                    align="center"
                    justify="center"
                    width="36px"
                    height="36px"
                    style={{
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.4)",
                      backdropFilter: "blur(2px)",
                    }}
                  >
                    <ArrowUpRight size="18" color="white" />
                  </Flex>
                </Flex>

                <Text as="p" size="2" style={{ color: "white" }}>
                  "Coach Matt's strenght program tailored for basketball has
                  helped me improve my agility and stamina."
                </Text>

                <Flex justify="between" align="center">
                  <Text as="p" size="2" style={{ color: "white" }}>
                    Kate Thompson
                  </Text>

                  <Text as="p" size="2" style={{ color: "white" }}>
                    May 23, 2025
                  </Text>
                </Flex>
              </Flex>
            </motion.div>

            {/* Find Your Coach */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{ width: "100%" }}
            >
              <Flex
                direction="column"
                p="12px"
                width="100%"
                maxWidth={{ initial: "100%", md: "300px" }}
                style={{ backgroundColor: "white", borderRadius: "20px" }}
              >
                <form>
                  <Heading as="h2" size="5" weight="medium" mb="16px">
                    Enter Your Sport and Location to Get Started
                  </Heading>

                  <Flex direction="column" gap="16px" mb="16px">
                    <Flex direction="column" width="100%">
                      <Box mb="8px">
                        <Text as="label" for="sports" size="2" weight="medium">
                          Sports
                        </Text>
                      </Box>

                      <TextField.Root
                        placeholder="Enter Sports"
                        id="sports"
                        size="3"
                        style={{ backgroundColor: "var(--gray-1)" }}
                      />
                    </Flex>

                    <Flex direction="column" width="100%">
                      <Box mb="8px">
                        <Text as="label" for="address" size="2" weight="medium">
                          Address
                        </Text>
                      </Box>

                      <TextField.Root
                        placeholder="Enter your address"
                        id="address"
                        size="3"
                        style={{ backgroundColor: "var(--gray-1)" }}
                      />
                    </Flex>
                  </Flex>

                  <Button
                    type="submit"
                    size="3"
                    style={{ backgroundColor: "black", width: "100%" }}
                  >
                    <Text style={{ color: "white" }}>Find Your Coach</Text>
                  </Button>
                </form>
              </Flex>
            </motion.div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
