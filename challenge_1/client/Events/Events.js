import React, { Component } from 'react';

const headers = {
  date: 'date',
  category1: 'category1',
  category2: 'category2',
  description: 'description',
  granularity: 'granularity',
  lang: 'lang'
};

const Events = props => {
  if (!props.events.length) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="events">
      <Event event={headers} />
      {props.events.map((event, index) => <Event event={event} key={index} />)}
    </div>
  );
};

const Event = props => {
  const event = props.event;
  return (
    <div className="event">
      <div className="event-cell date">{event.date}</div>
      <div className="event-cell category1">{event.category1}</div>
      <div className="event-cell category2">{event.category2}</div>
      <div className="event-cell description">{event.description}</div>
      <div className="event-cell granularity">{event.granularity}</div>
      <div className="event-cell lang">{event.lang}</div>
    </div>
  );
};

export default Events;
