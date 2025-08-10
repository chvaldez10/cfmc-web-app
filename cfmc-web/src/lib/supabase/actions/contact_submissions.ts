"use server";

import { createClient } from "@/lib/supabase/server";

export type ContactSubmissionData = {
  name: string;
  email: string;
  phone?: string;
  subject: string[];
  message: string;
};

export type ContactSubmissionResponse = {
  success: boolean;
  message: string;
  submissionId?: string;
};

export async function submitContactForm(
  formData: ContactSubmissionData
): Promise<ContactSubmissionResponse> {
  try {
    const supabase = await createClient();

    // Insert the contact submission into the database
    const { error } = await supabase.from("contact_submissions").insert({
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone?.trim() || null,
      subject: formData.subject,
      message: formData.message.trim(),
      status: "new",
    });

    if (error) {
      throw new Error("Failed to save contact submission");
    }

    return {
      success: true,
      message: "Your message has been submitted successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: `Failed to submit your message. ${error}`,
    };
  }
}
