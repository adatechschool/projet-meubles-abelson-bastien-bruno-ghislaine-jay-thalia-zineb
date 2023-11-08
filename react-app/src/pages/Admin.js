import React from "react";
import BarreNav from "../components/BarreNav";
import "../styles.css";
import BoutonSuppr from "../components/BoutonSuppr";
import SaveAdmin from "../components/SaveAdmin";
import EditAdmin from "../components/EditAdmin";
import AddProduitAdmin from "../components/AddProduitAdmin";
import { useEffect, useState } from "react";

const Admin = () => {
  const [products, setProducts] = useState([]);

  const fetchProductData = () => {
    fetch("http://localhost:3001/meubles/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div>
        <BarreNav />
      </div>
      <>
        <div>
          <h1>
            {" "}
            <AddProduitAdmin />{" "}
          </h1>
          <br></br>
        </div>
      </>
      <>
        <div>
          <table class="table table-bordered table-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Type</th>
                <th scope="col">Prix (euros)</th>
                <th scope="col">Matieres</th>
                <th scope="col">Couleurs</th>
                <th scope="col">Images</th>
                <th scope="col">Statut</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.type}</td>
                  <td>{product.price}</td>
                  <td>
                    <ul>
                      {product.materials.map((material, materialIndex) => (
                        <li key={materialIndex}>{material}</li>
                      ))}
                    </ul>
                  </td>
                  <td><ul>
                      {product.colors.map((color, colorIndex) => (
                        <li key={colorIndex}>{color}</li>
                      ))}
                    </ul></td>
                  <td>
                    <img
                      src={`http://localhost:3001/${product.images[0]}`} rounded
                      alt={product.name}
                      height={150}
                      width={150}
                    />
                  </td>
                  <td>
                    <select className="choixProduit" name="statut">
                      <option value="etat1">En ligne</option>
                      <option value="etat2">Vendu</option>
                      <option value="etat2">À valider</option>
                      <option value="etat4">Rupture de stock</option>
                      <option value="etat5">Retirer</option>
                    </select>
                  </td>
                  <td>
                    {" "}
                    <EditAdmin /> <SaveAdmin /> <BoutonSuppr />{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    </>
  );
};

export default Admin;
