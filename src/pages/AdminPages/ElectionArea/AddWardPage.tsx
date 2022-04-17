import React from "react";
import AddWardForm from "../../../components/Forms/ElectionAreaForms/AddWardForm";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



const AddWardPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>Add new Ward</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">Election Area</a>
							</li>
							<li className="breadcrumb-item">Ward</li>
							<li className="breadcrumb-item active">Add Ward</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Add Ward</h5>
									<AddWardForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddWardPage;
