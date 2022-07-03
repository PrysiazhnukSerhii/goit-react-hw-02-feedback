export function CreateFeedbackForm(props) {
  return (
    <section title="FeedbackForm">
      <h2>Please leave feedback</h2>
      <button
        type="button"
        name="Good"
        onClick={() => {
          props.total('Good');
          props.count();
          props.positivCount();
        }}
      >
        Good
      </button>
      <button
        type="button"
        name="Neutral"
        onClick={() => {
          props.total('Neutral');
          props.count();
          props.positivCount();
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          props.total('Bad');
          props.count();
          props.positivCount();
        }}
      >
        Bad
      </button>
    </section>
  );
}
