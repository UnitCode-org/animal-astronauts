import { CityCollectionFilter } from "@/types/CollectionFilter";

export const citiesFilter: CityCollectionFilter[] = [
  {
    name: "Hong Kong",
    total: 6,
  },
  {
    name: "Singapore",
    total: 6,
  },
  {
    name: "Bangkok",
    total: 6,
  },
  {
    name: "Jakarta",
    total: 6,
  },
  {
    name: "Seoul",
    total: 6,
  },
  {
    name: "Tokyo",
    total: 6,
  },
  {
    name: "Beijing",
    total: 6,
  },
  {
    name: "Sydney",
    total: 4,
  },
  {
    name: "Shanghai",
    total: 4,
  },
  {
    name: "Kuala Lumpur",
    total: 4,
  },
  {
    name: "Dubai",
    total: 6,
  },
  {
    name: "Mumbai",
    total: 6,
  },
  {
    name: "Abu Dhabi",
    total: 6,
  },
  {
    name: "New Delhi",
    total: 6,
  },
  {
    name: "Beirut",
    total: 5,
  },
  {
    name: "Tel Aviv",
    total: 5,
  },
  {
    name: "Doha",
    total: 5,
  },
  {
    name: "Muscat",
    total: 4,
  },
  {
    name: "Kuwait",
    total: 4,
  },
  {
    name: "Tehran",
    total: 4,
  },
  {
    name: "Los Angeles",
    total: 6,
  },
  {
    name: "San Francisco",
    total: 6,
  },
  {
    name: "New York",
    total: 6,
  },
  {
    name: "Miami",
    total: 6,
  },
  {
    name: "Seattle",
    total: 6,
  },
  {
    name: "Chicago",
    total: 6,
  },
  {
    name: "Boston",
    total: 6,
  },
  {
    name: "Vancouver",
    total: 6,
  },
  {
    name: "Toronto",
    total: 6,
  },
  {
    name: "Atlanta",
    total: 6,
  },
  {
    name: "London",
    total: 6,
  },
  {
    name: "Paris",
    total: 6,
  },
  {
    name: "Berlin",
    total: 6,
  },
  {
    name: "Amsterdam",
    total: 6,
  },
  {
    name: "Barcelona",
    total: 6,
  },
  {
    name: "Milan",
    total: 6,
  },
  {
    name: "Zurich",
    total: 6,
  },
  {
    name: "Munich",
    total: 6,
  },
  {
    name: "Stockholm",
    total: 6,
  },
  {
    name: "Moscow",
    total: 5,
  },
  {
    name: "Cape Town",
    total: 6,
  },
  {
    name: "Cairo",
    total: 6,
  },
  {
    name: "Nairobi",
    total: 6,
  },
  {
    name: "Accra",
    total: 6,
  },
  {
    name: "Casa Blanca",
    total: 5,
  },
  {
    name: "Lagos",
    total: 5,
  },
  {
    name: "Johannesburg",
    total: 6,
  },
  {
    name: "Addis Ababa",
    total: 6,
  },
  {
    name: "Dar es Salem",
    total: 6,
  },
  {
    name: "Algiers",
    total: 6,
  },
  {
    name: "Buenos Aires",
    total: 6,
  },
  {
    name: "Mexico City",
    total: 6,
  },
  {
    name: "Rio",
    total: 6,
  },
  {
    name: "Santiago",
    total: 6,
  },
  {
    name: "Bogota",
    total: 6,
  },
  {
    name: "Lima",
    total: 6,
  },
  {
    name: "Panama City",
    total: 6,
  },
  {
    name: "Kingston",
    total: 6,
  },
  {
    name: "Quito",
    total: 6,
  },
  {
    name: "Puerto Rico",
    total: 6,
  },
].sort((a, b) => {
  if (a.name === "Others") return 1;
  if (b.name === "Others") return -1;
  return a.name.localeCompare(b.name);
});
