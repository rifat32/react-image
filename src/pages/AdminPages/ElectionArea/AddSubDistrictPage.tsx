import React from "react";
import AddSubDistrictForm from "../../../components/Forms/ElectionAreaForms/AddSubDistrictForm";
import AddWardForm from "../../../components/Forms/ElectionAreaForms/AddWardForm";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



const AddSubDistrictPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>Add new Sub District</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">Election Area</a>
							</li>
							<li className="breadcrumb-item">Sub District</li>
							<li className="breadcrumb-item active">Add Sub District</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Add Sub District</h5>
									<AddSubDistrictForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddSubDistrictPage;
