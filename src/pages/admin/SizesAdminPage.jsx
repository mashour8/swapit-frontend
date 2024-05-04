/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { FilePenLine, Trash } from "lucide-react";
import { Switch } from "@headlessui/react";
import Checkbox from "../../components/others/Checkbox";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import ReactPaginate from "react-paginate";

import "../../components/others/PaginationWithLibrary.css";
import PopUpEditSize from "../../components/others/PopUpEditSize";
import PopUpAddSize from "../../components/others/PopUpAddSize";
import sizesServer from "../../services/sizes.service";

const LIMIT = 15;

const SizesAdminPage = () => {
  const [isAddNewModalOpen, setIsAddNewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // TO DO refactor all the names

  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const totalPages = Math.ceil(totalCount / LIMIT);

  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);

  const [value, setValue] = useState(false);

  const [sizes, setSizes] = useState([]);

  const [sizeID, setSizeID] = useState("");

  const handlePageClick = (event) => {
    const newOffset = event.selected * LIMIT;
    if (newOffset < 0 || newOffset >= totalCount) {
      return;
    }
    setOffset(newOffset);
  };

  var notyf = new Notyf({
    position: {
      x: "right",
      y: "top",
    },
  });

  const getAllSize = () => {
    sizesServer
      .getAllSize(LIMIT, offset)
      .then((response) => {
        setSizes(response.data.sizes);
        setTotalCount(response.data.totalCount);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handelSetEnabled = (sizeId) => {
    const sizeIndex = sizes.findIndex((size) => {
      console.log("size id::: ", sizeId);
      return size._id === sizeId;
    });
    const updatedSizes = [...sizes];

    updatedSizes[sizeIndex] = {
      ...updatedSizes[sizeIndex],
      isActive: !updatedSizes[sizeIndex].isActive,
    };
    updateSize(sizeId, updatedSizes[sizeIndex]);
  };

  const updateSize = (id, newData) => {
    sizesServer
      .updateSize(id, newData)
      .then((response) => {
        setSizes(response.data.sizes);
        getAllSize(LIMIT, offset);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = () => {
    setValue(!value);
  };

  useEffect(() => {
    getAllSize(LIMIT, offset);
    console.log("sizes", sizes);
  }, [offset, list]);

  const handleSelectAll = (e) => {
    setIsCheckedAll(!isCheckedAll);
    setIsCheckedAll(list.map((li) => li.id));
    if (isCheckedAll) {
      setIsCheckedAll([]);
    }
  };

  const handelDelete = (e) => {
    // handel delete one time
    const id = e.currentTarget.id;
    sizesServer
      .deleteSize(id)
      .then((response) => {
        console.log("response.data", response.data);
        notyf.success(
          `Size ${response.data.message} has been successfully deleted`
        );
        getAllSize(LIMIT, offset);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // handel add new product

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  // handel add new product

  const handleAddNewSizeClick = () => {
    // Code to toggle the modal goes here
    setIsAddNewModalOpen(!isAddNewModalOpen); // Toggle modal state
    if (isAddNewModalOpen) {
      getAllSize(LIMIT, offset);
    }
  };

  const handelEdit = (e) => {
    const id = e.currentTarget.id;
    setSizeID(id);

    setIsEditModalOpen(!isEditModalOpen);

    if (isEditModalOpen) {
      getAllSize(LIMIT, offset);
    }
  };

  return (
    <div className="continer bg-[#f0f0f5] w-screen h-screen overflow-scroll">
      {/* starting code  */}
      {isAddNewModalOpen && (
        <PopUpAddSize
          handleAddNewSizeClick={handleAddNewSizeClick}
        ></PopUpAddSize>
      )}

      {isEditModalOpen && (
        <PopUpEditSize handelEdit={handelEdit} sizeID={sizeID}></PopUpEditSize>
      )}
      {/* end code  */}

      <h1 className="font-medium text-2xl mt-12 m-6 p-2">Sizes page</h1>
      <div className="m-6 p-8  bg-white rounded-lg ">
        <button
          type="submit"
          onClick={handleAddNewSizeClick}
          className="mt-8 p-2 shadow-sm bg-[#b7f088] rounded-md text-sm font-medium"
        >
          Add new Size
        </button>
        <table className="table-auto mt-8">
          <thead>
            <tr className="font-light">
              <th className="min-w-14">
                <Checkbox
                  type="checkbox"
                  id={"selectAll"}
                  handleClick={handleSelectAll}
                  isChecked={isCheckedAll}
                />
              </th>
              <th className="px-4 py-2 min-w-14 font-light text-sm">#</th>
              <th className="min-w-32 w-full font-light text-sm">Name</th>
              <th className="w-full font-light text-sm">Status</th>
              <th className="w-full font-light text-sm">Options</th>
            </tr>
          </thead>
          <tbody>
            {sizes ? (
              <>
                {sizes.map((size, index) => (
                  <tr className="font-light" key={size._id}>
                    <td className="border px-4 py-2">
                      <Checkbox
                        key={size._id}
                        type="checkbox"
                        id={size._id}
                        handleClick={handleClick}
                        isChecked={isCheck.includes(size._id)}
                      />
                    </td>
                    <td className="border px-4 py-2">
                      {/* to do later */}
                      {index + 1}
                    </td>

                    <td className="border px-4 py-2">{size.name}</td>

                    <td className="border px-4 py-2">
                      <div className="py-4">
                        <Switch
                          checked={size.isActive}
                          onChange={() => handelSetEnabled(size._id)}
                          className={`${
                            size.isActive ? "bg-blue-600" : "bg-gray-200"
                          } relative inline-flex h-6 w-11 items-center rounded-full`}
                        >
                          <span
                            className={`${
                              size.isActive ? "translate-x-6" : "translate-x-1"
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                          />
                        </Switch>
                      </div>
                    </td>
                    <td className="border px-4 py-2">
                      <div className="flex gap-4">
                        <button onClick={handelEdit} id={size._id}>
                          <FilePenLine size={20} color="#005cc5" />
                        </button>
                        <button onClick={handelDelete} id={size._id}>
                          <Trash size={20} color="red" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <p> loadding...</p>
            )}
          </tbody>
        </table>
        {/* Pagination controls */}
        <ReactPaginate
          containerClassName="pagination"
          activeClassName="active"
          pageClassName="page-item"
          onPageChange={handlePageClick}
          breakLabel="..."
          pageCount={totalPages}
          previousLabel={<button>Previous Page</button>}
          nextLabel={<button>Next Page</button>}
        />
      </div>
    </div>
  );
};

export default SizesAdminPage;
