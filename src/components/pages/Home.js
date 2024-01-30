import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
const products = [
  {
    id: 1,
    name: "Bike Batteries",
    href: "#",
    imageSrc:
      "https://www.apnamechanic.com/wp-content/uploads/2023/05/battery-1-1-1-1-1-1-1.png.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Engine Repair",
    href: "#",
    imageSrc:
      "https://www.apnamechanic.com/wp-content/uploads/2023/05/motorcycle-1-1-1-1-1-1-1-1.png.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

const Home = () => {
  const [age, setAge] = React.useState("");
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get("/allservicesforall").then((response) => {
      setServices(response.data);
    });
  }, []);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(services);
  return (
    <>
      {/* <div>
      <FormControl sx={{ m: 5, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Select Center</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
      <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Services Available</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div> */}
      <div>{services.length > 0 && services.map((service) =>( 
      
      <div className="bg-gray-200 p-4 rounded-2xl flex gap-4 cursor-pointer font-bold">{service.city}
			<div>{service.center}</div>
			{service.services.length > 0 && service.services.map((e)=> <div>{e}</div>)}
			</div>

      ))}
      </div>
    </>
  );
};

export default Home;
