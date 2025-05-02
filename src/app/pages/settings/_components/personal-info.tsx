import {
  CallIcon,
  EmailIcon,
  PencilSquareIcon,
  UserIcon,
} from "@/assets/icons";
import { Button } from "@/components/ui-elements/button";

import InputGroup from "@/components/FormElements/InputGroup";
import { TextAreaGroup } from "@/components/FormElements/InputGroup/text-area";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";

export function PersonalInfoForm() {
  return (
    <ShowcaseSection title="Personal Information" className="!p-7">
      <form>
        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
          <InputGroup
            className="w-full sm:w-1/2"
            type="text"
            name="fullName"
            label="Full Name"
            placeholder="Marko Solana"
            defaultValue="Marko Solana"
            icon={<UserIcon />}
            iconPosition="left"
            height="sm"
          />

          
      
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">
          <InputGroup
            className="w-full sm:mb-0"
            type="text"
            name="text"
            label="Solana Address"
            placeholder="EnRgjfWpc4rZN6pCziv2cncG3ArxQUXPNxi9VugZMaT7"
            defaultValue="EnRgjfWpc4rZN6pCziv2cncG3ArxQUXPNxi9VugZMaT7"
            height="sm"
            disabled
          />
          <Button label="Connect new" variant="primary" shape="rounded" className="w-full sm:w-auto" />
        </div>
              
        <InputGroup
          className="mb-5.5"
          type="text"
          name="username"
          label="Username"
          placeholder="Marko Solana"
          defaultValue="Marko Solana"
          icon={<UserIcon />}
          iconPosition="left"
          height="sm"
        />

        <TextAreaGroup
          className="mb-5.5"
          label="BIO"
          placeholder="Write your bio here"
          icon={<PencilSquareIcon />}
          defaultValue="I have a setup of 4 solar panels at home,
                and thanks to the SolarSurge project, I can now easily track how much energy I'm producing 
                It's helped me make the most of my green energy — I can see when I have surplus and even earn from it.
                SolarSurge makes managing my solar power simple, transparent, and way more rewarding."
        />

        <div className="flex justify-end gap-3">
          <button
            className="rounded-lg border border-stroke px-6 py-[7px] font-medium text-dark hover:shadow-1 dark:border-dark-3 dark:text-white"
            type="button"
          >
            Cancel
          </button>

          <button
            className="rounded-lg bg-primary px-6 py-[7px] font-medium text-gray-2 hover:bg-opacity-90"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </ShowcaseSection>
  );
}
