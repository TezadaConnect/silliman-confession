import React from "react";
import AvatarComponent from "./avatar_component";
import { BiWorld } from "react-icons/bi";
import { TiWarningOutline } from "react-icons/ti";
import { GoComment } from "react-icons/go";
import { MdOutlineThumbsUpDown } from "react-icons/md";

const clickableItem = [
  { name: "Vote", icon: <MdOutlineThumbsUpDown size={20} /> },
  { name: "Comment", icon: <GoComment size={20} /> },
  { name: "Report", icon: <TiWarningOutline size={20} /> },
];

export const defaultMessage =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const PostCardComponent = ({
  date = "1m",
  name = "Anonymous",
  img = null,
  message = defaultMessage,
  voteCount = "23",
  commentCount = "45",
}) => {
  return (
    <React.Fragment>
      <div className="flex flex-col gap-3 bg-white w-full pt-4 px-4 shadow-md rounded-md cursor-default">
        <div className="flex gap-3">
          <AvatarComponent src={img} size="md" />
          <div>
            <p className="font-bold text-gray-500">{name}</p>
            <div className="flex gap-1 items-center text-xs text-gray-400">
              <p className="align-bottom">{date}</p> <BiWorld />
            </div>
          </div>
        </div>
        <div>{message}</div>
        <div>
          <div>
            <hr className="border-gray-300" />
          </div>
          <div className="flex">
            {clickableItem.map((item, index) => {
              return (
                <div className="w-full flex gap-2 justify-center items-center p-3 pb-4 hover:bg-gray-300 cursor-pointer">
                  {index === 0 && <div>{`(${voteCount})`}</div>}
                  {index === 1 && <div>{`(${commentCount})`}</div>}
                  <div>{item.icon}</div>
                  <div className="text-center">{item.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostCardComponent;
