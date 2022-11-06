import { Helmet, HelmetProvider } from "react-helmet-async";
import { NavBar, Profile, Footer } from "../component";

export default function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Godfred's Github profile</title>
          <meta name="description" content="Github profile" />
        </Helmet>
        <NavBar />
        <Profile />
        <Footer />
      </HelmetProvider>
    </>
  );
}