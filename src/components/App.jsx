import { Component } from 'react';
import { Section } from './feedback/section';
import { Statistics } from './feedback/statistics';
import { FeedbackOptions } from './feedback/feedbackOptions/FeedbackOptions';
import { Notification } from './feedback/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  total = () => {
    let total = null;
    for (let prop in this.state) {
      total = total + this.state[prop];
    }
    return total;
  };

  percentagePositive = () => {
    let total = null;
    for (let prop in this.state) {
      total = total + this.state[prop];
    }

    if (total === 0) {
      return 0;
    }

    return Math.floor((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.total() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.total()}
              positivePercentage={this.percentagePositive()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
