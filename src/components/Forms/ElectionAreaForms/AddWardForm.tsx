import React, { useState, useEffect } from "react";
import { BACKENDAPI } from "../../../config";
import { apiClient } from "../../../utils/apiClient";
import { toast } from "react-toastify";
import { UpdateFormInterface } from "../../../interfaces/UpdateFormInterfaced";
import { ErrorMessage } from "../../../utils/ErrorMessage";

interface FormData {
	ward_no: string;
	union_id: string;

}

const AddWardForm: React.FC<UpdateFormInterface> = (props) => {
	const [formData, setFormData] = useState<FormData>({
		ward_no: "",
	union_id:''
	});
	
	const [errors, setErrors] = useState<any>(null);

	const [unions, setUnions] = useState([]);

	

	useEffect(() => {
		loadUnions();
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







const invalidInputHandler = (error:any) => {
	if (error.status === 422) {
		setErrors(error.data.errors);
	}
}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		
	};
	const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	
				  
	};
	const resetFunction = () => {
		setFormData({
			ward_no: "",
	union_id:''
		});
	};
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
			.post(`${BACKENDAPI}/v1.0/wards`, { ...formData })
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
		}
	}, []);
	const updateData = () => {
		apiClient()
			.put(`${BACKENDAPI}/v1.0/wards`, { ...formData })
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
		<div className="col-md-12">
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
				<label htmlFor="ward_no" className="form-label">
					Ward  No
				</label>
				<input
					type="text"
					className={
						errors
							? errors.ward_no
								? `form-control is-invalid`
								: `form-control is-valid`
							: "form-control"
					}
					id="ward_no"
					name="ward_no"
					onChange={handleChange}
					value={formData.ward_no}
				/>
				{errors?.ward_no && (
					<div className="invalid-feedback">{errors.ward_no[0]}</div>
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

export default AddWardForm;
