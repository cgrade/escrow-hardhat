import { ethers } from 'ethers';
import Escrow from './artifacts/contracts/Escrow.sol/Escrow';

const getSigner = async () =>{
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = await provider.getSigner().getAddress()
  return signer;
}


export default async function deploy(signer=getSigner(), arbiter, beneficiary, value) {
  const factory = new ethers.ContractFactory(
    Escrow.abi,
    Escrow.bytecode,
    signer
  );
  return factory.deploy(arbiter, beneficiary, { value });
}
