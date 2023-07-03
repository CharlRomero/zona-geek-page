import devices from "../assets/devices.png";

export const Device = () => {
  return (
    <section className="Device">
      <section className="Device-description">
        <h2 className="Device-h2">¡Todo en un solo lugar!</h2>
        <section className="Device-info">
          <h3 className="Device-h3">Tu renting desde</h3>
          <span className="Device-span">49.9 $/mes</span>
        </section>
      </section>
      <section className="Device-image">
        <img src={devices} alt="devices" className="Device-image--img" />
      </section>
    </section>
  );
};
