import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { FileUpload } from "primereact/fileupload";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import itemImg from "../../assets/images/course-item.png";
import "./Create.css";

const Create = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const networkOptions = ["Aura", "BSC"];
  const nftTypeOptions = ["Mentorship", "Other"];
  const careerTypeOptions = [
    "Project Management",
    "Developer",
    "Tester",
    "BA",
    "Other",
  ];
  const courseTypeOptions = ["Consulting", "Other"];

  const [agreement, setAgreement] = useState(false);

  const [errors, setErrors] = useState({});

  const headerTemplate = (options) => {
    const { className, chooseButton, cancelButton } = options;

    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
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
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined w-3rem",
  };

  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined w-3rem",
  };

  const createNFT = (e) => {
    e.preventDefault();

    if (!formik.isValid) console.log("validation required");
    else {
      console.log("result", formik.values);
      setFormData(formik.values);
      const item = {
        img: itemImg,
        title: "title",
        rating: 6,
        price: 1,
        description: "description",
        details: {
          quantityIssued: 10,
          issueDate: new Date(),
          creator: "LienNTT",
          owner: "LienNTT",
          network: "network",
          contractAddress: "0x3ca0...76FT",
          tokenID: 1000030309,
          nftType: "nftType",
          careerType: "careerType",
          courseType: "courseType",
          duration: 6,
        },
      };

      navigate("/details", { state: { status: "create", data: item } });
    }
  };
  const navigate = useNavigate();

  // const createNFT = () => {
  //   const item = {
  //     img: itemImg,
  //     title: name,
  //     rating: 0,
  //     price: 1,
  //     description: description,
  //     details: {
  //       quantityIssued: quantityIssued,
  //       issueDate: issueDate,
  //       creator: "LienNTT",
  //       owner: "LienNTT",
  //       network: network,
  //       contractAddress: "0x3ca0...76FT",
  //       tokenID: 1000030309,
  //       nftType: nftType,
  //       careerType: careerType,
  //       courseType: courseType,
  //       duration: duration,
  //     },
  //   };

  //   navigate("/details", { state: { status: "create", data: item } });
  // };

  // const validateForm = () => {
  //   const errorMessages = {};

  //   if (!name) {
  //     errorMessages.name = "Name is required.";
  //   } else {
  //     delete errorMessages.name;
  //   }

  //   if (!description) {
  //     errorMessages.description = "Description is required.";
  //   } else {
  //     delete errorMessages.description;
  //   }

  //   return Object.keys(errorMessages).length > 0 ? errorMessages : null;
  // };
  //
  const formik = useFormik({
    initialValues: {
      image: null,
      nameA: "",
      desc: "",
      quantity: 0,
      expiredDate: null,
      nftType: null,
      careerType: null,
      courseType: null,
      duration: 0,
    },
    validate: (data) => {
      let errors = {};

      if (!data.nameA || data.nameA === "") {
        errors.nameA = "Name is required.";
      }
      if (!data.desc || data.desc === "") {
        errors.desc = "Description is required.";
      }
      if (!data.quantity || data.quantity <= 0) {
        errors.quantity = "Quantity is required.";
      }
      if (!data.expiredDate) {
        errors.expiredDate = "Expired Date is required.";
      }
      if (!data.nftType) {
        errors.nftType = "NFT type is required.";
      }
      if (!data.careerType) {
        errors.careerType = "Carrer type is required.";
      }
      if (!data.courseType) {
        errors.courseType = "Course type type is required.";
      }
      if (!data.duration) {
        errors.duration = "Duration is required.";
      }

      return errors;
    },
    initialErrors: {
      nameA: "Name is required.",
      desc: "Description is required.",
      quantity: "Quantity is required.",
      expiredDate: "Expired Date is required.",
      nftType: "NFT type is required.",
      careerType: "Carrer type is required.",
      courseType: "Course type type is required.",
      duration: "Duration is required.",
    },
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return (
      !isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };
  // const customBase64Uploader = async (event) => {
  //   // convert file to base64 encoded
  //   console.log("start");
  //   const file = event.files[0];
  //   const reader = new FileReader();
  //   let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url
  //   reader.readAsDataURL(blob);
  //   reader.onloadend = function () {
  //     const base64data = reader.result;
  //     console.log(base64data);
  //   };
  // };
  // const onBasicUpload = () => {
  //   console.log({
  //     severity: "info",
  //     summary: "Success",
  //     detail: "File Uploaded with Basic Mode",
  //   });
  // };
  return (
    <div className="flex flex-column w-full">
      <div className="text-3xl font-bold mx-2 mb-6">Create an NFT course</div>
      <form onSubmit={formik.handleSubmit}>
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
                  onSelect={(value) =>
                    formik.setFieldValue("image", value.files[0])
                  }
                />
              </div>
            </div>
            <div className="field col-12">
              <label className="font-semibold">Name*</label>
              <InputText
                name="nameA"
                value={formik.values.nameA}
                onChange={(value) =>
                  formik.setFieldValue("nameA", value.target.value)
                }
              />
              {getFormErrorMessage("nameA")}
            </div>
          </div>
          <div className="col-4">
            <div className="field col-12">
              <label className="font-semibold">Description*</label>
              <InputTextarea
                className="textarea-description"
                name="desc"
                value={formik.values.description}
                onChange={(value) =>
                  formik.setFieldValue("desc", value.target.value)
                }
                rows={5}
                cols={30}
                autoResize
              />
              {getFormErrorMessage("desc")}
            </div>
            <div className="field col-12">
              <label className="font-semibold">Quantity Issued*</label>
              <InputNumber
                name="quantity"
                value={formik.values.quantity}
                onChange={(value) =>
                  formik.setFieldValue("quantity", Number(value.value))
                }
                mode="decimal"
                useGrouping={false}
              />
              {getFormErrorMessage("quantity")}
            </div>
            <div className="field col-12">
              <label className="font-semibold">Expired Date*</label>
              <Calendar
                name="expiredDate"
                value={formik.values.expiredDate}
                onChange={(value) =>
                  formik.setFieldValue("expiredDate", value.target.value)
                }
              />
              {getFormErrorMessage("expiredDate")}
            </div>
          </div>
          <div className="col-4">
            <div className="field col-12">
              <label className="font-semibold">NFT Type*</label>
              <Dropdown
                name="nftType"
                options={nftTypeOptions}
                value={formik.values.nftType}
                onChange={(value) =>
                  formik.setFieldValue("nftType", value.target.value)
                }
              />
              {getFormErrorMessage("nftType")}
            </div>
            <div className="field col-12">
              <label className="font-semibold">Career Type*</label>
              <Dropdown
                options={careerTypeOptions}
                name="careerType"
                value={formik.values.careerType}
                onChange={(value) =>
                  formik.setFieldValue("careerType", value.target.value)
                }
              />
              {getFormErrorMessage("careerType")}
            </div>
            <div className="field col-12">
              <label className="font-semibold">Course Type*</label>
              <Dropdown
                options={courseTypeOptions}
                name="courseType"
                value={formik.values.courseType}
                onChange={(value) =>
                  formik.setFieldValue("courseType", value.target.value)
                }
              />
              {getFormErrorMessage("courseType")}
            </div>
            <div className="field col-12">
              <label className="font-semibold">Duration*</label>
              <InputNumber
                name="duration"
                value={formik.values.duration}
                onChange={(value) =>
                  formik.setFieldValue("duration", Number(value.value))
                }
                suffix=" hrs"
              />
              {getFormErrorMessage("duration")}
            </div>
          </div>
        </div>
        <div className="flex justify-content-between mr-2 mt-auto mb-2">
          <div className="field-checkbox mb-0">
            <Checkbox
              inputId="agreement"
              checked={agreement}
              onChange={(e) => setAgreement(e.checked)}
            />
            <label htmlFor="agreement" className="text-sm">
              I understand and agree to <b>F-Trade Rules</b> and{" "}
              <b>Terms of service</b>.
            </label>
          </div>
          <Button
            label="Create NFT"
            disabled={!agreement}
            // type="submit"
            onClick={createNFT}
          />
        </div>
      </form>
    </div>
  );
};

export default Create;
