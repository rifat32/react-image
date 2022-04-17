import React from "react";
import AddChairmanForm from "../../../components/Forms/ChairmanForm/AddChairmanForm";
import AddWardForm from "../../../components/Forms/ElectionAreaForms/AddWardForm";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



const AddChairmanPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>Add Chairman Profile</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">Chairman Profile</a>
							</li>
							<li className="breadcrumb-item">Chairman Profile</li>
							<li className="breadcrumb-item active">Add Chairman Profile</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Add Chairman Profile</h5>
									<AddChairmanForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddChairmanPage;
