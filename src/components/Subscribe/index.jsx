import "./index.scss";

function Subscribe() {
  return (
    <section className="subscribe">
      <h2>Подписаться на рассылку</h2>
      <h3>Будьте в курсе всех наших новостей!</h3>
      <div className="subscribe-container">
        <form
          className="subscribe-container-form flex-column"
          action="#"
          method="Post"
        >
          <input type="text" name="text" placeholder="Email" />
          <button type="button" className="btn">
            Подписаться
          </button>
        </form>
      </div>
    </section>
  );
}

export default Subscribe;
