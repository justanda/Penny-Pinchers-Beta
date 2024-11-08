import { CustomerLogin } from "../interfaces/CustomerLogin";

interface CustomerProps {
  customer: CustomerLogin | null;
}
const CustomerForm: React.FC<CustomerProps> = ({ customer }) => {
  return (
    <>
      <h2>Login</h2>
      {customer && (
        <form>
          <input
            value={customer.username || ""}
            type="text"
            placeholder="Username"
          />
          <input
            value={customer.password || ""}
            type="password"
            placeholder="Password"
          />
        </form>
      )}
    </>
  );
};
export default CustomerForm;
