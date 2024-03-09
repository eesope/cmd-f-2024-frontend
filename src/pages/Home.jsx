import Card from "../components/home/Card";
import businessImage from "../images/Business.png";

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
        <Card title={"Business & Management"} imgPath={businessImage} />
        <Card title={"Business & Management"} imgPath={businessImage} />
        <Card title={"Business & Management"} imgPath={businessImage} />
        <Card title={"Business & Management"} imgPath={businessImage} />
        <Card title={"Business & Management"} imgPath={businessImage} />
        <Card title={"Business & Management"} imgPath={businessImage} />
        <Card title={"Business & Management"} imgPath={businessImage} />
        <Card title={"Business & Management"} imgPath={businessImage} />
        <Card title={"Business & Management"} imgPath={businessImage} />
      </div>
    </div>
  );
}

export default Home;
