import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledLink  = styled(Link)`
color:#713f12;
`;


export const LoginForm = () => {
  return (
    <form>
      <h1 className="form-title">Roots</h1>
      <p className="compte">ACCESS YOUR ACCOUNT</p>
      <div>
        <input type="email" className="email" placeholder="EMAIL" />
      </div>
      <div>
        <input type="password" className="pwd" placeholder="MOT DE PASS" />
        <div className="pwd">
          <StyledLink>
            Forget Password
          </StyledLink>
        </div>
      </div>
      <button type="submit" className="connect btn connectBtn" >LOGIN</button>
      <div>
        <p className="creation">NEED TO CREATE AN ACCOUNT ?</p>
        <button className="inscription connect">REGISTER</button>
      </div>
    </form>
  );
};