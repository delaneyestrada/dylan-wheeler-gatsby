import React from 'react';

export default function ContactSection() {
  return (
    <div>
      <div class="my-3 d-flex justify-content-center booking-info-container">
        <div class="booking-info text-center">
          <h5>Booking</h5>
          <a href="https://red11music.com/dylan-wheeler/" target="_blank">
            <div id="booking-logo"></div>
          </a>
        </div>
      </div>
      <form name="contact" method="POST" data-netlify="true">
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="name"
            aria-describedby="name"
            required
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name="email"
            required
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">
            Message
          </label>
          <textarea
            type="text"
            class="form-control"
            name="message"
            required
            id="message"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary">
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}
