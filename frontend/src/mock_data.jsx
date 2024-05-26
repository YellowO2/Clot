// Mock user data
const mockUser = {
  id: 1,
  name: "Bob Smith",
  email: "bob.smith@example.com",
  avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  bio: "Love making a difference through small acts of kindness.",
  location: "Los Angeles, CA",
  friends: [
    {
      id: 1,
      name: "Alice Johnson",
      recentActivity: "Volunteering at the animal shelter",
    },
    {
      id: 3,
      name: "Charlie Brown",
      recentActivity: "Planting new flowers in the community garden",
    },
    {
      id: 4,
      name: "David Williams",
      recentActivity: "Attending a community clean-up event",
    },
    {
      id: 5,
      name: "Eve Davis",
      recentActivity: "Hosting a local book club meeting",
    },
    {
      id: 6,
      name: "Frank Miller",
      recentActivity: "Organizing a charity run",
    },
    {
      id: 7,
      name: "Grace Lee",
      recentActivity: "Participating in a neighborhood watch program",
    },
    {
      id: 8,
      name: "Hannah Wilson",
      recentActivity: "Teaching a community cooking class",
    },
    {
      id: 9,
      name: "Ian Taylor",
      recentActivity: "Building a new playground in the local park",
    },
    {
      id: 10,
      name: "Jane Martinez",
      recentActivity: "Joining a local art club",
    },
  ],

  communities: [
    {
      id: 1,
      name: "Animal Shelter Volunteers",
      description:
        "Volunteers dedicated to helping out at local animal shelters.",
    },
    {
      id: 3,
      name: "Brawl stars",
      description: "People who like playing brawl stars.",
    },
  ],
};

// Mock event data
const mockEvents = [
  {
    id: 1,
    tag: "Volunteering",
    title: "Beach Cleanup",
    description: "Join us for a Beach Cleanup event!",
    image: "https://i.imgur.com/T4h7W8n.jpeg",
    upvotes: 100,
    createdOn: "2024-05-01",
  },
  {
    id: 2,
    tag: "Volunteering",
    title: "Animal Shelter volunteers",
    description: "Volunteers needed to help out at local animal shelter",
    image: "https://i.imgur.com/KOaxoHj.jpeg",
    upvotes: 10,
    createdOn: "2024-05-02",
  },
  {
    id: 69,
    tag: "Interest Group",
    title: "Rare fish enthusiasts meetup",
    description: "Calling all rare fish enthusiasts! Let's meet up to discuss rare fish.",
    image: "https://i.imgur.com/GR5qafE.jpeg",
    upvotes: 69,
    createdOn: "2024-05-03",
  },
  {
    id: "White_Clot_id",
    tag: "Volunteering",
    title: "Ecosystem Restoration",
    description: "Help us restore the local ecosystem !",
    image: "https://i.imgur.com/5DSYNeP.jpeg",
    upvotes: 11,
    createdOn: "2024-05-04",
  },
  {
    id: "rithwik",
    tag: "Donation",
    title: "Blood drive",
    description: "Donate blood to those in need!",
    image: "https://i.imgur.com/DdAV5Em.jpeg",
    upvotes: 0,
    createdOn: "2024-05-05",
  },
];

export { mockUser, mockEvents };
