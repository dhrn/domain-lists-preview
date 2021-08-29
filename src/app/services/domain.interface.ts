import { SubDomain } from "./subdomain.interface";

export interface Domain{
    id: number,
    domain: string,
    storage: number,
    usedStorage: number,
    domainTag: string,
    availableDomains: number,
    usedDomains: number,
    monthlyVisitorCapacity: number,
    montlyVisitor: number,
    expanded: boolean,
    status: string,
    subdomain: SubDomain[]
}