import CreateClientTest from "../../testing/create_client_test";
import SignUpPage from "../../auth/signup/signup";
export default function Home() {
  return (
    <div> 
      <h1>This is going to be the home page</h1>
      <CreateClientTest/>
      <SignUpPage/>
    </div>
  );
}
