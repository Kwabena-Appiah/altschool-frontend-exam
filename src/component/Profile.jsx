import React from "react";
import useFetch from "../hooks/useFetch";
import "./profile.css";

export default function Profile() {
  let url = "https://api.github.com/users/kwabena-appiah";
  const { state } = useFetch(url);
  const { loading, docs } = state;
 
  return (
    <>
      {loading && <p className="loading">loading</p>}
      {docs && (
        <div className="profile_container">
          <div className="profile">
            <img src={docs.avatar_url} alt={docs.name} className="avatar" />

            <div className="name">
              <p className="full_name">{docs.name}</p>
              <p className="username">{docs.login}</p>
            </div>
          </div>

          <p className="bio"> {docs.bio}</p>
          <div className="links bio">
            <div className="flex icon-div">
              <img
                src="/assets/icons8-link-26.png"
                alt="url link icon"
                className="icon"
              />

              <a href={docs.blog} rel="noreferrer" target="_blank">
                {docs.blog}
              </a>
            </div>
            <div className="flex icon-div">
              <img
                src="/assets/icons8-github.svg"
                alt="github icon"
                className="icon"
              />

              <a href={docs.html_url} rel="noreferrer" target="_blank">
                kwabena-appiah
              </a>
            </div>
          </div>
          <div className="flex icon-div">
            <img
              src="/assets/icons8-user-location-48.png"
              alt="location icon"
              className="icon"
            />
            <p className="">{docs.location}</p>
          </div>
          <div className="flex icon-div">
            <img
              src="/assets/icons8-twitter.svg"
              alt="twitter icon"
              className="icon"
            />
            <a
              href="https://twitter.com/G_ofosuappiah"
              target="_blank"
              rel="noreferrer"
            >
              @{docs.twitter_username}
            </a>
          </div>
          <div className="follower_container flex">
            <p>
              <span>{docs.followers}</span> <span>followers</span>
            </p>
            <p>
              <span>{docs.following}</span> .<span>following</span>
            </p>
          </div>

          <p className="repo_count flex">
            <span>Public Repository</span>{" "}
            <span className="repo_no">{docs.public_repos}</span>
          </p>
          
        </div>
      )}
    </>
  );
}