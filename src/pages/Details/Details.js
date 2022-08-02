import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import itemImg from '../../assets/images/course-item.png';
import reviewImg from '../../assets/images/review.png';
import './Details.css';
import { useLocation } from 'react-router-dom';

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state?.data;
  const { title, rating, price, description } = data ? data : {};
  const {
    issuePrice,
    quantityIssued,
    issueDate,
    creator,
    owner,
    network,
    contractAddress,
    tokenID,
    nftType,
    careerType,
    courseType,
    duration
  } = data?.details ? data?.details : {};

  const item = {
    img: itemImg,
    title: title ? title : 'Run Project Effectively',
    rating: rating ? rating : 4,
    price: price ? price : 1,
    description: description
      ? description
      : 'Learn how to Effectively analyze, plan, execute, and manage projects that consistently accomplish company objectives',
    details: {
      issuePrice: issuePrice ? issuePrice : '10 Points',
      quantityIssued: quantityIssued ? quantityIssued : 500,
      issueDate: issueDate
        ? issueDate.toLocaleDateString()
        : new Date().toLocaleDateString(),
      creator: creator ? creator : 'LienNTT',
      owner: owner ? owner : 'LienNTT',
      network: network ? network : 'Aura',
      contractAddress: contractAddress ? contractAddress : '0x3ca0...76FT',
      tokenID: tokenID ? tokenID : 1000030309,
      nftType: nftType ? nftType : 'Mentorship',
      careerType: careerType ? careerType : 'Project Management',
      courseType: courseType ? courseType : 'Consulting',
      duration: duration ? duration : '20 hrs'
    }
  };

  const itemDetailsMap = {
    issuePrice: 'Issue Price',
    quantityIssued: 'Quantity Issued',
    issueDate: 'Issue Date',
    creator: 'Creator',
    owner: 'Owner',
    network: 'Network',
    contractAddress: 'Contract Address',
    tokenID: 'Token ID',
    nftType: 'NFT Type',
    careerType: 'Career Type',
    courseType: 'Course Type',
    duration: 'Duration'
  };

  const transactionHistory = [
    {
      name: 'LienNTT',
      action: 'Created',
      price: '10 Points',
      time: new Date().toLocaleDateString()
    }
  ];

  const relatedCourse = [
    {
      name: 'Run Project Effectively',
      rating: 5
    },
    {
      name: 'Run Project Effectively',
      rating: 5
    }
  ];

  return (
    <div className="flex w-full">
      <div className="flex flex-column align-items-center w-3 mt-8">
        <div className="flex flex-column item-wrapper border-2 border-solid border-200 border-round-lg p-5 bg-white align-items-center justify-content-center">
          <img className="w-8" src={item.img} alt="course" />
        </div>
        <div className="text-xl font-bold mb-2 mt-4">{item.title}</div>
        <Rating className="my-1" value={item.rating} cancel={false} readOnly />
        <div>Sold for</div>
        <div className="text-xl font-bold">{item.price} NFT</div>
        <div className="mt-3">
          <Button
            label="Buy/Bid"
            className="p-button-warning p-button-sm m-1"
          />
          <Button
            label="Make a Offer"
            className="p-button-success p-button-sm m-1"
          />
        </div>
        <Button
          label="List NFT"
          className="p-button-info p-button-sm mt-1"
          onClick={() => navigate('/list-nft')}
        />
      </div>
      <div className="flex flex-column w-3">
        <div>
          <div className="font-bold text-lg">Description</div>
          <p>{item.description}</p>
        </div>
        <div>
          <div className="font-bold text-lg">Details</div>
          <div className="my-3">
            {Object.keys(item.details).map((key) => {
              return (
                <div key={key} className="flex line-height-3">
                  <span className="font-medium text-sm">
                    {itemDetailsMap[key]}
                  </span>
                  <span className="ml-auto text-sm">{item.details[key]}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="font-bold text-lg">About Mentor</div>
          <div className="my-3">
            <a className="text-sm" href="" onClick={(e) => e.preventDefault()}>
              View Profile &gt;&gt;
            </a>
          </div>
        </div>
        <div className="mt-auto">
          <div className="font-bold text-lg">Feedback &amp; Review</div>
          <div className="mt-3">
            <img
              className="w-full"
              src={reviewImg}
              alt="Feedback &amp; Review"
            />
            <a className="text-sm" href="" onClick={(e) => e.preventDefault()}>
              View Profile &gt;&gt;
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-content-center">
        <div className="flex flex-column w-10">
          <div className="flex flex-column flex-grow-1">
            <div className="font-bold text-lg">History Transaction</div>
            <DataTable
              className="flex-grow-1 transaction-history-table my-3 f-width"
              value={transactionHistory}
              responsiveLayout="scroll"
            >
              <Column field="name" header="Name"></Column>
              <Column field="action" header="Action"></Column>
              <Column field="price" header="Price"></Column>
              <Column field="time" header="Time"></Column>
            </DataTable>
          </div>
          <div className="flex flex-column mt-auto">
            <div className="font-bold text-lg">Related Course</div>
            <div className="flex flex-row related-course-wrapper mt-3">
              {relatedCourse.map((course, index) => {
                return (
                  <div
                    key={index}
                    className="flex related-course border-2 border-solid border-200 border-round-lg p-5 bg-white align-items-center justify-content-between"
                  >
                    <img className="w-4" src={item.img} alt="course" />
                    <div className="flex flex-column align-items-center">
                      <span className="font-semibold text-md">
                        {course.name}
                      </span>
                      <Rating
                        className="mt-3"
                        value={course.rating}
                        cancel={false}
                        readOnly
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              className="text-sm mt-2 flex justify-content-end"
              href=""
              onClick={(e) => e.preventDefault()}
            >
              Explore more &gt;&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
