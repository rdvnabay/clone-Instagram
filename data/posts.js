import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: "https://image.shutterstock.com/image-photo/developing-programming-coding-technologies-website-260nw-699634498.jpg",
    user: USERS[1].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts.",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "cleverqazi",
        comment: "yo",
      },
      {
        user: "rdvnabay",
        comment: "awesome",
      },
    ]
  },
  {
    imageUrl: "https://image.shutterstock.com/image-photo/company-employees-working-software-development-600w-628131818.jpg",
    user: USERS[0].user,
    likes: 7870,
    caption: "Train Ride to Hogwarts.",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "cleverqazi",
        comment: "yo",
      },
      {
        user: "rdvnabay",
        comment: "awesome",
      },
    ]
  },
];
