import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import { openSource, socialMediaLinks } from "../../portfolioData";
import { ThemeContext } from "../../context/ThemeContext";
import AccordionGallery from "../../components/AccordionGallery";

function Loading() {
  return <div className="text-center p-5">Loading...</div>;
}

const GithubRepoCard = lazy(() => import("./GithubRepoCard"));

export default function Projects() {
  const [repo, setrepo] = useState([]);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepo(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.log(error);
          setrepo("Error");
          console.log(
            "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
          );
        });
    };
    getRepoData();
  }, []);

  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={<Loading />}>
        <div className="w-[90%] py-[20px] px-[10px] mx-auto mt-[4rem]" id="opensource">
          <h1 className={`text-[30px] md:text-[40px] lg:text-[52px] font-normal leading-normal text-center lg:text-left ${isDark ? "text-white" : "text-black"}`}>
            Open Source Projects
          </h1>
          <div className="my-8">
            {repo.length > 0 && (
              <AccordionGallery 
                items={repo.slice(0, 5).map(v => ({
                  label: v.node.name,
                  link: v.node.url,
                  content: <GithubRepoCard repo={v} isDark={isDark} />
                }))}
                defaultIndex={0}
                expandRatio={0.6}
                trigger="hover"
              />
            )}
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              text={"More Projects"}
              href={socialMediaLinks.github}
              newTab={true}
            />
          </div>
        </div>
      </Suspense>
    );
  } else {
    return null;
  }
}