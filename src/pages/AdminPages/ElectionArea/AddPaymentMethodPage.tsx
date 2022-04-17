import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";



import AddDistrictForm from "../../../components/Forms/ElectionAreaForms/AddDistrictForm";
import AddPaymentMethodForm from "../../../components/Forms/ElectionAreaForms/AddPaymentMethodForm";

const AddPaymentMethodPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>Add new Payment Method</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">Election Area</a>
							</li>
							<li className="breadcrumb-item">Payment Method</li>
							<li className="breadcrumb-item active">Add Payment Method</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<h5 className="card-title">Add Payment Method</h5>

									<AddPaymentMethodForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default AddPaymentMethodPage;
