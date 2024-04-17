export class CreatePayoutDto {
  fName: string;

  email: string;

  phone: string;

  method: string;

  currency: string;

  network: string;

  amount: number;

  account: {
    name: string;
    number: string;
    bankName: string;
    address: string;
    country: '';
    beneficiaryAddress: string;
    swift: string;
    routingNumber: string;
  };

  walletAddress: string;
}
