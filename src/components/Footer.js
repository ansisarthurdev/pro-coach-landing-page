import React from "react";
import styled from "styled-components";
import {
  Section,
  Flex,
  Text,
  Box,
  Button,
  Link as RadixLink,
  Grid,
  Heading,
} from "@radix-ui/themes";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigation = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/",
    },
    {
      title: "Classes",
      link: "/",
    },
    {
      title: "Programs",
      link: "/",
    },
    {
      title: "Community",
      link: "/",
    },
  ];

  const footerLinks = [
    {
      heading: "Main Menu",
      items: [
        { title: "About Us", link: "/" },
        { title: "Our Coaches", link: "/" },
        { title: "Programs & Packages", link: "/" },
        { title: "Testimonials", link: "/" },
      ],
    },
    {
      heading: "Explore Sports",
      items: [
        { title: "Tennis Coaching", link: "/" },
        { title: "Soccer Coaching", link: "/" },
        { title: "Basketball Coaching", link: "/" },
        { title: "Swimming Coaching", link: "/" },
        { title: "Fitness Coaching", link: "/" },
      ],
    },
    {
      heading: "Support",
      items: [
        { title: "Faq", link: "/" },
        { title: "Contact Us", link: "/" },
        { title: "Help Center", link: "/" },
        { title: "Live Chat Support", link: "/" },
      ],
    },
    {
      heading: "Resources",
      items: [
        { title: "Training Tips", link: "/" },
        { title: "Nutrition Guides", link: "/" },
        { title: "Injury Prevention", link: "/" },
        { title: "Mindset & Motivation", link: "/" },
        { title: "Free Workouts", link: "/" },
      ],
    },
    {
      heading: "Community",
      items: [
        { title: "Events & Meetups", link: "/" },
        { title: "Athlete Spotlights", link: "/" },
        { title: "Join Our Team", link: "/" },
        { title: "Partner With Us", link: "/" },
      ],
    },
  ];

  const legalLinks = [
    { title: "Privacy Policy", link: "/" },
    { title: "Terms & Conditions", link: "/" },
  ];

  return (
    <Section style={{ backgroundColor: "black" }}>
      <Flex
        maxWidth="var(--container-width)"
        width="100%"
        px="1.5rem"
        justify="between"
        gap="32px"
        style={{ margin: "0 auto", color: "white" }}
        direction="column"
      >
        <Box maxWidth="400px">
          <Text as="p" size="6">
            Join the ProCoach Family and Let's Make Your Coaching Journey
            Unforgettable
          </Text>
        </Box>

        <Flex
          direction={{ initial: "column", md: "row" }}
          justify="between"
          align="center"
          gap="16px"
        >
          <Link to="/">
            <Button size="3">
              <Text as="p">Get Started</Text>
            </Button>
          </Link>

          <Flex gap="16px" wrap="wrap" justify="center">
            {navigation.map((item) => (
              <Link key={item.title} to={item.link}>
                <Button size="3">
                  <Text as="p">{item.title}</Text>
                </Button>
              </Link>
            ))}
          </Flex>
        </Flex>

        <Grid
          columns={{ initial: "2", xs: "3", md: "5" }}
          py="32px"
          gap="32px"
          style={{
            borderTop: "1px solid var(--gray-12)",
            borderBottom: "1px solid var(--gray-12)",
          }}
        >
          {footerLinks.map((item) => (
            <Box key={item.heading}>
              <Heading
                as="h3"
                size="5"
                mb="16px"
                weight="regular"
                style={{ color: "white" }}
              >
                {item.heading}
              </Heading>
              <Flex direction="column" gap="8px">
                {item.items.map((link) => (
                  <FooterLink key={link.title} to={link.link}>
                    <Text as="p">{link.title}</Text>
                  </FooterLink>
                ))}
              </Flex>
            </Box>
          ))}
        </Grid>

        <Flex
          align="center"
          justify={{ initial: "center", xs: "between" }}
          wrap="wrap"
          gap="8px"
        >
          <Text as="p" align="center" style={{ color: "var(--gray-10)" }}>
            ProCach 2025 | Design Andika Filtra | Code{" "}
            <RadixLink href="https://ansisarthur.com/">
              ansisarthur.com
            </RadixLink>
          </Text>

          <Flex gap="16px" align="center">
            {legalLinks.map((item) => (
              <FooterLink key={item.title} to={item.link}>
                <Text as="p" align="center">
                  {item.title}
                </Text>
              </FooterLink>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};

const FooterLink = styled(Link)`
  color: var(--gray-10);
  &:hover {
    color: white;
  }
`;

export default Footer;
