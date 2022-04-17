import { NavInterface } from "../interfaces/AdminSideBarInterface";
import { ROUTE_LIST } from "../RoutConstants";
export const adminSideBarData: NavInterface[] = [
	
	{
		name: "User Management",
		list: [
			{
				name: "Create User",
				link: "/admin/users/create",
				permissions: [],
			},
			{
				name: "Users",
				link: "/admin/users",
				permissions: [],
			},
			{
				name: "Create Role",
				link: "/admin/roles/create",
				permissions: [],
			},
			{
				name: "Roles",
				link: "/admin/roles",
				permissions: [],
			},
		],
	},
	{
		name: "Citizen",
		list: [
			// {
			// 	name: "Add Union",
			// 	link: ROUTE_LIST.createUnions,
			// 	permissions: [],
			// },
			{
				name: "Citizen",
				link: ROUTE_LIST.listCitizen,
				permissions: [],
			},
			{
				name: "Non Holding Citizen",
				link: ROUTE_LIST.listNonHoldingCitizen,
				permissions: [],
			},
			// {
			// 	name: "Add Ward",
			// 	link: ROUTE_LIST.createWards,
			// 	permissions: [],
			// },
		
		],
	},
	{
		name: "Chairman Profile",
		list: [
			// {
			// 	name: "Add Union",
			// 	link: ROUTE_LIST.createUnions,
			// 	permissions: [],
			// },
			{
				name: "Chairman",
				link: ROUTE_LIST.listChairman,
				permissions: [],
			},
			
		
		],
	},
	{
		name: "Election Area",
		list: [
			// {
			// 	name: "Add Union",
			// 	link: ROUTE_LIST.createUnions,
			// 	permissions: [],
			// },
			{
				name: "List Unions",
				link: ROUTE_LIST.listUnions,
				permissions: [],
			},
			// {
			// 	name: "Add Ward",
			// 	link: ROUTE_LIST.createWards,
			// 	permissions: [],
			// },
			{
				name: "List Wards",
				link: ROUTE_LIST.listWards,
				permissions: [],
			},
			// {
			// 	name: "Add Village",
			// 	link: ROUTE_LIST.createVillage,
			// 	permissions: [],
			// },
			{
				name: "List Villages",
				link: ROUTE_LIST.listVillages,
				permissions: [],
			},
			// {
			// 	name: "Add Post Office",
			// 	link: ROUTE_LIST.createPostOfice,
			// 	permissions: [],
			// },
			{
				name: "List Post Office",
				link: ROUTE_LIST.listPostOffice,
				permissions: [],
			},
				// {
			// 	name: "Add Ward",
			// 	link: ROUTE_LIST.createWards,
			// 	permissions: [],
			// },
			{
				name: "List Sub District",
				link: ROUTE_LIST.listSubDistrict,
				permissions: [],
			},
			// {
			// 	name: "Add District",
			// 	link: ROUTE_LIST.createDistrict,
			// 	permissions: [],
			// },
			{
				name: "List Districts",
				link: ROUTE_LIST.listDistrict,
				permissions: [],
			},
			// {
			// 	name: "Add Payment Method",
			// 	link: ROUTE_LIST.createPaymentMethod,
			// 	permissions: [],
			// },
			{
				name: "List Payment Method",
				link: ROUTE_LIST.listPaymentMethod,
				permissions: [],
			},
		],
	},

	

];
