import { useState } from 'react';

const Checkout = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order confirmed! Name: ${name}, Address: ${address}`);
  };

  return (
    <form onSubmit={handleSubmit} className=' d-flex justify-content-center align-items-center'>
        <div className='row g-2'>
      <div className=''>
        <label className='col-form-label' >Name</label>
        <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label  className='col-form-label'>Address</label>
        <input type="text" className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} required/>
      </div>
      <div>
        <label className='col-form-label'>Payment Details</label>
        <input type="text" className='form-control' value={paymentDetails} onChange={(e) => setPaymentDetails(e.target.value)} required/>
      </div>
      <button type="submit" className='btn btn-danger'>Confirm Order</button>
      </div>

    </form>
  );
};

export default Checkout;
