import Event from "@/components/Events";
import { Button } from "@/components/ui/button";
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

const page = () => {
  return (
    <div className="h-screen bg-blue-700/50 w-full events flex justify-center sm:items-center flex-col px-4 py-8 sm:px-16 sm:py-8">
      <h2 className="text-3xl font-bold capitalize">Events</h2>
      <p>
        Wanna be part of overwhelming Events that can help you master technical
        skills oragnised by Techspire.
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
  );
};

export default page;
