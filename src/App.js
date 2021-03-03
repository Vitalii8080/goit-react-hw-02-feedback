import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import Section from './components/Section/Section';
import FeedbackOptions from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export default class App extends Component {
  static propTypes = {};

static defaultProps = {};
   
  state = {
     good: 0,
     neutral: 0,
     bad: 0
  }

 update = (type) => {
    this.setState(state => {
     return {
     [type]: state[type] + 1,
     };
   });
 };

  
  countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, value) => acc + value, 0);
    }

  countPositiveFeedbackPercentage = () => {
        const percentage = Math.round(100 * this.state.good / this.countTotalFeedback());
        return percentage > 0 ?  percentage : 0;
    }

  render() {
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Layout>
        <Section title="Please leave feedback"> 
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.update} />
        </Section>   
        <Section title="Statistics">   
           {total > 0 ?
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage} />
             : <Notification message="No feedback given" />
          } 
          </Section>   
      </Layout>
    );
  }
}