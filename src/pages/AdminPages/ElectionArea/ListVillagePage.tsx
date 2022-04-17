import React from "react";
import AdminPageComponent from "../../../components/PageComponent/AdminPageComponent";

import { Link } from "react-router-dom";


import { ROUTE_LIST } from "../../../RoutConstants";
import ListWardPageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListWardPageComponent";
import ListVillagePageComponent from "../../../components/PageComponent/ElectionAreaComponent/ListVillagePageComponent";


const ListVillagePage: React.FC = () => {
	return (
		<AdminPageComponent>
			<main id="main" className="main">
				<div className="pagetitle">
					<h1>List Village</h1>
					<nav>
						<ol className="breadcrumb">
							<li className="breadcrumb-item">
								<a href="index.html">Election Area</a>
							</li>
							<li className="breadcrumb-item">Village</li>
							<li className="breadcrumb-item active">List Village</li>
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
										<h5 className="card-title">All Village</h5>
										<Link
											to={ROUTE_LIST.createVillage}
											className="btn btn-primary">
											Add Data
										</Link>
									</div>
									<ListVillagePageComponent />
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</AdminPageComponent>
	);
};

export default ListVillagePage;
