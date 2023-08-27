import React, { useRef, useEffect } from "react";

const ScrollReveal = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn"); // Tambahkan kelas animasi di sini
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Ubah nilai threshold sesuai kebutuhan
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => {
      if (revealRef.current) {
        observer.unobserve(revealRef.current);
      }
    };
  }, []);

  return <div ref={revealRef}>{children}</div>;
};

export default ScrollReveal;
