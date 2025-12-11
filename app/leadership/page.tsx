import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item";
import { div } from "motion/react-client";
import Image from "next/image";

const models = [
  {
    name: "Harish",
    description: "SponsorTeam Head",
    image:
      "https://images.unsplash.com/photo-1583195763986-0231686dcd43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
    credit: "Valeria Reverdo on Unsplash",
  },
  {
    name: "Shreya",
    description: "Technical coordinater",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGltYWdlfGVufDB8fDB8fHww",
    credit: "Michael Oeser on Unsplash",
  },
  {
    name: "Ravi",
    description: "Event Organizer",
    image:
      "https://images.unsplash.com/photo-1596502059330-be10388e3ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
    credit: "Cherry Laithang on Unsplash",
  },
  {
    name: "RajRoshan",
    description: "Tech head ",
    image:
      "https://images.unsplash.com/photo-1590873803005-539ede4d828a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
    credit: "Cherry Laithang on Unsplash",
  },
];

// ignore
const page = () => {
  return (
    <div className="bg-blue-200">
      <div className="max-w-5xl m-auto  ">
        <h1 className="text-center mb-5  text-3xl md:text-4xl font-medium ">
          LeaderShip Board
        </h1>

        <div className="space-y-5">
          <h1 className="text-3xl text-center">Tech-Team</h1>
          <div className="flex justify-items-center gap-6  ">
            <ItemGroup className="flex flex-row flex-wrap gap-4 ">
              {models.map(({ name, image, description, credit }) => (
                <Item
                  key={name}
                  variant="outline"
                  className="max-w-60 w-60  bg-gray-100 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <ItemHeader>
                    <Image
                      src={image}
                      alt={name}
                      width={50}
                      height={50}
                      className="aspect-square w-full rounded-sm object-cover"
                    />
                  </ItemHeader>
                  <ItemContent>
                    <ItemTitle>{name}</ItemTitle>
                    <ItemDescription>{description}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          </div>
          <h1 className="text-3xl text-center">Sponser-Team</h1>
          <div className="flex justify-items-center  gap-6">
            <ItemGroup className="flex flex-row flex-wrap gap-4">
              {models.map(({ name, image, description, credit }) => (
                <Item
                  key={name}
                  variant="outline"
                  className="max-w-60 w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl bg-gray-100"
                >
                  <ItemHeader>
                    <Image
                      src={image}
                      alt={name}
                      width={50}
                      height={50}
                      className="aspect-square w-full rounded-sm object-cover"
                    />
                  </ItemHeader>
                  <ItemContent>
                    <ItemTitle>{name}</ItemTitle>
                    <ItemDescription>{description}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          </div>
          <h1 className="text-3xl text-center">Social-Media-Team</h1>
          <div className="flex justify-items-center gap-6">
            <ItemGroup className="flex flex-row flex-wrap gap-4">
              {models.map(({ name, image, description, credit }) => (
                <Item
                  key={name}
                  variant="outline"
                  className="max-w-60 w-60 border rounded-2xl p-5 overflow-hidden shadow-md duration-300 hover:scale-105 hover:shadow-xl bg-blue bg-gray-100"
                >
                  <ItemHeader>
                    <Image
                      src={image}
                      alt={name}
                      width={50}
                      height={50}
                      className="aspect-square w-full rounded-sm object-cover"
                    />
                  </ItemHeader>
                  <ItemContent>
                    <ItemTitle>{name}</ItemTitle>
                    <ItemDescription>{description}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </ItemGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
