# FCC API Basejump: Timestamp Microservice
### User Stories
> 1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or  > a natural language date (example: 15th October, 2017).
> 2. If it does, it returns both the Unix timestamp and the natural language form of that date.
> 3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example Usage
`https://fcc-timestamp-hemakshis.herokuapp.com/api/15th%20October,%202017`
`https://fcc-timestamp-hemakshis.herokuapp.com/api/1508025600`

### Example Output
`{"unix": 1508025600, "natural": "15th October, 2017"}`
