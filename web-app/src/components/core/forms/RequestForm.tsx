import { FC } from "react";
import TextInputLabel from "./atoms/TextInputLabel";
import TextSelector from "./atoms/TextSelector";
import TextArea from "./atoms/TextArea";
import { FormButton } from "@/components/core/ui";

interface RequestFormProps {
  defaultSelectedItem?: string | undefined;
}

const RequestForm: FC<RequestFormProps> = ({
  defaultSelectedItem = "connect",
}) => {
  return (
    <form className="space-y-4 z-50 w-full">
      <TextInputLabel
        type="text"
        name="fullName"
        id="fullName"
        placeholder="Full Name"
      />
      <TextInputLabel
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <TextInputLabel
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="Phone Number"
        maxLength={10}
      />
      <TextSelector defaultSelectedItem={defaultSelectedItem} />
      <TextArea id="message" label="Message" />
      <div className="flex justify-end">
        <FormButton className="text-purple-500 hover:underline">
          Submit
        </FormButton>
      </div>
    </form>
  );
};

export default RequestForm;
