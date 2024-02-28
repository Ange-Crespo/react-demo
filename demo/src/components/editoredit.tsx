import * as React from "react";

interface Props {
  editorName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EditorEditComponent = (props: Props) => (
  <>
    <label>Update game editor name:</label>
    <input value={props.editorName} onChange={props.onChange} />
  </>
);
