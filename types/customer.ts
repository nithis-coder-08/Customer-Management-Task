export interface CustomerAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface CustomerCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Customer {
  id: number;
  name: string;
  username: string;
  email: string;
  address: CustomerAddress;
  phone: string;
  website: string;
  company: CustomerCompany;
}

export type CustomerListItem = Pick<
  Customer,
  "id" | "name" | "email" | "address" | "company"
> & {
  company: Pick<CustomerCompany, "name">;
};
