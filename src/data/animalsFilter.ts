import { CollectionFilter } from "@/types/CollectionFilter";

export const animalsFilter: CollectionFilter[] = [
  {
    name: "Dog",
    total: 30,
  },
  {
    name: "Cat",
    total: 30,
  },
  {
    name: "Elephant",
    total: 30,
  },
  {
    name: "Horse",
    total: 30,
  },
  {
    name: "Dolphin",
    total: 30,
  },
  {
    name: "Koala",
    total: 30,
  },
  {
    name: "Penguin",
    total: 30,
  },
  {
    name: "Panda",
    total: 30,
  },
  {
    name: "Monkey",
    total: 30,
  },
  {
    name: "Tiger",
    total: 30,
  },
  {
    name: "Fox",
    total: 30,
  },
].sort((a, b) => a.name.localeCompare(b.name));
