import{ useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Footer, NavBar } from "../component";
import {HelmetProvider,Helmet} from"react-helmet-async";
import ErrorFallBack from "./ErrorFallBack";

export default function TestError() {
  const [user, setUser] = useState("");
  const Bom = ({ user }) => {
    if (user === "kwabena") {
       throw new Error("oh no?");
    } else {
      return    <p className="hello">Hello {user} </p>    
         };
        }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Error boundary test</title>
          <meta name="description" content="A page that test react-error-boundary" />
        </Helmet>
        <NavBar />
        <div className="test">
          <h2 className="title">Test your Error Boundary</h2>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Don't enter kwabena"
          />
          <ErrorBoundary
            FallbackComponent={ErrorFallBack}
            onReset={() => setUser("")}
            resetKeys={[user]}
          >
            <Bom user={user} />
          </ErrorBoundary>
          <Footer />
        </div>
      </HelmetProvider>
    </>
  );
}