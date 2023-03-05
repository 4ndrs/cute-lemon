// simulate some kind of api fetcher
import { sleep } from "../utils";

import JenniferPicture from "../assets/jennifer.jpg";
import JohnPicture from "../assets/john.jpg";
import BryantPicture from "../assets/bryant.jpg";
import ElisaPicture from "../assets/elisa.jpg";

import type { Comment } from "../types";

const commentsData: Comment[] = [
  {
    id: 1,
    name: "Jennifer Lopez",
    nickname: "jennifer22",
    imageSrc: JenniferPicture,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Praesent a urna nibh.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    nickname: "smith33",
    imageSrc: JohnPicture,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Praesent a urna nibh.",
    rating: 4,
  },
  {
    id: 3,
    name: "Bryant Conner",
    nickname: "bryant8",
    imageSrc: BryantPicture,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Praesent a urna nibh.",
    rating: 5,
  },
  {
    id: 4,
    name: "Elisa McGuire",
    nickname: "eli77",
    imageSrc: ElisaPicture,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Praesent a urna nibh.",
    rating: 5,
  },
];

const getComments = async () => {
  await sleep(0);

  return commentsData;
};

export { getComments };
