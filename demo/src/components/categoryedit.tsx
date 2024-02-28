import * as React from "react";

interface Props {
  category: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CategoryEditComponent = (props: Props) => (
  <>
    <label>Update category:</label>
    <input value={props.category} onChange={props.onChange} />
  </>
);