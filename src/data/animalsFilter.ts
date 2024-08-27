import { AnimalCollectionFilter } from "@/types/CollectionFilter";

export const animalsFilter: AnimalCollectionFilter[] = [
  {
    name: "Moe",
    type: "Dog",
    total: 30,
  },
  {
    name: "Maria",
    type: "Cat",
    total: 30,
  },
  {
    name: "Noah",
    type: "Elephant",
    total: 30,
  },
  {
    name: "Liam",
    type: "Horse",
    total: 30,
  },
  {
    name: "Sophia",
    type: "Dolphin",
    total: 30,
  },
  {
    name: "Isabella",
    type: "Koala",
    total: 30,
  },
  {
    name: "Ava",
    type: "Penguin",
    total: 30,
  },
  {
    name: "Emma",
    type: "Panda",
    total: 30,
  },
  {
    name: "Olivia",
    type: "Monkey",
    total: 30,
  },
  {
    name: "James",
    type: "Tiger",
    total: 30,
  },
  {
    name: "William",
    type: "Fox",
    total: 30,
  },
].sort((a, b) => a.type.localeCompare(b.type));
