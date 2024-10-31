"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-4 gap-4">
        <li>Microsoft</li>
        <li>Linear Algebra</li>
        <li>Calculus</li>
        <li>Communication</li>
        <li>JavaScript</li>
        <li>C#</li>
        <li>Python</li>
        <li>C++</li>
        <li>Git</li>
       
      </ul>
      
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>High School Diploma -Sharyland Advanced Academic Academy</li>
        <li>Associates&apos;s Interdisciplinary Studies - South Texas College</li>
        <li>Bachelor&apos;s Computer Science - University of Texas Rio Grande Valley</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>NSLS- Natinal Society of Leadership and Success</li>
        <li>Texas Food Handlers Certification</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/happy_cat.gif" width={500} height={500} alt="happy cat" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            As a passionate computer scientist, I am driven by a fascination with technology
            and its potential to solve complex problems. My journey began with an early interest in coding,
            which evolved into a commitment to understanding algorithms, data structures, and software development.
            
            I bring a strong foundation inprogramming languages and a knack for innovative problem-solving.  
            My experience in collaborative projects has honed my skills in communicationand teamwork, allowing
            me to translate technical concepts into accessible language. I am dedicated to continuous learning
            and adapting to emerging technologies, ensuring that I can contribute effectively to any team.

            With a blend of technical expertise and a creative mindset, I am eager to tackle challenges and drive
            impactful solutions in the ever-evolving field of computer science.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
