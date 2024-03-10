import Card from "../components/home/Card";
import udemyImage from "../images/udemy.png";

function DetailPage() {
  return (
    <div className="pt-20 px-10">
      <div className="">Detail page</div>
      <div> 
        <header>
          <h1>
            Business & Management
          </h1>
        </header>
      </div>

      <div className="flex flex-wrap gap-2 justify-center py-20">
        <div>
          <Card title={"Udemy: Succeed in Business Even if you Don't Know Where to Start!"} 
          imgPath={udemyImage} 
          link={"https://www.udemy.com/course/succeed-in-business-even-if-you-dont-know-where-to-start/"}/>
        </div>

        <div>
          <Card title={"Udemy: Business Analysis Essential Skills Training"} 
          imgPath={udemyImage} 
          link={"https://www.udemy.com/course/business-analysis-essential-skills-training/"}/>
        </div>
      </div>
    </div>
    
  );
}

export default DetailPage;
