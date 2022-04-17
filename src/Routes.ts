import HomePage from "./pages/HomePage/index";
import LoginPage from "./pages/LoginPage/index";
import RegisterPage from "./pages/RegisterPage/index";
import Admin from "./pages/AdminPages/DemoAdmin";

import { RouteInterface } from "./interfaces/RoutesInterface";


import CreateWingPage from "./pages/AdminPages/MasterSetup/AddWingPage";
import ListWingsPage from "./pages/AdminPages/MasterSetup/ListWingsPage";

import CreateUserPage from "./pages/AdminPages/UserManagement/CreateUserPage";
import UsersPage from "./pages/AdminPages/UserManagement/UsersPage";
import CreateRolePage from "./pages/AdminPages/UserManagement/CreateRolePage";

import RolesPage from "./pages/AdminPages/UserManagement/RolesPage";

import {  ROUTE_LIST } from "./RoutConstants";




import AddWardPage from "./pages/AdminPages/ElectionArea/AddWardPage";
import ListWardPage from "./pages/AdminPages/ElectionArea/ListWardPage";
import AddUnionPage from "./pages/AdminPages/ElectionArea/AddUnionPage";
import ListUnionPage from "./pages/AdminPages/ElectionArea/ListUnionPage";
import AddVillagePage from "./pages/AdminPages/ElectionArea/AddVillagePage";
import ListVillagePage from "./pages/AdminPages/ElectionArea/ListVillagePage";
import AddPostOfficePage from "./pages/AdminPages/ElectionArea/AddPostOfficePage";
import ListPostOfficePage from "./pages/AdminPages/ElectionArea/ListPostOfficePage";
import AddSubDistrictPage from "./pages/AdminPages/ElectionArea/AddSubDistrictPage";
import ListSubDristictPage from "./pages/AdminPages/ElectionArea/ListSubDistrictPage";
import ListDistrictPage from "./pages/AdminPages/ElectionArea/ListDistrictPage";

import AddDistrictPage from "./pages/AdminPages/ElectionArea/AddDistrictPage";
import AddPaymentMethodPage from "./pages/AdminPages/ElectionArea/AddPaymentMethodPage";
import ListPaymentMethodPage from "./pages/AdminPages/ElectionArea/ListPaymentMethodPage";
import AddCitizenPage from "./pages/AdminPages/Citizen/AddCitizenPage";
import ListCitizenPage from "./pages/AdminPages/Citizen/ListCitizenPage";
import AddNonHoldingCitizenPage from "./pages/AdminPages/Citizen/AddNonHoldingCitizenPage";
import ListNonHoldingCitizenPage from "./pages/AdminPages/Citizen/ListNonHoldingCitizenPage";

import AddChairmanPage from "./pages/AdminPages/ChairmanProfile/AddChairmanPage";
import ListChairmanPage from "./pages/AdminPages/ChairmanProfile/ListChairmanPage";

export const RouteData: RouteInterface[] = [
	{
		path: "/",
		exact: true,
		component: HomePage,
	},
	{
		path: "/login",
		exact: false,
		component: LoginPage,
	},
	{
		path: "/register",
		exact: false,
		component: RegisterPage,
	},
	{
		path: "/register",
		exact: false,
		component: RegisterPage,
	},
	{
		path: "/admin",
		exact: true,
		component: Admin,
	},

	// wings
	{
		path: "/admin/wings/create",
		exact: false,
		component: CreateWingPage,
	},
	{
		path: "/admin/wings",
		exact: true,
		component: ListWingsPage,
	},
	// users
	{
		path: "/admin/users/create",
		exact: false,
		component: CreateUserPage,
	},
	{
		path: "/admin/users",
		exact: true,
		component: UsersPage,
	},
	{
		path: "/admin/roles/create",
		exact: false,
		component: CreateRolePage,
	},
	{
		path: "/admin/roles",
		exact: true,
		component: RolesPage,
	},
	

	// Union 
	{
		path: ROUTE_LIST.createUnions,
		exact: false,
		component: AddUnionPage,
	},
	{
		path: ROUTE_LIST.listUnions,
		exact: true,
		component: ListUnionPage,
	},
	// Ward 
	{
		path: ROUTE_LIST.createWards,
		exact: false,
		component: AddWardPage,
	},
	{
		path: ROUTE_LIST.listWards,
		exact: true,
		component: ListWardPage,
	},
	// villages 
	{
		path: ROUTE_LIST.createVillage,
		exact: false,
		component: AddVillagePage,
	},
	{
		path: ROUTE_LIST.listVillages,
		exact: true,
		component: ListVillagePage,
	},

		// post office 
		{
			path: ROUTE_LIST.createPostOfice,
			exact: false,
			component: AddPostOfficePage,
		},
		{
			path: ROUTE_LIST.listPostOffice,
			exact: true,
			component: ListPostOfficePage,
		},
	
	// Sub Distruct 
	{
		path: ROUTE_LIST.createSubDistrict,
		exact: false,
		component: AddSubDistrictPage,
	},
	{
		path: ROUTE_LIST.listSubDistrict,
		exact: true,
		component: ListSubDristictPage,
	},
	// District 
	{
		path: ROUTE_LIST.createDistrict,
		exact: false,
		component: AddDistrictPage,
	},
	{
		path: ROUTE_LIST.listDistrict,
		exact: true,
		component: ListDistrictPage,
	},
		// Payment Method 
		{
			path: ROUTE_LIST.createPaymentMethod,
			exact: false,
			component: AddPaymentMethodPage,
		},
		{
			path: ROUTE_LIST.listPaymentMethod,
			exact: true,
			component: ListPaymentMethodPage,
		},
	

			// Citizen 
	{
		path: ROUTE_LIST.createCitizen,
		exact: false,
		component: AddCitizenPage,
	},
	{
		path: ROUTE_LIST.listCitizen,
		exact: true,
		component: ListCitizenPage,
	},
			// NonHolding Citizen 
			{
				path: ROUTE_LIST.createNonHoldingCitizen,
				exact: false,
				component: AddNonHoldingCitizenPage,
			},
			{
				path: ROUTE_LIST.listNonHoldingCitizen,
				exact: true,
				component: ListNonHoldingCitizenPage,
			},
			// chairman 
	{
		path: ROUTE_LIST.createChairman,
		exact: false,
		component: AddChairmanPage,
	},
	// {
	// 	path: ROUTE_LIST.listChairman,
	// 	exact: true,
	// 	component: ListChairmanPage,
	// },
	{
		path: ROUTE_LIST.listChairman,
		exact: true,
		component: ListChairmanPage,
	},
];
//
