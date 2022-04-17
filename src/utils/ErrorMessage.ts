import { toast } from "react-toastify";
export const ErrorMessage = (error:any) => {
         console.log(error.data);
		 if(error.message){
			toast.error(error.message);
		 }
		else if(error.data.message){
			toast.error(error.data.message);
		 }
	

};
