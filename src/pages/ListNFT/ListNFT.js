import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { SelectButton } from 'primereact/selectbutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import itemImg from '../../assets/images/course-item.png';
import './ListNFT.css';
import { addToast } from '../../redux/slices/toast';
import { showLoading, hideLoading } from '../../redux/slices/loading';

const ListNFT = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = [
    { label: 'Set Price', value: 'Set Price' },
    { label: 'Highest Bid', value: 'Highest Bid', disabled: true }
  ];
  const [selectMode, setSelectMode] = useState('Set Price');
  const [amount, setAmount] = useState(1);
  const [newPrice, setNewPrice] = useState();
  const [priceType, setPriceType] = useState('Aura');
  const [royaltyFee, setRoyaltyFee] = useState(0.01);
  const [expirationDate, setExpirationDate] = useState(new Date());

  const priceTypeOptions = ['BNB', 'Aura'];

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

  const submit = () => {
    dispatch(showLoading());

    setTimeout(() => {
      dispatch(
        addToast({
          severity: 'success',
          summary: 'Success',
          detail: 'Submit List NFT successfully'
        })
      );
      dispatch(hideLoading());
      navigate('/details');
    }, 500);
  };

  return (
    <div className="flex flex-column w-full">
      <div className="flex">
        <div className="flex flex-column align-items-center w-4 mt-8">
          <div className="flex flex-column item-wrapper border-2 border-solid border-200 border-round-lg p-5 bg-white align-items-center justify-content-center">
            <img className="w-8" src={item.img} alt="course" />
          </div>
          <div className="text-xl font-bold mb-2 mt-4">{item.title}</div>
          <Rating
            className="my-1"
            value={item.rating}
            cancel={false}
            readOnly
          />
          <div>Sold for</div>
          <div className="text-xl font-bold">{item.price} NFT</div>
          <div className="mt-3">
            <SelectButton
              unselectable={false}
              value={selectMode}
              options={options}
              onChange={(e) => setSelectMode(e.value)}
            />
          </div>
        </div>
        <div className="flex flex-column w-4 px-3">
          <div className="flex flex-column field col-12">
            <label className="font-semibold">Amount</label>
            <InputNumber
              value={amount}
              onValueChange={(e) => setAmount(e.value)}
            />
          </div>
          <div className="flex flex-column field col-12">
            <label className="font-semibold">Token ID</label>
            <span className="text-yellow-600 surface-200 mr-auto px-2 py-1 border-round-sm font-semibold">
              {item.details.tokenID}
            </span>
          </div>
          <div className="flex flex-column field col-12">
            <label className="font-semibold">Set Price</label>
            <div className="flex w-full set-price-group">
              <InputNumber
                className="flex flex-grow-1"
                value={newPrice}
                onValueChange={(e) => setNewPrice(e.value)}
              />
              <Dropdown
                value={priceType}
                options={priceTypeOptions}
                onChange={(e) => setPriceType(e.value)}
              />
            </div>
            <p className="m-0 mt-1">
              Total Price: {`${amount * newPrice ? amount * newPrice : 0} `}
              <b>{priceType}</b>
            </p>
          </div>
          <div className="flex flex-column field col-12">
            <label className="font-semibold">Royalty Fee</label>
            <InputNumber
              disabled
              value={royaltyFee}
              onValueChange={(e) => setRoyaltyFee(e.value)}
              suffix=" Aura"
            />
            <p className="text-sm m-0 mt-1">
              1% of the total fee will be paid to the original
              creator/beneficiary as a Royalty payment.
            </p>
          </div>
        </div>
        <div className="flex flex-column w-4 px-3">
          <div className="flex flex-column field col-12">
            <label className="font-semibold">Platform Fee</label>
            <InputNumber
              disabled
              value={royaltyFee}
              onValueChange={(e) => setRoyaltyFee(e.value)}
              suffix=" Aura"
            />
            <p className="text-sm m-0 mt-1">
              1% of the total sale will be paid to F-Trade as a Platform fee.
            </p>
          </div>
          <div className="flex flex-column field col-12">
            <label className="font-semibold">Expiration Date</label>
            <Calendar
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.value)}
            />
            <p className="text-sm m-0 mt-1">
              Please be aware that once your NFT is listed in Auction, there are
              limited changes of delistings and we will reject your delisting if
              there are already other users bidding on it.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-content-end mr-2 mt-auto mb-2">
        <Button label="Submit" onClick={submit} />
      </div>
    </div>
  );
};

export default ListNFT;
