import Navbar from "./Navbar";
import "./App.css";
import Service from "./Service";
import Contact from "./Contact";
import Home from "./Home";
import Hire from "./Hire";
import Clues from "./Clues";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Show_Room from "./Show_Room";
import { useState } from "react";
import ProductDetail from "./ProductDetail";
import Wast_managment from "./service/Wast_managment";
import Domestic_cleaning from "./service/Domestic_cleaning";
import Plank_pest_control from "./service/Plank_pest_control";
import Disinfect from "./service/Disinfect";
import Pest_control from "./service/Pest_control";
import Commercial from "./service/Commercial";
import Trainning from "./service/Trainning";
import Event_maintainance from "./service/Event_maintainance";
import Drainage from "./service/Drainage";
import Consultance from "./service/Consultance";
import Ants from "./Pest/Ants";
import Spider from "./Pest/Spider";
import Rodents from "./Pest/Rodents";
import BedBugs from "./Pest/BedBugs";
import Cockroaches from "./Pest/Cockroaches";
import Termites from "./Pest/Termites";
import Mosquitoes from "./Pest/Mosquitoes";
import Snakes from "./Pest/Snakes";
import Bed_Room from "./Domestic_service/Bed_Room";
import Sitting_Room from "./Domestic_service/Sitting_Room";
import Kitchen from "./Domestic_service/Kitchen";
import Toilet from "./Domestic_service/Toilet";
import Wardrobe from "./Domestic_service/Wardrobe";
import Policy from "./Information/Policy";
import Terms from "./Information/Terms";

const App = () => {
  const [findProduct, setFindProduct] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = e.target;
    const add = {
      Name: details.fullName.value,
      email: details.mail.value,
      contact: details.number.value,
      message: details.msg.value,
    };
    setUser(user.concat(add));
    details.reset();
  };
  console.log(user);

  const products = [
    {
      image:
        "https://cleaneat.ng/wp-content/uploads/2020/09/Knapsack-Sprayer-lagos-nigeria.jpg",
      liter: 16,
      price: 8000,
      name: "Sprayer",
      id: 1,
    },
    {
      image:
        "https://www.mamtus.ng/media/catalog/product/cache/1/thumbnail/1000x600/9df78eab33525d08d6e5fb8d27136e95/s/r/sr420.jpg",
      price: 293000,
      name: "Mist Blower SR 420",
      id: 2,
    },
    {
      image:
        "https://www.afrimash.com/wp-content/uploads/2017/11/motorized-knapsack.jpg",
      liter: 15,
      price: 75000,
      name: "Knapsack Power Sprayer",
      id: 3,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYvXZB3DQGJv8zsUM2M6T1DZEmH8fOYukvw&usqp=CAU",
      name: "Cleaning Chemicals",
      id: 4,
      price: 45000,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8AQhGylvLsHx86T6prg8jY5Kmq6PE1Ch1w&usqp=CAU",
      name: "Cleaning  Facilities",
      id: 5,
      price: 20000,
    },
    {
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/506948/1.jpg?8563",
      name: "Hand Sanitizer Dispenser",
      id: 6,
      price: 5000,
    },
    {
      image:
        "https://cleaneat.ng/wp-content/uploads/2020/09/pest-control-supplies-company-in-Nigeria.jpg",
      name: "Pesticide",
      id: 7,
      price: 3000,
    },
    {
      image:
        "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/Z/184652_1636069457.jpg",
      name: "Mosquito Net",
      id: 8,
      price: 5000,
    },
    {
      image:
        "https://cdn.domyown.com/images/thumbnails/1399_Professional_safety_kit/1399_Professional_safety_kit.jpg.thumb_440x440.jpg",
      name: "Kits",
      id: 9,
      price: 45000,
    },
    {
      image: "https://www.uky.edu/Ag/Entomology/PSEP/images/airpurifying.jpg",
      name: "Funigation safety",
      id: 10,
      price: 15000,
    },
    {
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEBIWEhUVFRcVFhcVFhUXFhgSFhcXFhUWFRYYHSggGBolGxcVITEiJSkrLi4uFx8zODMvNygtLisBCgoKDQ0OFg8PFS0dFR0rKy0tKysrLS0tLSsrKysrLTcrLSs3OCstKy0tLSstLS0rKy03Ky0tLTctNy0rNysrK//AABEIAPcAzAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABHEAACAQIDBAYGBgcFCQEAAAAAAQIDEQQSITFBUXEFBgdhkbEiMkKhwdETI1KB4fAUYnKCwtLxJFRjkpMXMzRTg6KjsrMV/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGREBAQEBAQEAAAAAAAAAAAAAAAERMUEh/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABi+tHSUsNhK2IglKVKm5JSvlbXG2tjKGF66f8Bit39nq8PsPi15gckrdrXSHDDx5U5fGbI77V+kf+ZRX/TXzNFw8tOHh80Ut+lx/PNkVvH+1rpL7dH/TXzKl2u9JcaD50n8JnP5ostBHSodsPSW+OGfOlU+FUl0O2TG+1Qw75KqvObOVRRMw8VwCus0e2Ot7WEpvlUkv4WZHC9r0Zevg3H9mqpecEcswlKO+K8EZWhhqe+K968jOrjsnV3rzh8XVjRhCpCck2syjl9FXeqb8jaTkXZfho/pzav6NGclq3rmhHf3SZ101KlAAVAAAAAAAAAAAAAAAAAxPW2N8Fikv7vV7vYfevMyxC6bhmw9ZcaVRb98HwA+U6D9HTz/FFPtf1/EYd6B+t+f5SKs1WWmXKu0tBFcSTQZEiSaJFZnBzMvRkYTCsy9F6Ga1G9dkyvi6r4UGvGcPkdXOW9j8frsQ+FOC8ZP5HUjc4zegAKgAAAAAAAAAAAAAAAAWcbDNTmuMJLWzWqe1PQvHkloB8kYeootpxUuZ5Wqq+kYrlY9xSy1qivsnJbeEn+t8XzLFZ67b/f8AiyKtVGW7sqkUXCK4vuJNHkR6NOUszim8kXOVt0E0nJ915R8S7RlqRWXwrfBeLMpQm9NN6W3i7GNwrJ99FzXu1+BGnSOxm8pYmaXo2pxd9uZOTVu61/cdQOadiEfqMQ+NSK8Iv5nSzUZoACoAAAAAAAAAAAAAABjsR09hKby1MVQg+EqtNPwbAyII2F6Qo1FelVp1FxhOMl7mSQPkvpmOXFVlstWqLW62TlxaImIfff8APNmR63Qy4/Ex2Wr1e723y8kY7ES0V/P8WQRmXsDSjOpGM5KEXmu5WtpGUktZRWrSjrJK8kR3I8uBuvV+dHB141aWMw0s1OcJZqdVxyzyxlCUHUtK8c8lm9G8Ip6y0gS6Ow15v9Lot5ZTWSnVjebUZRhCOZRiszqxtZZVCDaWe0dbiXYgZXB1DJ5tPF+63xMLhWZN+q+5eb/Ay0672Ix/stZ8a3lCPzOjGgdisLYCT415+6MDfzUSgAKgAAAAAAAAAABq/W/rvh8CnF/W1raUovZwdSXsL39xhe0HtCp4bPhsPO1f1XVsnTot7U39u3dZX1d1Y45is6k3Ubk5O7k3mzN6t5t72viBlOsHXfGY1tVajhT1+rheMLcJLbL95s1z6b0mrvSCa5tu/ki25uc0qKcne0n7Fu973yJ8eivTcnNv0bLRaJa/eQUYbEyhOLhNxnuytp6d63fM3bqr2qV8NUhDG3q4eTUZT1c6X664x4x4arg9BrYd0pu8szlsdns+ykjyrTeVqUWrxla6a1is2/kvECX16lH/APSxORpxdaUk46pqTzJpx0tqYrEbFr7n8TG1KjzK+tkl9y0S2PYkkZCa9FfK38C8yiGeoWPUQVRRcRTEuJAScNIyyf1UnxfloYWiyVRxPoZe8lad+7H4W6Og+NSo/fb4G7GpdlcLdGUO/O//ACSNtLEoACoAAAAAAAAGk9pvXCOCoujSqZcVVS+j0vlg5WlNvZF2UlG+17tGbsz5X609OVMXiamImlKNST0vfLBaQimrqyilrsvd7wIdaTU3OUpOLVpLa098mn6y47+Z7Qk474uhJeq36Lb3pP1eRDc25fR2coW9rau5Pei/gsS884N+irW4LTVIgqo3qVYKiko0ry00jmtZRT3lMXJVVGnm9Gd6ije2aS1u9mm8vYbpFwkoSV73fo6WhuuuNy3iOkZyqpRllSacraJt+rF8QJmNzaO7ts0ftfrW2O1jHY2q1o227Pa29qy7+ZKwlXJJ5leMtJp7+Eu6S/O4gQw869aFGis06s4wpp8ZPLC/jdvmBiq61Xu8bfMnqKyJ/Bfy/Ey3aX0XDC4+eHp+rSp0YLZrlpQTb727t8zCQl6H4ryzX9xRQmVxLW8uRZBfii4kWabJEQr22nu/PuEEVSj7lb8/fcv4PDOc4QW2UoxXNuxFj6Y6i4f6Po/Cx/wYy/zel8TOlrCUFThCC2QjGK5RSS8i6aZoAAAAAAAAAANM7XOlXh+jauWWWVaUaMXe2knmqbP8OMz5wc0lmjLTx/r58ztfb9jYqjhaNrylVnU5QhBwfi6kfBnEMRFaKK2vZuW+/wCGwCjDuS0i9pco+hdPTXe9Zd6PJQyrNfZ7uZTTtfO7vT3ogkQhZpyleWtrvXXbZFNKEVenLXMs137XG3eixGV5Jz0vfL3ci7Tn7NTbF3T8mgLjrSs4y9aO/wC1Hc+e5mf6hdJfodV4x0Y1amWUaLqSywpuWkqmVK8na8UlbRy1MKqN9JaZvSl3QXxexc+8kKV9tklsXBbl4BVrr30lPE4t16ji51IQcnHSN0stkszstN/hxxsE8m/b3/Oxd6fd6kbXt9HC177NeK2eK79ytpWh+f5fiEWd5XFHli7CIFVOJLoQLMES6bRFi5CBtfULor6XHYdW0jUU3yhef8JrVKJ1XsdwF6tSq1pCGVftTfyUvEK6uADTIAAAAAAAAAa9166wfoOEqVY2dVxaox3upa2a2+Mb3fK29AcR7W+m1iekaii7woJUI8M0G3UfPO5R/cRpl+65TKbbbk23e7b2tva3xPEwLtrp236W+RGUckddbbeXEuuXiVPv1AjtK+WTeV6xe9MmUaUZelJXS0XGUuHLiyLUaXrLRerHe38EZDCYOpODmrJ2tFPYuXDQCLjsVrlTu73m+9bI8l58i3CrJk/C9BO/1krd0dviTa0adCLkkluXFy3LV6+O4K13FLNUtwSXgtT2pO+nw/EuKm0pSl6zd+/Xjsf3lqlHXX3tq/JkRVFF5KxbT1v56vxKr6/egLsW/LzLtOXHXZ8WRY1P4fJnsJ3suP8AKwrNYN3O7dk+Fy4Nz3zqPwikl77nCOj1t7reR9B9mc79H0tLazXP03qIvjaQAVkAAAAAAABiOtfTkcFhauJnrkj6EftVJaQj98mr8Fd7j5hx/TWIrVXiZYidWqr3lKV7La4qL0UP1UrHRu3PrRnqxwEHBKk41JSe36ZxlaKe5KE0/wB7uORYiWuxKT3xd4yXegJeLxKqvOoRhdWai3bNva4LuLR7TjlWzTeU4iajsvsuQeQld8vP+nme1Ktld/nuLtTBSpxUk1OL1zR1i29pCqJylbbbz/OhRewVFzld/wBEZ2GJs0lsWhj4LJG2/eWnilHZq/d97Cs7UxcYRbkzDVKzqyzS9VbFtX38ff3Eb0pu8ns8Irfy3akqrHLG2zj5/jwe4loiYipd23L86cD2KstNL7bbHzjuZVSo31ZJVAghKJcUL7NvD5En9HPHQAhqi/L3ErC0bd708rFVnz97L2EpzcuAE/D0nY7b2QY1TwcqbknKlUksvtKMrSTeuqbcte44/QjodA7G8ZJV69JyioyhGWV+s5RbXo9yTd1yJL9W8daABtkAAAAADxux6eTjdNcVYD5O609JLE4qtXhFZKtR1FGpK81m11fO9rbFZGEwyTbexblw5GU6xdEfo+Iq4f0akqUvo3Ui2ouSSTsnZ6O62bUYrDTtdNb9bgSnFWzX0XpfdYpV5JqVpLbFrvKM8tkdZbbbnG9rIm4dKLStpwIIsYygmldJ7VrZtbHYsxundaM2qrKg1qrGExign6IVAlrtbLsKaWz8/n5hZbl6NOPEIroVIQ3tv9VbLaXi3v2NcVeLW89s5u9rLdwXJble+m65XChwJdKhxZNVTQw/Ekumi5TpPl+eBeyxj+dTLSG6XEoku527rF2tiERZSk9iKizPTZ8SqhXlc8ceMkubKo5PtN8l8Son0q5vXZPVyY9KVPM6lOcVJ5bwss2bjqotfvHPqVRL1U+b+R0Lsghmxt3upzfkviFdrABpkAAAAAAAByLte6iVKk3jsHTdSUklWpQV5NpWjUglt0smlwT4nE5wtFSerzJyfG+3Xhr7j7IaNN6a7MujsTKU50cspaydOc4Xb3tJ2v8AcFfNNKhJOPGM1b9htXMvitJO3E7TX7Guj5O6daK+yqqa/wC6LfvIfTfZdh4w+phiZzto41KT171Lb9wRxetUb2+K0Izs9psnSnVTGUm82Fr24/RSf/rdGCxGFlH14Sj+1GUfNEVGdNcSlxPXl+0v8yPJTirLNt2bwiuNSS2Mv0cTJFtJ8We0azd7SvbR8wrJU8RN7Ey40/akl5kCFSTaUVKbk7WgrvwRtnQ3UTHYnWNGUI8aicPBSRFa5UrRjr72Y7EdKJ8Ze5HXKHYtOol9PXUe6KuTodhOE9rE1vuUF5phHEcNi80rZbXJuZLV6JHZqfYXgYtNYnE3XfR+NMy2G7IejIq1RVq37dVx/wDkolHClUUU29i1fJHWexbo6o6k8TltS+jcE37Um4v0eKSTu+9G99H9SejqP+7wdK63zj9I/GpdmehBJWSSS2JaIYaqABUAAAAAAAAAAAAAA8aPQBanhoPbCL5xTI1XofDT9fD0pftU4PzROAGHfVXAf3HDf6FL+UrpdWcDH1cHho8qFJeUTKgC1Qw0IK1OEYLhGKS8EXQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z",
      name: "Boots",
      id: 11,
      price: 6000,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTthMFyqMhIqf5Frx80vRRK6rRD8EfDIlly7g&usqp=CAU",
      name: "Gloves",
      id: 12,
      price: 3000,
    },
  ];
  const checkList = products.filter((p) =>
    p.name.toLowerCase().includes(findProduct.toLowerCase())
  );
  return (
    <div>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="Clues" element={<Clues />} />
          <Route path="Hire" element={<Hire />} />
          <Route
            path="Show_Room"
            element={
              <Show_Room
                checkList={checkList}
                findProduct={findProduct}
                setFindProduct={setFindProduct}
              />
            }
          />
          <Route
            path="Contact"
            element={<Contact handleSubmit={handleSubmit} />}
          />
          <Route
            path="Show_Room/Product_detail/:id"
            element={<ProductDetail products={products} />}
          />
          <Route
            path="Pest_control/Product_detail/:id"
            element={<ProductDetail products={products} />}
          />
          <Route
            path="Commercial/Product_detail/:id"
            element={<ProductDetail products={products} />}
          />
          <Route path="Wast_management" element={<Wast_managment />} />
          <Route
            path="Domestic_cleaning"
            element={<Domestic_cleaning handleSubmit={handleSubmit} />}
          />
          <Route path="Plank_pest_control" element={<Plank_pest_control />} />
          <Route path="Disinfect" element={<Disinfect />} />
          <Route
            path="Pest_control"
            element={
              <Pest_control handleSubmit={handleSubmit} checkList={checkList} />
            }
          />
          <Route
            path="Commercial"
            element={<Commercial checkList={checkList} />}
          />
          <Route
            path="Trainning"
            element={<Trainning handleSubmit={handleSubmit} />}
          />
          <Route path="Event_maintainance" element={<Event_maintainance />} />
          <Route path="Drainage" element={<Drainage />} />
          <Route path="Consultance" element={<Consultance />} />
          <Route path="Ants" element={<Ants />} />
          <Route path="Spider" element={<Spider />} />
          <Route path="Rodents" element={<Rodents />} />
          <Route path="Mosquitoes" element={<Mosquitoes />} />
          <Route path="Bedbugs" element={<BedBugs />} />
          <Route path="Cockroaches" element={<Cockroaches />} />
          <Route path="Termites" element={<Termites />} />
          <Route path="Snakes" element={<Snakes />} />
          <Route path="Service" element={<Service />} />
          <Route path="Bed_Room" element={<Bed_Room />} />
          <Route path="Sitting_Room" element={<Sitting_Room />} />
          <Route path="Kitchen" element={<Kitchen />} />
          <Route path="Toilet" element={<Toilet />} />
          <Route path="Wardrobe" element={<Wardrobe />} />
          <Route path="Terms" element={<Terms />} />
          <Route path="Policy" element={<Policy />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
