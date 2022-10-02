import React from "react";

const AvatarComponent = ({ src = null, size = "sm" }) => {
  return (
    <React.Fragment>
      <img
        src={
          src === null
            ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            : src
        }
        className={`rounded-full ${
          size === "lg" ? "w-20" : size === "md" ? "w-10" : "w-6"
        } border border-gray-400`}
        alt="user-avatar"
      />
    </React.Fragment>
  );
};

export default AvatarComponent;
