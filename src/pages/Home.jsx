import Card from "../components/home/Card";
import businessImage from "../images/Business.png";
import compsciImage from "../images/Comp sci.png";
import artsImage from "../images/Arts & Humanities.png";
import dataImage from "../images/Data.png";
import literatureImage from "../images/Literature.png";
import mathImage from "../images/Mathematics.png";
import socialImage from "../images/Social science.jpg";

function Home() {
  // const subject = [
  //   {
  //     title: "Business & Management",
  //     imgPath: "./images/Business.png",
  //   },
  //   {
  //     title: "Computer Science",
  //     imgPath: "./images/Business.png",
  //   },
  //   {
  //     title: "Data Analytics & Science",
  //     imgPath: "./images/Business.png",
  //   },
  //   {
  //     title: "Mathematics&Statistics",
  //     imgPath: "./images/Business.png",
  //   },
  //   {
  //     title: "Arts & Humanities",
  //     imgPath: "./images/Business.png",
  //   },
  //   {
  //     title: "Social Science",
  //     imgPath: "./images/Business.png",
  //   },
  //   {
  //     title: "Language & Literature",
  //     imgPath: "./images/Business.png",
  //   },
  //   {
  //     title: "Self Help / Personal Development",
  //     imgPath: "./images/Business.png",
  //   },
  //   {
  //     title: "Engineering",
  //     imgPath: "./images/Business.png",
  //   },
  // ];

  return (
    <div className="pt-20 px-10">
      <div className="flex flex-wrap gap-2 justify-center py-20">
        <Card title={"Business & Management"} imgPath={businessImage} link={"/detail-page"}/>
        <Card title={"Arts & Humanities"} imgPath={artsImage} link={"/detail-page"}/>
        <Card title={"Computer Science"} imgPath={compsciImage} link={"/detail-page"}/>
        <Card title={"Data Analytics"} imgPath={dataImage} link={"/detail-page"}/>
        <Card title={"Language & Literature"} imgPath={literatureImage} link={"/detail-page"}/>
        <Card title={"Mathematics"} imgPath={mathImage} link={"/detail-page"}/>
        <Card title={"Social Sciences"} imgPath={socialImage} link={"/detail-page"}/>
      </div>
    </div>
  );
}

export default Home;
