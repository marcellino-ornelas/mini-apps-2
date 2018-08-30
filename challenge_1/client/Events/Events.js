import React, { Component } from 'react';

const Events = props => {
  if (props.events === null) {
    return <div>Loading....</div>;
  }

  if (!props.events.length) {
    return (
      <div>
        <h1>No results! try again</h1>
      </div>
    );
  }
  return (
    <table className="highlight centered responsive-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Category1</th>
          <th>Category2</th>
          <th>Description</th>
          <th>Granularity</th>
          <th>Lang</th>
        </tr>
      </thead>

      <tbody>
        {props.events.map((event, index) => (
          <Event event={event} key={index} />
        ))}
      </tbody>
    </table>
  );
};

const Event = props => {
  const event = props.event;
  return (
    <tr className="event">
      <td className="event-cell date">{event.date}</td>
      <td className="event-cell category1">{event.category1}</td>
      <td className="event-cell category2">{event.category2}</td>
      <td className="event-cell description">{event.description}</td>
      <td className="event-cell granularity">{event.granularity}</td>
      <td className="event-cell lang">{event.lang}</td>
    </tr>
  );
};

export default Events;
