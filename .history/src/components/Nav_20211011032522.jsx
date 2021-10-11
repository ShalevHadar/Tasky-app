import React from "react";
import { Button, Stack } from "react-bootstrap";

export default function Nav() {
  return (
    <div>
      <Stack  className="col-md-5 mx-auto">
        <Button variant="secondary">Save changes</Button>
        <Button variant="outline-secondary">Cancel</Button>
      </Stack>
    </div>
  );
}
