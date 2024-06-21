"use client"
import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import dotenv from 'dotenv'
import { FiGithub } from 'react-icons/fi'

dotenv.config();

const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;
const USERNAME = 'RizWaaN3024';

gsap.registerPlugin(ScrollTrigger);
const Skills = () => {
    const [repoCount, setRepoCount] = useState(0);
    const [commitCount, setCommitCount] = useState(0);
    
    const skillAnimation = () => {
        gsap.fromTo(".skill-title", {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.2,
            scrollTrigger: {
                trigger: ".skill-title",
                start: "top 47%",
                end: "top 49%",     
                scrub: 2,
                markers: true
            }
        });
    }
    useEffect(() => {
        skillAnimation(); // Call animation function inside useEffect
        // Fetch github Data
        const fetchGitHubData = async () => {
          console.log("Fetching GitHub data..."); // Debugging

          try {
              const headers = {
                  'Authorization': `token ${GITHUB_TOKEN}`
              };

              console.log("Headers:", headers); // Debugging

              const reposResponse = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, { headers });
              const repos = await reposResponse.json();

              console.log("Repos:", repos); // Debugging

              setRepoCount(repos.length);

              let totalCommits = 0;
              const currentYear = new Date().getFullYear();

              for (const repo of repos) {
                  let page = 1;
                  let commitsLength = 0;

                  do {
                      const commitsResponse = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/commits?per_page=100&page=${page}`, { headers });
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
              console.error('Error fetching data from GitHub API:', error);
          }
      };

      fetchGitHubData();
  }, []);
  return (
    <div className='container mx-auto py-[40px] text-white'>
      <div className='flex justify-between items-center'>
        <div className='w-[65%]'>

        <div>
            <p className='text-[32px] text-wrap'>I'm passionate about crafting exceptional digital experiences and bringing creative ideas to life. My approach is fueled by a deep passion for innovation and a commitment to delivering excellence in every project. I embrace the learning process with enthusiasm, diving into documentation to ensure thorough understanding and meticulous execution.</p>
        </div>
        </div>
        <div className='github-section flex flex-col  rounded-lg w-[35%] bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg shadow-2xl'>
          <h2 className='text-[42px] font-bold pb-[54px] pl-[24px]'>Github Stats <FiGithub className='inline-block ml-[16px]'/></h2>
          <div className='flex pl-[24px]'>
          <p >Repositories: {repoCount}</p>
          <p className='pb-[48px]'>Commits: {commitCount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
