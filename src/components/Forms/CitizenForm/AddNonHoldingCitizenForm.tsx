import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import { toast } from "react-toastify";
import { UpdateFormInterface } from "../../../interfaces/UpdateFormInterfaced";
import { ErrorMessage } from "../../../utils/ErrorMessage";

interface FormData {
	union_id: string;
	ward_id: string;
	village_id: string;
	post_office_id: string;
	upazila_id: string;
	district_id: string;
	institute_name: string;
	business_address: string;
	license_no: string;
	license_user_name: string;
	guardian: string;
	mother_name: string;
	nid : string;
	mobile: string;
	parmanent_address: string;
	occupation_type: string;
	current_year: string;
	tax_amount: string;
	previous_due: string;
	holding_no: string;
	

}

const AddNonHoldingCitizenForm: React.FC<UpdateFormInterface> = (props) => {
	const [formData, setFormData] = useState<FormData>({
		union_id: '',
		ward_id: '',
		village_id: "",
		post_office_id: "",
		upazila_id: "",
		district_id: "",

		institute_name: "",
		business_address: "",
		license_no: "",
		license_user_name: "",
		guardian: "",
		mother_name: "",
		nid : "",
		mobile: "",
		parmanent_address: "",
		occupation_type: "",
		current_year: "",
		tax_amount: "",
		previous_due: "",
		holding_no: "test",

	
	});

	const [errors, setErrors] = useState<any>(null);

	const [unions, setUnions] = useState([]);
	const [wards, setWards] = useState([]);
	const [villages, setVillages] = useState([]);
	const [postOffices, setPostOffices] = useState([]);
	const [subDistricts, setSubDistricts] = useState([]);
	const [districts, setDistricts] = useState([]);

	const years = [];
	for (let i = 0; i <= 100; i++) {
		years.push({
			id: i,
			value1: i + 2020,
			value2: i + 2020 + 1
		})
	}
	useEffect(() => {
		loadUnions();
		loadDistricts();
	}, []);

	// pagination required
	const loadUnions = () => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/unions/all`)
			.then((response: any) => {
				console.log(response);
				setUnions(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	const loadDistricts = () => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/districts/all`)
			.then((response: any) => {
				console.log(response);
				setDistricts(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	const loadWards = (unionId: string) => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/wards/unions/${unionId}`)
			.then((response: any) => {
				console.log("dddd", response.data.data);
				setWards(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	const loadSubDistricts = (unionId: string) => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/upazilas/unions/${unionId}`)
			.then((response: any) => {
				console.log("dddd", response.data.data);
				setSubDistricts(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const loadVillages = (wardId: string) => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/villages/wards/${wardId}`)
			.then((response: any) => {
				console.log("dddd", response.data.data);
				setVillages(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	const loadPostOffices = (wardId: string) => {
		apiClient()
			.get(`${BACKENDAPI}/v1.0/post-office/wards/${wardId}`)
			.then((response: any) => {
				console.log("dddd", response.data.data);
				setPostOffices(response.data.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};





	const invalidInputHandler = (error: any) => {
		if (error.status === 422) {
			setErrors(error.data.errors);
		}
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });

	};
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		if (e.target.name == "union_id") {
			loadWards(e.target.value);
			loadSubDistricts(e.target.value)
		}
		if (e.target.name == "ward_id") {
			loadVillages(e.target.value);
			loadPostOffices(e.target.value);
		}

	};
	const resetFunction = () => {
		setFormData({
			union_id: '',
			ward_id: '',
			village_id: "",
			post_office_id: "",
			upazila_id: "",
			district_id: "",
			institute_name: "",
		business_address: "",
		license_no: "",
		license_user_name: "",
		guardian: "",
		mother_name: "",
		nid : "",
		mobile: "",
		parmanent_address: "",
		occupation_type: "",
		current_year: "",
		tax_amount: "",
		previous_due: "",
		holding_no: "test",

			
		});
	};
	{/* ccccccc */ }
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setErrors(null);
		if (props.type === "update") {
			updateData();

		} else {
			createData();
		}
	};
	const createData = () => {
		apiClient()
			.post(`${BACKENDAPI}/v1.0/nonholding-citizens`, { ...formData })
			.then((response) => {
				console.log(response);
				toast.success("Data saved");
				resetFunction();
			})
			.catch((error) => {
				console.log(error.response);


				invalidInputHandler(error.response)
				ErrorMessage(error.response)
			});
	};
	// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	// edit data section
	useEffect(() => {
		if (props.type == "update") {
			 setFormData(props.value);
			console.log(props.value)
			loadWards(props.value.union_id)
			loadUnions();
		loadDistricts();
		}
	}, []);
	const updateData = () => {
		apiClient()
			.put(`${BACKENDAPI}/v1.0/nonholding-citizens`, { ...formData })
			.then((response: any) => {
				console.log(response);
				toast.success("Data Updated");

				props.updateDataStates(response.data.data);
				props.showModal(false);
			})
			.catch((error) => {
				console.log(error);
				console.log(error.response);
				ErrorMessage(error.response)
				invalidInputHandler(error.response)
			});
	};
	// end edit Data section
	// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	


	return (
		<form className="row g-3" onSubmit={handleSubmit}>
			<div className="col-md-4">
				<label htmlFor="union_id" className="form-label">
					Union
				</label>
				<select
					className={
						errors
							? errors.union_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="union_id"
					name="union_id"
					onChange={handleSelect}
					value={formData.union_id}>
					<option value="">Please Select</option>
					{unions.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.union_id && (
					<div className="invalid-feedback">{errors.union_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>


			<div className="col-md-4">
				<label htmlFor="union_id" className="form-label">
					Ward
				</label>
				<select
					className={
						errors
							? errors.ward_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="ward_id"
					name="ward_id"
					onChange={handleSelect}
					value={formData.ward_id}>
					<option value="">Please Select</option>
					{wards.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.ward_no}
						</option>
					))}
				</select>
				{errors?.ward_id && (
					<div className="invalid-feedback">{errors.ward_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="union_id" className="form-label">
					Village
				</label>
				<select
					className={
						errors
							? errors.village_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="village_id"
					name="village_id"
					onChange={handleSelect}
					value={formData.village_id}>
					<option value="">Please Select</option>
					{villages.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.village_id && (
					<div className="invalid-feedback">{errors.village_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="post_office_id" className="form-label">
					Post Office
				</label>
				<select
					className={
						errors
							? errors.post_office_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="post_office_id"
					name="post_office_id"
					onChange={handleSelect}
					value={formData.post_office_id}>
					<option value="">Please Select</option>
					{postOffices.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.post_office_id && (
					<div className="invalid-feedback">{errors.post_office_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="post_office_id" className="form-label">
					Sub District
				</label>
				<select
					className={
						errors
							? errors.upazila_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="upazila_id"
					name="upazila_id"
					onChange={handleSelect}
					value={formData.upazila_id}>
					<option value="">Please Select</option>
					{subDistricts.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.upazila_id && (
					<div className="invalid-feedback">{errors.upazila_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="district_id" className="form-label">
					District
				</label>
				<select
					className={
						errors
							? errors.upazila_id
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="district_id"
					name="district_id"
					onChange={handleSelect}
					value={formData.district_id}>
					<option value="">Please Select</option>
					{districts.map((el: any, index) => (
						<option
							key={index}
							value={el.id}
							style={{ textTransform: "uppercase" }}>
							{el.name}
						</option>
					))}
				</select>
				{errors?.district_id && (
					<div className="invalid-feedback">{errors.district_id[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>

			<div className="col-md-4">
				<label htmlFor="institute_name" className="form-label">
				Institute Name
				</label>
				<input
					type="text"
					className={
						errors
							? errors.institute_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="institute_name"
					name="institute_name"
					onChange={handleChange}
					value={formData.institute_name}
				/>
				{errors?.institute_name && (
					<div className="invalid-feedback">{errors.institute_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>

			<div className="col-md-4">
				<label htmlFor="business_address" className="form-label">
				Business Address
				</label>
				<input
					type="text"
					className={
						errors
							? errors.business_address
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="business_address"
					name="business_address"
					onChange={handleChange}
					value={formData.business_address}
				/>
				{errors?.business_address && (
					<div className="invalid-feedback">{errors.business_address[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
		
			<div className="col-md-4">
				<label htmlFor="license_no" className="form-label">
				License No
				</label>
				<input
					type="text"
					className={
						errors
							? errors.license_no
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="license_no"
					name="license_no"
					onChange={handleChange}
					value={formData.license_no}
				/>
				{errors?.license_no && (
					<div className="invalid-feedback">{errors.license_no[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="license_user_name" className="form-label">
				License User Name
				</label>
				<input
					type="text"
					className={
						errors
							? errors.license_user_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="license_user_name"
					name="license_user_name"
					onChange={handleChange}
					value={formData.license_user_name}
				/>
				{errors?.license_user_name && (
					<div className="invalid-feedback">{errors.license_user_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="guardian" className="form-label">
				Guardian
				</label>
				<input
					type="text"
					className={
						errors
							? errors.guardian
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="guardian"
					name="guardian"
					onChange={handleChange}
					value={formData.guardian}
				/>
				{errors?.guardian && (
					<div className="invalid-feedback">{errors.guardian[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="mother_name" className="form-label">
				Mother Name
				</label>
				<input
					type="text"
					className={
						errors
							? errors.mother_name
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="mother_name"
					name="mother_name"
					onChange={handleChange}
					value={formData.mother_name}
				/>
				{errors?.mother_name && (
					<div className="invalid-feedback">{errors.mother_name[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="nid" className="form-label">
				Nid
				</label>
				<input
					type="text"
					className={
						errors
							? errors.nid
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="nid"
					name="nid"
					onChange={handleChange}
					value={formData.nid}
				/>
				{errors?.nid && (
					<div className="invalid-feedback">{errors.nid[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="mobile" className="form-label">
				Mobile
				</label>
				<input
					type="text"
					className={
						errors
							? errors.mobile
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="mobile"
					name="mobile"
					onChange={handleChange}
					value={formData.mobile}
				/>
				{errors?.mobile && (
					<div className="invalid-feedback">{errors.mobile[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="parmanent_address" className="form-label">
				Parmanent Address
				</label>
				<input
					type="text"
					className={
						errors
							? errors.parmanent_address
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="parmanent_address"
					name="parmanent_address"
					onChange={handleChange}
					value={formData.parmanent_address}
				/>
				{errors?.parmanent_address && (
					<div className="invalid-feedback">{errors.parmanent_address[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="occupation_type" className="form-label">
				Occupation Type
				</label>
				<input
					type="text"
					className={
						errors
							? errors.occupation_type
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="occupation_type"
					name="occupation_type"
					onChange={handleChange}
					value={formData.occupation_type}
				/>
				{errors?.occupation_type && (
					<div className="invalid-feedback">{errors.occupation_type[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			

			<div className="col-md-4">
				<label htmlFor="gov_advantage" className="form-label">
					Current Year
				</label>
				<select
					className={
						errors
							? errors.current_year
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="current_year"
					name="current_year"
					onChange={handleSelect}
					value={formData.current_year}>
					<option value="">Please Select</option>

					{years.map((el: any, index) => (
						<option
							key={index}
							value={`${el.value1}-${el.value2}`}
							style={{ textTransform: "uppercase" }}>
							{`${el.value1}-${el.value2}`}
						</option>
					))}
				</select>
				{errors?.current_year && (
					<div className="invalid-feedback">{errors.current_year[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
				<div className="col-md-4">
				<label htmlFor="female" className="form-label">
					Tax Amount
				</label>
				<input
					type="text"
					className={
						errors
							? errors.tax_amount
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="tax_amount"
					name="tax_amount"
					onChange={handleChange}
					value={formData.tax_amount}
				/>
				{errors?.tax_amount && (
					<div className="invalid-feedback">{errors.tax_amount[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>
			<div className="col-md-4">
				<label htmlFor="female" className="form-label">
					Previous Due
				</label>
				<input
					type="text"
					className={
						errors
							? errors.previous_due
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="previous_due"
					name="previous_due"
					onChange={handleChange}
					value={formData.previous_due}
				/>
				{errors?.previous_due && (
					<div className="invalid-feedback">{errors.previous_due[0]}</div>
				)}
				{errors && <div className="valid-feedback">Looks good!</div>}
			</div>

			<div className="text-center">
				<button type="submit" className="btn btn-primary me-2">
					Submit
				</button>
				<button
					type="button"
					onClick={resetFunction}
					className="btn btn-secondary">
					Reset
				</button>
			</div>
		</form>
	);
};

export default AddNonHoldingCitizenForm;
