import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import AvatarComponent from "./avatar_component";
import AddConfessionModal from "./modals/add_confession_modal";

const MySwal = withReactContent(Swal);

const AddConfessionComponent = () => {
  return (
    <React.Fragment>
      <div className="flex bg-white w-full gap-3 p-3 shadow-md rounded-md">
        <AvatarComponent size="md" />
        <div
          className="bg-gray-200 w-full flex rounded-full items-center"
          onClick={() => createNewProduct()}
        >
          <div className=" italic text-gray-400 select-none">
            &nbsp;&nbsp;&nbsp;Write Confession
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddConfessionComponent;

const createNewProduct = () => {
  MySwal.fire({
    width: 800,
    html: <AddConfessionModal />,
    showConfirmButton: false,
    showCloseButton: true,
  });
};
