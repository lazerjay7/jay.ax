import { HiChevronRight } from "react-icons/hi";
import { FaGithub, FaDiscord } from "react-icons/fa";
import { BsDot } from "react-icons/bs";
import { MdOutlineLocationOn, MdEmail } from "react-icons/md";
import React, { useState, useEffect } from "react";

function Card() {
  const [currentTime, setCurrentTime] = useState("");
  const [isAlternateLogo, setIsAlternateLogo] = useState(false);
  const [currentNameText, setCurrentNameText] = useState("jay");
  const updateTime = () => {
    const now = new Date();
    setCurrentTime(
      now
        .toLocaleString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Europe/London",
        })
        .replace(/\s/g, "")
    );
  };

  useEffect(() => {
    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleLogo = () => {
    setIsAlternateLogo(!isAlternateLogo);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const toggleNameText = async () => {
    const currentText = currentNameText === "jay" ? "jay" : "slay";
    let newText = "";

    // Animate the backtyping
    for (let i = currentText.length; i >= 0; i--) {
      newText = currentText.substring(0, i);
      setCurrentNameText(newText);
      await sleep(100); // Adjust the delay as needed
    }

    await sleep(500); // Add a longer delay if desired

    const nextText = currentText === "jay" ? "slay" : "jay";
    setCurrentNameText(nextText);

    // Animate the typing of new text
    for (let i = 0; i <= nextText.length; i++) {
      newText = nextText.substring(0, i);
      setCurrentNameText(newText);
      await sleep(100); // Adjust the delay as needed
    }
  };

  return (
    <div class="bg-primary sm:rounded-3xl shadow-md p-6 mx-auto w-[100%] min-sm:w-[60%] xl:w-[55%] min-2xl:w-[45%] ">
      <div className="p-1 sm:p2 lg:p-7 max-w-1/2 pt-10">
        <div className="flex flex-col 2xl:flex-row">
          <div className="2xl:w-fit 2xl:max-w-1/2 flex w-fit">
            <h4 className="name-rotate text-text text-base 2xl:text-lg leading-none">
              Taylor Griffiths
            </h4>

            <div className="ml-5 grid">
              <h2 className="text-5xl 2xl:text-7xl font-semibold text-secondary -ml-[4px] -mt-[15px] self-end">
                Lazer<span className="text-[#f9dcd6]">{currentNameText}</span>
              </h2>

              <p className="text-base 2xl:text-xl mt-2 2xl:mt-4 text-text-bright">
                Lead ISA <span onClick={toggleNameText}>@</span> Ahmesen
              </p>
            </div>
          </div>

          {isAlternateLogo ? (
            <img
              src="/assets/LSLGLE.png"
              className="h-[90px] 2xl:hidden self-end absolute"
              alt="Background"
            />
          ) : (
            <img
              src="/assets/lazer-tall.svg"
              className="w-[90px] 2xl:hidden self-end absolute min-[360px]:ml-10"
              alt="Logo"
            />
          )}
          <div className="2xl:ml-auto w-fit lg:self-start self-end">
            <div className=" text-text flex text-base 2xl:text-lg ">
              <MdOutlineLocationOn className="self-center pr-1" />
              United Kingdom <BsDot className="self-center" />
              {currentTime}
            </div>
            <div className="flex mt-2 justify-end ml-4 ">
              <a
                href="discord://open/users/479395702401662988"
                className="text-text-bright hover:text-secondary mr-2 text-base 2xl:text-lg"
              >
                <FaDiscord />
              </a>
              <a
                href="mailto:jay@lazerjay7.dev"
                className="text-text-bright hover:text-secondary mr-2 text-base 2xl:text-lg"
              >
                <MdEmail />
              </a>
              <a
                href="https://github.com/lazerjay7"
                className="text-text-bright hover:text-secondary text-base 2xl:text-lg"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse 2xl:flex-row">
          <div className="w-full 2xl:w-[50%]">
            <div className="2xl:mt-5 -mt-[10px]">
              <h3 className="text-text-dim uppercase w-fit flex font-semibold text-base 2xl:text-lg">
                <HiChevronRight className="self-center" />{" "}
                about
              </h3>
              <p className="text-base 2xl:text-lg text-text-bright mt-1">
                Hi. I'm Jay. I'm a 16 year old student from the UK. I'm a
                self-taught developer with a passion for Networking and
                Server Administration. I'm currently working on a few projects
                which you will be able to find on this site in the coming months,
                they will available to see on the button below.
              </p>
            </div>

            <div className="flex justify-start w-fit mt-5 2xl:mt-10 mb-[12px]">
              <a
                href="#this-doesnt-go-anywhere-stop-pressing-it"
                className="bg-secondary hover:brightness-[0.9] text-primary py-2 px-4 rounded-3xl text-sm 2xl:text-base font-semibold inline-block"
              >
                Check out my stuff (coming soon)
              </a>
            </div>
          </div>
          <div className="2xl:ml-auto flex items-center justify-center relative self-center">
            <div style={{ position: "relative", margin: "auto" }}>
              {isAlternateLogo ? (
                <img
                  src="/assets/LSLGLE.png"
                  className="h-[150px] 2xl:h-[140px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden 2xl:block"
                  alt="Background"
                />
              ) : (
                <embed
                  src="/assets/lazer-tall.svg"
                  className="h-[150px] 2xl:h-[150px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden 2xl:block"
                  alt="Background"
                />
              )}
              <embed
                src="/assets/logobg.svg"
                className="h-[300px] z-0 mx-auto hidden 2xl:block"
                alt="Background"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
