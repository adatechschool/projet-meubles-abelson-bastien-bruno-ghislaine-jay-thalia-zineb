import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { NavLink } from "react-router-dom";
import BoutonSuppr from "./BoutonSuppr";
import BoutonPayer from "./BoutonPayer";
import mastercard from '../assets/images/logo-mastercard.png';
import visa from '../assets/images/logo-visa.png';
import americanexpress from '../assets/images/logo-american-express.png';
import paypal from '../assets/images/logo-paypal.png';
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";

function PanierForm() {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#F0EAD2" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBRow>
                  <MDBCol lg="7">
                    <MDBTypography tag="h5">
                    <NavLink to="/">Continuer mon shopping</NavLink>
                    </MDBTypography>

                    <hr />

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p className="mb-1">Panier</p>
                        <p className="mb-0">
                          Vous avez x articles dans votre panier
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">Trié par : </span>
                          <a href="#!" className="text-body">
                            prix
                            <MDBIcon fas icon="angle-down mt-1" />
                          </a>
                        </p>
                      </div>
                    </div>

                    <MDBCard className="mb-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                fluid
                                className="rounded-3"
                                style={{ width: "65px" }}
                                alt="Shopping item"
                              />
                            </div>
                            <div className="ms-3">
                              <MDBTypography tag="h5">
                                Iphone 11 pro
                              </MDBTypography>
                              <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography
                                tag="h5"
                                className="fw-normal mb-0"
                              >
                                2
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" className="mb-0">
                                900€
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <BoutonSuppr />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="mb-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                                fluid
                                className="rounded-3"
                                style={{ width: "65px" }}
                                alt="Shopping item"
                              />
                            </div>
                            <div className="ms-3">
                              <MDBTypography tag="h5">
                                Samsung galaxy Note 10
                              </MDBTypography>
                              <p className="small mb-0">256GB, Navy Blue</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography
                                tag="h5"
                                className="fw-normal mb-0"
                              >
                                2
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" className="mb-0">
                                900€
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <BoutonSuppr />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="mb-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                                fluid
                                className="rounded-3"
                                style={{ width: "65px" }}
                                alt="Shopping item"
                              />
                            </div>
                            <div className="ms-3">
                              <MDBTypography tag="h5">
                                Canon EOS M50
                              </MDBTypography>
                              <p className="small mb-0">Onyx Black</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography
                                tag="h5"
                                className="fw-normal mb-0"
                              >
                                1
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" className="mb-0">
                                1199€
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <BoutonSuppr />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="mb-3">
                      <MDBCardBody>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <MDBCardImage
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                                fluid
                                className="rounded-3"
                                style={{ width: "65px" }}
                                alt="Shopping item"
                              />
                            </div>
                            <div className="ms-3">
                              <MDBTypography tag="h5">
                                MacBook Pro
                              </MDBTypography>
                              <p className="small mb-0">1TB, Graphite</p>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "50px" }}>
                              <MDBTypography
                                tag="h5"
                                className="fw-normal mb-0"
                              >
                                1
                              </MDBTypography>
                            </div>
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" className="mb-0">
                                1799€
                              </MDBTypography>
                            </div>
                            <a href="#!" style={{ color: "#cecece" }}>
                              <BoutonSuppr />
                            </a>
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol lg="5">
                    <MDBCard
                      className="bg-primary text-white rounded-3"
                      style={{ backgroundColor: "#A98467" }}
                    >
                <div id="encart-panier">
                      <MDBCardBody style={{ backgroundColor: "#A98467" }} >
                      
                        <div className="d-flex justify-content-between align-items-center mb-4" style={{ backgroundColor: "#A98467" }} >
                          <MDBTypography tag="h5" className="mb-0" style={{ backgroundColor: "#A98467" }} >
                            Détails carte bancaire
                          </MDBTypography>
                        </div>

                        <p style={{ backgroundColor: "#A98467" }} >Type de carte bancaire :</p>
                        <div id="cartes-bancaires" style={{ backgroundColor: "#A98467" }} >
                        <a href="#!" type="submit" className="text-white">
                        <img src={mastercard} alt="Logo Mastercard" style={{height:"50px", backgroundColor: "#A98467"}} />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                        <img src={visa} alt="Logo Visa" style={{height:"50px", backgroundColor: "#A98467"}} />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                        <img src={americanexpress} alt="Logo American Express" style={{height:"50px", backgroundColor: "#A98467"}} />
                        </a>
                        <a href="#!" type="submit" className="text-white">
                        <img src={paypal} alt="Logo Paypal" style={{height:"50px", backgroundColor: "#A98467"}} />
                        </a>
                        </div>

                        <form className="mt-4" style={{ backgroundColor: "#A98467" }} >
                          <p style={{ backgroundColor: "#A98467" }} >Nom du titulaire</p>
                          <MDBInput
                            className="mb-4"
                            type="text"
                            size="lg"
                            placeholder="Nom du titulaire de la carte bancaire"
                            contrast
                          />
                          <p style={{ backgroundColor: "#A98467" }} >Numéro de carte</p>
                          <MDBInput
                            className="mb-4"
                            type="text"
                            size="lg"
                            minLength="19"
                            maxLength="19"
                            placeholder="1234 5678 9012 3457"
                            contrast
                          />

                          <MDBRow className="mb-4" style={{ backgroundColor: "#A98467" }} >
                            <MDBCol md="6" style={{ backgroundColor: "#A98467" }} >
                              <p style={{ backgroundColor: "#A98467" }} >Expiration</p>
                              <MDBInput
                                className="mb-4"
                                type="text"
                                size="lg"
                                minLength="7"
                                maxLength="7"
                                placeholder="MM/AAAA"
                                contrast
                              />
                            </MDBCol>
                            <MDBCol md="6" style={{ backgroundColor: "#A98467" }} >
                              <p style={{ backgroundColor: "#A98467" }} >CVV</p>
                              <MDBInput
                                className="mb-4"
                                type="text"
                                size="lg"
                                minLength="3"
                                maxLength="3"
                                placeholder="&#9679;&#9679;&#9679;"
                                contrast
                              />
                            </MDBCol>
                          </MDBRow>
                        </form>

                        <hr />

                        <div className="d-flex justify-content-between" style={{ backgroundColor: "#A98467" }} >
                          <p className="mb-2" style={{ backgroundColor: "#A98467" }} >Sous-total</p>
                          <p className="mb-2" style={{ backgroundColor: "#A98467" }} >4798,00€</p>
                        </div>

                        <div className="d-flex justify-content-between" style={{ backgroundColor: "#A98467" }} >
                          <p className="mb-2" style={{ backgroundColor: "#A98467" }} >Livraison</p>
                          <p className="mb-2" style={{ backgroundColor: "#A98467" }} >20,00€</p>
                        </div>

                        <div className="d-flex justify-content-between" style={{ backgroundColor: "#A98467" }} >
                          <p className="mb-2" style={{ backgroundColor: "#A98467" }} >Total (dont TVA)</p>
                          <p className="mb-2" style={{ backgroundColor: "#A98467" }} >4818,00€</p>
                        </div>

                        <BoutonPayer />
                      
                      </MDBCardBody>
                      </div>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default PanierForm;
