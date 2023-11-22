import React, { useState } from 'react';
import DashboardCard from "./DashboardCard"
import ProductSalesTable from "./productSalesTable"
import "./MainDash.css"

const productSalesData = [
  {
    id: 1,
    product: "Sac Pro",
    author: { initials: "JD", name: "John Doe" },
    tags: ["Fashion", "Bag", "Accessory"],
    actions: ["edit", "view", "delete"]
  },
  {
    id: 2,
    product: "Chaussures de Sport",
    author: { initials: "AL", name: "Alice Liddell" },
    tags: ["Sport", "Shoes", "Fitness"],
    actions: ["edit", "view", "delete"]
  },
  {
    id: 3,
    product: "Montre Élégante",
    author: { initials: "BW", name: "Bruce Wayne" },
    tags: ["Luxury", "Watch", "Gadget"],
    actions: ["edit", "view", "delete"]
  },
  {
    id: 4,
    product: "Montre Élégante",
    author: { initials: "BW", name: "Bruce Wayne" },
    tags: ["Luxury", "Watch", "Gadget"],
    actions: ["edit", "view", "delete"]
  },
  {
    id: 5,
    product: "Montre Élégante",
    author: { initials: "BW", name: "Bruce Wayne" },
    tags: ["Luxury", "Watch", "Gadget"],
    actions: ["edit", "view", "delete"]
  },
  {
    id: 6,
    product: "Montre Élégante",
    author: { initials: "BW", name: "Bruce Wayne" },
    tags: ["Luxury", "Watch", "Gadget"],
    actions: ["edit", "view", "delete"]
  },
];



  function MainDash () {

    const [data, setData] = useState(productSalesData);


    const handleDelete = (id) => {
      setData(prevData => prevData.filter(item => item.id !== id));
    };

    const salesData = [
        { name: 'Jan', sales: 40 },
        { name: 'Feb', sales: 30 },
        { name: 'Mar', sales: 50 },]

            

    return(

     <div className="MainDash container-fluid">
      
      <div className="row Chart-row f-flex ">
        <div className="col-lg-4 col-md-4">
          <DashboardCard title="Sales" value="600" percentage={8} chartData={salesData} />
        </div>
        <div className="col-lg-4 col-md-4">
          <DashboardCard title="Revenu" value="300" percentage={10} chartData={salesData} />
        </div>
        <div className="col-lg-4 col-md-4">
          <DashboardCard title="Avg. product value" value="500" percentage={20} chartData={salesData} />
        </div>
      </div>

      <div className="ProductSales row">
        <div className="col-12">
          <ProductSalesTable data={data} onDelete={handleDelete}/>
        </div>
      </div>
    </div>
    );
  }

  export default MainDash;