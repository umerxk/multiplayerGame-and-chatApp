import React from "react";
export default function index() {
  return (
    <div>
      <div className="mt-5 p-1">
        <div style={{ maxHeight: "100vh", overflow: "auto" }}>
          <div className="d-flex flex-lg-column flex-row justify-content-around">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9, 10, 4, 5, 6, 7, 8, 9, 10].map(
              (s) => (
                <p style={{ marginRight: "22px" }} className="mb-lg-1" >Size</p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
