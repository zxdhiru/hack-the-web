"use client";
import React from "react";
import { Card, CardAction, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

const Event = ({
  id,
  name,
  date,
  participants,
}: {
  id: number;
  name: string;
  date: string;
  participants: number;
}) => {
  return (
    <Card className="w-full sm:w-sm">
      <CardContent>
        <p>Event name: {name}</p>
        <p>Date: {date}</p>
        <p>{participants}+ participants</p>
        <CardAction className="mt-4">
          <Link href={`events/${id}`} className="cursor-pointer">
            <Button>Go to {name} page</Button>
          </Link>
        </CardAction>
      </CardContent>
    </Card>
  );
};

export default Event;
