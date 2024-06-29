"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dotenv from "dotenv";
import { FiGithub } from "react-icons/fi";

dotenv.config();

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;
const USERNAME = "RizWaaN3024";

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
  const [repoCount, setRepoCount] = useState(0);
  const [commitCount, setCommitCount] = useState(0);

  const skillAnimation = () => {
    gsap.fromTo(
      ".skill-title",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".skill-title",
          start: "top 47%",
          end: "top 49%",
          scrub: 2,
          markers: true,
        },
      }
    );
  };
  useEffect(() => {
    skillAnimation(); // Call animation function inside useEffect
    // Fetch github Data
    const fetchGitHubData = async () => {
      console.log("Fetching GitHub data..."); // Debugging

      try {
        const headers = {
          Authorization: `token ${GITHUB_TOKEN}`,
        };

        console.log("Headers:", headers); // Debugging

        const reposResponse = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100`,
          { headers }
        );
        const repos = await reposResponse.json();

        console.log("Repos:", repos); // Debugging

        setRepoCount(repos.length);

        let totalCommits = 0;
        const currentYear = new Date().getFullYear();

        for (const repo of repos) {
          let page = 1;
          let commitsLength = 0;

          do {
            const commitsResponse = await fetch(
              `https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?per_page=100&page=${page}`,
              { headers }
            );
            const commits = await commitsResponse.json();
            commitsLength = commits.length;

            for (const commit of commits) {
              const commitDate = new Date(commit.commit.author.date);
              if (commitDate.getFullYear() === currentYear) {
                totalCommits++;
              }
            }

            page++;
          } while (commitsLength === 100);
        }

        console.log("Total Commits:", totalCommits); // Debugging
        setCommitCount(totalCommits);
      } catch (error) {
        console.error("Error fetching data from GitHub API:", error);
      }
    };

    fetchGitHubData();
  }, []);
  return (
    <div className="container mx-auto text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="p-[24px]">
            <p className="text-[32px] break-words whitespace-wrap">
              I love creating exceptional digital experiences and bringing new
              ideas to life. I have a strong passion for innovation and
              continuous learning. While I may not always know everything, I am
              committed to thoroughly understanding my work. Whenever I start a
              new project, I make sure to dive into the documentation, learning
              all the details to ensure I follow best practices and deliver
              high-quality results. My approach is grounded in careful research
              and meticulous execution, ensuring every project is done right.
            </p>
          </div>
        </div>
        {/* <div className="github-section col-span-4 max-w-[100%]  rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-2xl">
          <div className="p-[24px] h-full flex flex-col items-center">
            <div className="border rounded-[10px] px-6">
              <h2 className="text-[42px] font-bold pl-[24px]">
                Github Stats <FiGithub className="inline-block ml-[16px]" />
              </h2>
            </div>
            <div className="h-full flex items-center justify-center">
              <div className="flex">
                <div className="flex flex-col items-center">
                  <p className="text-[64px]">{repoCount}</p>
                  <p className="text-center">Public Repositories On GitHub</p>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[64px]">{commitCount}</p>
                  <p className="text-center">
                    Commits made last year on GitHub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
