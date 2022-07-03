import { Component } from 'react';
import { CreateFeedbackForm } from './feedback/FeedbackOptions';
import { PaintFeedbackStatistics } from './feedback/feedbackStatistics';

export class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
    Total: 0,
    PositiveFeedback: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      let total = null;

      for (let state in prevState) {
        if (state === 'Total') {
          break;
        }

        total = total + prevState[state];
      }

      return { Total: total };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      let totalPositiveFeedback = null;

      totalPositiveFeedback = (prevState.Good / prevState.Total) * 100;

      return { PositiveFeedback: Math.floor(totalPositiveFeedback) };
    });
  };

  render() {
    return (
      <div>
        <CreateFeedbackForm
          total={this.onLeaveFeedback}
          count={this.countTotalFeedback}
          positivCount={this.countPositiveFeedbackPercentage}
        />
        <PaintFeedbackStatistics options={this.state} />
      </div>
    );
  }
}
