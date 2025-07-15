import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlayCircle } from "lucide-react";

export default function SermonsPage() {
  const sermons = [
    {
      title: "The Power of Forgiveness",
      preacher: "Pastor John Doe",
      date: "July 7, 2025",
      description:
        "A message on the liberating power of forgiveness and its role in our spiritual journey.",
      link: "#", // Placeholder for sermon link
    },
    {
      title: "Building a Foundation of Faith",
      preacher: "Pastor John Doe",
      date: "June 30, 2025",
      description:
        "Exploring how to establish a strong and unshakeable faith in challenging times.",
      link: "#",
    },
    {
      title: "Love Your Neighbor",
      preacher: "Guest Speaker Sarah Lee",
      date: "June 23, 2025",
      description:
        "An inspiring sermon on the practical application of loving our neighbors as ourselves.",
      link: "#",
    },
    {
      title: "Finding Peace in the Storm",
      preacher: "Pastor John Doe",
      date: "June 16, 2025",
      description:
        "Discovering how to maintain inner peace and trust in God amidst life's difficulties.",
      link: "#",
    },
    {
      title: "The Joy of Giving",
      preacher: "Pastor John Doe",
      date: "June 9, 2025",
      description:
        "Understanding the biblical principles of generosity and the blessings that come with giving.",
      link: "#",
    },
  ];

  return (
    <section className="py-12 md:py-24 lg:py-32 lg:px-24 bg-muted animate-fade-in">
      <div className=" px-4 md:px-6 lg:px-10">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Recent Sermons
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Catch up on our latest messages and be inspired by the Word of God.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{sermon.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {sermon.preacher} | {sermon.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-sm text-muted-foreground mb-4">
                  {sermon.description}
                </p>
                <Link href={sermon.link} passHref>
                  <Button variant="outline" className="w-full bg-transparent">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Watch/Listen
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="#" className="text-primary hover:underline">
            View Sermon Archive &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
