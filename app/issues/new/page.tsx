"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, TextArea, Button } from "@radix-ui/themes";
import { useForm } from "react-hook-form";

interface IssueForm{
    title: string
    description: string
}
const NewIssuePage = () => {

   const {register} = useForm<IssueForm>();
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Enter Title of Issue…" />
      </TextField.Root>

      <SimpleMDE placeholder="Issue Description" />

      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
