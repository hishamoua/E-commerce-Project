const Customer = require('../models/Customer'); 


const RegisterCustomer = async (req, res) => {

    const customer = new Customer({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password

    })
       try {

      const newCustomer = await customer.save();
      
      res.status(201).json( {message: "customer created successfully"});
    
    } catch (err) {
        console.log(err);
      res.status(400).json({ error: 'Failed to create a new customer' });
    }
  }


  const Login =async (req, res) => {
    try {
  
      const { email, password } = req.body;
  
      const existingCustomer = await Customer.findOne({ email });
      if (!existingCustomer) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, existingCustomer.password);
          if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid email or password' });
          }
  
          const token = jwt.sign(
            { id: existingCustomer._id, email: existingCustomer.email },
            process.env.jwt, 
            { expiresIn: '1h' } //la durée de validité du token
          );
  
          Customer.last_login = Date.now();
  
  
          res.status(200).json({ message: "Logged in successfully", token });
  
        } catch (err) {
          console.log(err);
          res.status(500).json({ error: 'Something went wrong' });
        }}


const GetAllCust = async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve customers' });
    }
  }

  const GetById = async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.json(customer);
    } catch (err) {
      res.status(500).json({ error: 'Failed to retrieve the customer' });
    }
  }
  const UpdateCust = async (req, res) => {
    try {
      const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!updatedCustomer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.json(updatedCustomer);
    } catch (err) {
      res.status(400).json({ error: 'Failed to update customer information' });
    }
  }
  const DeleteCust =  async (req, res) => {
    try {
      const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
      if (!deletedCustomer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.sendStatus(204);
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete the customer' });
    }
  }



module.exports = {
    RegisterCustomer,
    Login,
    GetAllCust,
    GetById,
    UpdateCust,
    DeleteCust
    
}
