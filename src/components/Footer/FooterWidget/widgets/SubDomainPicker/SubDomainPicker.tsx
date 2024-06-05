import { SubDomain } from "../../../../../config/routes";

const SubDomainPicker = () => {
  // LOGIC

  const subDomainRoutes = Object.values(SubDomain).map((subDomain) => `${subDomain}.`)

  return <div>{subDomainRoutes}</div>;
};

export default SubDomainPicker;
