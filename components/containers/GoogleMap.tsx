const GoogleMap = () => {
  return (
    <div className="map-section">
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5355.04115570178!2d106.91155307105303!3d47.920643471211376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96927fd2247dbf%3A0x33457cf3e02c64ee!2sS%C3%BCkhbaatar%20Square!5e0!3m2!1sen!2smn!4v1714907086597!5m2!1sen!2smn"
          style={{ border: "0px", width: "100%", height: "450px" }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
