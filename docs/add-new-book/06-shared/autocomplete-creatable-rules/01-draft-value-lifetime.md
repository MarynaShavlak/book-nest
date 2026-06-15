# Draft value lifetime

- Draft values live only inside form state before submit.
- Closing/cancelling the form must not create real records.
- Real creation happens after validation during submit.
