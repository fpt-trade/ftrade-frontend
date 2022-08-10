// import React from 'react'

// const SetPrice = () => {
//   return (
//     <>
//     <div className="flex flex-column w-4 px-3">
//           <div className="flex flex-column field col-12">
//             <label className="font-semibold">Amount</label>
//             <InputNumber
//               value={amount}
//               onValueChange={(e) => setAmount(e.value)}
//             />
//           </div>
//           <div className="flex flex-column field col-12">
//             <label className="font-semibold">Token ID</label>
//             <span className="text-yellow-600 surface-200 mr-auto px-2 py-1 border-round-sm font-semibold">
//               {item.details.tokenID}
//             </span>
//           </div>
//           <div className="flex flex-column field col-12">
//             <label className="font-semibold">Set Price</label>
//             <div className="flex w-full set-price-group">
//               <InputNumber
//                 className="flex flex-grow-1"
//                 value={newPrice}
//                 onValueChange={(e) => setNewPrice(e.value)}
//               />
//               <Dropdown
//                 value={priceType}
//                 options={priceTypeOptions}
//                 onChange={(e) => setPriceType(e.value)}
//               />
//             </div>
//             <p className="m-0 mt-1">
//               Total Price: {`${amount * newPrice ? amount * newPrice : 0} `}
//               <b>{priceType}</b>
//             </p>
//           </div>
//           <div className="flex flex-column field col-12">
//             <label className="font-semibold">Royalty Fee</label>
//             <InputNumber
//               disabled
//               value={royaltyFee}
//               onValueChange={(e) => setRoyaltyFee(e.value)}
//               suffix=" Aura"
//             />
//             <p className="text-sm m-0 mt-1">
//               1% of the total fee will be paid to the original
//               creator/beneficiary as a Royalty payment.
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-column w-4 px-3">
//           <div className="flex flex-column field col-12">
//             <label className="font-semibold">Platform Fee</label>
//             <InputNumber
//               disabled
//               value={royaltyFee}
//               onValueChange={(e) => setRoyaltyFee(e.value)}
//               suffix=" Aura"
//             />
//             <p className="text-sm m-0 mt-1">
//               1% of the total sale will be paid to F-Trade as a Platform fee.
//             </p>
//           </div>
//           <div className="flex flex-column field col-12">
//             <label className="font-semibold">Expiration Date</label>
//             <Calendar
//               value={expirationDate}
//               onChange={(e) => setExpirationDate(e.value)}
//             />
//             <p className="text-sm m-0 mt-1">
//               Please be aware that once your NFT is listed in Auction, there are
//               limited changes of delistings and we will reject your delisting if
//               there are already other users bidding on it.
//             </p>
//           </div>
//         </div>
//     </>
//   )
// }

// export default SetPrice
