import PropTypes from 'prop-types';
import { Component } from 'react';
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
      <>
        {this.props.options.Total > 0 ? (
          this.countHyiazuyn(this.props)
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
