import Card from "../components/home/Card";
import businessImage from "../images/Business.png";
import compsciImage from "../images/Comp sci.png";
import artsImage from "../images/Arts & Humanities.png";
import dataImage from "../images/Data.png";
import literatureImage from "../images/Literature.png";
import mathImage from "../images/Mathematics.png";
import socialImage from "../images/Social science.jpg";
import heroOneImage from "../images/pexels-lil-artsy-1925536.jpg";
import heroTwoImage from "../images/istockphoto-507009337-612x612.jpg";

function Home() {
  return (
    <div className="pt-20">
      <div className="grid  md:grid-cols-2">
        <div className="h-[200px] md:h-[300px] basis-1/2 bg-yellow-300">
          <div className="p-10 h-full flex flex-col justify-center items-center">
            <h2 className="text-2xl">
              Elevate Your Learning: Plan and Discover Courses!
            </h2>
            <p>Create your own curriculum and calendar.</p>
          </div>
        </div>
        <img
          src={heroOneImage}
          alt="Hero1"
          className="h-[200px] md:h-[300px] object-cover w-full basis-1/2"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4 py-20 px-10">
        <Card
          title={"Business & Management"}
          imgPath={businessImage}
          link={"/detail-page"}
        />
        <Card
          title={"Arts & Humanities"}
          imgPath={artsImage}
          link={"/detail-page"}
        />
        <Card
          title={"Computer Science"}
          imgPath={compsciImage}
          link={"/detail-page"}
        />
        <Card
          title={"Data Analytics"}
          imgPath={dataImage}
          link={"/detail-page"}
        />
        <Card
          title={"Language & Literature"}
          imgPath={literatureImage}
          link={"/detail-page"}
        />
        <Card title={"Mathematics"} imgPath={mathImage} link={"/detail-page"} />
        <Card
          title={"Social Sciences"}
          imgPath={socialImage}
          link={"/detail-page"}
        />
      </div>
      <div className="grid md:grid-cols-2">
        <img
          src={heroTwoImage}
          alt="Hero1"
          className="h-[200px] md:h-[300px] basis-1/2 bg-yellow-300 w-full object-cover"
        />
        <div className="h-[200px] md:h-[300px] basis-1/2 bg-white">
          <div className="p-10 h-full flex flex-col justify-center items-center">
            <h2 className="text-2xl">
              Elevate Your Learning: Plan and Discover Courses!
            </h2>
            <p>Create your own curriculum and calendar.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
