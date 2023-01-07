import { merge } from "lodash";
import Input from "./Input";
import Checkbox from "./Checkbox";
import Button from "./Button";
import Radio from "./Radio";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: any) {
  return merge(Input(theme), Checkbox(theme), Button(theme), Radio(theme));
}
