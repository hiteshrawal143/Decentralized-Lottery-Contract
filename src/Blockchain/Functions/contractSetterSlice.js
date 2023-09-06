import { ethers } from "ethers";
import abi from "../abi.json"


let provider;
if (typeof window.ethereum !== 'undefined') {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    // Continue with your logic using the provider

} else {
    // Handle the case where the provider is not available
    console.log("Web3 provider (window.ethereum) not found!");
    provider = new ethers.providers.JsonRpcProvider();
}
const signer = provider.getSigner();
const contractAddress = "0x8daED806dF17D428929bA37EdFDC06Ee7f3550fC"
const contract = new ethers.Contract(contractAddress, abi, signer);

export const getManager = async () => {
    try {
        const tx = await contract.getManager();
        return tx
    } catch (error) {
        console.log(error)
        return error
    }
}













