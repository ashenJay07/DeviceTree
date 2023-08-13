"use client";

import NavBar from "@/components/navBar";
import { useState } from "react";
import { addCollection } from "../../../utils/databaseHandler";

const Admin = () => {
  const [linkBtn, setLinkBtn] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSubmitLink = () => {
    const data = {
      title,
      url,
    };

    addCollection(data)
      .then((docRef) => {
        console.log("Document added with ID:", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document:", error);
      });
  };

  return (
    <>
      <NavBar />

      <div className="col-8">
        <div className="controller">
          {!linkBtn && (
            <div className="col-12 d-flex justify-content-center">
              <input
                className="col-4 mx-3 btn btn-primary"
                type="button"
                value="Add Link"
                onClick={() => setLinkBtn("link")}
              />
              <input
                className="col-4 mx-3 btn btn-primary"
                type="button"
                value="Add Document"
                onClick={() => setLinkBtn("doc")}
              />
            </div>
          )}
          {linkBtn === "link" && (
            <div className="col-12">
              <div className="card col-8 mx-auto">
                <div className="card-body">
                  <div className="modal-header">
                    <h4 className="modal-title fs-5">Enter URL</h4>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setLinkBtn(false)}
                    />
                  </div>
                  <div className="mt-3">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Add Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Add URL
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          onChange={(e) => setUrl(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmitLink}
                      >
                        Add Link
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
          {linkBtn === "doc" && (
            <div className="col-12">
              <div className="card col-8 mx-auto">
                <div className="card-body">
                  <div className="modal-header">
                    <h4 className="modal-title fs-5">Upload Document</h4>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setLinkBtn(false)}
                    />
                  </div>
                  <div className="mt-3">
                    <form>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Add Title
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="mb-3">
                        <div className="mb-3">
                          <label htmlFor="formFile" className="form-label">
                            Upload Document
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Add Link
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
