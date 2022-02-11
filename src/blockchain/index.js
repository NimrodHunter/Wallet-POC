import { Contract, providers } from 'ethers';
import DemoContract from '../abi';

export const provider = new providers.InfuraProvider('ropsten', 'qCvSKnMvg76cSOyichau');

export const contract = new Contract('0xF315780BE9754866f9C62B609143c9eCD5a2b574', DemoContract.abi, provider);
