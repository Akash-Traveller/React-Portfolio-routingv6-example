import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/proj1.jpg";
import project2 from "../images/proj2.jpg";
import project3 from "../images/proj3.jpg";
import project4 from "../images/proj4.jpg";
import project5 from "../images/proj5.jpg";
import project6 from "../images/proj6.jpg";
import project7 from "../images/proj7.jpg";
import project8 from "../images/proj8.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Sight Seeing",
      imageUrl: project1,
    },
    {
      id: 2,
      name: "Bike camping facility",
      imageUrl: project2,
    },
    {
      id: 3,
      name: "Noton High Street Product",
      imageUrl: project3,
    },
    {
      id: 4,
      name: "God's Own Country",
      imageUrl: project4,
    },
    {
      id: 5,
      name: "Forest Management",
      imageUrl: project4,
    },
    {
      id: 6,
      name: "Flower Management",
      imageUrl: project4,
    },
  ];

  return (
    <motion.div
      animate={{
        scale: [2, 1],
        rotate: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="projects"
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              key={item.id}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;