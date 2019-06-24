export default {
  name: "Roadmap E2E development",
  id: 1,
  toggled: true,
  children: [
    {
      name: "0. Before you start",
      id: 1,
      toggled: true,
      children: [
        {
          name: "Understand the problem you are solving"
        },
        {
          name: "Workshop",
          children: [
            { name: "Refine and prioritise all features" },
            { name: "Pick your stack" },
            {
              name: "Strategy for development",
              children: [
                { name: "Roadmap" },
                { name: "Resourcing plan and costs" }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "1. Introduction to E2E app development",
      children: [
        {
          name: "Web",
          children: []
        },
        { name: "index.js" }
      ]
    },
    {
      name: "2. Monorepo - platform structure",
      children: [
        { name: "Monorepo introduction" },
        { name: "+Naming conventions for repo and monorepo" },
        {
          name:
            " +Coding standards for Repo + Mono → (tslint, prettier, husky) - draft"
        }
      ]
    }
  ]
};
