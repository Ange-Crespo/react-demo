import * as React from "react";

interface Props {
  gameYear: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const YearEditComponent = (props: Props) => (
  <>
    <label>Update game year:</label>
    <input value={props.gameYear} onChange={props.onChange} />
  </>
);

