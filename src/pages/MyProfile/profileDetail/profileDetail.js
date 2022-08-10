import { useLocation } from "react-router-dom";
import itemImg from "../../../assets/images/best-employee-of-the-month.PNG";
import bestEmployeeOfMonth from "../../../assets/images/best-employee-of-the-month.PNG";
import bestEmployeeOfyear from "../../../assets/images/best-employee-of-the-year.PNG";
import champion from "../../../assets/images/champion.PNG";
import fiveStarService from "../../../assets/images/five-star-service.PNG";
import proScrumMaster1 from "../../../assets/images/psm-1.PNG";
import proScrumMaster2 from "../../../assets/images/psm-2.PNG";
import proScrumMaster3 from "../../../assets/images/psm-3.PNG";
import feedback from "../../../assets/images/Feedback.PNG";
import relatedNews from "../../../assets/images/relatedNew.PNG";
import { CardCertificate } from "../../../components/CardCertficate/CardCerficate";
import "../../MentorDetails/MentorDetail.css";

export const ProfileDetail = () => {
  const location = useLocation();
  const data = location.state?.data;
  const { name, rating, about, role } = data ? data : {};
  const {
    fullname,
    yearofbirth,
    department,
    gender,
    nationality,
    account,
    email,
  } = data?.profile ? data?.profile : {};
  const item = {
    img: itemImg,
    name: name ? name : "Lein N.",
    role: role ? role : "IT BA Expert",
    rating: rating ? rating : 4,
    about: about
      ? about
      : "Sit irure culpa irure sit enim exercitation elit proident ipsum eiusmod. Sint dolore ipsum veniam sit eu incididunt Lorem esse. Non tempor aute elit in cupidatat sunt.",
    profile: {
      fullname: fullname ? fullname : "Tran Duc Minh",
      yearofbirth: yearofbirth ? yearofbirth : "1990",
      department: department ? department : "FSO.HCM.FHM.AKAT",
      gender: gender ? gender : "Male",
      nationality: nationality ? nationality : "Vietnam",
      account: account ? account : "MinhTd17",
      email: email ? email : "MinhTD17@fsoft.com.vn",
    },
  };
  const itemProfileMap = {
    fullname: "Full Name",
    yearofbirth: "Year Of Birth",
    department: "Department",
    gender: "Gender",
    nationality: "Nationality",
    account: "Account",
    email: "Email",
  };
  const cardData = {
    personalAchievement: [
      {
        classes: "card-certificate",
        img: bestEmployeeOfMonth,
        descriptions: "The Best Employee Quarter 1 -2022",
      },
      {
        classes: "card-certificate",
        img: bestEmployeeOfyear,
        descriptions: "Top 100 FPT Software 2021",
      },
      {
        classes: "card-certificate",
        img: champion,
        descriptions: "Champion PM Contest 2021",
      },
    ],
    projectAchievement: [
      {
        classes: "card-certificate",
        img: fiveStarService,
        descriptions: "The Best Team Of The Year 2021",
      },
    ],
    certificates: [
      {
        classes: "card-certificate",
        img: proScrumMaster1,
        descriptions: "Professional Scrum Master 1",
      },
      {
        classes: "card-certificate",
        img: proScrumMaster2,
        descriptions: "Professional Scrum Master 2",
      },
      {
        classes: "card-certificate",
        img: proScrumMaster3,
        descriptions: "Professional Scrum Master 2",
      },
    ],
  };
  return (
    <div className="flex profile-detail">
      <div className="w-5">
        <div>
          <div className="font-bold text-lg">
            Detail <div className="underline-title" />
          </div>
          <div className="my-3">
            {Object.keys(item.profile).map((key) => {
              return (
                <div key={key} className="flex line-height-3">
                  <span className="font-medium text-sm mb-3 text-md">
                    {itemProfileMap[key]}:
                  </span>
                  <span className="ml-auto text-sm">{item.profile[key]}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="font-bold text-lg">
            Feedback <div className="underline-title" />
          </div>
          <div className="my-3">
            <img src={feedback} alt="feedback" />
          </div>
        </div>
        <div>
          <div className="font-bold text-lg">
            Related News <div className="underline-title" />
          </div>
          <div className="my-3">
            <img src={relatedNews} alt="related News" />
          </div>
        </div>
      </div>
      <div className="w-7 ml-5">
        <div className="font-bold text-lg">Personal Achievement</div>
        <div className="flex flex-wrap m-3">
          {cardData?.personalAchievement?.map((item) => {
            return (
              <CardCertificate
                classes={`${item.classes} m-2`}
                img={item.img}
                descriptions={item.descriptions}
              />
            );
          })}
        </div>
        <div className="font-bold text-lg">Project Achievement</div>
        <div className="flex flex-wrap m-3">
          {cardData?.projectAchievement?.map((item) => {
            return (
              <CardCertificate
                classes={`${item.classes} m-2`}
                img={item.img}
                descriptions={item.descriptions}
              />
            );
          })}
        </div>
        <div className="font-bold text-lg">certificate</div>
        <div className="flex flex-wrap m-3">
          {cardData?.certificates?.map((item) => {
            return (
              <CardCertificate
                classes={`${item.classes} m-2`}
                img={item.img}
                descriptions={item.descriptions}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
