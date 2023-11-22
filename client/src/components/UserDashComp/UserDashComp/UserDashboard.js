import React from 'react';
import './UserDashboard.css'; 

const UserDashboard = () => {
  return (
    <div className="dashboard">

    <header className="dashboard-header">
      Bienvenue sur votre compte client,
      <span>Vous trouverez ici toutes les données essentielles sur vous et vos commandes.</span>
    </header>

    <div className="dashboard-main ">

      <section className="dashboard-section orders">
        <h3>MES COMMANDES</h3>
        <p>Vous pouvez suivre les étapes de votre commande en cours et retrouver l'historique de vos commandes passées.</p>
        <button className='dashBut'>Voir le détail</button>
      </section>
      

      <section className="dashboard-section info">
        <h3>MES INFORMATIONS</h3>
        <p>Name<br />Hicham OUARTASSI<br />Adresse<br />Phone Number</p>
        <button className='dashBut'>Voir / Modifier</button>
      </section>
      <section className="dashboard-section favorites">
        <h3>LISTE FAVORIS</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <button className='dashBut'>Voir</button>
      </section>
      <section className="dashboard-section help">
        <h3>BESOIN D'AIDE ?</h3>
        <p>Contactez notre service client via :<br />support@roots.com</p>
        <img src="iconEmail.webp" alt="Email Icon" className="email-icon" />

       
      </section>
    </div>
  </div>
  );
};

export default UserDashboard;
