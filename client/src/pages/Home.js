import React, { useContext } from "react";
import Card from "../components/Card";
import { GlobalState } from "../GlobalState";

const Home = () => {
  const state = useContext(GlobalState);
  const [user] = state.user;
  const [constructionSites] = state.constructions;

  
  return (
    <div className="w-full md:w-3/4 flex flex-wrap justify-center mx-auto">
      {user.name && (
        <div className="w-full">
          <h2 className="mt-6 text-4xl font-semibold text-gray-900">
            Welcome {user.name}
          </h2>
        </div>
      )}
      {constructionSites.map((sites) => (
        <Card key={sites.id} {...sites} />
      ))}
      <div className="w-full bottom-0 fixed flex justify-center items-center font-bold py-2 bg-white">
        <span>&copy; Reserved by Darshan.P and Ram Sanjay</span>
      </div>
    </div>
  );
};

export default Home;
