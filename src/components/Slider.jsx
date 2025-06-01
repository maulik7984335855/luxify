import React, { useEffect } from "react";

const Slider = () => {
  useEffect(() => {
    //step 1: get DOM
    let nextDom = document.getElementById("next");
    let prevDom = document.getElementById("prev");

    let carouselDom = document.querySelector(".carousel");
    let SliderDom = carouselDom.querySelector(".carousel .list");
    let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
    let timeDom = document.querySelector(".carousel .time");

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function () {
      showSlider("next");
    };

    prevDom.onclick = function () {
      showSlider("prev");
    };
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      next.click();
    }, timeAutoNext);
    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
      let thumbnailItemsDom = document.querySelectorAll(
        ".carousel .thumbnail .item"
      );

      if (type === "next") {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add("next");
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
          thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add("prev");
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        next.click();
      }, timeAutoNext);
    }
  }, []);

  return (
    <>
      <div className="carousel">
        {/* list item */}
        <div className="list">
          <div className="item">
            <img src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708692164/dfqfray0plbwgqldpjym.png" />
            <div className="content">
              <div className="title">ZenStride Flux</div>
              <div className="buttons">
              <a href="/products/search">
                <button className="px-2 py-1 rounded-sm">BUY NOW</button>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708691975/yyupxwat3iznkbzfawvt.png" />
            <div className="content">
              <div className="title">Timeless Elegance Loafers</div>
              <div className="buttons">
              <a href="/products/search">
                <button className="px-2 py-1 rounded-sm">BUY NOW</button>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708691941/aq9p6ztlinndqtqe7sdw.png" />
            <div className="content">
              <div className="title">Executive Class Oxford</div>
              <div className="buttons">
              <a href="/products/search">
                <button className="px-2 py-1 rounded-sm">BUY NOW</button>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708691974/nnjmmhtjcbanjgnorlqk.png" />
            <div className="content">
              <div className="title">Urban Explorer Kick</div>
              <div className="buttons">
              <a href="/products/search">
                <button className="px-2 py-1 rounded-sm">BUY NOW</button>
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708691974/dyvw2kotlzcw32isncyf.png" />
            <div className="content">
              <div className="title">Fiesta Sparkle Pumps</div>
              <div className="buttons">
              <a href="/products/search">
                <button className="px-2 py-1 rounded-sm">BUY NOW</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* list thumnail */}
        <div className="thumbnail">
          <div className="item">
            <img src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708692164/dfqfray0plbwgqldpjym.png" />
            <div className="content"></div>
          </div>
          <div className="item">
            <img src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708691975/yyupxwat3iznkbzfawvt.png" />
            <div className="content"></div>
          </div>
          <div className="item">
            <img src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708691941/aq9p6ztlinndqtqe7sdw.png" />
            <div className="content"></div>
          </div>
          <div className="item">
            <img src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708691974/nnjmmhtjcbanjgnorlqk.png" />
            <div className="content"></div>
          </div>
          <div className="item">
            <img src="https://res.cloudinary.com/dzwspepvg/image/upload/v1708691974/dyvw2kotlzcw32isncyf.png" />
            <div className="content"></div>
          </div>
        </div>
        {/* next prev */}
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>
        {/* time running */}
        <div className="time" />
      </div>
    </>
  );
};

export default Slider;
