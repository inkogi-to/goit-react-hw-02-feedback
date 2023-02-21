import React, {Component} from "react";
import {GlobalStyle} from './GlobalStyle.styled'
import Feedback from "./Feedback";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";

class App extends Component {
  state = {
    good: 0, neutral: 0, bad: 0,
  }
  onLeaveFeedback = key => {
    this.setState((options) => ({
      [key]: options[key] + 1,
    }));
  }
  countTotalFeedback = () => {
    const stateValue = Object.values(this.state);
    return stateValue.reduce((acc, cur) => acc + cur, 0);
  }

  countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage
  }

  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage(total, good);

    return (
      <>
        <Section title="Please leave feedback">
          <Feedback options={['good', 'neutral', 'bad']}
                    onClick={this.onLeaveFeedback}/>
        </Section>

        <Section title="Statistics">
          {total > 0 ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}/>) : (<Notification message="There is no feedback"/>)}
        </Section>
        <GlobalStyle/>
      </>)
  }
}

export default App;
