import React from "react";
import { useState } from "react";
import { HelmetProvider ,Helmet} from "react-helmet-async";
import { Link, Outlet } from "react-router-dom";
import { Footer, NavBar } from "../component";
import useFetch from "../hooks/useFetch";
import "./repositorylist.css";

export default function RepositoryList() {
  const [page, setPage] = useState(1);
  let url = `https://api.github.com/users/kwabena-appiah/repos?page=${page}&per_page=10`;
  const { state } = useFetch(url);
  const { loading, docs } = state;
  let pages = 8;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Godfred's Github Repositories</title>
          <meta name="description" content="list of godfred repositories" />
        </Helmet>
        <NavBar />
        <h2 className="padd">Repositories</h2>
        <div className="repolist_container padd">
          {loading && <p className="loading">loading</p>}

          <div className="repo">
            {docs &&
              docs.map((doc) => (
                <div key={doc.id} className="repository">
                  <Link
                    to={`kwabena/${doc.name}`}
                    state={{ doc: doc }}
                    className="flex no-space lin"
                  >
                    <img
                      src={doc.owner.avatar_url}
                      alt={doc.login}
                      className="repo_avatar"
                    />
                    <div className="">
                      <p className="accent">{doc.owner.login}</p>
                      <p className="outlet_link"> {doc.name}</p>
                    </div>
                  </Link>
                </div>
              ))}
            <div className="btn_wrap">
              <button
                disabled={page <= 1}
                onClick={() => setPage((prev) => prev - 1)}
                className="btn"
              >
                prev
              </button>
              {Array.from({ length: pages }, (value, index) => index + 1).map(
                (btn) => (
                  <button
                    key={btn}
                    onClick={() => setPage(btn)}
                    className="btn"
                  >
                    {btn}
                  </button>
                )
              )}
              <button
                disabled={page >= 8}
                onClick={() => setPage((prev) => prev + 1)}
                className="btn">
                next
              </button>
            </div>
          </div>

          <Outlet />
        </div>
        <Footer />
      </HelmetProvider>
    </>
  );
}