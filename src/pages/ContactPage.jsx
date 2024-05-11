const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        Have a question, comment, or feedback? We'd love to hear from you! Feel
        free to reach out to us using the contact information below:
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Email</h2>
        <p className="mb-2">For general inquiries:</p>
        <p className="text-blue-600">info@swapit.com</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Phone</h2>
        <p className="mb-2">You can also give us a call:</p>
        <p className="text-blue-600">1-800-123-4567</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-2">Address</h2>
        <p className="mb-2">Visit us at our store location:</p>
        <p className="mb-1">123 Kids Close Way</p>
        <p className="mb-1">Cityville, State</p>
        <p className="mb-1">Country</p>
        <p className="mb-1">ZIP Code</p>
      </div>
    </div>
  );
};

export default ContactPage;
