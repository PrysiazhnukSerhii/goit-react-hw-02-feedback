import { Component } from 'react';
import { render } from '@testing-library/react';
import { Notification } from './Notification';

export class PaintFeedbackStatistics extends Component {
  countHyiazuyn = props => {
    const { Good, Neutral, Bad, Total, PositiveFeedback } = props.options;
    return (
      <>
        <p>Good: {Good}</p>
        <p>Neutral: {Neutral}</p>
        <p>Bad: {Bad}</p>
        <p>Total: {Total}</p>
        <p>Positive feedback: {PositiveFeedback}%</p>
      </>
    );
  };

  render() {
    return (
      <section title="Statistics">
        <h2>Statistics</h2>
        {this.props.options.Total > 0 ? (
          this.countHyiazuyn(this.props)
        ) : (
          <Notification message="There is no feedback" />
        )}
      </section>
    );
  }
}

// export function PaintFeedbackStatistics(props) {
//   const { Good, Neutral, Bad, Total, PositiveFeedback } = props.options;

//   return (
//     <section title="Statistics">
//       <h2>Statistics</h2>
//       <p>Good: {Good}</p>
//       <p>Neutral: {Neutral}</p>
//       <p>Bad: {Bad}</p>
//       <p>Total: {Total}</p>
//       <p>Positive feedback: {PositiveFeedback}%</p>
//     </section>
//   );
// }
