import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";
import ListWardPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListWardPageComponent";
import ListCitizenPageComponent from "../../../components/PageComponent/CitizenComponent/ListCitizenPageComponent";


const ListCitizenPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>List Wards</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">Citizen</a>
							</li>
							<li className="breadcrumb-item">Citizen</li>
							<li className="breadcrumb-item active">List Citizen</li>
						</ol>
					</nav>
				</div>
				{/* End Page Title */}
				<section className="section">
					<div className="row">
						<div className="col-12">
							<div className="card">
								<div className="card-body">
									<div className="d-flex justify-content-between align-items-end">
										<h5 className="card-title">All Citizen</h5>
										<Link
											to={ROUTE_LIST.createCitizen}
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<ListCitizenPageComponent />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default ListCitizenPage;
