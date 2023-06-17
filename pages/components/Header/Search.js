import { useState, useEffect, memo, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
// import {
//   OpenNotice,
//   GetGameLink,
//   GetGameName,
//   OpenMain,
//   LimitOpen,
// } from "../../../redux/action/ActionMain";
// import { error, loading } from "../../../components/LoadingComponents/message";
// import { actionEnterGame } from "../../../api/fetchFunc";
// import { message } from "antd";
import { IoIosSearch } from "react-icons/io";

const REPLACE_AIR = (str) => {
  return str?.replace(/ /g, "");
};

// let recentGame = localStorage.getItem("recentGame")
//   ? JSON.parse(localStorage.getItem("recentGame"))
//   : [];

const Search = ({ onClose, images, content }) => {
  //   const isGameData = useSelector((state) => state.isGameData);

  return (
    <motion.section
      className=""
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <section className=" flex items-center justify-center pt-8 px-2">
        <div className="max-w-4xl">
          <div className="text-white mb-2">Looking for other game</div>
          <div className="flex items-center px-4 rounded-md border-1 border-gray-400 focus:outline-none focus:border-blue-500 bg-white btn-shadow">
            <input
              type="text"
              placeholder="Search..."
              //   value={searchValue}
              //   onChange={(event) => setSearchValue(event.target.value)}
              className=" h-10 pr-3 focus:outline-none focus:border-blue-500 bg-white text-gray"
            />
            <IoIosSearch
              size={22}
              className="text-white bg-[#9a47bb] rounded-md p-1"
            />
          </div>

          <div className="my-6 overflow-auto py-2 grid grid-cols-3 gap-3 my-2 max-h-[600px]"></div>
        </div>
        <div className=" flex items-center justify-center pt-8 px-2">
            <h2>{content}</h2>
        </div>
      </section>
    </motion.section>
  );
};

export default Search;
