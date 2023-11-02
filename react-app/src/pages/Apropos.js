import React from "react";
import BoutonAchat from "../components/BoutonAchat";
import Navigation from "../components/Navigation";

const Apropos = () => {
  return (
    <div>
       <Navigation />
      <h1>A propos</h1>
      <br/>
      <p>
        Bienvenue sur (Nom du Site), votre destination en ligne pour trouver des
        meubles de seconde main de qualité et abordables.
      </p>
      <br/>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, adipisci assumenda. Nobis, aliquid? Blanditiis fuga dolorem doloremque a ea assumenda quidem non corrupti quasi optio, repellendus laudantium natus inventore, sunt asperiores ullam consequuntur iure error hic consequatur quas fugiat odio excepturi? Est eius perspiciatis doloribus nemo esse facilis voluptatibus, molestiae, porro, modi laboriosam enim sint harum officiis. Amet iusto vitae enim, officia unde, est voluptatum optio incidunt eligendi nesciunt modi soluta necessitatibus perspiciatis harum sequi quia sed nobis exercitationem animi eveniet fugit commodi totam. Id et corrupti dolor obcaecati culpa eveniet, ex blanditiis sit, recusandae nesciunt, facilis architecto corporis illum.</p>
     
      <BoutonAchat />
    </div>
  );
};

export default Apropos;