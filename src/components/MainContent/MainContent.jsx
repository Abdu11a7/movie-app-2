import { motion } from "framer-motion";

export default function MainContent({ description, creators }) {
  return (
    <motion.div
      className="p-4 p-md-5 rounded-3"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        backgroundColor: "rgba(20, 20, 20, 0.85)",
        borderLeft: "4px solid #ff0d0d",
        color: "#ffffff",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(6px)",
      }}
    >
      <h2
        className="mb-4"
        style={{
          fontSize: "2rem",
          fontWeight: 600,
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: "0.5rem",
          textTransform: "capitalize",
        }}
      >
        Every Journey Has Its Sacrifice
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#ddd",
          marginBottom: "2rem",
        }}
      >
        {description}
      </p>

      <div>
        <h5
          style={{
            fontWeight: "bold",
            color: "#ff3c3c",
            marginBottom: "1rem",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
          }}
        >
          Creators
        </h5>
        <div className="d-flex flex-wrap gap-2">
          {creators.split(", ").map((creator, index) => (
            <span
              key={index}
              className="px-3 py-2 rounded-2"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.07)",
                fontSize: "0.95rem",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              {creator}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
