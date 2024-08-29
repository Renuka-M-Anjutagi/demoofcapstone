
//import axios from 'axios';
import React, { useState, useEffect } from 'react';


const AllCategory = () => {
  const [categoryList, setcategoryList] = useState([]);
  //const [loading, setLoading] = useState(false);

  const getCategoryList = async () => {
    // setLoading(true);
    const response = await fetch("http://localhost:3000/api/v1/category/all");
    const data = await response.json();
    setcategoryList(data.categoryList);
    // setLoading(false);
  };

  useEffect(() => {
    getCategoryList();
  }, []);
  return (
    <div>


      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {categoryList.map((i) => {
                console.log(i.parentId);
                if (categoryList.parentId == null) {
                  return <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{i.name}</a>
                  </li>
                } else {
                  return <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {categoryList.children.name}

                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><a className="dropdown-item" href="/policy">  {i.children.name}</a></li>
                      <li><a className="dropdown-item" href="/contact">   {i.children.name}</a></li>
                      <li><a className="dropdown-item" href="/blog">  {i.children.name}</a></li>
                    </ul>
                  </li>
                }
              })}



            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AllCategory
