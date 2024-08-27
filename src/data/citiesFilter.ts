import { CityCollectionFilter } from "@/types/CollectionFilter";

export const citiesFilter: CityCollectionFilter[] = [
  {
    name: "Hong Kong",
    total: 0,
  },
  {
    name: "Singapore",
    total: 0,
  },
  {
    name: "Bangkok",
    total: 0,
  },
  {
    name: "Jakarta",
    total: 0,
  },
  {
    name: "Seoul",
    total: 0,
  },
  {
    name: "Tokyo",
    total: 0,
  },
  {
    name: "Beijing",
    total: 0,
  },
  {
    name: "Sydney",
    total: 0,
  },
  {
    name: "Shanghai",
    total: 0,
  },
  {
    name: "Kuala Lumpur",
    total: 0,
  },
  {
    name: "Dubai",
    total: 0,
  },
  {
    name: "Mumbai",
    total: 0,
  },
  {
    name: "Abu Dhabi",
    total: 0,
  },
  {
    name: "New Delhi",
    total: 0,
  },
  {
    name: "Beirut",
    total: 0,
  },
  {
    name: "Tel Aviv",
    total: 0,
  },
  {
    name: "Doha",
    total: 0,
  },
  {
    name: "Muscat",
    total: 0,
  },
  {
    name: "Kuwait",
    total: 0,
  },
  {
    name: "Tehran",
    total: 0,
  },
  {
    name: "Los Angeles",
    total: 0,
  },
  {
    name: "San Francisco",
    total: 0,
  },
  {
    name: "New York",
    total: 0,
  },
  {
    name: "Miami",
    total: 0,
  },
  {
    name: "Seattle",
    total: 0,
  },
  {
    name: "Chicago",
    total: 0,
  },
  {
    name: "Boston",
    total: 0,
  },
  {
    name: "Vancouver",
    total: 0,
  },
  {
    name: "Toronto",
    total: 0,
  },
  {
    name: "Atlanta",
    total: 0,
  },
  {
    name: "London",
    total: 0,
  },
  {
    name: "Paris",
    total: 0,
  },
  {
    name: "Berlin",
    total: 0,
  },
  {
    name: "Amsterdam",
    total: 0,
  },
  {
    name: "Barcelona",
    total: 0,
  },
  {
    name: "Milan",
    total: 0,
  },
  {
    name: "Zurich",
    total: 0,
  },
  {
    name: "Munich",
    total: 0,
  },
  {
    name: "Stockholm",
    total: 0,
  },
  {
    name: "Moscow",
    total: 0,
  },
  {
    name: "Cape Town",
    total: 0,
  },
  {
    name: "Cairo",
    total: 0,
  },
  {
    name: "Nairobi",
    total: 0,
  },
  {
    name: "Accra",
    total: 0,
  },
  {
    name: "Casa Blanca",
    total: 0,
  },
  {
    name: "Lagos",
    total: 0,
  },
  {
    name: "Johannesburg",
    total: 0,
  },
  {
    name: "Addis Ababa",
    total: 0,
  },
  {
    name: "Dar es Salem",
    total: 0,
  },
  {
    name: "Algiers",
    total: 0,
  },
  {
    name: "Buenos Aires",
    total: 0,
  },
  {
    name: "Mexico City",
    total: 0,
  },
  {
    name: "Rio",
    total: 0,
  },
  {
    name: "Santiago",
    total: 0,
  },
  {
    name: "Bogota",
    total: 0,
  },
  {
    name: "Lima",
    total: 0,
  },
  {
    name: "Panama City",
    total: 0,
  },
  {
    name: "Kingston",
    total: 0,
  },
  {
    name: "Quito",
    total: 0,
  },
  {
    name: "Puerto Rico",
    total: 0,
  },
  {
    name: "Muscat",
    total: 0,
  },
  {
    name: "Kuwait",
    total: 0,
  },
  {
    name: "Tehran",
    total: 0,
  },
  {
    name: "Others",
    total: 5,
  },
].sort((a, b) => {
  if (a.name === "Others") return 1;
  if (b.name === "Others") return -1;
  return a.name.localeCompare(b.name);
});
