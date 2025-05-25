"use client";

import { useEffect, useRef } from "react";

export default function AdBanner() {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (window.adsbygoogle && adRef.current && !adRef.current.getAttribute("data-adsbygoogle-status")) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2053631970024775"
      data-ad-slot="6009556296"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
