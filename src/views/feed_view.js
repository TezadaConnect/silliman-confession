import React from "react";
import AddConfessionComponent from "../common/add_confession_component";
import NavbarComponent from "../common/navbar_component";
import PostCardComponent, {
  defaultMessage,
} from "../common/post_card_component";

const FeedView = () => {
  return (
    <React.Fragment>
      <div>
        <NavbarComponent id={0} />
      </div>
      <div className="flex gap-3 lg:w-10/12 w-full m-auto mt-20">
        {/* Ads here */}
        <div className="lg:initial hidden"></div>
        <div className="lg:w-1/2 w-full lg:p-0 p-3 m-auto">
          <div>
            <FeedComponents />
          </div>
        </div>
        {/* Ads here */}
        <div className="lg:initial hidden"></div>
      </div>
    </React.Fragment>
  );
};

export default FeedView;

const FeedComponents = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-4 mb-10">
        <AddConfessionComponent />
        {SampleData.map((data, key) => (
          <PostCardComponent
            key={key}
            date={data.date}
            img={null}
            name={data.username}
            message={data.message}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

const SampleData = [
  {
    username: "Anonymous",
    date: "1m",
    message: defaultMessage,
    img: null,
  },
  {
    username: "Tezada",
    date: "2m",
    message: defaultMessage,
    img: null,
  },
  {
    username: "Admin-X",
    date: "45m",
    message: defaultMessage,
    img: null,
  },
  {
    username: "GamayOnits",
    date: "55m",
    message: defaultMessage,
    img: "",
  },
  {
    username: "Anonymous",
    date: "57m",
    message: defaultMessage,
    img: null,
  },
];
