import { useState } from "react";
import "./App.css";
import Tweet from "./components/Tweet";

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
    isADog: true,
    hatesCats: true,
    isASaint: true,
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
    isADog: true,
    hatesCats: true,
    isASaint: true,
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
    isADog: true,
    hatesCats: true,
    isASaint: true,
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",

    isADog: true,
    hatesCats: true,
    isASaint: true,
  },
];

function App() {
  console.log("HEllo");

  return (
    <div className="App">
      {tweetsArray.map((tweet, index) => {
        return (
          <Tweet
            key={tweet.message + index}
            {...tweet}
            // user={tweet.user}
            // timestamp={tweet.timestamp}
            // message={tweet.message}
            // isASaint={tweet.isASaint}
            // isADog={tweet.isADog}
            // hatesCats={tweet.hatesCats}
          />
        );
      })}
      {/* {tweetsArray.reduce((acc, tweet) => {
        return [
          ...acc,
          <Tweet
            user={tweet.user}
            timestamp={tweet.timestamp}
            message={tweet.message}
          />,
        ];
      }, [])} */}
    </div>
  );
}

export default App;
