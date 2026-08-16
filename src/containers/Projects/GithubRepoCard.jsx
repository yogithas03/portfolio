import React from "react";
import { motion } from "framer-motion";

export default function GithubRepoCard({ repo, isDark }) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div>
        <div
          className={`p-[2rem] cursor-pointer rounded-[10px] border border-[rgba(211,211,211,0.397)] transition-all duration-300 ease-in-out shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.2)] ${
            isDark
              ? "bg-[#171c28] text-white hover:bg-[#55198b] hover:shadow-[0px_0px_16px_#d9dbdf]"
              : "bg-white text-[rgb(88,96,105)]"
          }`}
          key={repo.node.id}
          onClick={() => openUrlInNewTab(repo.node.url)}
        >
          <div className="flex items-center mb-[0.75rem]">
            <svg
              aria-hidden="true"
              className={`mr-[0.5rem] min-w-[16px] ${isDark ? "fill-white" : "fill-[rgb(88,96,105)]"}`}
              height="20"
              role="img"
              viewBox="0 0 12 16"
              width="14"
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className={`m-0 h-[30px] whitespace-nowrap overflow-hidden text-ellipsis text-[25px] font-bold tracking-[-0.5px] ${isDark ? "text-white" : "text-[rgb(36,41,46)]"}`}>
              {repo.node.name}
            </p>
          </div>
          <p className={`overflow-hidden line-clamp-2 ${isDark ? "text-white" : ""}`}>
            {repo.node.description}
          </p>
          <div className={`flex justify-between text-[13px] ${isDark ? "text-white" : "text-[rgb(106,115,125)]"}`}>
            <div className="flex-1 flex">
              {repo.node.primaryLanguage !== null && (
                <span className="flex items-center mr-[0.75rem]">
                  <div
                    className="w-[10px] h-[10px] mr-[0.25rem] rounded-full"
                    style={{ backgroundColor: repo.node.primaryLanguage.color || "#0000ff" }}
                  ></div>
                  <p className="m-0">{repo.node.primaryLanguage.name}</p>
                </span>
              )}
              <span className="flex items-center mr-[0.75rem]">
                <svg
                  aria-hidden="true"
                  className={`mr-[0.3rem] ${isDark ? "fill-white" : "fill-[rgb(106,115,125)]"}`}
                  height="20"
                  role="img"
                  viewBox="0 0 10 16"
                  width="12"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                  ></path>
                </svg>
                <p className="m-0">{repo.node.forkCount}</p>
              </span>
              <span className="flex items-center mr-[0.75rem]">
                <svg
                  aria-hidden="true"
                  className={`mr-[0.3rem] ${isDark ? "fill-white" : "fill-[rgb(106,115,125)]"}`}
                  height="20"
                  role="img"
                  viewBox="0 0 14 16"
                  width="14"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
                  ></path>
                </svg>
                <p className="m-0">{repo.node.stargazers.totalCount}</p>
              </span>
            </div>
            <div>
              <p className="m-0">{repo.node.diskUsage} KB</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
