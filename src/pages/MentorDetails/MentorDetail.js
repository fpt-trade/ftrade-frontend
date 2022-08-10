import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Rating } from "primereact/rating";
import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import itemImg from "../../assets/images/course-item.png";
import walletConnectIcon from "../../assets/icons/walletconnect.svg";
import CardItem from "../../components/CardItem/CardItem";
import "./MentorDetail.css";
const MentorDetail = () => {
  const [openWallet, setOpenWallet] = useState(false);
  const location = useLocation();
  const data = location.state?.data;
  const { name, rating, about, role } = data ? data : {};
  const { carrier, domain, group, course, department, position } = data?.profile
    ? data?.profile
    : {};

  const item = {
    img: itemImg,
    name: name ? name : "Lein N.",
    role: role ? role : "IT BA Expert",
    rating: rating ? rating : 4,
    about: about
      ? about
      : "Sit irure culpa irure sit enim exercitation elit proident ipsum eiusmod. Sint dolore ipsum veniam sit eu incididunt Lorem esse. Non tempor aute elit in cupidatat sunt.",
    profile: {
      carrier: carrier ? carrier : "Business Analyst",
      domain: domain ? domain : "Finance, Banking, Ecommerce",
      group: group ? group : "BA Mentor",
      course: course ? course : "50 course",
      department: department ? department : "FHM",
      position: position ? position : "Expert",
    },
  };
  const itemProfileMap = {
    carrier: "Carrier",
    domain: "Domain",
    group: "Group",
    course: "Course",
    department: "Department",
    position: "Position",
  };

  return (
    <div className="flex w-full mentor-detail-page py-8">
      <div className="flex flex-column align-items-center w-3">
        <div className="flex flex-column item-wrapper align-items-center justify-content-center">
          <Avatar image={itemImg} size="xlarge" className="mentor-avatar" />
        </div>
        <div className="text-xl font-bold mt-4">Lien N.</div>
        <div className="text-xl font-bold mb-2">IT BA Expert</div>
        <div className="mt-3">
          <Button
            label="Buy NFT"
            onClick={() => setOpenWallet(true)}
            className="p-button-warning p-button-sm m-1"
          />
          <Button label="Chat" className="p-button-success p-button-sm m-1" />
        </div>
        <div className="my-3">
          <a
            className="text-sm"
            href="/feedback"
            onClick={(e) => e.preventDefault()}
          >
            Feedback and reviews &gt;&gt;
          </a>
        </div>
        <Rating className="my-1" value={5} cancel={false} readOnly />
      </div>
      <div className="flex flex-column w-4">
        <div>
          <div className="font-bold text-lg">About Me</div>
          <p>
            Dolore cillum qui enim do quis esse consequat. Deserunt culpa aliqua
            enim occaecat dolore aute est veniam anim mollit excepteur ad elit.
            Tempor labore irure deserunt consequat ullamco quis eu veniam
            pariatur voluptate incididunt. Officia quis eu aliquip ipsum
            adipisicing mollit non cillum ex sint velit. Sit minim officia
            occaecat elit et dolor et ullamco culpa ullamco.
          </p>
        </div>
        <div>
          <div className="font-bold text-lg">My Profile</div>
          <div className="my-3">
            {Object.keys(item.profile).map((key) => {
              return (
                <div key={key} className="flex line-height-3">
                  <span className="font-medium text-sm">
                    {itemProfileMap[key]}:
                  </span>
                  <span className="ml-auto text-sm">{item.profile[key]}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="font-bold text-lg">My Reference</div>
          <a
            className="text-sm mt-2 flex justify-content-start"
            href="/more"
            onClick={(e) => e.preventDefault()}
            alt="#"
          >
            Explore more &gt;&gt;
          </a>
        </div>
      </div>
      <Divider layout="vertical" />
      <div className="flex justify-content-center w-5">
        <div className="flex flex-column w-full">
          <div className="flex flex-column flex-grow-1">
            <div className="font-bold text-lg">Created Courses</div>
            <div className="flex flex-wrap mt-3 justify-content-between">
              <div className="w-6 pr-1">
                <CardItem
                  title="Michelle"
                  img={itemImg}
                  rating={item.rating}
                  link={"/mentorship/course-details"}
                  simple
                />
              </div>
              <div className="w-6 pr-1">
                <CardItem
                  title="Michelle"
                  img={itemImg}
                  rating={item.rating}
                  link={"/mentorship/course-details"}
                  simple
                />
              </div>
            </div>
            <a
              className="text-sm mt-2 flex justify-content-end pr-1"
              href="more"
              onClick={(e) => e.preventDefault()}
            >
              Explore more &gt;&gt;
            </a>
          </div>
          <div className="flex flex-column mt-auto">
            <div className="font-bold text-lg">Collected Courses</div>
            <div className="flex flex-wrap mt-3 justify-content-between">
              <div className="w-6 pr-1">
                <CardItem
                  title="Michelle"
                  img={itemImg}
                  rating={item.rating}
                  link="/mentorship/course-details"
                  simple
                />
              </div>
              <div className="w-6 pr-1">
                <CardItem
                  title="Michelle"
                  img={itemImg}
                  rating={item.rating}
                  link="/mentorship/course-details"
                  simple
                />
              </div>
            </div>
            <a
              className="text-sm mt-2 flex justify-content-end pr-1"
              href="more"
              onClick={(e) => e.preventDefault()}
            >
              Explore more &gt;&gt;
            </a>
          </div>
        </div>
      </div>
      <Dialog
        className="wallet-dialog"
        visible={openWallet}
        style={{ width: "450px" }}
        onHide={() => setOpenWallet(false)}
        draggable={false}
      >
        <p className="text-center font-bold text-xl mt-0">Connect Wallet</p>
        <div className="flex justify-content-between align-content-center mb-4">
          <Button className="p-button-text p-button-secondary">
            <p className="text-lg vertical-align-middle meta-text">
              Install MetaMask
            </p>
          </Button>
          <div className="pr-3">
            <span
              class="iconify"
              data-icon="logos:metamask-icon"
              data-width="50px"
            ></span>
          </div>
        </div>
        <p className="link link-meta">How to install wallet?</p>
        <p className="description">
          Connect various wallets (eg, Token Pocket, Trust Wallet, etc.) via
          WalletConnect.
        </p>
        <div className="flex justify-content-between align-content-center my-4">
          <Button className="p-button-text p-button-secondary">
            <p className="text-lg vertical-align-middle font-normal">
              WalletConnect
            </p>
          </Button>
          <img src={walletConnectIcon} alt="walletconnectIcon" width={80} />
        </div>
        <p className="link link-meta">
          How to connect Walletconnect with your APP?
        </p>
      </Dialog>
    </div>
  );
};
export default MentorDetail;
