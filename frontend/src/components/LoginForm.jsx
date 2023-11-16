export const LoginForm = () => {
  return (
    <form>
      <h1 className="form-title">Roots</h1>
      <p className="compte">ACCÉDEZ À VOTRE COMPTE</p>
      <div>
        <input type="email" className="email" placeholder="EMAIL" />
      </div>
      <div>
        <input type="password" className="pwd" placeholder="MOT DE PASS" />
        <div>
          <a href="#" className="oublie">
            Mot de passe oublié
          </a>
        </div>
      </div>
      <button className="connect">SE CONNECTER</button>
      <div>
        <p className="creation">BESOIN DE CRÉER UN COMPTE ?</p>
        <button className="inscription connect">INSCRIVEZ-VOUS</button>
      </div>
    </form>
  );
};