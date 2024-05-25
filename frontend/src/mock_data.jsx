// Mock user data
const mockUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    bio: "Passionate about community service and volunteering.",
    location: "New York, NY",
    friends: [2],
    communities: [
      {
        id: 1,
        name: "Animal Shelter Volunteers",
        description:
          "Volunteers dedicated to helping out at local animal shelters.",
      },
      {
        id: 2,
        name: "Beach Cleanup Crew",
        description: "A community of people who organize beach cleanups.",
      },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "Love making a difference through small acts of kindness.",
    location: "Los Angeles, CA",
    friends: [1],
    communities: [
      {
        id: 1,
        name: "Animal Shelter Volunteers",
        description:
          "Volunteers dedicated to helping out at local animal shelters.",
      },
      {
        id: 3,
        name: "Community Gardeners",
        description:
          "People who love gardening and helping maintain community gardens.",
      },
    ],
  },
];

// Mock event data
const mockEvents = [
  {
    id: 1,
    title: "Cleanup",
    description: "Join us for a cleanup event!",
    image: "https://via.placeholder.com/150",
    upvotes: 100,
    createdOn: "2024-05-01",
  },
  {
    id: 2,
    title: "Clot Restoration",
    description: "Help!!!",
    image: "https://via.placeholder.com/150",
    upvotes: 10,
    createdOn: "2024-05-02",
  },
  {
    id: 69,
    title: "Red Clot Restoration",
    description: "Help us restoring the local clot!",
    image: "https://via.placeholder.com/150",
    upvotes: 69,
    createdOn: "2024-05-03",
  },
  {
    id: "White_Clot_id",
    title: "White Clot Restoration",
    description: "Help us restoring the local !",
    image: "https://via.placeholder.com/150",
    upvotes: 11,
    createdOn: "2024-05-04",
  },
  {
    id: "rithwik",
    title: "Haemoglobin Restoration",
    description: "Help us restoring !",
    image: "https://via.placeholder.com/150",
    upvotes: 0,
    createdOn: "2024-05-05",
  },
];

export { mockUsers, mockEvents };
