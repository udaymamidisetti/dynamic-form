import React from "react";
import { FaTrashCan } from "react-icons/fa6";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { handleCustomText } from "../redux/slices/CustomTextSlice";

const CustomText = ({ onDelete }) => {
  const dispatch = useDispatch();
  const customText = useSelector((state) => state.CustomText.customText);
  return (
    <div>
      <div className="flex mt-[15px] bg-white">
        <div className="w-[40px] bg-[#43AED8] h-[420px]"></div>
        <div className="flex-1 p-[20px]">
          <div className="flex justify-between flex-1">
            <h1 className="text-[22px] text-[#333]">Edit Custom Text</h1>
            <div className="flex">
              <div className="mr-[5px]">
                <button
                  style={{
                    boxShadow: "0 1px 3px 0 rgba(40,60,70,0.2)",
                  }}
                  // onClick={() => handleDeleteContent(uuidv4())}
                  className="h-[36px] leading-[20px] text-[12px] pt-[8px] pb-[8px] pl-[10px] pr-[10px] text-[#3c8dd5]"
                  onClick={onDelete}
                >
                  Cancel
                </button>
                <button
                  style={{
                    boxShadow: "0 1px 3px 0 rgba(40,60,70,0.2)",
                  }}
                  className="h-[36px] leading-[20px] text-[12px] pt-[8px] pb-[8px] pl-[10px] pr-[10px] bg-[#5cb85c] text-[white]"
                >
                  Save
                </button>
              </div>
              <div
                className="h-[36px] flex items-center w-[65px] justify-around"
                style={{
                  boxShadow: "0 1px 3px 0 rgba(40,60,70,0.2)",
                }}
              >
                <HiOutlineClipboardDocument className=" text-[16px] text-[#eee]" />
                <FaTrashCan size={16} className="text-[16px] text-[#eee]" />
              </div>
            </div>
          </div>
          <textarea
            className="text-[13px] border-[1px] focus:outline-none h-[100px] w-[100%] placeholder:text-[13px] p-[7px] mt-[20px]"
            placeholder="Enter your instructions here."
            value={customText}
            onChange={(e) => dispatch(handleCustomText(e.target.value))}
          ></textarea>
          <div className="border mt-[20px]"></div>

          <section className="mt-[30px] flex justify-end">
            <button
              className="leading-[20px] text-[12px] pt-[8px] pb-[8px] pl-[18px] pr-[18px] text-[#3c8dd5]"
              onClick={onDelete}
            >
              Cancel
            </button>
            <button className="leading-[20px] text-[12px] pt-[6px] pb-[6px] pl-[18px] pr-[18px] bg-[#5cb85c] text-[white]">
              Save Custom Text
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CustomText;
