import { Component } from 'react';
import { CreateFeedbackForm } from './feedback/feedbackOptions/FeedbackOptions';
import { PaintFeedbackStatistics } from './feedback/feedbackStatistics';
import { Section } from './feedback/section';

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
        <Section title="Please leave feedback">
          <CreateFeedbackForm
            total={this.onLeaveFeedback}
            count={this.countTotalFeedback}
            positivCount={this.countPositiveFeedbackPercentage}
          />
        </Section>
        <Section title="Statistics">
          <PaintFeedbackStatistics options={this.state} />
        </Section>
      </div>
    );
  }
}
