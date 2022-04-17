import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";
import ListWardPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListWardPageComponent";
import ListCitizenPageComponent from "../../../components/PageComponent/CitizenComponent/ListCitizenPageComponent";


const ListChairmanPage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>Chairman Profile</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">Chairman Profile</a>
							</li>
							<li className="breadcrumb-item">Chairman Profile</li>
							<li className="breadcrumb-item active">List Chairman Profile</li>
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
										<h5 className="card-title">All Chairman Profile</h5>
										<Link
											to={ROUTE_LIST.createChairman}
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

export default ListChairmanPage;
