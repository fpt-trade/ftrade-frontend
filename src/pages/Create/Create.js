import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { FileUpload } from 'primereact/fileupload';
import { useNavigate } from 'react-router-dom';
import './Create.css';

const Create = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [issuePrice, setIssuePrice] = useState(null);
  const [quantityIssued, setQuantityIssued] = useState();
  const [issueDate, setIssueDate] = useState(new Date());
  const [network, setNetwork] = useState();
  const [nftType, setNFTType] = useState();
  const [careerType, setCareerType] = useState();
  const [courseType, setCourseType] = useState();
  const [duration, setDuration] = useState();

  const [errors, setErrors] = useState({});

  const headerTemplate = (options) => {
    const { className, chooseButton, cancelButton } = options;

    return (
      <div
        className={className}
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {chooseButton}
        {cancelButton}
      </div>
    );
  };

  const itemTemplate = (file) => {
    return (
      <div className="flex align-items-center justify-content-center flex-wrap h-full p-0">
        <img
          className="h-full course-image"
          alt={file.name}
          role="presentation"
          src={file.objectURL}
          width={500}
        />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i className="pi pi-image mt-3 p-5 text-7xl border-circle surface-100 text-300"></i>
        <span className="my-3 text-xl text-color-secondary">
          Drag and Drop Image Here
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: true,
    className: 'custom-choose-btn p-button-rounded p-button-outlined w-3rem'
  };
  const cancelOptions = {
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className:
      'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined w-3rem'
  };

  const navigate = useNavigate();

  const createNFT = () => {
    navigate('/details');
  };

  const validateForm = () => {
    const errorMessages = {};

    if (!name) {
      errorMessages.name = 'Name is required.';
    } else {
      delete errorMessages.name;
    }

    if (!description) {
      errorMessages.description = 'Description is required.';
    } else {
      delete errorMessages.description;
    }

    return Object.keys(errorMessages).length > 0 ? errorMessages : null;
  };

  return (
    <div className="flex flex-column w-full">
      <div className="text-3xl font-bold mx-2 mb-6">Create an NFT course</div>
      <div className="p-fluid grid formgrid flex">
        <div className="col-4">
          <div className="field col-12">
            <label className="font-semibold">Import Image</label>
            <div className="flex align-items-center flex-column">
              <FileUpload
                className="w-full image-upload"
                accept="image/*"
                headerTemplate={headerTemplate}
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate}
                chooseOptions={chooseOptions}
                cancelOptions={cancelOptions}
              />
            </div>
          </div>
          <div className="field col-12">
            <label className="font-semibold">Name*</label>
            <InputText value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className="col-4">
          <div className="field col-12">
            <label className="font-semibold">Description*</label>
            <InputTextarea
              className="textarea-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              cols={30}
              autoResize
            />
          </div>
          <div className="field col-12">
            <label className="font-semibold">Issue Price*</label>
            <InputNumber
              value={issuePrice}
              onValueChange={(e) => setIssuePrice(e.value)}
              suffix=" points"
            />
          </div>
          <div className="field col-12">
            <label className="font-semibold">Quantity Issued*</label>
            <InputNumber
              value={quantityIssued}
              onValueChange={(e) => setQuantityIssued(e.value)}
              mode="decimal"
              useGrouping={false}
            />
          </div>
          <div className="field col-12">
            <label className="font-semibold">Issue Date*</label>
            <Calendar
              value={issueDate}
              onChange={(e) => setIssueDate(e.value)}
            />
          </div>
        </div>
        <div className="col-4">
          <div className="field col-12">
            <label className="font-semibold">Network*</label>
            <InputText
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
            />
          </div>
          <div className="field col-12">
            <label className="font-semibold">NFT Type*</label>
            <InputText
              value={nftType}
              onChange={(e) => setNFTType(e.target.value)}
            />
          </div>
          <div className="field col-12">
            <label className="font-semibold">Career Type*</label>
            <InputText
              value={careerType}
              onChange={(e) => setCareerType(e.target.value)}
            />
          </div>
          <div className="field col-12">
            <label className="font-semibold">Course Type*</label>
            <InputText
              value={courseType}
              onChange={(e) => setCourseType(e.target.value)}
            />
          </div>
          <div className="field col-12">
            <label className="font-semibold">Duration*</label>
            <InputNumber
              value={duration}
              onValueChange={(e) => setDuration(e.value)}
              suffix=" hrs"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-content-end mr-2 mt-auto mb-2">
        <Button label="Create NFT" onClick={createNFT} />
      </div>
    </div>
  );
};

export default Create;
