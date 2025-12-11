import Event from "@/components/Events";
import Hero from "@/components/heroSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const Events = [
  { id: 1, name: "HAck the web 1", date: "11 Dec 2025", participants: 60 },
  { id: 2, name: "HAck the web 2", date: "11 Dec 2025", participants: 60 },
  { id: 3, name: "HAck the web 3", date: "11 Dec 2025", participants: 60 },
  { id: 4, name: "HAck the web 4", date: "11 Dec 2025", participants: 60 },
  { id: 5, name: "HAck the web 5", date: "11 Dec 2025", participants: 60 },
  { id: 6, name: "HAck the web 6", date: "11 Dec 2025", participants: 60 },
];

// what do club do

const Works = [
  {
    name: "Events",
    description: "Organises college-level events",
  },
  {
    name: "Incubation",
    description: "Incubates startups",
  },
  {
    name: "Mentoship",
    description: "Guide you to success",
  },
  {
    name: "Session",
    description: "session for career and technical sills growth",
  },
];

// projects

const Projects = [
  {
    id: 1,
    name: "Technical club website",
    description: "Official website for the college's technical club",
  },
  {
    id: 2,
    name: "LMS for CSE department",
    description:
      "Learning management system for computer science and engineering departmnt",
  },
  {
    id: 3,
    name: "LMS for CSE department",
    description:
      "Learning management system for computer science and engineering departmnt",
  },
  {
    id: 4,
    name: "LMS for CSE department",
    description:
      "Learning management system for computer science and engineering departmnt",
  },
];

const page = () => {
  return (
    <>
      <Hero />

      <div className="flex flex-col gap-4">
        {/* About the Club */}
        <div className="flex flex-col justify-center sm:items-center px-4 py-8 sm:py-8 sm:px-16">
          <h2 className="text-3xl font-bold capitalize">What do we do</h2>
          <p>
            Technical club organises technical events, incubate pre-stage
            startups, build a community of innovators, developers and brilliant
            minds.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 my-8">
            {Works.map((work, i) => {
              return (
                <Card className="w-full sm:w-sm max-h-[200px]" key={i}>
                  <CardHeader>
                    <p className="font-bold text-xl">{i + 1}</p>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-semibold">{work.name}</h3>
                    <p>{work.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Events section */}
        <div className="bg-blue-700/50 w-full events flex justify-center sm:items-center flex-col px-4 py-8 sm:px-16 sm:py-8">
          <h2 className="text-3xl font-bold capitalize">Events</h2>
          <p>
            Wanna be part of overwhelming Events that can help you master
            technical skills oragnised by Techspire.
          </p>
          <div className="flex justify-center sm:items-center flex-wrap gap-4 my-8">
            {Events.map((event) => {
              return (
                <Event
                  id={event.id}
                  name={event.name}
                  date={event.date}
                  participants={event.participants}
                  key={event.name}
                />
              );
            })}
          </div>
          <div className="flex justify-center items-center">
            <Link href={"/events"}>
              <Button variant={"outline"}>View all events</Button>
            </Link>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col justify-center sm:items-center px-4 py-8 sm:py-8 sm:px-16">
          <h2 className="font-bold text-3xl">Projects</h2>
          <p>
            Find amazing projects built by the Techspire&apos;s members that
            bring a significant change to the society or mae our life easy.
          </p>
          <div className="w-full my-4 flex flex-wrap gap-4 sm:justify-center">
            {Projects.map((project) => {
              return (
                <Card
                  className="w-full sm:w-sm  max-h-[200px]"
                  key={project.id}
                >
                  <CardContent>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p>{project.description}</p>
                    <CardAction className="mt-4">
                      <Link
                        href={`projects/${project.id}`}
                        className="cursor-pointer"
                      >
                        <Button>Check it out</Button>
                      </Link>
                    </CardAction>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="flex justify-center items-center">
            <Link href={"/projects"}>
              <Button variant={"outline"}>View all projects</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-600/50 py-24 flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl font-bold">TECHSPIRE</h2>
        <p>Be a part of club that takes you forward</p>
        <Button>Join the club</Button>
      </div>
    </>
  );
};

export default page;
