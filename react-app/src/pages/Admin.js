import React from 'react';
import BarreNav from '../components/BarreNav';
import '../styles.css';
import BoutonSuppr from '../components/BoutonSuppr';
import SaveAdmin from '../components/SaveAdmin';
import EditAdmin from '../components/EditAdmin';
import AddProduitAdmin from '../components/AddProduitAdmin';

const Admin = () => {
    return (
      <>
      <div>
          <BarreNav />
      </div>
<>
  <div>
  <h1> <AddProduitAdmin /> </h1><br></br>
    </div>
    </>
    <>
<div>

<table class="table table-bordered table-dark">

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

    <tr>
      <th scope="row">1</th>
      <td scope="row">Chaise</td>
      <td scope="row">Meubles</td>
      <td scope="row">19.99</td>
      <td scope="row">Bois</td>
      <td scope="row">Marron</td>
      <td scope="row"><img src="../assets/images/chaise.jpg" rounded /></td>
      <td><select class="choixProduit" name="statut">
        <option value="etat1">En ligne</option>
        <option value="etat2">Vendu</option>
        <option value="etat2">À valider</option>
        <option value="etat4">Rupture des stock</option>
        <option value="etat5">Retirer</option>
        </select></td>
      <td> <EditAdmin />| <SaveAdmin /> | <BoutonSuppr /> </td>
    </tr>

  </tbody>

</table>
</div>
</>
</>
);
};

export default Admin;