import VendorCard from "./VendorCard";

function VendorCategory({ category, categoryName, vendors }) {


  return (
    <div className={"category " + category}>
      <h4 className="category-name">{categoryName}</h4>
      <div className="category-vendors">
        {vendors.map((vendor) => {
          return (<VendorCard vendor={vendor}/>);
        })}
      </div>
    </div>
  );
}

export default VendorCategory;
