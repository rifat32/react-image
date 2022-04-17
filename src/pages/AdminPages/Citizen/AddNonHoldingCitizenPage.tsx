import React from "react";
import AddCitizenForm from "../../../components/Forms/CitizenForm/AddCitizenForm";
import AddNonHoldingCitizenForm from "../../../components/Forms/CitizenForm/AddNonHoldingCitizenForm";
import AddWardForm from "../../../components/Forms/ElectionAreaForms/AddWardForm";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



const AddNonHoldingCitizenPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>Add new Citizen</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">Citizen</a>
							</li>
							<li className="breadcrumb-item">Non Holding Citizen</li>
							<li className="breadcrumb-item active">Add Non Holding Citizen</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Add Non Holding Citizen</h5>
									<AddNonHoldingCitizenForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddNonHoldingCitizenPage;
