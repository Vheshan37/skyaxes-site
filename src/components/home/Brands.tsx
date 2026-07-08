"use client";

import React from "react";

export default function Brands() {
  return (
    <section className="trust-belt" aria-label="Trusted by">
      <div className="container-site">
        <p className="trust-belt-label">TRUSTED BY</p>
        <div className="trust-belt-row">
          {[
            { name: "Travancore Analytics", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/travancore-analytics_logo.png" },
            { name: "Curvelogics", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/curvelogics-a_logo.png" },
            { name: "Thought Katalyst", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/thout-katalyst_logo.png" },
            { name: "LiveRoom", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/liveroom_logo.png" },
            { name: "Eimsky", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/eimsky_logo.png" },
            { name: "Omobio", src: "https://www.skyaxes.jp/wp-content/uploads/2020/06/omobio_logo.png" },
          ].map(({ name, src }) => (
            <div key={name} className="trust-logo">
              <div className="trust-logo-img-container">
                <img
                  src={src}
                  alt={name}
                  width="140"
                  height="48"
                  className="trust-logo-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
