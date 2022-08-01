import Head from "next/head";
import Image from "next/image";
import { Blog } from "../components/Blog";
import { Content } from "../components/Content";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar";
import { Qutos } from "../components/Qutos";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
// import {
//   ChasingDots,
//   Circle,
//   CubeGrid,
//   DoubleBounce,
//   FadingCircle,
//   FoldingCube,
//   Pulse,
//   RotatingPlane,
//   ThreeBounce,
//   WanderingCubes,
//   Wave
// } from 'better-react-spinkit'

export default function Home() {
  const [Toggle, setToggle] = useState(false);
  
  return (
    <>
      <Head>
        <title>Lesson-Home</title>
        <link rel="shortcut icon" href="favIcon.jpg" type="image/x-icon" />
      </Head>
      <Navbar Toggle={Toggle} setToggle={setToggle} />
      <motion.div
        whileInView={{ opacity: [0, 1], y: [150, 0] }}
        transition={{
          duration: 0.9,
        }}
      >
        <Hero Toggle={Toggle} />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [150, 0] }}
        transition={{
          duration: 0.9,
        }}
      >
        <Content />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [150, 0] }}
        transition={{
          duration: 0.9,
        }}
      >
        <Qutos />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [150, 0] }}
        transition={{
          duration: 0.9,
        }}
      >
        <Main />
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1], y: [150, 0] }}
        transition={{
          duration: 0.9,
        }}
      >
        {" "}
        <Blog />
      </motion.div>

      <Footer />
    </>
  );
}
