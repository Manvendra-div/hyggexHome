import React from "react";
import { Tabs, Typography, Button } from "keep-react";
import ReactPlayer from "react-player";
import PublishSvg from "../assets/publishedBy.svg";
import headingMain from "../assets/heading.svg";
import leftcarret from "../assets/leftcarret.svg";
import rightcarret from "../assets/rightcarret.svg";
import replay from "../assets/replay.svg";
import fullscreen from "../assets/fullscreen.svg";
import createFlash from "../assets/createFlashcard.svg";
import { IoRefreshOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 w-full md:w-[75%]  2xl:w-[1400px]">
      <Typography variant="heading-6" className="self-start mb-8 font-semibold">
        <img src={headingMain} />
      </Typography>
      <Tabs
        aria-label="tabs"
        style="pills"
        className="flex justify-between w-[65%] p-1"
      >
        <Tabs.Item title="Study">
          <div className="rounded-3xl overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              width="100%"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center mt-4 w-[85%]">
              <Button size="md" type="default" circle={true}>
                <span>
                  <img src={replay} />
                </span>
              </Button>
              <div className="flex justify-between items-center">
                <Button size="md" type="default" circle={true}>
                  <img src={leftcarret} />
                </Button>
                <span className="p-3 font-semibold text-sm md:text-lg">
                  01/10
                </span>
                <Button size="md" type="default" circle={true}>
                  <img src={rightcarret} />
                </Button>
              </div>
              <Button size="md" type="default" circle={true}>
                <span>
                  <img src={fullscreen} />
                </span>
              </Button>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Quiz">
          <div className="rounded-3xl overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ZS1Hs42UCes"
              width="100%"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center mt-4 w-[85%]">
              <Button size="md" type="default" circle={true}>
                <span>
                  <img src={replay} />
                </span>
              </Button>
              <div className="flex justify-between items-center">
                <Button size="md" type="default" circle={true}>
                  <img src={leftcarret} />
                </Button>
                <span className="p-3 font-semibold text-sm md:text-lg">
                  01/10
                </span>
                <Button size="md" type="default" circle={true}>
                  <img src={rightcarret} />
                </Button>
              </div>
              <Button size="md" type="default" circle={true}>
                <span>
                  <img src={fullscreen} />
                </span>
              </Button>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Test">
          <div className="rounded-3xl overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=M1gWMeSzw0E"
              width="100%"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center mt-4 w-[85%]">
              <Button size="md" type="default" circle={true}>
                <span>
                  <img src={replay} />
                </span>
              </Button>
              <div className="flex justify-between items-center">
                <Button size="md" type="default" circle={true}>
                  <img src={leftcarret} />
                </Button>
                <span className="p-3 font-semibold text-sm md:text-lg">
                  01/10
                </span>
                <Button size="md" type="default" circle={true}>
                  <img src={rightcarret} />
                </Button>
              </div>
              <Button size="md" type="default" circle={true}>
                <span>
                  <img src={fullscreen} />
                </span>
              </Button>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Games">
          <div className="rounded-3xl overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=nbaHVRqqHyc"
              width="100%"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center mt-4 w-[85%]">
              <Button size="md" type="default" circle={true}>
                <span>
                  <img src={replay} />
                </span>
              </Button>
              <div className="flex justify-between items-center">
                <Button size="md" type="default" circle={true}>
                  <img src={leftcarret} />
                </Button>
                <span className="p-3 font-semibold text-sm md:text-lg">
                  01/10
                </span>
                <Button size="md" type="default" circle={true}>
                  <img src={rightcarret} />
                </Button>
              </div>
              <Button size="md" type="default" circle={true}>
                <span>
                  <img src={fullscreen} />
                </span>
              </Button>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Others">
          <div className="rounded-3xl overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=cy1Mopeze1k"
              width="100%"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-between items-center mt-4 w-[85%]">
              <Button size="md" type="default" circle={true}>
                <span>
                  <img src={replay} />
                </span>
              </Button>
              <div className="flex justify-between items-center">
                <Button size="md" type="default" circle={true}>
                  <img src={leftcarret} />
                </Button>
                <span className="p-3 font-semibold text-sm md:text-lg">
                  01/10
                </span>
                <Button size="md" type="default" circle={true}>
                  <img src={rightcarret} />
                </Button>
              </div>
              <Button size="md" type="default" circle={true}>
                <span>
                  <img src={fullscreen} />
                </span>
              </Button>
            </div>
          </div>
        </Tabs.Item>
      </Tabs>
      <div className="flex justify-between items-center w-full mt-8">
        <img src={PublishSvg} className="self-start" />
        <Button size="md" type="default" circle={true}>
          <img src={createFlash} />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
